import { RootDocument, rootMetadata, rootViewport } from '@/components/RootDocument';

// Root layout for the English exam pages that keep their brief-mandated paths (/toefl-practice and so on).
export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function EnglishPagesLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
