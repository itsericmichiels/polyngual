import type { Metadata } from 'next';
import type { SpanishPageContent } from '@/content/spanish/types';
import { spanishAlternates, spanishPath } from './spanish';

export function spanishMetadata(t: SpanishPageContent): Metadata {
  const url = spanishPath(t.lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: url, languages: spanishAlternates() },
    openGraph: { title: t.meta.title, description: t.meta.description, url, siteName: 'Polyngual', type: 'website', locale: t.htmlLang, images: ['/og-en.png'] },
  };
}
