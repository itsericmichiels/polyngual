import Image from 'next/image';
import Link from 'next/link';
import type { SpanishPageContent } from '@/content/spanish/types';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/site';
import { SPANISH_LANGS, SPANISH_LANG_NAMES, euro, monthsOf, perMonthCents, PRICES, savingPercent, spanishPath, spanishSignupHref, type Tier } from '@/lib/spanish';
import { RevealObserver } from '@/components/RevealObserver';
import { SpanishCta } from './SpanishCta';
import '@/app/spanish.css';

// Polyngual Spanish's landing page (polyngual.app/spanish and /spanish/<lang>), for Northern Europeans who live on
// the Costa del Sol (Eric, 2026-11-15). Server-rendered; the only client code is the tracked CTA and the reveals.

const TIERS: Tier[] = ['essential', 'intensive', 'couple'];

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden focusable="false" className="s-check">
      <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The news headline with its known and new words marked. */
function Highlighted({ t }: { t: SpanishPageContent }) {
  const parts = t.news.headline.split(new RegExp(`(${t.news.known}|${t.news.fresh})`));
  return (
    <>
      {parts.map((part, i) =>
        part === t.news.known ? (
          <mark key={i} className="s-known" title={t.news.knownLabel}>
            {part}
          </mark>
        ) : part === t.news.fresh ? (
          <mark key={i} className="s-fresh" title={t.news.freshLabel}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function SpanishPage({ t }: { t: SpanishPageContent }) {
  const { lang } = t;
  const href = (placement: string) => spanishSignupHref(lang, placement);

  return (
    <div className="s-page">
      <RevealObserver />

      <header className="s-hero">
        <div className="grain" aria-hidden />
        <nav className="nav shell">
          <Link href={spanishPath(lang)} className="nav-logo" aria-label="Polyngual">
            <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} sizes="140px" priority />
          </Link>
          <SpanishCta href={href('header')} label={t.nav.cta} lang={lang} placement="header" className="btn btn-ghost s-nav-cta" />
        </nav>
        <div className="shell s-hero-inner">
          <p className="eyebrow s-eyebrow-dark">{t.hero.eyebrow}</p>
          <h1 className="s-hero-title">{t.hero.title}</h1>
          <p className="s-hero-sub">{t.hero.sub}</p>
          <div className="s-hero-actions">
            <SpanishCta href={href('hero')} label={t.hero.cta} lang={lang} placement="hero" />
            <p className="s-hero-note">{t.hero.note}</p>
          </div>
          <aside className="s-hero-guarantee" aria-label={t.guarantee.title}>
            <strong>{t.guarantee.title}</strong>
            <span>{t.guarantee.body}</span>
          </aside>
        </div>
      </header>

      <main>
        <section className="s-section s-year" aria-labelledby="year-title">
          <div className="shell">
            <div className="s-head" data-reveal>
              <p className="eyebrow">{t.year.eyebrow}</p>
              <h2 id="year-title">{t.year.title}</h2>
              <p>{t.year.body}</p>
            </div>
            <ol className="s-year-points">
              {t.year.points.map((point, i) => (
                <li key={point.title} data-reveal style={{ '--r': i } as React.CSSProperties}>
                  <span className="s-year-num" aria-hidden>
                    {i + 1}
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="s-section shell" aria-labelledby="features-title">
          <div className="s-head" data-reveal>
            <p className="eyebrow">{t.features.eyebrow}</p>
            <h2 id="features-title">{t.features.title}</h2>
            <p>{t.features.intro}</p>
          </div>
          <ul className="s-features">
            {t.features.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ '--r': i } as React.CSSProperties}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="s-section shell s-news" aria-labelledby="news-title">
          <div className="s-news-copy" data-reveal>
            <h2 id="news-title">{t.news.title}</h2>
            <p>{t.news.body}</p>
          </div>
          <figure className="s-news-card" data-reveal>
            <figcaption>{t.news.label} · Fuengirola</figcaption>
            <p lang="es" className="s-news-headline">
              <Highlighted t={t} />
            </p>
            <div className="s-news-legend">
              <span>
                <mark className="s-known">{t.news.known}</mark> {t.news.knownLabel}
              </span>
              <span>
                <mark className="s-fresh">{t.news.fresh}</mark> {t.news.freshLabel}
              </span>
            </div>
          </figure>
        </section>

        <section className="s-section shell" aria-labelledby="steps-title">
          <h2 id="steps-title" className="s-h2" data-reveal>
            {t.steps.title}
          </h2>
          <ol className="s-steps">
            {t.steps.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ '--r': i } as React.CSSProperties}>
                <span className="s-steps-num" aria-hidden>
                  {i + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="s-section shell" id="plans" aria-labelledby="plans-title">
          <div className="s-head" data-reveal>
            <p className="eyebrow">{t.pricing.eyebrow}</p>
            <h2 id="plans-title">{t.pricing.title}</h2>
            <p>{t.pricing.intro}</p>
          </div>
          <ul className="s-plans">
            {TIERS.map((tier) => {
              const text = t.pricing.tiers[tier];
              const intensive = tier === 'intensive';
              const longer = monthsOf(tier).filter((months) => months > 1);
              return (
                <li key={tier} className={`s-plan${intensive ? ' s-plan-featured' : ''}`} data-tier={tier} data-reveal>
                  {intensive ? <p className="s-plan-badge">{t.pricing.recommended}</p> : null}
                  <h3>{text.name}</h3>
                  <p className="s-plan-tagline">{text.tagline}</p>
                  <p className="s-plan-price">
                    <strong>{euro(PRICES[tier][1] ?? 0, lang)}</strong> <span>{t.pricing.perMonth}</span>
                  </p>
                  <ul className="s-plan-longer">
                    {longer.map((months) => (
                      <li key={months}>
                        <span>{t.pricing.durations[months]}</span>
                        <span>
                          {euro(perMonthCents(tier, months), lang)} <small>{t.pricing.perMonth}</small>
                        </span>
                        <span className="s-save">{t.pricing.save(savingPercent(tier, months))}</span>
                        <small className="s-billed">{t.pricing.billed(euro(PRICES[tier][months] ?? 0, lang), months)}</small>
                      </li>
                    ))}
                  </ul>
                  <ul className="s-plan-perks">
                    {text.perks.map((perk) => (
                      <li key={perk}>
                        <Check />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <SpanishCta
                    href={href(`plan-${tier}`)}
                    label={t.pricing.cta}
                    lang={lang}
                    placement={`plan-${tier}`}
                    className={`btn ${intensive ? 'btn-primary' : 'btn-dark'} s-plan-cta`}
                  />
                </li>
              );
            })}
          </ul>
          <div className="s-guarantee" data-reveal>
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden focusable="false">
              <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <h3>{t.guarantee.title}</h3>
              <p>{t.guarantee.body}</p>
            </div>
          </div>
          <p className="s-fine">
            {t.pricing.trialNote} {t.pricing.vat}
          </p>
          {t.appLanguageNote ? <p className="s-fine">{t.appLanguageNote}</p> : null}
        </section>

        <section className="s-section shell s-faq" aria-labelledby="faq-title">
          <h2 id="faq-title" className="s-h2" data-reveal>
            {t.faq.title}
          </h2>
          <div className="s-faq-list">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="s-final" aria-labelledby="final-title">
          <div className="grain" aria-hidden />
          <div className="shell s-final-inner" data-reveal>
            <h2 id="final-title">{t.final.title}</h2>
            <p>{t.final.sub}</p>
            <SpanishCta href={href('final')} label={t.final.cta} lang={lang} placement="final" />
          </div>
        </section>
      </main>

      <footer className="footer s-footer">
        <div className="shell s-footer-inner">
          <div className="s-footer-brand">
            <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} sizes="120px" className="footer-logo" />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <nav aria-label={t.nav.languages}>
            <ul className="s-footer-langs">
              {SPANISH_LANGS.map((other) => (
                <li key={other}>
                  <Link href={spanishPath(other)} hrefLang={other === 'no' ? 'nb' : other} aria-current={other === lang ? 'page' : undefined}>
                    {SPANISH_LANG_NAMES[other]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="s-footer-links">
            <li>
              <Link href="/en/privacy">{t.footer.privacy}</Link>
            </li>
            <li>
              <Link href="/en/terms">{t.footer.terms}</Link>
            </li>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a href={social.href} rel="noopener">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-fine">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
