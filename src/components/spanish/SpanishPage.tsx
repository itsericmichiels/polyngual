import Image from 'next/image';
import Link from 'next/link';
import type { SpanishPageContent } from '@/content/spanish/types';
import { CONTACT_EMAIL, SOCIAL_LINKS, SPANISH_YOUTUBE } from '@/lib/site';
import { SPANISH_LANGS, SPANISH_LANG_NAMES, euro, monthsOf, perMonthCents, PRICES, savingPercent, spanishPath, spanishSignupHref, type Tier } from '@/lib/spanish';
import { RevealObserver } from '@/components/RevealObserver';
import { spanishDisplay, spanishText } from '@/lib/spanish-fonts';
import { SpanishCta } from './SpanishCta';
import '@/app/spanish.css';

// Polyngual Spanish's landing page (polyngual.app/spanish and /spanish/<lang>), for Northern Europeans who live on
// the Costa del Sol (Eric, 2026-11-15). A premium, minimal design (Eric, 2026-11-17, after Emil Kowalski's
// design-engineering notes): paper and ink, hairlines instead of boxes, one dark object (the news card) and one dark
// plan (Tutor Intensive), the Spanish flag as the accent, one entrance for the hero and one per section, and a news
// card that shows how the highlights work (spanish.css has the motion). Server-rendered; the only client code is the
// tracked CTA and the reveals.

const TIERS: Tier[] = ['essential', 'intensive', 'couple'];

const pad = (n: number) => String(n).padStart(2, '0');

/** The hero title, word by word, each word rising out of its own mask. The delays shrink as the line goes on
 *  (an ease-out over 300ms), so the words arrive as one wave rather than a metronome. */
