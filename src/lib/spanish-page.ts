import type { Metadata } from 'next';
import type { SpanishPageContent } from '@/content/spanish/types';
import { spanishAlternates, spanishPath } from './spanish';

export function spanishMetadata(t: SpanishPageContent): Metadata {
  const url = spanishPath(t.lang);
  const image = { url: `/og-spanish-${t.lang}.png`, width: 1200, height: 630, alt: t.hero.title };
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: url, languages: spanishAlternates() },
    // Each language shares its own card (scripts/spanish-share-images.mjs): the hero title on the page's paper and flag.
    openGraph: { title: t.meta.title, description: t.meta.description, url, siteName: 'Polyngual', type: 'website', locale: t.htmlLang, images: [image] },
    twitter: { card: 'summary_large_image', title: t.meta.title, description: t.meta.description, images: [image.url] },
  };
}
