import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // app/global-not-found.tsx: one 404 page for every unmatched URL across both root layouts.
  experimental: { globalNotFound: true },
  async redirects() {
    return [{ source: '/', destination: '/es', permanent: false }];
  },
};

export default nextConfig;
