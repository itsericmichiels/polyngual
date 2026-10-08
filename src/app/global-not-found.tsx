import type { Metadata } from 'next';
import Link from 'next/link';
import { RootDocument } from '@/components/RootDocument';

// Every URL that matches no page (the site has two root layouts, so a regular not-found.tsx cannot
// cover them all). We cannot know the visitor's language here, so the page speaks both.
export const metadata: Metadata = {
  title: 'Página no encontrada · Page not found | Polyngual',
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="es">
      <main className="shell not-found">
        <p className="eyebrow">404</p>
        <h1>Esta página no existe.</h1>
        <p>Puede que el enlace esté mal escrito o que la página se haya movido.</p>
        <p lang="en">This page does not exist. The link may be mistyped, or the page may have moved.</p>
        <div className="not-found-actions">
          <Link href="/es" className="btn btn-primary">
            <span>Ir a Polyngual</span>
          </Link>
          <Link href="/en" className="btn btn-dark" lang="en">
            <span>Go to Polyngual in English</span>
          </Link>
        </div>
      </main>
    </RootDocument>
  );
}
