import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExamPage } from '@/components/exam/ExamPage';
import { getExamContent } from '@/content/exams';
import { PUBLISHED_EXAMS, examFromSpanishSlug } from '@/lib/exams';
import { examJsonLd, examMetadata } from '@/lib/exam-page';

// The Spanish exam pages: /es/preparacion-toefl and its siblings.
type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => PUBLISHED_EXAMS.map((exam) => ({ locale: 'es', slug: `preparacion-${exam}` }));

const resolve = (locale: string, slug: string) => (locale === 'es' ? examFromSpanishSlug(slug) : null);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const exam = resolve(locale, slug);
  return exam ? examMetadata(getExamContent(exam, 'es')) : {};
}

export default async function SpanishExamPage({ params }: Props) {
  const { locale, slug } = await params;
  const exam = resolve(locale, slug);
  if (!exam) notFound();
  const t = getExamContent(exam, 'es');
  return <ExamPage t={t} jsonLd={examJsonLd(t)} />;
}
