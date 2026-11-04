import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEFAULT_LOCALE, LOCALES, getDictionary, isLocale } from '@/content';
import { EXAM_NAMES, PUBLISHED_EXAMS, examPath } from '@/lib/exams';
import { CONTACT_EMAIL, SOCIAL_LINKS, pathHref, siteUrl } from '@/lib/site';
import type { Dictionary } from '@/content/es';
import { SpeakingDemo } from '@/components/SpeakingDemo';
import { PathLink } from '@/components/PathLink';
import { ContentStudio } from '@/components/ContentStudio';
import { RevealObserver } from '@/components/RevealObserver';
import { BenefitVisual } from '@/components/BenefitVisual';
import { WordGame } from '@/components/WordGame';
import { SoundHeadline } from '@/components/SoundHeadline';

type Props = { params: Promise<{ locale: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])), 'x-default': `/${DEFAULT_LOCALE}` },
    },
    openGraph: {
      type: 'website',
      locale: getDictionary(locale).ogLocale,
      url: `/${locale}`,
      siteName: 'Polyngual',
      title: meta.title,
      description: meta.description,
      images: [{ url: getDictionary(locale).ogImage, width: 1200, height: 630, alt: 'Polyngual' }],
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: [getDictionary(locale).ogImage] },
  };
}

