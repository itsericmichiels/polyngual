import { test } from 'node:test';
import assert from 'node:assert/strict';
import { appSignupHref, pathHref } from './site.ts';

const business = { subject: 'Polyngual Business', body: 'My role: ' };

test('opens the live learning app when no app URL is set', () => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  const href = new URL(appSignupHref('en', 'hero'));
  assert.equal(href.origin + href.pathname, 'https://learn.polyngual.app/alumno');
});

test('sends the app buttons with the language and the button that was used', () => {
  process.env.NEXT_PUBLIC_APP_URL = 'https://preview.example.app/';
  const href = new URL(appSignupHref('es', 'hero'));
  assert.equal(href.origin + href.pathname, 'https://preview.example.app/alumno');
  assert.equal(href.searchParams.get('lang'), 'es');
  assert.equal(href.searchParams.get('utm_campaign'), 'hero-es');
  delete process.env.NEXT_PUBLIC_APP_URL;
});

test('Spanish opens the learning app, tagged as the Spanish button', () => {
  const href = new URL(pathHref('spanish', 'en', 'hero', business));
  assert.equal(href.origin + href.pathname, 'https://learn.polyngual.app/alumno');
  assert.equal(href.searchParams.get('lang'), 'en');
  assert.equal(href.searchParams.get('utm_campaign'), 'spanish-hero-en');
});

test('exam prep stays on polyngual.app, on the exam beta page', () => {
  const href = pathHref('test', 'es', 'paths', business);
  assert.ok(href.startsWith('/examen/beta?'), href);
  const params = new URL(href, 'https://polyngual.app').searchParams;
  assert.equal(params.get('lang'), 'es');
  assert.equal(params.get('utm_campaign'), 'test-paths-es');
});

test('Business asks for access by email, with the subject filled in', () => {
  const href = pathHref('business', 'en', 'hero', business);
  assert.ok(href.startsWith('mailto:polyngualapp@gmail.com?'), href);
  assert.ok(href.includes('subject=Polyngual%20Business'), href);
  assert.ok(href.includes('body=My%20role%3A%20'), href);
});
