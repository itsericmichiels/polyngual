import { getExamContent } from '@/content/exams';
import { PUBLISHED_EXAMS, examFromSpanishSlug } from '@/lib/exams';
import { LoopOgImage, OG_SIZE } from '@/lib/og-loop';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Polyngual';

export const generateStaticParams = () => PUBLISHED_EXAMS.map((exam) => ({ locale: 'es', slug: `preparacion-${exam}` }));

export default async function Image({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const exam = examFromSpanishSlug(slug) ?? 'toefl';
  return LoopOgImage(getExamContent(exam, 'es'));
}
