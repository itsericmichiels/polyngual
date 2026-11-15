import type { Months, SpanishLang, Tier } from '@/lib/spanish';

// The Spanish landing page's words, one file per language (en.ts is the original).
export type SpanishPageContent = {
  lang: SpanishLang;
  /** The <html lang> value. */
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { cta: string; languages: string };
  hero: { eyebrow: string; title: string; sub: string; cta: string; note: string };
  /** "2027 is the best time to learn Spanish" (Eric, 2026-11-15). */
  year: { eyebrow: string; title: string; body: string; points: { title: string; body: string }[] };
  features: { eyebrow: string; title: string; intro: string; items: { title: string; body: string }[] };
  news: { title: string; body: string; label: string; headline: string; known: string; fresh: string; knownLabel: string; freshLabel: string };
  steps: { title: string; items: { title: string; body: string }[] };
  pricing: {
    eyebrow: string;
    title: string;
    intro: string;
    recommended: string;
    perMonth: string;
    durations: Record<Months, string>;
    /** "€135 every 3 months" */
    billed: (total: string, months: Months) => string;
    save: (percent: number) => string;
    tiers: Record<Tier, { name: string; tagline: string; perks: string[] }>;
    cta: string;
    trialNote: string;
    vat: string;
  };
  guarantee: { title: string; body: string };
  /** Shown where the app does not speak the page's language yet. */
  appLanguageNote?: string;
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; sub: string; cta: string };
  footer: { privacy: string; terms: string; rights: string };
};
