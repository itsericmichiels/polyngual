'use client';

import { track } from '@/lib/analytics';

// Every "start your free week" button on the Spanish page: the click is recorded with the page language and
// where on the page it was (Vercel Analytics always, Google after consent), then the browser follows the link.
// `arrow` adds a small arrow that nudges forward on hover (spanish.css), for the hero and the final call.
export function SpanishCta({
  href,
  label,
  lang,
  placement,
  className = 'btn btn-primary',
  arrow = false,
}: {
  href: string;
  label: string;
  lang: string;
  placement: string;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <a href={href} className={className} data-cta="spanish-signup" onClick={() => track('spanish_cta', { lang, placement })}>
      {label}
      {arrow ? (
        <svg className="s-arrow" viewBox="0 0 16 16" width="16" height="16" aria-hidden focusable="false">
          <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </a>
  );
}