function RisingTitle({ text }: { text: string }) {
  const words = text.split(/\s+/).filter(Boolean);
  const last = Math.max(words.length - 1, 1);
  return (
    <>
      {words.map((word, i) => {
        const delay = Math.round(300 * (1 - (1 - i / last) ** 2));
        return (
          <span key={`${word}-${i}`}>
            <span className="s-word">
              <span style={{ '--wd': `${delay}ms` } as React.CSSProperties}>{word}</span>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden focusable="false" className="s-check">
      <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden focusable="false" className="s-shield">
      <path d="M12 2.5l7.5 2.8v5.9c0 4.7-3.2 8.8-7.5 10.3-4.3-1.5-7.5-5.6-7.5-10.3V5.3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.6 12.2l2.4 2.4 4.6-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

/** Numbered points (the 2027 reasons, the three steps): a hairline, a quiet number, a title and a line. */
function Points({ items, label }: { items: { title: string; body: string }[]; label: string }) {
  return (
    <ol className="s-points" aria-label={label} data-reveal>
      {items.map((item, i) => (
        <li key={item.title}>
          <span className="s-num" aria-hidden>
            {pad(i + 1)}
          </span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function SpanishPage({ t }: { t: SpanishPageContent }) {
  const { lang } = t;
  const href = (placement: string) => spanishSignupHref(lang, placement);

  return (
    <div className={`s-page ${spanishDisplay.variable} ${spanishText.variable}`}>
      <RevealObserver />

      <header className="s-top shell">
        <Link href={spanishPath(lang)} className="s-logo" aria-label="Polyngual">
          <Image src="/polyngual-wordmark-dark.png" alt="Polyngual" width={900} height={204} sizes="124px" priority />
        </Link>
        <SpanishCta href={href('header')} label={t.nav.cta} lang={lang} placement="header" className="btn s-btn-quiet" />
      </header>

      <main>
        <section className="s-hero shell" aria-labelledby="hero-title">
          {/* The flag stands in for the eyebrow line (Eric, 2026-11-17); its words stay for screen readers. */}
          <p className="s-hero-flag">
            <span className="sr-only">{t.hero.eyebrow}</span>
          </p>
          <h1 id="hero-title" className="s-hero-title" aria-label={t.hero.title}>
            <span aria-hidden>
              <RisingTitle text={t.hero.title} />
            </span>
          </h1>
          <p className="s-lede s-hero-sub">{t.hero.sub}</p>
          <div className="s-hero-actions">
            <SpanishCta href={href('hero')} label={t.hero.cta} lang={lang} placement="hero" className="btn s-btn" arrow />
            <p className="s-hero-note">{t.hero.note}</p>
          </div>
          <aside className="s-hero-guarantee" aria-label={t.guarantee.title}>
            <Shield />
            <p>
              <strong>{t.guarantee.title}.</strong> {t.guarantee.body}
            </p>
          </aside>
        </section>

        <section className="s-section shell" aria-labelledby="year-title">
          <div className="s-head" data-reveal>
            <p className="s-eyebrow">{t.year.eyebrow}</p>
            <h2 id="year-title">{t.year.title}</h2>
            <p className="s-lede">{t.year.body}</p>
          </div>
          <Points items={t.year.points} label={t.year.title} />
        </section>

        <section className="s-section shell" aria-labelledby="features-title">
          <div className="s-head" data-reveal>
            <p className="s-eyebrow">{t.features.eyebrow}</p>
            <h2 id="features-title">{t.features.title}</h2>
            <p className="s-lede">{t.features.intro}</p>
          </div>
          <ul className="s-features" data-reveal>
            {t.features.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="s-section shell s-news" aria-labelledby="news-title">
          <div className="s-news-copy" data-reveal>
            <h2 id="news-title">{t.news.title}</h2>
            <p className="s-lede">{t.news.body}</p>
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
          <div className="s-head" data-reveal>
            <h2 id="steps-title">{t.steps.title}</h2>
          </div>
          <Points items={t.steps.items} label={t.steps.title} />
        </section>

        <section className="s-section shell" id="plans" aria-labelledby="plans-title">
          <div className="s-head" data-reveal>
            <p className="s-eyebrow">{t.pricing.eyebrow}</p>
            <h2 id="plans-title">{t.pricing.title}</h2>
            <p className="s-lede">{t.pricing.intro}</p>
          </div>
          <ul className="s-plans" data-reveal>
            {TIERS.map((tier) => {
              const text = t.pricing.tiers[tier];
              const intensive = tier === 'intensive';
              const longer = monthsOf(tier).filter((months) => months > 1);
              return (
                <li key={tier} className={`s-plan${intensive ? ' s-plan-featured' : ''}`} data-tier={tier}>
                  <div className="s-plan-top">
                    <h3>{text.name}</h3>
                    {intensive ? <p className="s-plan-badge">{t.pricing.recommended}</p> : null}
                  </div>
                  <p className="s-plan-tagline">{text.tagline}</p>
                  <p className="s-plan-price">
                    <strong>{euro(PRICES[tier][1] ?? 0, lang)}</strong> <span>{t.pricing.perMonth}</span>
                  </p>
                  <ul className="s-plan-longer">
                    {longer.map((months) => (
                      <li key={months}>
                        <span className="s-plan-length">{t.pricing.durations[months]}</span>
                        <span className="s-plan-monthly">
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
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <SpanishCta
                    href={href(`plan-${tier}`)}
                    label={t.pricing.cta}
                    lang={lang}
                    placement={`plan-${tier}`}
                    className={`btn s-btn s-plan-cta${intensive ? ' s-btn-light' : ''}`}
                  />
                </li>
              );
            })}
          </ul>
          <div className="s-guarantee" data-reveal>
            <Shield />
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
          <div className="s-head" data-reveal>
            <h2 id="faq-title">{t.faq.title}</h2>
          </div>
          <div className="s-faq-list">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <span className="s-plus" aria-hidden />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="s-final shell" aria-labelledby="final-title">
          <div className="s-final-inner" data-reveal>
            <h2 id="final-title">{t.final.title}</h2>
            <p className="s-lede">{t.final.sub}</p>
            <SpanishCta href={href('final')} label={t.final.cta} lang={lang} placement="final" className="btn s-btn" arrow />
          </div>
        </section>
      </main>

      <footer className="s-footer shell">
        <div className="s-footer-brand">
          <Image src="/polyngual-wordmark-dark.png" alt="Polyngual" width={900} height={204} sizes="104px" className="s-footer-logo" />
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
              <a href={social.label === 'YouTube' ? SPANISH_YOUTUBE : social.href} rel="noopener">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="s-footer-fine">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </footer>
    </div>
  );
}
