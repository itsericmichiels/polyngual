import Image from 'next/image';
import Link from 'next/link';
import type { ExamPageContent, GapTone, PracticeFormat } from '@/content/exams/types';
import { EXAM_NAMES, PUBLISHED_EXAMS, examPath, mockTestHref } from '@/lib/exams';
import { CONTACT_EMAIL } from '@/lib/site';
import { LoopDiagram } from './LoopDiagram';
import { MockTestCta } from './MockTestCta';
import { VariantPicker } from './VariantPicker';
import { RevealObserver } from '@/components/RevealObserver';
import '@/app/exam.css';

// One standalone exam landing page. Everything is rendered on the server; the only client code is the
// tracked CTA, the scroll reveals (RevealObserver, shared with the home page) and the loop animation.
// Motion is CSS only, keyed off [data-in]; without JavaScript or with reduced motion everything is simply shown.

const TONE_ICON: Record<GapTone, React.ReactNode> = {
  strong: <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />,
  building: <path d="M10 3a7 7 0 0 1 0 14z" fill="currentColor" />,
  gap: <circle cx="10" cy="10" r="3.2" fill="currentColor" />,
};

const FORMAT_ICON: Record<PracticeFormat, React.ReactNode> = {
  'vocabulary-videos': <path d="M4 6h9v8H4zM13 9l4-2.5v7L13 11" />,
  explainers: <path d="M4 5h12v8H4zM8 17h4M10 13v4" />,
  exercises: <path d="M5 10l3 3 7-7M5 16h10" />,
  games: <path d="M10 3v4M10 13v4M3 10h4M13 10h4M10 10h.01" />,
  podcasts: <path d="M10 3a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 10a5 5 0 0 0 10 0M10 15v2" />,
  stories: <path d="M4 4h5a2 2 0 0 1 2 2v10a2 2 0 0 0-2-2H4zM16 4h-5M16 4v10h-5" />,
  tutor: <path d="M4 5h12v8H9l-4 3v-3H4z" />,
  speaking: <path d="M4 10h1M7 7v6M10 4v12M13 7v6M16 10h0" />,
};

function ToneMark({ tone }: { tone: GapTone }) {
  return (
    <svg className="x-tone" data-tone={tone} viewBox="0 0 20 20" width="20" height="20" aria-hidden focusable="false">
      <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      {TONE_ICON[tone]}
    </svg>
  );
}

