// www is the address the site answers on (polyngual.app redirects to it), so canonical links, hreflang and the sitemap
// point there; Google ignores a canonical that redirects (Eric, 2026-11-19).
export const siteUrl = () => (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.polyngual.app').replace(/\/$/, '');

export const CONTACT_EMAIL = 'polyngualapp@gmail.com';

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/polyngual' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@polyngual' },
  // @polyngual does not exist; the channels are @PolyngualApp and, for the Spanish course, @PolyngualSpanish (2026-11-19).
  { label: 'YouTube', href: 'https://www.youtube.com/@PolyngualApp' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/polyngual' },
] as const;

/** The Spanish course's own channel, which the Spanish page links instead of the main one. */
export const SPANISH_YOUTUBE = 'https://www.youtube.com/@PolyngualSpanish';

// The learning app (learn.polyngual.app). While NEXT_PUBLIC_APP_URL is unset the site stays a waitlist; once it
// is set, the main buttons send people straight into the free beta. `placement` says which button it was.
export const appUrl = () => process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, '') || null;

export function appSignupHref(locale: string, placement: string): string | null {
  const base = appUrl();
  if (!base) return null;
  const url = new URL(`${base}/alumno`);
  url.searchParams.set('lang', locale);
  url.searchParams.set('utm_source', 'polyngual');
  url.searchParams.set('utm_medium', 'landing');
  url.searchParams.set('utm_campaign', `${placement}-${locale}`);
  return url.toString();
}
