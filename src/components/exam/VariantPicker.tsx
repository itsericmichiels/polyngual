'use client';

import { useId, useState } from 'react';
import type { ExamPageContent } from '@/content/exams/types';
import type { ExamId, ExamLocale } from '@/lib/exams';
import { MockTestCta } from './MockTestCta';

// Lets the visitor pick their version of the exam (IELTS Academic or General Training, Cambridge B2 or C1).
// Every panel is in the server HTML; the ones not chosen are only hidden. The panel's button sends the
// choice on as `variant`, next to `exam`.
export function VariantPicker({
  copy,
  exam,
  locale,
  href,
}: {
  copy: NonNullable<ExamPageContent['variants']>;
  exam: ExamId;
  locale: ExamLocale;
  href: string;
}) {
  const [active, setActive] = useState(copy.options[0].id);
  const base = useId();
  const withVariant = (id: string) => {
    const [path, hash = ''] = href.split('#');
    return `${path}${path.includes('?') ? '&' : '?'}variant=${id}${hash ? `#${hash}` : ''}`;
  };

  const onKey = (e: React.KeyboardEvent, index: number) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = copy.options[(index + step + copy.options.length) % copy.options.length];
    setActive(next.id);
    document.getElementById(`${base}-tab-${next.id}`)?.focus();
  };

  return (
    <div className="x-variants" data-reveal>
      <h3 className="x-variants-title">{copy.title}</h3>
      <p className="x-variants-intro">{copy.intro}</p>
      <div className="x-variants-tabs" role="tablist" aria-label={copy.title}>
        {copy.options.map((option, i) => (
          <button
            key={option.id}
            id={`${base}-tab-${option.id}`}
            type="button"
            role="tab"
            aria-selected={active === option.id}
            aria-controls={`${base}-panel-${option.id}`}
            tabIndex={active === option.id ? 0 : -1}
            onClick={() => setActive(option.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {copy.options.map((option) => (
        <div
          key={option.id}
          id={`${base}-panel-${option.id}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${option.id}`}
          className="x-variants-panel"
          hidden={active !== option.id}
        >
          <p className="x-variants-who">{option.who}</p>
          <ul>
            {option.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <MockTestCta
            href={withVariant(option.id)}
            label={option.cta}
            exam={exam}
            locale={locale}
            placement="variant"
            variant={option.id}
            className="btn btn-dark"
          />
        </div>
      ))}
    </div>
  );
}
