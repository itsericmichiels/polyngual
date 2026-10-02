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

export function unsubscribeUrl(siteUrl: string, email: string, secret: string): string {
  const params = new URLSearchParams({ e: email, t: signEmail(email, secret) });
  return `${siteUrl.replace(/\/$/, '')}/baja?${params.toString()}`;
}
