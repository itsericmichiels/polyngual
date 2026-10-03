import type { Metadata } from 'next';
import type { ExamPageContent } from '@/content/exams/types';
import { examAlternates, examPath } from '@/lib/exams';
import { siteUrl } from '@/lib/site';

export function examMetadata(t: ExamPageContent): Metadata {
  const path = examPath(t.exam, t.locale);
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: { canonical: path, languages: examAlternates(t.exam) },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: t.locale === 'es' ? 'es_ES' : 'en_US',
      url: path,
      siteName: 'Polyngual',
      title: t.meta.title,
      description: t.meta.description,
    },
    twitter: { card: 'summary_large_image', title: t.meta.title, description: t.meta.description },
  };
}

// FAQPage only: Course or Product markup would need prices and provider details we do not have yet.
export function examJsonLd(t: ExamPageContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: t.locale,
    url: `${siteUrl()}${examPath(t.exam, t.locale)}`,
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
