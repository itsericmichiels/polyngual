import 'server-only';
import type { SignupRecord } from './resend';

// Copies each new waitlist signup into the Polyngual sub-account of GoHighLevel (the CRM).
// Resend stays the source of the confirmation email; GoHighLevel is where the list is worked:
// tags drive filters and workflows, so no custom fields need to be created first.
// Optional: without GHL_TOKEN and GHL_LOCATION_ID nothing is sent.

const API = 'https://services.leadconnectorhq.com';
const API_VERSION = '2023-02-21'; // the version HighLevel's official SDK sends
const FOUNDER_SPOTS = 200;

function config() {
  const token = process.env.GHL_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  return token && locationId ? { token, locationId } : null;
}

function ghl(token: string, path: string, init: RequestInit = {}) {
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      version: API_VERSION,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    cache: 'no-store',
  });
}

async function failure(what: string, res: Response): Promise<Error> {
  const detail = (await res.text().catch(() => '')).slice(0, 300);
  return new Error(`GoHighLevel ${what} failed: ${res.status} ${detail}`);
}

const tag = (prefix: string, value: string) => `${prefix}:${value.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').slice(0, 40)}`;

export function signupTags(record: SignupRecord, order: number | null): string[] {
  const { source } = record;
  const tags = ['polyngual-waitlist', `idioma:${record.locale ?? 'es'}`];
  if (order !== null && order <= FOUNDER_SPOTS) tags.push('polyngual-fundador');
  if (source.utmSource) tags.push(tag('fuente', source.utmSource));
  if (source.utmCampaign) tags.push(tag('campana', source.utmCampaign));
  return tags;
}

export async function syncSignupToCrm(record: SignupRecord, order: number | null): Promise<void> {
  const cfg = config();
  if (!cfg) {
    // Say so in the Vercel logs rather than skipping silently; locally this is expected.
    if (process.env.VERCEL) throw new Error('GoHighLevel is not configured (GHL_TOKEN / GHL_LOCATION_ID missing)');
    return;
  }
  const { source } = record;
  const contact = {
    locationId: cfg.locationId,
    email: record.email,
    country: record.country || undefined,
    source: source.utmSource ? `Polyngual waitlist (${source.utmSource})` : 'Polyngual waitlist',
    tags: signupTags(record, order),
  };
  const upsert = (body: object) => ghl(cfg.token, '/contacts/upsert', { method: 'POST', body: JSON.stringify(body) });

  // signup_order is an optional custom field. If it was never created in GoHighLevel the API can
  // reject the whole request, so retry without it rather than losing the contact.
  let res = order === null ? await upsert(contact) : await upsert({ ...contact, customFields: [{ key: 'signup_order', field_value: String(order) }] });
  if (!res.ok && order !== null && (res.status === 400 || res.status === 422)) {
    console.warn('[waitlist] GoHighLevel rejected signup_order; retrying without it', (await res.text().catch(() => '')).slice(0, 300));
    res = await upsert(contact);
  }
  if (!res.ok) throw await failure('upsert', res);
}

// Unsubscribe also removes the person from the CRM, matching the privacy policy's promise.
export async function deleteCrmContact(email: string): Promise<void> {
  const cfg = config();
  if (!cfg) return;
  const query = new URLSearchParams({ locationId: cfg.locationId, email });
  const found = await ghl(cfg.token, `/contacts/search/duplicate?${query}`);
  if (!found.ok) throw await failure('lookup', found);
  const body = (await found.json()) as { contact?: { id?: string } | null };
  const id = body.contact?.id;
  if (!id) return;
  const res = await ghl(cfg.token, `/contacts/${id}`, { method: 'DELETE' });
  if (!res.ok && res.status !== 404) throw await failure('delete', res);
}
