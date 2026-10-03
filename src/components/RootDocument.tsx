import type { Metadata, Viewport } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { siteUrl } from '@/lib/site';
import '@/app/globals.css';

// Shared <html> shell. Each language gets its own root layout (app/[locale] and app/(es))
// so the lang attribute is right for screen readers, translation prompts and search engines.

const display = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const body = Nunito_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  applicationName: 'Polyngual',
};

export const rootViewport: Viewport = {
  themeColor: '#021940',
  colorScheme: 'light',
};

export function RootDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
