import type { NextConfig } from 'next';

// polyngual.app/examen is the TOEFL / TOEIC exam-prep product. It lives in the Voxeo app
// (repo exitohire-ai, which brands it Polyngual) and is served here through Next.js multi-zones:
// these paths are forwarded to that app, so learners only ever see polyngual.app. That app loads
// its build and public files under /examen-static so they never collide with this site's /_next.
// EXAM_APP_ORIGIN points at it: its production address by default; a Vercel preview of this site
// can point at a preview of that app to test both together.
const examOrigin = (process.env.EXAM_APP_ORIGIN ?? 'https://exitohire-ai.vercel.app').replace(/\/+$/, '');

const EXAM_ZONE = ['/examen', '/examen/:path*', '/api/examen/:path*', '/examen-static/:path*'];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // app/global-not-found.tsx: one 404 page for every unmatched URL across both root layouts.
  // The exam zone never reaches it: its paths are rewritten before any page is matched.
  experimental: { globalNotFound: true },
  async redirects() {
    return [{ source: '/', destination: '/es', permanent: false }];
  },
  async rewrites() {
    return {
      // beforeFiles: ahead of this site's pages, so /examen is not taken for a [locale].
      beforeFiles: EXAM_ZONE.map((source) => ({ source, destination: `${examOrigin}${source}` })),
    };
  },
};

export default nextConfig;
