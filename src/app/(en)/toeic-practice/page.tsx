import { ExamPage } from '@/components/exam/ExamPage';
import { getExamContent } from '@/content/exams';
import { examJsonLd, examMetadata } from '@/lib/exam-page';

const t = getExamContent('toeic', 'en');

export const metadata = examMetadata(t);

export default function ToeicPracticePage() {
  return <ExamPage t={t} jsonLd={examJsonLd(t)} />;
}
