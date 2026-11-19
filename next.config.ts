import type { NextConfig } from 'next';

// polyngual.app/examen is the TOEFL / TOEIC exam-prep product. It lives in the Voxeo app
// (repo exitohire-ai, which brands it Polyngual) and is served here through Next.js multi-zones:
// these paths are forwarded to that app, so learners only ever see polyngual.app. That app loads
// its build and public files under /examen-static so they never collide with this site's /_next.
// EXAM_APP_ORIGIN points at it: its production address by default; a Vercel preview of this site
// can point at a preview of that app to test both together.
const examOrigin = (process.env.EXAM_APP_ORIGIN ?? 'https://exitohire-ai.vercel.app').replace(/\/+$/, '');

const EXAM_ZONE = ['/examen', '/examen/:path*', '/api/examen/:path*', '/examen-static/:path*'];

// The learning app (learn.polyngual.app), where the influencer program lives: its links, its application page and the
// influencers' dashboard (repo exitohire-ai, docs/polyngual/partners.md). Same variable as the site's sign-up buttons.
const learnOrigin = (process.env.NEXT_PUBLIC_APP_URL?.trim() || 'https://learn.polyngual.app').replace(/\/+$/, '');

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // app/global-not-found.tsx: one 404 page for every unmatched URL across both root layouts.
  // The exam zone never reaches it: its paths are rewritten before any page is matched.
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      { source: '/', destination: '/es', permanent: false },
      // The short address for the TOEFL iBT signup page in the exam app (Eric, 2026-10-27); any
      // ?g= tag goes along.
      { source: '/toefl', destination: '/examen/toefl', permanent: false },
      // The short address for the TOEFL ITP practice tests (Eric, 2026-11-03): the exam app opens
      // them for learners with an ITP place and shows everyone else the ITP signup page
      // (/examen/itp/beta); any ?g= tag goes along.
      { source: '/itp', destination: '/examen/itp', permanent: false },
      // Polyngual Spanish (Eric, 2026-11-15): English lives at /spanish itself; short aliases for social bios.
      { source: '/spanish/en', destination: '/spanish', permanent: true },
      { source: '/espanol', destination: '/spanish', permanent: false },
      { source: '/spanisch', destination: '/spanish/de', permanent: false },
      { source: '/spansk', destination: '/spanish/da', permanent: false },
      { source: '/spanska', destination: '/spanish/sv', permanent: false },
      { source: '/spaans', destination: '/spanish/nl', permanent: false },
      { source: '/espanja', destination: '/spanish/fi', permanent: false },
      // Polyngual's influencer program (Eric, 2026-11-19): short polyngual.app addresses for the pages in the learning
      // app. /r/<code> is an influencer's link: the app counts the visit, remembers the influencer on every
      // polyngual.app site (a .polyngual.app cookie) and opens the sign-up page. /partners is where influencers apply,
      // /socios the same in Spanish, and /partners/dashboard where partners sign in. Any query string goes along.
      { source: '/r/:code', destination: `${learnOrigin}/r/:code`, permanent: false },
      { source: '/partners', destination: `${learnOrigin}/socios/unirse`, permanent: false },
      { source: '/partners/dashboard', destination: `${learnOrigin}/socios`, permanent: false },
      { source: '/socios', destination: `${learnOrigin}/socios/unirse?lang=es`, permanent: false },
    ];
  },
  async rewrites() {
    return {
      // beforeFiles: ahead of this site's pages, so /examen is not taken for a [locale].
      beforeFiles: EXAM_ZONE.map((source) => ({ source, destination: `${examOrigin}${source}` })),
    };
  },
};

export default nextConfig;
