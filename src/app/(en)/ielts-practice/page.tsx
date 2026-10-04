import { ExamPage } from '@/components/exam/ExamPage';
import { getExamContent } from '@/content/exams';
import { examJsonLd, examMetadata } from '@/lib/exam-page';

const t = getExamContent('ielts', 'en');

export const metadata = examMetadata(t);

export default function IeltsPracticePage() {
  return <ExamPage t={t} jsonLd={examJsonLd(t)} />;
}
