import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CONTACT_EMAIL } from '@/lib/site';

// English privacy policy at /en/privacy. Mirrors the Spanish one at /privacidad (the brief fixes that path);
// /es/privacy simply sends people there. Keep both in sync when either changes.

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'es' }];

export const metadata: Metadata = {
  title: 'Privacy policy | Polyngual',
  description: 'What Polyngual keeps from its waitlist, why, and how to delete it.',
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
      <p className="legal-updated">Last updated: 3 October 2026</p>

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
        and does not identify people.
      </p>

      <h2>How long</h2>
      <p>Until you unsubscribe or until the waitlist is no longer needed, whichever comes first.</p>

      <h2>Unsubscribing or deleting your data</h2>
      <p>
        Every email we send includes an unsubscribe link: using it deletes your contact completely. You can also write to us
        at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to ask for access to, correction of, or deletion of your
        data. If you think we haven’t handled it properly, you can complain to the data protection authority in your country.
      </p>
    </main>
  );
}
