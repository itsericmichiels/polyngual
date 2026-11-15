'use client';

import { track } from '@/lib/analytics';

// Every "start your free week" button on the Spanish page: the click is recorded with the page language and
// where on the page it was (Vercel Analytics always, Google after consent), then the browser follows the link.
export function SpanishCta({ href, label, lang, placement, className = 'btn btn-primary' }: { href: string; label: string; lang: string; placement: string; className?: string }) {
  return (
    <a href={href} className={className} data-cta="spanish-signup" onClick={() => track('spanish_cta', { lang, placement })}>
      {label}
    </a>
  );
}
