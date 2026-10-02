import 'server-only';
import type { TrafficSource } from './signup';

// Brevo (free tier) stores the waitlist and sends the confirmation email.
// Contact attributes must exist in Brevo first; see the README for the list.

const API = 'https://api.brevo.com/v3';

export type SignupRecord = { email: string; country: string; source: TrafficSource; signedUpAt: Date };
export type SignupResult = { created: boolean; order: number | null };

function config() {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  return apiKey && Number.isInteger(listId) && listId > 0 ? { apiKey, listId } : null;
}

export const isBrevoConfigured = () => config() !== null;

async function brevo(path: string, init: RequestInit & { apiKey: string }) {
  const { apiKey, ...rest } = init;
  return fetch(`${API}${path}`, {
    ...rest,
    headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
    cache: 'no-store',
  });
}

export async function saveSignup(record: SignupRecord): Promise<SignupResult> {
  const cfg = config();
  if (!cfg) {
    console.info('[waitlist] Brevo not configured; signup not stored', { country: record.country, source: record.source });
    return { created: true, order: null };
  }

  const { source } = record;
  const created = await brevo('/contacts', {
    apiKey: cfg.apiKey,
    method: 'POST',
    body: JSON.stringify({
      email: record.email,
      listIds: [cfg.listId],
      updateEnabled: false,
      attributes: {
        COUNTRY: record.country,
        SIGNUP_DATE: record.signedUpAt.toISOString().slice(0, 10),
        UTM_SOURCE: source.utmSource,
        UTM_MEDIUM: source.utmMedium,
        UTM_CAMPAIGN: source.utmCampaign,
        UTM_CONTENT: source.utmContent,
        UTM_TERM: source.utmTerm,
        REFERRER: source.referrer,
        LANDING: source.landing,
      },
    }),
  });

  if (created.status === 400) {
    const body = (await created.json().catch(() => ({}))) as { code?: string };
    // An existing contact is a duplicate signup: answer as success, write nothing.
    if (body.code === 'duplicate_parameter') return { created: false, order: null };
  }
  if (!created.ok) throw new Error(`Brevo contact create failed: ${created.status}`);

  // Signup order = list size right after this insert. Two signups in the same instant can
  // read the same count; that is acceptable for a "first 200" founder check.
  let order: number | null = null;
  const list = await brevo(`/contacts/lists/${cfg.listId}`, { apiKey: cfg.apiKey });
  if (list.ok) {
    const data = (await list.json()) as { uniqueSubscribers?: number; totalSubscribers?: number };
    order = data.uniqueSubscribers ?? data.totalSubscribers ?? null;
  }
  if (order !== null) {
    await brevo(`/contacts/${encodeURIComponent(record.email)}`, {
      apiKey: cfg.apiKey,
      method: 'PUT',
      body: JSON.stringify({ attributes: { SIGNUP_ORDER: order } }),
    });
  }
  return { created: true, order };
}

export async function deleteContact(email: string): Promise<void> {
  const cfg = config();
  if (!cfg) return;
  const res = await brevo(`/contacts/${encodeURIComponent(email)}`, { apiKey: cfg.apiKey, method: 'DELETE' });
  if (!res.ok && res.status !== 404) throw new Error(`Brevo contact delete failed: ${res.status}`);
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
    console.info('[waitlist] Brevo not configured; confirmation email not sent');
    return;
  }
  const res = await brevo('/smtp/email', {
    apiKey: cfg.apiKey,
    method: 'POST',
    body: JSON.stringify({
      sender: { email: process.env.WAITLIST_FROM_EMAIL, name: process.env.WAITLIST_FROM_NAME ?? 'Eric de Polyngual' },
      replyTo: { email: process.env.WAITLIST_REPLY_TO ?? process.env.WAITLIST_FROM_EMAIL },
      to: [{ email: message.to }],
      subject: message.subject,
      htmlContent: message.html,
      textContent: message.text,
      headers: {
        'List-Unsubscribe': `<${message.unsubscribeUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
      tags: ['waitlist-confirmation'],
    }),
  });
  if (!res.ok) throw new Error(`Brevo send failed: ${res.status}`);
}
