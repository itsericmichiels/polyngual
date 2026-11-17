import { Fraunces, Inter } from 'next/font/google';

// The Spanish landing page's own type (Eric, 2026-11-17: "change the font"): Fraunces, a warm serif with optical
// sizes, for headings and prices; Inter for text and buttons. Loaded only by components/spanish/SpanishPage.tsx, so
// the rest of the site keeps Nunito. spanish.css reads them as --font-s-display and --font-s-text.

export const spanishDisplay = Fraunces({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz', 'SOFT'],
  variable: '--font-s-display',
  display: 'swap',
});

export const spanishText = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-s-text',
  display: 'swap',
});
