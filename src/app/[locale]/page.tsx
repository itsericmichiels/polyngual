import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DEFAULT_LOCALE, LOCALES, getDictionary, isLocale } from '@/content';
import { EXAM_NAMES, PUBLISHED_EXAMS, examPath } from '@/lib/exams';
import { CONTACT_EMAIL, SOCIAL_LINKS, appSignupHref } from '@/lib/site';
import { SpeakingDemo } from '@/components/SpeakingDemo';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ScrollToForm } from '@/components/ScrollToForm';
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

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const privacyHref = t.privacyHref;
  // Once the app is live (NEXT_PUBLIC_APP_URL), the main buttons open it; the waitlist moves to the closing section.
  const appHref = (placement: string) => appSignupHref(locale, placement);
  const appLive = appHref('nav') !== null;

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
            {appLive ? (
              <a href={appHref('nav')!} className="btn btn-ghost">
                <span>{t.app.nav}</span>
              </a>
            ) : (
              <ScrollToForm label={t.nav.cta} className="btn btn-ghost" />
            )}
          </div>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-live enter" style={{ '--e': 0 } as React.CSSProperties}>
              <span className="live-dot" aria-hidden />
              {appLive ? t.app.eyebrow : t.hero.eyebrow}
            </p>
            <SoundHeadline before={t.hero.headlineBefore} mark={t.hero.headlineMark} after={t.hero.headlineAfter} />
            <p className="hero-sub enter" style={{ '--e': 11 } as React.CSSProperties}>
              {t.hero.sub}
            </p>
            {appLive ? (
              <div className="hero-form hero-app enter" style={{ '--e': 12 } as React.CSSProperties}>
                <a href={appHref('hero')!} className="btn btn-primary">
                  <span>{t.app.cta}</span>
                </a>
                <p className="hero-app-note">
                  {t.app.note} <a href="#lista">{t.app.orList}</a>
                </p>
              </div>
            ) : (
              <div id="lista" className="hero-form enter" style={{ '--e': 12 } as React.CSSProperties}>
                <WaitlistForm copy={t.form} privacyHref={privacyHref} locale={locale} />
              </div>
            )}
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

        <section className="offer shell" aria-labelledby="offer-title">
          <div className="offer-card" data-reveal>
            <div className="offer-figure" aria-hidden>
              <span className="offer-pct">50%</span>
              <span className="offer-forever">{t.offer.forever}</span>
            </div>
            <div className="offer-copy">
              <p id="offer-title">
                <strong>{t.offer.eyebrow}:</strong> {t.offer.body}
              </p>
              <ScrollToForm label={t.offer.cta} className="btn btn-dark" />
            </div>
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
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="shell closing-inner" data-reveal>
            <Image src="/icon-g.png" alt="" width={72} height={72} className="closing-mark" />
            <h2 id="closing-title">{t.closing.title}</h2>
            <p>{t.closing.body}</p>
            {appLive ? (
              <>
                <a href={appHref('closing')!} className="btn btn-primary">
                  <span>{t.app.cta}</span>
                </a>
                <div id="lista" className="closing-form">
                  <WaitlistForm copy={t.form} privacyHref={privacyHref} locale={locale} />
                </div>
              </>
            ) : (
              <ScrollToForm label={t.closing.cta} />
            )}
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
