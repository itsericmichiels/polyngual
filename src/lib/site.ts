export const siteUrl = () => (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://polyngual.app').replace(/\/$/, '');

export const CONTACT_EMAIL = 'polyngualapp@gmail.com';

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/polyngual' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@polyngual' },
  { label: 'YouTube', href: 'https://www.youtube.com/@polyngual' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/polyngual' },
  { label: 'X', href: 'https://x.com/polyngual' },
] as const;

// The learning app, where the Spanish course (and the general English course) live. It is live, so the
// home page always links to it; NEXT_PUBLIC_APP_URL only points a preview at another deployment.
export const DEFAULT_APP_URL = 'https://learn.polyngual.app';
export const appUrl = () => process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, '') || DEFAULT_APP_URL;

const utm = (url: URL, campaign: string) => {
  url.searchParams.set('utm_source', 'polyngual');
  url.searchParams.set('utm_medium', 'landing');
  url.searchParams.set('utm_campaign', campaign);
};

/** The app's sign-up, in the page's language. `placement` says which button it was. */
export function appSignupHref(locale: string, placement: string): string {
  const url = new URL(`${appUrl()}/alumno`);
  url.searchParams.set('lang', locale);
  utm(url, `${placement}-${locale}`);
  return url.toString();
}

// The home page is the brand's front door; each of Polyngual's three products has its own way in.
export const PATHS = ['test', 'business', 'spanish'] as const;
export type PathId = (typeof PATHS)[number];

/**
 * Where each product's button goes.
 * - test: the exam app's beta page (polyngual.app/examen, forwarded to the exam app), like the exam pages' buttons.
 * - spanish: the learning app's sign-up; onboarding asks which language to learn.
 * - business: an email to the team, while Business is by invitation and has no sign-up of its own.
 */
export function pathHref(path: PathId, locale: string, placement: string, business: { subject: string; body: string }): string {
  if (path === 'spanish') return appSignupHref(locale, `spanish-${placement}`);
  if (path === 'business') {
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(business.subject)}&body=${encodeURIComponent(business.body)}`;
  }
  const url = new URL('/examen/beta', siteUrl());
  url.searchParams.set('lang', locale);
  utm(url, `test-${placement}-${locale}`);
  return `${url.pathname}${url.search}`;
}
