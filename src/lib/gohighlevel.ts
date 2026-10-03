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

const tag = (prefix: string, value: string) => `${prefix}:${value.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').slice(0, 40)}`;

export function signupTags(record: SignupRecord, order: number | null): string[] {
  const { source } = record;
  const tags = ['polyngual-waitlist'];
  if (order !== null && order <= FOUNDER_SPOTS) tags.push('polyngual-fundador');
  if (source.utmSource) tags.push(tag('fuente', source.utmSource));
  if (source.utmCampaign) tags.push(tag('campana', source.utmCampaign));
  return tags;
}

export async function syncSignupToCrm(record: SignupRecord, order: number | null): Promise<void> {
  const cfg = config();
  if (!cfg) return;
  const { source } = record;
  const res = await ghl(cfg.token, '/contacts/upsert', {
    method: 'POST',
    body: JSON.stringify({
      locationId: cfg.locationId,
      email: record.email,
      country: record.country || undefined,
      source: source.utmSource ? `Polyngual waitlist (${source.utmSource})` : 'Polyngual waitlist',
      tags: signupTags(record, order),
      customFields: order === null ? [] : [{ key: 'signup_order', field_value: String(order) }],
    }),
  });
  if (!res.ok) throw new Error(`GoHighLevel upsert failed: ${res.status}`);
}

// Unsubscribe also removes the person from the CRM, matching the privacy policy's promise.
export async function deleteCrmContact(email: string): Promise<void> {
  const cfg = config();
  if (!cfg) return;
  const query = new URLSearchParams({ locationId: cfg.locationId, email });
  const found = await ghl(cfg.token, `/contacts/search/duplicate?${query}`);
  if (!found.ok) throw new Error(`GoHighLevel lookup failed: ${found.status}`);
  const body = (await found.json()) as { contact?: { id?: string } | null };
  const id = body.contact?.id;
  if (!id) return;
  const res = await ghl(cfg.token, `/contacts/${id}`, { method: 'DELETE' });
  if (!res.ok && res.status !== 404) throw new Error(`GoHighLevel delete failed: ${res.status}`);
}
