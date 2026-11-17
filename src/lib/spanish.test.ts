import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { euro, monthsOf, perMonthCents, savingPercent, spanishAlternates, spanishPath, spanishSignupHref } from './spanish.ts';

test('prices match the app: Essential from €50, Tutor Intensive from €100, Couples from €80, no 12 months', () => {
  assert.deepEqual(monthsOf('essential').map((m) => perMonthCents('essential', m)), [5000, 4500, 4250]);
  assert.deepEqual(monthsOf('intensive').map((m) => perMonthCents('intensive', m)), [10000, 9000, 8167]);
  assert.deepEqual(monthsOf('couple').map((m) => perMonthCents('couple', m)), [8000, 7000, 6650]);
  // Savings are rounded down, never overstated: 12.5% → 12, 16.9% → 16, 18.3% → 18.
  assert.deepEqual(monthsOf('essential').map((m) => savingPercent('essential', m)), [0, 10, 15]);
  assert.deepEqual(monthsOf('couple').map((m) => savingPercent('couple', m)), [0, 12, 16]);
  assert.deepEqual(monthsOf('intensive').map((m) => savingPercent('intensive', m)), [0, 10, 18]);
});

test('formats euros per language', () => {
  assert.equal(euro(4250, 'en'), '€42.50');
  assert.match(euro(5000, 'de'), /^50\s€$/);
  assert.match(euro(10000, 'sv'), /^100\s€$/);
  assert.match(euro(4250, 'fi'), /^42,50\s€$/);
});

test('paths, hreflang and app links', () => {
  assert.equal(spanishPath('en'), '/spanish');
  assert.equal(spanishPath('da'), '/spanish/da');
  assert.equal(spanishAlternates().nb, '/spanish/no');
  assert.equal(spanishAlternates().fi, '/spanish/fi');
  const de = new URL(spanishSignupHref('de', 'hero'));
  assert.equal(de.searchParams.get('lang'), 'de');
  assert.equal(de.searchParams.get('course'), 'es');
  assert.equal(new URL(spanishSignupHref('sv', 'hero')).searchParams.get('lang'), 'en');
});
