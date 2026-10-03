import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALES, getDictionary, isLocale } from '@/content';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/site';
import { EXAM_NAMES, PUBLISHED_EXAMS, examPath } from '@/lib/exams';
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
      languages: { ...Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])), 'x-default': '/es' },
    },
    openGraph: {
      type: 'website',
      locale: getDictionary(locale).ogLocale,
      url: `/${locale}`,
      siteName: 'Polyngual',
      title: meta.title,
      description: meta.description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Polyngual' }],
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: ['/og.png'] },
  };
}

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const privacyHref = t.privacyHref;

  // The root <html> is Spanish; the English page marks its own language here.
  return (
    <div lang={locale}>
      <RevealObserver />
      <header className="hero">
        <div className="grain" aria-hidden />
        <nav className="nav shell">
          <Link href={`/${locale}`} className="nav-logo" aria-label="Polyngual">
            <Image src="/polyngual-wordmark.png" alt="Polyngual" width={900} height={204} priority />
          </Link>
          <ScrollToForm label={t.nav.cta} className="btn btn-ghost" />
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-live enter" style={{ '--e': 0 } as React.CSSProperties}>
              <span className="live-dot" aria-hidden />
              {t.hero.eyebrow}
            </p>
            <SoundHeadline before={t.hero.headlineBefore} mark={t.hero.headlineMark} after={t.hero.headlineAfter} />
            <p className="hero-sub enter" style={{ '--e': 11 } as React.CSSProperties}>
              {t.hero.sub}
            </p>
            <div id="lista" className="hero-form enter" style={{ '--e': 12 } as React.CSSProperties}>
              <WaitlistForm copy={t.form} privacyHref={privacyHref} locale={locale} />
            </div>
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
                <BenefitVisual kind={i} copy={t.benefits.visuals} />
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

        <section className="closing" aria-labelledby="closing-title">
          <div className="shell closing-inner" data-reveal>
            <Image src="/icon-g.png" alt="" width={72} height={72} className="closing-mark" />
            <h2 id="closing-title">{t.closing.title}</h2>
            <p>{t.closing.body}</p>
            <ScrollToForm label={t.closing.cta} />
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
            {/* Exam prep: the standalone exam pages are linked here rather than in the navigation. */}
            {PUBLISHED_EXAMS.map((exam) => (
              <li key={exam}>
                <Link href={examPath(exam, locale)}>{t.footer.examPrep.replace('{exam}', EXAM_NAMES[exam])}</Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
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
    </div>
  );
}
