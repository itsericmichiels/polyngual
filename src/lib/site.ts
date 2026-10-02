export const siteUrl = () => (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://polyngual.com').replace(/\/$/, '');

export const CONTACT_EMAIL = 'hola@polyngual.com';

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/polyngual' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@polyngual' },
  { label: 'YouTube', href: 'https://www.youtube.com/@polyngual' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/polyngual' },
  { label: 'X', href: 'https://x.com/polyngual' },
] as const;
