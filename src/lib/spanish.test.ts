import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { euro, monthsOf, perMonthCents, savingPercent, spanishAlternates, spanishPath, spanishSignupHref } from './spanish.ts';

test('prices match the app: Essential from €50, Tutor Intensive from €100, couples €80', () => {
  assert.deepEqual(monthsOf('essential').map((m) => perMonthCents('essential', m)), [5000, 4500, 4250, 3750]);
  assert.deepEqual(monthsOf('intensive').map((m) => perMonthCents('intensive', m)), [10000, 9000, 8500, 7500]);
  assert.deepEqual(monthsOf('intensive').map((m) => savingPercent('intensive', m)), [0, 10, 15, 25]);
  assert.deepEqual(monthsOf('couple'), [1, 12]);
});

test('formats euros per language', () => {
  assert.equal(euro(4250, 'en'), '€42.50');
  assert.match(euro(5000, 'de'), /^50\s€$/);
  assert.match(euro(10000, 'sv'), /^100\s€$/);
});

test('paths, hreflang and app links', () => {
  assert.equal(spanishPath('en'), '/spanish');
  assert.equal(spanishPath('da'), '/spanish/da');
  assert.equal(spanishAlternates().nb, '/spanish/no');
  const de = new URL(spanishSignupHref('de', 'hero'));
  assert.equal(de.searchParams.get('lang'), 'de');
  assert.equal(de.searchParams.get('course'), 'es');
  assert.equal(new URL(spanishSignupHref('sv', 'hero')).searchParams.get('lang'), 'en');
});
