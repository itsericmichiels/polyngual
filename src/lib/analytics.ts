'use client';

import { track as vercelTrack } from '@vercel/analytics';

// Google Tag Manager and Google Analytics set cookies, so they only load once the visitor
// accepts in the cookie notice (GoogleTags.tsx). Vercel Web Analytics is cookieless and
// always runs. The choice is kept on this device under CONSENT_KEY.
export const CONSENT_KEY = 'polyngual.consent.v1';
export const CONSENT_EVENT = 'polyngual:consent';
export type Consent = 'accepted' | 'declined';

// Polyngual's Tag Manager container (public: it appears in every page's source). The env variable can
// override it, e.g. for a test container; set it to "off" to remove Google tags entirely.
const gtmEnv = process.env.NEXT_PUBLIC_GTM_ID?.trim();
export const GTM_ID = gtmEnv === 'off' ? '' : gtmEnv || 'GTM-P2QHWHJ6';
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || '';
export const googleTagsConfigured = () => Boolean(GTM_ID || GA4_ID);

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage blocked: the choice holds for this page only.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window { dataLayer?: unknown[] }
}

/** One event to both places: Vercel Analytics always, Google (GTM/GA4) only after consent. */
export function track(name: string, props: Props = {}) {
  vercelTrack(name, props);
  if (readConsent() !== 'accepted') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...props });
}
