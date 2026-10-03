import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeEmail, readCountry, readTrafficSource } from './signup.ts';
import { oneClickUnsubscribeUrl, signEmail, unsubscribeUrl, verifyEmailSignature } from './unsubscribe-token.ts';

test('normalizes valid emails and rejects invalid ones', () => {
  assert.equal(normalizeEmail('  Ana@Example.COM '), 'ana@example.com');
  assert.equal(normalizeEmail('ana@example'), null);
  assert.equal(normalizeEmail('ana example.com'), null);
  assert.equal(normalizeEmail(42), null);
  assert.equal(normalizeEmail(`${'a'.repeat(250)}@x.com`), null);
});

test('reads only two-letter country codes', () => {
  assert.equal(readCountry('MX'), 'MX');
  assert.equal(readCountry('mx'), '');
  assert.equal(readCountry(null), '');
});

test('keeps UTM fields as bounded strings', () => {
  const source = readTrafficSource({ utm_source: 'instagram', utm_medium: 123, referrer: 'x'.repeat(900) });
  assert.equal(source.utmSource, 'instagram');
  assert.equal(source.utmMedium, '');
  assert.equal(source.referrer.length, 500);
});

test('unsubscribe signatures verify only for the signed email', () => {
  const sig = signEmail('ana@example.com', 'secret');
  assert.ok(verifyEmailSignature('ana@example.com', sig, 'secret'));
  assert.ok(!verifyEmailSignature('bob@example.com', sig, 'secret'));
  assert.ok(!verifyEmailSignature('ana@example.com', sig, ''));
  assert.match(unsubscribeUrl('https://polyngual.app/', 'ana@example.com', 'secret'), /^https:\/\/polyngual\.app\/baja\?e=ana%40example\.com&t=/);
});

test('English signups get an English unsubscribe link and confirmation email', async () => {
  assert.match(unsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret', 'en'), /&lang=en$/);
  assert.doesNotMatch(unsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret'), /lang=/);
  const { confirmationEmail } = await import('./confirmation-email.ts');
  const en = confirmationEmail('https://polyngual.app/baja?lang=en', 'en');
  assert.equal(en.subject, 'You are on the Polyngual waitlist');
  assert.match(en.html, /<html lang="en">/);
  assert.match(confirmationEmail('https://polyngual.app/baja').subject, /Ya estás en la lista/);
});

test('the one-click unsubscribe header points at the API route that deletes the contact', () => {
  const page = unsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret', 'en');
  const oneClick = oneClickUnsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret', 'en');
  assert.match(oneClick, /^https:\/\/polyngual\.app\/api\/baja\?e=ana%40example\.com&t=[^&]+&lang=en$/);
  assert.equal(oneClick.split('?')[1], page.split('?')[1]);
});
