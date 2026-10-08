import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CONTACT_EMAIL } from '@/lib/site';

// English privacy policy at /en/privacy. Mirrors the Spanish one at /privacidad (the brief fixes that path);
// /es/privacy simply sends people there. Keep both in sync when either changes.

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'es' }];

export const metadata: Metadata = {
  title: 'Privacy policy | Polyngual',
  description: 'What Polyngual keeps from its waitlist and its learning app, why, and how to delete it.',
  alternates: { canonical: '/en/privacy', languages: { en: '/en/privacy', es: '/privacidad' } },
};

export default async function PrivacyPageEn({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') redirect('/privacidad');

  return (
    <main className="legal shell">
      <Link href="/en" className="legal-back">
        ← Back
      </Link>
      <h1>Privacy policy</h1>
      <p className="legal-updated">Last updated: 6 October 2026</p>

      <h2>Who collects your data</h2>
      <p>
        Polyngual is responsible for the data on its waitlist. You can write to us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> about anything related to your data.
      </p>

      <h2>What we keep</h2>
      <ul>
        <li>Your email address.</li>
        <li>The country you signed up from, worked out from your connection (the list does not store your IP address).</li>
        <li>The date and order in which you signed up, for the founder offer.</li>
        <li>How you reached the page: the link or campaign you came from, if any.</li>
        <li>The language of the page you signed up on, so we write to you in it.</li>
      </ul>

      <h2>What for</h2>
      <p>
        Only to run the waitlist: confirm you’re on it, tell you when we open, and apply the founder offer if it applies to
        you. The legal basis is your consent, which you give by ticking the box on the form. We don’t sell or share your data
        with anyone for advertising.
      </p>

      <h2>Who we work with</h2>
      <p>
        We store the list and send emails with <strong>Resend</strong> (Resend, Inc., United States), which processes the
        data on our behalf. We organise the list in our CRM, <strong>HighLevel</strong> (HighLevel, Inc., United States). The
        website is hosted on <strong>Vercel</strong>, and we measure visits with Vercel Web Analytics, which uses no cookies
        and does not identify people. Only if you accept in the cookie notice, we also use <strong>Google Analytics</strong>{' '}
        and <strong>Google Tag Manager</strong> (Google Ireland Ltd.), which set cookies to measure visits and which buttons
        are clicked. We do not use them for advertising. You can change your choice at any time with the “Cookies” button in
        the bottom corner.
      </p>

      <h2>How long</h2>
      <p>Until you unsubscribe or until the waitlist is no longer needed, whichever comes first.</p>

      <h2>The learning app (learn.polyngual.app)</h2>
      <p>When you create an account to learn with Polyngual, we also keep what the app needs to teach you:</p>
      <ul>
        <li>Your email address, the name you want us to use, and the language you use the app in.</li>
        <li>
          Your answers when you start: why you’re learning, your exam and its date if you have one, your level check, the
          minutes a day you chose and the time you want a reminder, with your time zone.
        </li>
        <li>What you practise and how it goes: your answers to exercises, the words you’re learning, your scores and your progress.</li>
        <li>
          Your voice when you do a speaking exercise. To score your pronunciation we send the recording to{' '}
          <strong>Microsoft Azure AI Speech</strong>, which returns the score; we don’t keep that recording. If you record
          your name on your profile, we keep it until you delete it.
        </li>
        <li>
          Your conversations with the speaking tutor, which runs on <strong>Google</strong>’s AI (Gemini). The tutor hears
          what you say during the conversation to answer you.
        </li>
        <li>How you use the app (which pages you open and what you do), to improve it. No advertising cookies.</li>
      </ul>
      <p>
        We use all this only to run your course: your plan, your level, your progress, and the emails about your learning
        (a welcome, a daily reminder at the time you chose, a few messages if you stop practising, and a weekly summary).
        Every one of those emails has a link to stop them. The legal basis is the contract you accept by creating your
        account; we don’t sell your data or use it for advertising.
      </p>
      <p>
        The app’s data is stored with <strong>Supabase</strong>, the app is hosted on <strong>Vercel</strong>, and its
        emails are sent with <strong>Resend</strong>. We keep your account while you use it; ask us to delete it and we
        delete it with everything in it.
      </p>

      <h2>Unsubscribing or deleting your data</h2>
      <p>
        Every email we send includes an unsubscribe link: using it deletes your contact completely. You can also write to us
        at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to ask for access to, correction of, or deletion of your
        data. If you think we haven’t handled it properly, you can complain to the data protection authority in your country.
      </p>
    </main>
  );
}
