import { createHmac, timingSafeEqual } from 'node:crypto';

// Unsubscribe links carry the email plus an HMAC so nobody can remove someone else's address.

export function signEmail(email: string, secret: string): string {
  return createHmac('sha256', secret).update(email).digest('base64url');
}

export function verifyEmailSignature(email: string, signature: string, secret: string): boolean {
  if (!secret || !signature) return false;
  const expected = Buffer.from(signEmail(email, secret));
  const received = Buffer.from(signature);
  return expected.length === received.length && timingSafeEqual(expected, received);
}

const unsubscribeParams = (email: string, secret: string, lang: 'es' | 'en') => {
  const params = new URLSearchParams({ e: email, t: signEmail(email, secret) });
  if (lang === 'en') params.set('lang', 'en');
  return params.toString();
};

// The link in the email body: a page that asks the person to confirm.
export function unsubscribeUrl(siteUrl: string, email: string, secret: string, lang: 'es' | 'en' = 'es'): string {
  return `${siteUrl.replace(/\/$/, '')}/baja?${unsubscribeParams(email, secret, lang)}`;
}

// The List-Unsubscribe header: mail clients' one-click button POSTs here (RFC 8058), so it must be the API
// route that deletes the contact, not the confirmation page.
export function oneClickUnsubscribeUrl(siteUrl: string, email: string, secret: string, lang: 'es' | 'en' = 'es'): string {
  return `${siteUrl.replace(/\/$/, '')}/api/baja?${unsubscribeParams(email, secret, lang)}`;
}
