import { en } from './en';
import { es, type Dictionary } from './es';

// Each locale needs a dictionary with the same shape as es.ts. /es stays the default.
export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);
export const getDictionary = (locale: Locale) => dictionaries[locale];
