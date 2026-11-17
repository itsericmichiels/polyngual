import { notFound } from 'next/navigation';
import { RootDocument, rootMetadata, rootViewport } from '@/components/RootDocument';
import { getSpanishContent } from '@/content/spanish';
import { isSpanishLang } from '@/lib/spanish';

// Root layout for /spanish/<lang>, so <html lang> matches the page (de, da, sv, nb, nl).
export const metadata = rootMetadata;
export const viewport = rootViewport;

export default async function SpanishLangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isSpanishLang(lang) || lang === 'en') notFound();
  return <RootDocument lang={getSpanishContent(lang).htmlLang}>{children}</RootDocument>;
}
