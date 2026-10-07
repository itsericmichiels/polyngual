import { test } from 'node:test';
import assert from 'node:assert/strict';
import { appSignupHref } from './site.ts';

test('keeps the waitlist while the app URL is unset', () => {
  delete process.env.NEXT_PUBLIC_APP_URL;
  assert.equal(appSignupHref('en', 'hero'), null);
});

test('sends the main buttons to the app with the language and the button that was used', () => {
  process.env.NEXT_PUBLIC_APP_URL = 'https://learn.polyngual.app/';
  const href = new URL(appSignupHref('es', 'hero') ?? '');
  assert.equal(href.origin + href.pathname, 'https://learn.polyngual.app/alumno');
  assert.equal(href.searchParams.get('lang'), 'es');
  assert.equal(href.searchParams.get('utm_campaign'), 'hero-es');
  delete process.env.NEXT_PUBLIC_APP_URL;
});
