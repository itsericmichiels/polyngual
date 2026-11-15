import { SpanishPage } from '@/components/spanish/SpanishPage';
import { getSpanishContent } from '@/content/spanish';
import { spanishMetadata } from '@/lib/spanish-page';

// polyngual.app/spanish: Polyngual Spanish in English. The other languages are /spanish/<lang>.
const t = getSpanishContent('en');

export const metadata = spanishMetadata(t);

export default function SpanishEnglishPage() {
  return <SpanishPage t={t} />;
}
