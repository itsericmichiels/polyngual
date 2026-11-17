// Polyngual Spanish (Spain): the landing page's languages, prices and app links.
// Prices mirror the app's plans (repo exitohire-ai, apps/web/src/lib/polyngual/billing.ts, Eric 2026-11-16: no
// 12-month plans, Couples for 3 and 6 months too; prices as Eric set them in Stripe, 2026-11-17):
// change both together.

import { appUrl } from './site.ts';

export const SPANISH_LANGS = ['en', 'de', 'da', 'sv', 'no', 'nl', 'fi'] as const;
export type SpanishLang = (typeof SPANISH_LANGS)[number];

export const SPANISH_LANG_NAMES: Record<SpanishLang, string> = {
  en: 'English',
  de: 'Deutsch',
  da: 'Dansk',
  sv: 'Svenska',
  no: 'Norsk',
  nl: 'Nederlands',
  fi: 'Suomi',
};

/** The page's path: /spanish in English, /spanish/<lang> for the others. */
export const spanishPath = (lang: SpanishLang) => (lang === 'en' ? '/spanish' : `/spanish/${lang}`);

export const isSpanishLang = (value: string): value is SpanishLang => (SPANISH_LANGS as readonly string[]).includes(value);

export function spanishAlternates(): Record<string, string> {
  return {
    ...Object.fromEntries(SPANISH_LANGS.map((lang) => [lang === 'no' ? 'nb' : lang, spanishPath(lang)])),
    'x-default': spanishPath('en'),
  };
}

export type Months = 1 | 3 | 6;
export type Tier = 'essential' | 'intensive' | 'couple';

/** Euro cents, VAT included, by tier and length. */
export const PRICES: Record<Tier, Partial<Record<Months, number>>> = {
  essential: { 1: 5000, 3: 13500, 6: 25500 },
  intensive: { 1: 10000, 3: 27000, 6: 49000 },
  couple: { 1: 8000, 3: 21000, 6: 39900 },
};

export const monthsOf = (tier: Tier) => (Object.keys(PRICES[tier]).map(Number) as Months[]).sort((a, b) => a - b);
export const perMonthCents = (tier: Tier, months: Months) => Math.round((PRICES[tier][months] ?? 0) / months);
/** The saving against the monthly price over as many months, in whole percent, rounded down so it is never
 *  overstated (€210 instead of 3 × €80 is 12.5%, shown as 12%). */
export const savingPercent = (tier: Tier, months: Months) =>
  Math.floor((1 - (PRICES[tier][months] ?? 0) / ((PRICES[tier][1] ?? 1) * months)) * 100 + 1e-9);

const NUMBER_LOCALE: Record<SpanishLang, string> = { en: 'en-IE', de: 'de-DE', da: 'da-DK', sv: 'sv-SE', no: 'nb-NO', nl: 'nl-NL', fi: 'fi-FI' };

/** "€42.50" / "42,50 €"; whole euros without decimals. */
export function euro(cents: number, lang: SpanishLang): string {
  const whole = cents % 100 === 0;
  return new Intl.NumberFormat(NUMBER_LOCALE[lang], {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  }).format(cents / 100);
}

// The app speaks English, Spanish, German, Danish, Swedish and Finnish (the last two since 2026-11-17); Norwegian and
// Dutch visitors start in English.
const APP_LANG: Record<SpanishLang, 'en' | 'de' | 'da' | 'sv' | 'fi'> = { en: 'en', de: 'de', da: 'da', sv: 'sv', no: 'en', nl: 'en', fi: 'fi' };

/** The app's sign-up, in the visitor's language where the app has it, tagged with where the click came from. */
export function spanishSignupHref(lang: SpanishLang, placement: string): string {
  const url = new URL(`${appUrl() ?? 'https://learn.polyngual.app'}/alumno`);
  url.searchParams.set('lang', APP_LANG[lang]);
  url.searchParams.set('course', 'es');
  url.searchParams.set('utm_source', 'polyngual');
  url.searchParams.set('utm_medium', 'spanish_page');
  url.searchParams.set('utm_campaign', `spanish-${placement}-${lang}`);
  return url.toString();
}
