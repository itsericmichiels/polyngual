'use client';

import { track } from '@vercel/analytics';
import type { ExamId, ExamLocale } from '@/lib/exams';

// Every mock test button on the exam pages. The click is recorded with the exam, the language and where
// on the page it was, before the browser follows the link.
export function MockTestCta({
  href,
  label,
  exam,
  locale,
  placement,
  variant,
  className = 'btn btn-primary',
}: {
  href: string;
  label: string;
  exam: ExamId;
  locale: ExamLocale;
  placement: 'header' | 'hero' | 'final' | 'variant';
  variant?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      data-cta="mock-test"
      onClick={() => track('mock_test_cta', { exam, lang: locale, placement, ...(variant ? { variant } : {}) })}
    >
      {label}
    </a>
  );
}
