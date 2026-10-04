import { es, type Dictionary } from './es';
import { en } from './en';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const isLocale = (value: unknown): value is Locale => typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
export const getDictionary = (locale: Locale) => dictionaries[locale];
