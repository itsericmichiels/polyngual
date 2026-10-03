import { RootDocument, rootMetadata, rootViewport } from '@/components/RootDocument';

// Root layout for the Spanish-only pages that keep their brief-mandated paths (/privacidad, /baja).
export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function SpanishPagesLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