function Arrow() {
  return (
    <svg className="door-arrow" viewBox="0 0 20 20" aria-hidden>
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

/** The short list of the three products: in the hero, and again at the end of the page. */
function Doors({ t, locale, placement }: { t: Dictionary; locale: string; placement: string }) {
  return (
    <ul className="doors">
      {t.paths.items.map((item) => (
        <li key={item.id}>
          <PathLink href={pathHref(item.id, locale, placement, t.paths.businessEmail)} path={item.id} placement={placement} locale={locale} className={`door door-${item.id}`}>
            <span className="door-dot" aria-hidden />
            <span className="door-text">
              <span className="door-title">{item.door.title}</span>
              <span className="door-detail">{item.door.detail}</span>
            </span>
            <Arrow />
          </PathLink>
        </li>
      ))}
    </ul>
  );
}

// Polyngual's front door. The brand first, then a way into each product: exam prep (polyngual.app/examen),
// Business (by invitation) and Spanish (the learning app). The waitlist and the founder offer are gone from here:
// the products are open, and the offer stays in the terms for the people who signed up for it.
export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const privacyHref = t.privacyHref;

  return (
    <>
      <RevealObserver />
      <header className="hero">
        <div className="grain" aria-hidden />
        <nav className="nav shell">
          <Link href={`/${locale}`} className="nav-logo" aria-label="Polyngual">
            <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} priority />
          </Link>
          <div className="nav-actions">
            <Link href={t.switcher.href} hrefLang={t.switcher.hrefLang} className="nav-lang" aria-label={t.switcher.name} title={t.switcher.name}>
              {t.switcher.label}
            </Link>
            <a href="#cursos" className="btn btn-ghost">
              <span>{t.nav.cta}</span>
            </a>
          </div>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow enter" style={{ '--e': 0 } as React.CSSProperties}>
              {t.hero.eyebrow}
            </p>
            <SoundHeadline before={t.hero.headlineBefore} mark={t.hero.headlineMark} after={t.hero.headlineAfter} />
            <p className="hero-sub enter" style={{ '--e': 11 } as React.CSSProperties}>
              {t.hero.sub}
            </p>
            <nav className="hero-doors enter" style={{ '--e': 12 } as React.CSSProperties} aria-labelledby="doors-label">
              <p id="doors-label" className="doors-label">
                {t.paths.label}
              </p>
              <Doors t={t} locale={locale} placement="hero" />
            </nav>
          </div>
          <div className="hero-demo enter" style={{ '--e': 8 } as React.CSSProperties}>
            <SpeakingDemo copy={t.demo} />
          </div>
        </div>

        <svg className="hero-edge" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0 0 Q720 150 1440 0 V120 H0 Z" />
        </svg>
      </header>

      <main>
        <section id="cursos" className="paths shell" aria-labelledby="paths-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.paths.eyebrow}</p>
            <h2 id="paths-title">{t.paths.title}</h2>
            <p className="section-sub section-sub-light">{t.paths.sub}</p>
          </div>
          <div className="path-list">
            {t.paths.items.map((item, i) => (
              <article key={item.id} id={item.id} className={`path path-${item.id}`} data-reveal style={{ '--r': i } as React.CSSProperties}>
                <p className="path-kicker">
                  <span className="door-dot" aria-hidden />
                  {item.kicker}
                </p>
                <h3>{item.title}</h3>
                <p className="path-body">{item.body}</p>
                <ul className="path-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="path-action">
                  <PathLink href={pathHref(item.id, locale, 'paths', t.paths.businessEmail)} path={item.id} placement="paths" locale={locale} className="btn btn-dark">
                    <span>{item.cta}</span>
                  </PathLink>
                  <p className="path-note">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits shell" aria-labelledby="benefits-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.benefits.eyebrow}</p>
            <h2 id="benefits-title">{t.benefits.title}</h2>
          </div>
          <ol className="benefit-list">
            {t.benefits.items.map((item, i) => (
              <li key={item.title} className="benefit" data-reveal>
                <span className="benefit-num" aria-hidden>
                  0{i + 1}
                </span>
                <div className="benefit-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <BenefitVisual kind={i} copy={t.visuals} />
              </li>
            ))}
          </ol>
        </section>

        <section className="games shell" aria-labelledby="games-title">
          <div className="games-copy" data-reveal>
            <p className="eyebrow">{t.games.eyebrow}</p>
            <h2 id="games-title">{t.games.title}</h2>
            <p className="games-sub">{t.games.sub}</p>
            <ul className="games-points">
              {t.games.points.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}.</strong> {point.body}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ '--r': 1 } as React.CSSProperties}>
            <WordGame copy={t.games.game} />
          </div>
        </section>

        <section className="content-section" aria-labelledby="studio-title">
          <div className="shell">
            <div className="section-head section-head-dark" data-reveal>
              <p className="eyebrow">{t.studio.eyebrow}</p>
              <h2 id="studio-title">{t.studio.title}</h2>
              <p className="section-sub">{t.studio.sub}</p>
            </div>
            <div data-reveal>
              <ContentStudio copy={t.studio} />
            </div>
            <ul className="library">
              {t.studio.library.map((item, i) => (
                <li key={item.kind} data-reveal style={{ '--r': i % 2 } as React.CSSProperties}>
                  <span className="library-kind">{item.kind}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-faq shell" aria-labelledby="faq-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2 id="faq-title">{t.faq.title}</h2>
          </div>
          <div className="home-faq-list" data-reveal>
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                inLanguage: locale,
                mainEntity: t.faq.items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
              }).replace(/</g, '\\u003c'),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Polyngual',
                url: siteUrl(),
                logo: `${siteUrl()}/icon-g.png`,
                email: CONTACT_EMAIL,
                sameAs: SOCIAL_LINKS.map((link) => link.href),
              }).replace(/</g, '\\u003c'),
            }}
          />
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="shell closing-inner" data-reveal>
            <Image src="/icon-g.png" alt="" width={72} height={72} className="closing-mark" />
            <h2 id="closing-title">{t.closing.title}</h2>
            <p>{t.closing.body}</p>
            <div className="closing-doors">
              <Doors t={t} locale={locale} placement="closing" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} className="footer-logo" />
          <ul className="footer-links">
            <li>
              <Link href={privacyHref}>{t.footer.privacy}</Link>
            </li>
            <li>
              <Link href={t.termsHref}>{t.footer.terms}</Link>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            {/* Exam prep: the standalone exam pages are linked here rather than in the navigation. */}
            {PUBLISHED_EXAMS.map((exam) => (
              <li key={exam}>
                <Link href={examPath(exam, locale)}>{t.footer.examPrep.replace('{exam}', EXAM_NAMES[exam])}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer-social" aria-label={t.footer.social}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} rel="noopener" target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-fine">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
