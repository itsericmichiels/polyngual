import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy policy | Polyngual',
  description: 'What data Polyngual keeps from its waitlist, why, and how to delete it.',
  alternates: { canonical: '/privacy', languages: { es: '/privacidad', en: '/privacy' } },
};

// English version of /privacidad. Same plain-language policy for the waitlist only; keep the two in step and
// review with a lawyer before collecting anything else.
export default function PrivacyPageEn() {
  return (
    <main className="legal shell" lang="en">
      <Link href="/en" className="legal-back">
        ← Back
      </Link>
      <h1>Privacy policy</h1>
      <p className="legal-updated">Last updated: 3 October 2026</p>

      <h2>Who collects your data</h2>
      <p>
        Polyngual is responsible for the data on its waitlist. You can write to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> about anything related to your data.
      </p>

      <h2>What we keep</h2>
      <ul>
        <li>Your email address.</li>
        <li>The country you signed up from, worked out from your connection (the list does not store your IP address).</li>
        <li>The date and order in which you signed up, for the founders offer.</li>
        <li>How you reached the page: the link or campaign you came from, if any.</li>
      </ul>

      <h2>What for</h2>
      <p>
        Only to run the waitlist: to confirm you are on it, tell you when we open and apply the founders offer if it applies
        to you. The legal basis is your consent, which you give by ticking the box on the form. We do not sell your data or
        share it with anyone for advertising.
      </p>

      <h2>Who we work with</h2>
      <p>
        We store the list and send emails with <strong>Resend</strong> (Resend, Inc., United States), which processes the
        data on our behalf. We organise the list in our CRM, <strong>HighLevel</strong> (HighLevel, Inc., United States). The
        website is hosted on <strong>Vercel</strong>, and we measure visits with Vercel Web Analytics, which uses no cookies
        and does not identify people.
      </p>

      <h2>For how long</h2>
      <p>Until you unsubscribe or until the waitlist no longer makes sense, whichever comes first.</p>

      <h2>Unsubscribe or delete your data</h2>
      <p>
        Every email we send includes a link to unsubscribe: using it deletes your contact completely. You can also write to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to ask for access to, correction of or deletion of your data.
        If you think we are not handling it properly, you can complain to the data protection authority in your country.
      </p>
    </main>
  );
}
