import type { Metadata, Viewport } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { siteUrl } from '@/lib/site';
import './globals.css';

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  applicationName: 'Polyngual',
};

export const viewport: Viewport = {
  themeColor: '#021940',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
