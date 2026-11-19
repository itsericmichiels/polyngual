import { test } from 'node:test';
import assert from 'node:assert/strict';
import { appSignupHref, siteUrl } from './site.ts';

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

test('points at www, the address the site answers on, unless told otherwise', () => {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  assert.equal(siteUrl(), 'https://www.polyngual.app');
});
