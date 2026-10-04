import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeEmail, readCountry, readTrafficSource } from './signup.ts';
import { oneClickUnsubscribeUrl, signEmail, unsubscribeUrl, verifyEmailSignature } from './unsubscribe-token.ts';
import { confirmationEmail } from './confirmation-email.ts';

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

test('English unsubscribe links keep the language; one-click points at the deleting endpoint', () => {
  assert.match(unsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret', 'en'), /\/baja\?e=.*&l=en$/);
  assert.doesNotMatch(unsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret', 'es'), /l=/);
  assert.match(oneClickUnsubscribeUrl('https://polyngual.app', 'ana@example.com', 'secret'), /^https:\/\/polyngual\.app\/api\/baja\?e=ana%40example\.com&t=/);
});

test('confirmation email is written in the signup language', () => {
  const es = confirmationEmail('https://x/baja', 'es');
  const en = confirmationEmail('https://x/baja?l=en', 'en');
  assert.equal(es.subject, 'Ya estás en la lista de Polyngual');
  assert.match(es.text, /El equipo de Polyngual/);
  assert.equal(en.subject, 'You’re on the Polyngual waitlist');
  assert.match(en.html, /<html lang="en">/);
  assert.match(en.text, /The Polyngual team/);
  assert.doesNotMatch(en.text + es.text, /Eric|Voxeo/);
});
