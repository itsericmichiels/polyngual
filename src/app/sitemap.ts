import type { MetadataRoute } from 'next';
import { LOCALES } from '@/content';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    ...LOCALES.map((locale) => ({
      url: `${base}/${locale}`,
      alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, `${base}/${l}`])) },
    })),
    { url: `${base}/privacidad`, alternates: { languages: { es: `${base}/privacidad`, en: `${base}/en/privacy` } } },
    { url: `${base}/en/privacy`, alternates: { languages: { es: `${base}/privacidad`, en: `${base}/en/privacy` } } },
  ];
}
