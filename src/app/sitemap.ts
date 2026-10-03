import type { MetadataRoute } from 'next';
import { LOCALES } from '@/content';
import { PUBLISHED_EXAMS, examAlternates, examPath } from '@/lib/exams';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const absolute = (paths: Record<string, string>) => Object.fromEntries(Object.entries(paths).map(([lang, path]) => [lang, `${base}${path}`]));
  return [
    ...LOCALES.map((locale) => ({
      url: `${base}/${locale}`,
      alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `${base}/${l}`])) },
    })),
    { url: `${base}/privacidad`, alternates: { languages: { es: `${base}/privacidad`, en: `${base}/privacy` } } },
    { url: `${base}/privacy`, alternates: { languages: { es: `${base}/privacidad`, en: `${base}/privacy` } } },
    // Exam landing pages: standalone (not in the main navigation) but listed here and in footers.
    ...PUBLISHED_EXAMS.flatMap((exam) =>
      (['en', 'es'] as const).map((locale) => ({
        url: `${base}${examPath(exam, locale)}`,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: { languages: absolute(examAlternates(exam)) },
      })),
    ),
  ];
}
