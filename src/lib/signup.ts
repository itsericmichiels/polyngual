// Pure helpers for the waitlist request. Kept free of Next.js imports so they can be unit tested with node --test.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const email = value.trim().toLowerCase();
  if (email.length < 6 || email.length > 254 || !EMAIL_PATTERN.test(email)) return null;
  return email;
}

export type TrafficSource = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  referrer: string;
  landing: string;
};

const clip = (value: unknown, max = 200) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export function readTrafficSource(input: Record<string, unknown> | undefined): TrafficSource {
  const source = input ?? {};
  return {
    utmSource: clip(source.utm_source),
    utmMedium: clip(source.utm_medium),
    utmCampaign: clip(source.utm_campaign),
    utmContent: clip(source.utm_content),
    utmTerm: clip(source.utm_term),
    referrer: clip(source.referrer, 500),
    landing: clip(source.landing, 500),
  };
}

export function readCountry(header: string | null): string {
  return header && /^[A-Z]{2}$/.test(header) ? header : '';
}
