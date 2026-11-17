import type { SpanishLang } from '@/lib/spanish';
import type { SpanishPageContent } from './types';
import { en } from './en';
import { de } from './de';
import { da } from './da';
import { sv } from './sv';
import { no } from './no';
import { nl } from './nl';
import { fi } from './fi';

const CONTENT: Record<SpanishLang, SpanishPageContent> = { en, de, da, sv, no, nl, fi };

export const getSpanishContent = (lang: SpanishLang) => CONTENT[lang];