export function ExamPage({ t, jsonLd }: { t: ExamPageContent; jsonLd: object }) {
  const { exam, locale } = t;
  const href = mockTestHref(exam, locale);
  const otherLocale = locale === 'en' ? 'es' : 'en';
  const formats = t.practice.items.map((item) => ({ id: item.id, label: t.practiceNames[item.id] }));
  const cta = { href, label: t.cta, exam, locale } as const;
  // The hero line is two sentences: what you already know (dimmed after it lands) and what you are missing.
  const [heroLead, ...heroRestParts] = t.hero.title.split(/(?<=\.)\s+/);
  const heroRest = heroRestParts.join(' ');

  return (
    <div lang={locale} className="x-page">
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="x-hero">
        <div className="grain" aria-hidden />
        <nav className="nav shell">
          <Link href={`/${locale}`} className="nav-logo" aria-label="Polyngual">
            <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} sizes="140px" priority />
          </Link>
          <MockTestCta {...cta} placement="header" className="btn btn-ghost x-nav-cta" />
        </nav>
        <div className="shell x-hero-inner">
          <svg className="x-hero-orbit" viewBox="0 0 200 200" aria-hidden focusable="false">
            <circle cx="100" cy="100" r="86" />
            <circle cx="100" cy="100" r="34" className="x-hero-orbit-core" />
            <g className="x-hero-orbit-dots">
              <circle cx="100" cy="14" r="6" />
              <circle cx="186" cy="100" r="6" />
              <circle cx="100" cy="186" r="6" />
              <circle cx="14" cy="100" r="6" />
            </g>
          </svg>
          <h1 className="x-hero-title">
            <span className="x-h1-known">{heroLead}</span> <span className="x-h1-gap">{heroRest}</span>
          </h1>
          <p className="x-hero-sub enter" style={{ '--e': 5 } as React.CSSProperties}>
            {t.hero.sub}
          </p>
          <div className="x-hero-actions enter" style={{ '--e': 7 } as React.CSSProperties}>
            <MockTestCta {...cta} placement="hero" />
            <p className="x-hero-note">{t.hero.note}</p>
          </div>
        </div>
      </header>

      <main>
        <section className="x-section x-loop-section" aria-labelledby="loop-title">
          <div className="shell">
            <div className="x-head" data-reveal>
              <h2 id="loop-title">{t.loop.title}</h2>
              <p>{t.loop.intro}</p>
            </div>
            <LoopDiagram copy={t.loop} formats={formats} id="loop" />
          </div>
        </section>

        <section className="x-section shell" aria-labelledby="steps-title">
          <h2 id="steps-title" className="x-h2" data-reveal>
            {t.steps.title}
          </h2>
          <ol className="x-steps">
            {t.steps.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ '--r': i } as React.CSSProperties}>
                <span className="x-steps-num" aria-hidden>
                  {i + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="x-section shell x-gapmap" aria-labelledby="gapmap-title">
          <div className="x-gapmap-copy" data-reveal>
            <h2 id="gapmap-title">{t.gapMap.title}</h2>
            <p>{t.gapMap.intro}</p>
          </div>
          <article className="x-card" aria-label={t.gapMap.exampleLabel} data-reveal style={{ '--r': 1 } as React.CSSProperties}>
            <header className="x-card-head">
              <span className="x-example">{t.gapMap.exampleLabel}</span>
              <p>{t.gapMap.learner}</p>
            </header>
            <ul className="x-card-rows">
              {t.gapMap.rows.map((row, i) => (
                <li key={row.skill} data-tone={row.tone} style={{ '--k': i } as React.CSSProperties}>
                  <ToneMark tone={row.tone} />
                  <div>
                    <p className="x-card-skill">
                      <strong>{row.skill}</strong> <span>{row.status}</span>
                    </p>
                    <p className="x-card-detail">{row.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="x-card-next">{t.gapMap.next}</p>
          </article>
        </section>

        <section className="x-section x-practice" aria-labelledby="practice-title">
          <div className="shell">
            <div className="x-head" data-reveal>
              <h2 id="practice-title">{t.practice.title}</h2>
              <p>{t.practice.intro}</p>
            </div>
            <ul className="x-formats">
              {t.practice.items.map((item, i) => (
                <li key={item.id} data-reveal style={{ '--r': i % 2 } as React.CSSProperties}>
                  <svg className="x-format-icon" viewBox="0 0 20 20" width="22" height="22" aria-hidden focusable="false">
                    <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {FORMAT_ICON[item.id]}
                    </g>
                  </svg>
                  <h3>{item.name}</h3>
                  <p>{item.what}</p>
                  <p className="x-fixes">
                    <span>{t.practice.fixesLabel}:</span> {item.fixes}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="x-section shell" aria-labelledby="compare-title">
          <h2 id="compare-title" className="x-h2" data-reveal>
            {t.compare.title}
          </h2>
          <div className="x-compare">
            <div className="x-compare-col" data-reveal>
              <h3>{t.compare.left.title}</h3>
              <ul>
                {t.compare.left.points.map((p, i) => (
                  <li key={p} style={{ '--k': i } as React.CSSProperties}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="x-compare-col x-compare-ours" data-reveal style={{ '--r': 2 } as React.CSSProperties}>
              <h3>{t.compare.right.title}</h3>
              <ul>
                {t.compare.right.points.map((p, i) => (
                  <li key={p} style={{ '--k': i } as React.CSSProperties}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="x-section shell" aria-labelledby="facts-title">
          <div className="x-head" data-reveal>
            <h2 id="facts-title">{t.examFacts.title}</h2>
            <p>{t.examFacts.intro}</p>
          </div>
          {t.variants && <VariantPicker copy={t.variants} exam={exam} locale={locale} href={href} />}
          <table className="x-facts">
            <thead>
              <tr>
                <th scope="col">{t.examFacts.headers.section}</th>
                <th scope="col">{t.examFacts.headers.tasks}</th>
                <th scope="col">{t.examFacts.headers.time}</th>
                <th scope="col">{t.examFacts.headers.polyngual}</th>
              </tr>
            </thead>
            <tbody>
              {t.examFacts.rows.map((row, i) => (
                <tr key={row.section} data-reveal style={{ '--r': i } as React.CSSProperties}>
                  <th scope="row">{row.section}</th>
                  <td data-label={t.examFacts.headers.tasks}>{row.tasks}</td>
                  <td data-label={t.examFacts.headers.time}>{row.time}</td>
                  <td data-label={t.examFacts.headers.polyngual}>{row.polyngual}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="x-facts-note">{t.examFacts.scoring}</p>
          <p className="x-facts-source">{t.examFacts.source}</p>
        </section>

        {/* PLACEHOLDER: real proof (learner results, quotes, numbers) goes here once it exists. Nothing is
            rendered in production until then; do not fill it with invented testimonials or figures. */}
        {process.env.NODE_ENV !== 'production' && (
          <section className="shell x-proof-placeholder" aria-hidden>
            Placeholder: real learner proof goes here. Not shown in production.
          </section>
        )}

        <section className="x-section shell x-faq" aria-labelledby="faq-title">
          <h2 id="faq-title" className="x-h2" data-reveal>
            {t.faq.title}
          </h2>
          <div className="x-faq-list" data-reveal>
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing x-final" aria-labelledby="final-title">
          <div className="shell closing-inner" data-reveal>
            <h2 id="final-title">{t.final.title}</h2>
            <p>{t.final.body}</p>
            <MockTestCta {...cta} placement="final" />
          </div>
        </section>
      </main>

      <footer className="footer x-footer">
        <div className="shell x-footer-inner">
          <div className="x-footer-brand">
            <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} sizes="120px" className="footer-logo" />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <nav aria-labelledby="footer-exams">
            <p id="footer-exams" className="x-footer-label">
              {t.footer.examPrep}
            </p>
            <ul>
              {PUBLISHED_EXAMS.map((e) => (
                <li key={e}>
                  <Link href={examPath(e, locale)} aria-current={e === exam ? 'page' : undefined}>
                    {EXAM_NAMES[e]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="x-footer-links">
            <li>
              <Link href={examPath(exam, otherLocale)} hrefLang={otherLocale}>
                {t.footer.langSwitch}
              </Link>
            </li>
            <li>
              <Link href={locale === 'en' ? '/privacy' : '/privacidad'}>{t.footer.privacy}</Link>
            </li>
          </ul>
          <p className="x-footer-disclaimer">{t.footer.disclaimer}</p>
          <p className="footer-fine">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
