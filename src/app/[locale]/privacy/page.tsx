import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CONTACT_EMAIL } from '@/lib/site';

// English privacy policy at /en/privacy. Mirrors the Spanish one at /privacidad (the brief fixes that path);
// /es/privacy simply sends people there. Keep both in sync when either changes.

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'es' }];

export const metadata: Metadata = {
  title: 'Privacy policy | Polyngual',
  description: 'What Polyngual keeps from its waitlist, its learning app and its TOEFL and TOEIC prep, why, and how to delete it.',
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
      <p className="legal-updated">Last updated: 11 October 2026</p>

      <h2>Who collects your data</h2>
      <p>
        Polyngual is a service of 924 Fund LLC, doing business as Exito Marketing Agency (10055 W Dartmouth Ave, E104,
        Lakewood, CO 80227, USA), which is responsible for your data. Polyngual is powered by Voxeo&rsquo;s technology. You can write to us at{' '}
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

      <h2>TOEFL and TOEIC prep (polyngual.app/examen)</h2>
      <p>When you sign up for the beta or create an account to prepare an exam, we keep:</p>
      <ul>
        <li>
          Your account: your email and a password, or your Google sign-in (from Google we only receive your name, email and
          profile picture).
        </li>
        <li>
          Your beta signup: the exam (TOEFL or TOEIC), your place or your spot on the waiting list, your native language,
          the month of your exam if you tell us, the language of the page and the group link you came from.
        </li>
        <li>
          Your practice: your exam date, your answers, your practice tests and scores, the words and areas you miss, your
          writing and speaking tasks with their score and feedback, and the short explainers we prepare for you.
        </li>
        <li>
          Your voice in speaking tasks. We send the recording to <strong>Microsoft Azure AI Speech</strong> to transcribe
          and score it, and <strong>we don&rsquo;t keep the recording</strong>. We keep the transcript and the result.
        </li>
        <li>
          What you send us with &ldquo;Something wrong?&rdquo;: your message, the page and the question you were on, the
          answer you chose and your browser type.
        </li>
        <li>
          If you choose to: your nickname and the tips you share in the community (we review them before they appear), and
          your real exam result if you tell us, with your permission before we quote it.
        </li>
      </ul>
      <p>
        We use this only to prepare you for your exam and to improve the product. Writing tasks and speaking transcripts are
        corrected with an AI model from <strong>OpenAI</strong>, which receives the text, not the audio, and does not use it
        to train its models. The data is stored with <strong>Supabase</strong>, the site is hosted on <strong>Vercel</strong>{' '}
        and emails are sent with <strong>Resend</strong>. If payments open after the beta, they are handled by{' '}
        <strong>Stripe</strong>; we never see your card.
      </p>
      <p>
        We send you the emails your account needs (confirm it, sign in, reset your password), a welcome when you get a beta
        place, and a few emails around your exam date (before, on the day and to ask how it went), which you can stop with
        the link in each one. The legal basis is the contract you accept when you sign up; we don&rsquo;t sell your data or
        use it for advertising.
      </p>
      <p>
        We keep your account while you use it. If you don&rsquo;t use Polyngual for 6 months (and any access you had has
        ended), we email you at least 14 days before and then delete your practice data, community posts and reports. If you
        join the waiting list without an account, we delete that entry after 6 months without changes. You can ask us to
        delete your account and everything in it at any time.
      </p>

      <h2>Content made with artificial intelligence</h2>
      <p>
        Part of Polyngual&rsquo;s content is generated with the help of artificial intelligence:
        practice questions and passages, explanations, example sentences, podcasts and stories, and the voices in listening
        exercises, which are synthetic, not real people. Corrections of your writing and speaking, and the speaking tutor,
        are also produced by AI in real time. We label it this way so you always know when you are dealing with AI, as
        European law requires. AI can make mistakes: if you spot one, press &ldquo;Something wrong?&rdquo;.
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
