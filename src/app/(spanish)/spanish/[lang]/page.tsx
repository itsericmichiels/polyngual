import { notFound } from 'next/navigation';
import { SpanishPage } from '@/components/spanish/SpanishPage';
import { getSpanishContent } from '@/content/spanish';
import { isSpanishLang, SPANISH_LANGS } from '@/lib/spanish';
import { spanishMetadata } from '@/lib/spanish-page';

// polyngual.app/spanish/<lang>: Polyngual Spanish in German, Danish, Swedish, Norwegian or Dutch.
export const dynamicParams = false;

export function generateStaticParams() {
  return SPANISH_LANGS.filter((lang) => lang !== 'en').map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return isSpanishLang(lang) && lang !== 'en' ? spanishMetadata(getSpanishContent(lang)) : {};
}

export default async function SpanishLangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isSpanishLang(lang) || lang === 'en') notFound();
  return <SpanishPage t={getSpanishContent(lang)} />;
}
