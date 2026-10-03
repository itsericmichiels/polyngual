import 'server-only';
import type { TrafficSource } from './signup';

// Resend stores the waitlist (contacts in one segment) and sends the confirmation email.
// The contact properties must exist in Resend first; see the README for the list.

const API = 'https://api.resend.com';
// Exact signup order only matters for the first-200 founder offer; stop counting after this.
const ORDER_COUNT_LIMIT = 500;

export type SignupRecord = { email: string; country: string; source: TrafficSource; signedUpAt: Date; locale?: string };
export type SignupResult = { created: boolean; order: number | null };

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID;
  return apiKey && segmentId ? { apiKey, segmentId } : null;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Resend allows only a few requests per second per key, so retry briefly when it says to slow down.
async function resend(apiKey: string, path: string, init: RequestInit = {}): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${API}${path}`, {
      ...init,
      headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
      cache: 'no-store',
    });
    if (res.status !== 429 || attempt === 3) return res;
    const retryAfter = Number(res.headers.get('retry-after'));
    await sleep(retryAfter > 0 ? retryAfter * 1000 : 600 * (attempt + 1));
  }
}

// Error text from Resend (for example "The polyngual.app domain is not verified") so the Vercel logs say what to fix.
async function failure(what: string, res: Response): Promise<Error> {
  const detail = (await res.text().catch(() => '')).slice(0, 300);
  return new Error(`Resend ${what} failed: ${res.status} ${detail}`);
}

// Locally the form works without Resend. On Vercel a missing key is a setup mistake: fail loudly
// instead of telling visitors they are on the list when nothing was saved.
function missingConfig(what: string): void {
  if (process.env.VERCEL) throw new Error(`Resend is not configured (RESEND_API_KEY / RESEND_SEGMENT_ID missing); ${what}`);
  console.info(`[waitlist] Resend not configured; ${what}`);
}

const contactPath = (email: string) => `/contacts/${encodeURIComponent(email)}`;

async function isInSegment(apiKey: string, email: string, segmentId: string): Promise<boolean> {
  const res = await resend(apiKey, `${contactPath(email)}/segments?limit=100`);
  if (!res.ok) return false;
  const body = (await res.json()) as { data?: { id: string }[] };
  return (body.data ?? []).some((segment) => segment.id === segmentId);
}

// Number of people already on the waitlist, or null once past the founder-offer range.
async function countSegment(apiKey: string, segmentId: string): Promise<number | null> {
  let count = 0;
  let after: string | undefined;
  while (count < ORDER_COUNT_LIMIT) {
    const query = new URLSearchParams({ limit: '100', ...(after ? { after } : {}) });
    const res = await resend(apiKey, `/segments/${segmentId}/contacts?${query}`);
    if (!res.ok) return null;
    const body = (await res.json()) as { data?: { id: string }[]; has_more?: boolean };
    const page = body.data ?? [];
    count += page.length;
    if (!body.has_more || page.length === 0) return count;
    after = page[page.length - 1].id;
  }
  return null;
}

export async function saveSignup(record: SignupRecord): Promise<SignupResult> {
  const cfg = config();
  if (!cfg) {
    missingConfig('signup not stored');
    return { created: true, order: null };
  }
  const { apiKey, segmentId } = cfg;

  // Contacts are shared across the whole Resend account, so the same email may already
  // exist (for example from another product). Only membership of this segment counts.
  const existing = await resend(apiKey, contactPath(record.email));
  const exists = existing.ok;
  if (!exists && existing.status !== 404) throw await failure('contact lookup', existing);
  if (exists && (await isInSegment(apiKey, record.email, segmentId))) return { created: false, order: null };

  // Signup order = people already on the list + 1. Two signups in the same instant can get
  // the same number, which is acceptable for a "first 200" founder check.
  const before = await countSegment(apiKey, segmentId);
  const order = before === null ? null : before + 1;

  const { source } = record;
  const properties: Record<string, string | number> = {
    country: record.country,
    signup_date: record.signedUpAt.toISOString().slice(0, 10),
    utm_source: source.utmSource,
    utm_medium: source.utmMedium,
    utm_campaign: source.utmCampaign,
    utm_content: source.utmContent,
    utm_term: source.utmTerm,
    referrer: source.referrer,
    landing: source.landing,
  };
  if (order !== null) properties.signup_order = order;

  if (exists) {
    const updated = await resend(apiKey, contactPath(record.email), {
      method: 'PATCH',
      body: JSON.stringify({ properties, unsubscribed: false }),
    });
    if (!updated.ok) throw await failure('contact update', updated);
    const added = await resend(apiKey, `${contactPath(record.email)}/segments/${segmentId}`, { method: 'POST' });
    if (!added.ok) throw await failure('segment add', added);
  } else {
    const created = await resend(apiKey, '/contacts', {
      method: 'POST',
      body: JSON.stringify({ email: record.email, unsubscribed: false, properties, segments: [{ id: segmentId }] }),
    });
    if (!created.ok) throw await failure('contact create', created);
  }
  return { created: true, order };
}

// Unsubscribe link: the brief promises deletion, so the contact is removed entirely.
export async function deleteContact(email: string): Promise<void> {
  const cfg = config();
  if (!cfg) return;
  const res = await resend(cfg.apiKey, contactPath(email), { method: 'DELETE' });
  if (!res.ok && res.status !== 404) throw await failure('contact delete', res);
}

export async function sendEmail(message: {
  to: string;
  subject: string;
  html: string;
  text: string;
  unsubscribeUrl: string;
}): Promise<void> {
  const cfg = config();
  if (!cfg) {
    missingConfig('confirmation email not sent');
    return;
  }
  const fromEmail = process.env.WAITLIST_FROM_EMAIL;
  if (!fromEmail) throw new Error('WAITLIST_FROM_EMAIL is not set; confirmation email not sent');
  const fromName = process.env.WAITLIST_FROM_NAME ?? 'Polyngual';
  const res = await resend(cfg.apiKey, '/emails', {
    method: 'POST',
    body: JSON.stringify({
      from: `${fromName} <${fromEmail}>`,
      to: [message.to],
      reply_to: process.env.WAITLIST_REPLY_TO ?? fromEmail,
      subject: message.subject,
      html: message.html,
      text: message.text,
      headers: {
        'List-Unsubscribe': `<${message.unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
      tags: [{ name: 'category', value: 'waitlist_confirmation' }],
    }),
  });
  if (!res.ok) throw await failure('send', res);
}
