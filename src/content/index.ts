import { es, type Dictionary } from './es';

// Add 'en' here (and an en.ts with the same shape) to publish /en.
export const LOCALES = ['es'] as const;
export type Locale = (typeof LOCALES)[number];

const dictionaries: Record<Locale, Dictionary> = { es };

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);
export const getDictionary = (locale: Locale) => dictionaries[locale];
