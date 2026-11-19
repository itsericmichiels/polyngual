'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONSENT_EVENT, GA4_ID, GTM_ID, googleTagsConfigured, readConsent, writeConsent, type Consent } from '@/lib/analytics';

// Google Tag Manager and Google Analytics 4, set by NEXT_PUBLIC_GTM_ID and NEXT_PUBLIC_GA4_ID.
// Neither loads until the visitor accepts the cookie notice (GDPR: most visitors are in Spain
// and the EU). With neither ID set, nothing renders: no notice, no scripts.

const COPY = {
  es: {
    text: '¿Nos dejas usar cookies de Google Analytics para saber cómo se usa la web? Solo medimos visitas, nada de publicidad.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    privacy: 'Privacidad',
    privacyHref: '/privacidad',
    reopen: 'Cookies',
  },
  en: {
    text: 'May we use Google Analytics cookies to see how the site is used? We only measure visits, no advertising.',
    accept: 'Accept',
    decline: 'Decline',
    privacy: 'Privacy',
    privacyHref: '/en/privacy',
    reopen: 'Cookies',
  },
  // The Spanish page's other languages (Eric, 2026-11-19): the notice was English on every one of them. The privacy
  // policy is in English and Spanish only, so they link the English one.
  de: {
    text: 'Dürfen wir Cookies von Google Analytics verwenden, um zu sehen, wie die Website genutzt wird? Wir messen nur Besuche, keine Werbung.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    privacy: 'Datenschutz',
    privacyHref: '/en/privacy',
    reopen: 'Cookies',
  },
  da: {
    text: 'Må vi bruge cookies fra Google Analytics til at se, hvordan siden bliver brugt? Vi måler kun besøg, ingen reklamer.',
    accept: 'Accepter',
    decline: 'Afvis',
    privacy: 'Privatliv',
    privacyHref: '/en/privacy',
    reopen: 'Cookies',
  },
  sv: {
    text: 'Får vi använda cookies från Google Analytics för att se hur webbplatsen används? Vi mäter bara besök, ingen reklam.',
    accept: 'Godkänn',
    decline: 'Avböj',
    privacy: 'Integritet',
    privacyHref: '/en/privacy',
    reopen: 'Cookies',
  },
  nb: {
    text: 'Kan vi bruke informasjonskapsler fra Google Analytics for å se hvordan nettstedet brukes? Vi måler bare besøk, ingen reklame.',
    accept: 'Godta',
    decline: 'Avslå',
    privacy: 'Personvern',
    privacyHref: '/en/privacy',
    reopen: 'Cookies',
  },
  nl: {
    text: 'Mogen we cookies van Google Analytics gebruiken om te zien hoe de site wordt gebruikt? We meten alleen bezoeken, geen advertenties.',
    accept: 'Accepteren',
    decline: 'Weigeren',
    privacy: 'Privacy',
    privacyHref: '/en/privacy',
    reopen: 'Cookies',
  },
  fi: {
    text: 'Saammeko käyttää Google Analyticsin evästeitä nähdäksemme, miten sivustoa käytetään? Mittaamme vain käyntejä, emme näytä mainoksia.',
    accept: 'Hyväksy',
    decline: 'Hylkää',
    privacy: 'Tietosuoja',
    privacyHref: '/en/privacy',
    reopen: 'Evästeet',
  },
} as const;

type NoticeLang = keyof typeof COPY;
const noticeLang = (lang: string): NoticeLang => {
  const base = lang.toLowerCase().split('-')[0];
  return base in COPY ? (base as NoticeLang) : 'en';
};

export function GoogleTags({ lang }: { lang: string }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setOpen(stored === null);
    setReady(true);
    const onChange = (event: Event) => setConsent((event as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!googleTagsConfigured() || !ready) return null;
  const t = COPY[noticeLang(lang)];
  const choose = (value: Consent) => {
    writeConsent(value);
    setOpen(false);
  };

  return (
    <>
      {consent === 'accepted' && GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(GTM_ID)});`}
        </Script>
      )}
      {consent === 'accepted' && GA4_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(GA4_ID)});`}
          </Script>
        </>
      )}
      {open ? (
        <aside className="cookie-notice" aria-label={t.reopen}>
          <p>
            {t.text} <a href={t.privacyHref}>{t.privacy}</a>
          </p>
          <div className="cookie-actions">
            <button type="button" className="btn btn-primary" onClick={() => choose('accepted')}>{t.accept}</button>
            <button type="button" className="btn btn-ghost" onClick={() => choose('declined')}>{t.decline}</button>
          </div>
        </aside>
      ) : (
        <button type="button" className="cookie-reopen" onClick={() => setOpen(true)}>{t.reopen}</button>
      )}
    </>
  );
}
