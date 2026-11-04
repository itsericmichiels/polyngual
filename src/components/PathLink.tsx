'use client';

import { track } from '@/lib/analytics';
import type { PathId } from '@/lib/site';

// A way into one of the three products. Records which product and which button, so the home page shows
// what people come for (`path_click`, next to `mock_test_cta` from the exam pages).
export function PathLink({
  href,
  path,
  placement,
  locale,
  className,
  children,
}: {
  href: string;
  path: PathId;
  placement: string;
  locale: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} data-path={path} onClick={() => track('path_click', { path, placement, lang: locale })}>
      {children}
    </a>
  );
}
