import { notFound } from 'next/navigation';
import { LOCALES, isLocale } from '@/content';
import { RootDocument, rootMetadata, rootViewport } from '@/components/RootDocument';

export const metadata = rootMetadata;
export const viewport = rootViewport;
export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }));

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RootDocument lang={locale}>{children}</RootDocument>;
}
