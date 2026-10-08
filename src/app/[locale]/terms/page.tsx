import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CONTACT_EMAIL } from '@/lib/site';

// English terms at /en/terms. Mirrors the Spanish ones at /terminos; /es/terms sends people there.
// Keep both in sync when either changes.

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'es' }];

export const metadata: Metadata = {
  title: 'Terms of use | Polyngual',
  description: 'The terms for using Polyngual, its waitlist and its free beta: what we offer, what we expect from you and what we do not promise.',
  alternates: { canonical: '/en/terms', languages: { en: '/en/terms', es: '/terminos' } },
};

export default async function TermsPageEn({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'en') redirect('/terminos');

  return (
    <main className="legal shell">
      <Link href="/en" className="legal-back">
        ← Back
      </Link>
      <h1>Terms of use</h1>
      <p className="legal-updated">Last updated: 8 October 2026</p>

      <h2>Who we are</h2>
      <p>
        Polyngual is an app for learning English by speaking and for preparing exams such as the TOEFL and the TOEIC, built
        on Voxeo&rsquo;s technology. Polyngual and Voxeo are services of 924 Fund LLC, doing business as Exito Marketing
        Agency (10055 W Dartmouth Ave, E104, Lakewood, CO 80227, USA). For any question about these terms, write to us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Using Polyngual means accepting these terms</h2>
      <p>
        These terms cover this website, the waitlist and the app (including exam practice). If you do not agree with them,
        please do not use the service. How we handle your data is explained in our{' '}
        <Link href="/en/privacy">privacy policy</Link>.
      </p>

      <h2>The beta</h2>
      <ul>
        <li>We are opening Polyngual first as a free beta for a limited number of people. When the places are full, we add you to the list for the next group.</li>
        <li>Because it is a beta, it may have bugs, change, or be unavailable for a while. Your feedback helps us improve it.</li>
        <li>The beta is free. Before we charge for anything we will tell you the price and the conditions, and you can decide whether to continue.</li>
        <li>The founder offer (50% off the annual plan for the first 200 people on the list) applies when paid plans open, for as long as you keep that plan.</li>
      </ul>

      <h2>Your account</h2>
      <ul>
        <li>Use a real email address that belongs to you, and keep your password or sign-in link safe. Your account is personal.</li>
        <li>If you are under 18, you need permission from a parent or guardian to use the app.</li>
        <li>You can stop using Polyngual at any time and ask us to delete your account.</li>
      </ul>

      <h2>What you may not do</h2>
      <ul>
        <li>Use the service for anything illegal, offensive, or that harms other people.</li>
        <li>Try to access other people&rsquo;s accounts, overload the service, or copy its content automatically.</li>
        <li>Resell, publish or share Polyngual&rsquo;s exercises, mock tests or materials without our permission.</li>
      </ul>
      <p>We may suspend an account that breaks these rules.</p>

      <h2>Official exams</h2>
      <p>
        Polyngual is not affiliated with or endorsed by ETS, Cambridge, the British Council or IDP. TOEFL and TOEIC are
        trademarks of ETS, and IELTS is a trademark of its owners. Our mock tests use the same task types as the official
        exams, but the questions are our own and the results do not predict or replace an official score.
      </p>

      <h2>Artificial intelligence and results</h2>
      <p>
        Some corrections, explanations, podcasts, stories and conversations are generated with artificial intelligence and
        may contain mistakes. We help you practise and see what you are missing, but we do not guarantee any score or
        result in any exam.
      </p>

      <h2>Your content</h2>
      <p>
        What you write or record in the app stays yours. You allow us to process it only to correct you, build your plan and
        improve the service, as the privacy policy explains.
      </p>

      <h2>Our responsibility</h2>
      <p>
        We provide the service as it is, especially during the beta. As far as the law allows, we are not liable for
        indirect damage or for decisions you make based on the app (for example, when you book your exam). None of this
        limits the rights that consumer law in your country gives you.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Colorado, USA. If a disagreement comes up, please write to us
        first so we can try to resolve it. If that is not possible, it will be settled by the competent courts of Colorado,
        unless the consumer law of your country lets you go to the courts where you live.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. If a change is important, we will tell you by email or in the app before it applies. The
        date above shows the latest version.
      </p>
    </main>
  );
}
