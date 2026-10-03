import type { ExamId, ExamLocale } from '@/lib/exams';
import type { ExamPageContent } from './types';
import { cambridgeEn } from './cambridge.en';
import { cambridgeEs } from './cambridge.es';
import { ieltsEn } from './ielts.en';
import { ieltsEs } from './ielts.es';
import { toeflEn } from './toefl.en';
import { toeflEs } from './toefl.es';
import { toeicEn } from './toeic.en';
import { toeicEs } from './toeic.es';

const CONTENT: Record<ExamId, Record<ExamLocale, ExamPageContent>> = {
  toefl: { en: toeflEn, es: toeflEs },
  toeic: { en: toeicEn, es: toeicEs },
  ielts: { en: ieltsEn, es: ieltsEs },
  cambridge: { en: cambridgeEn, es: cambridgeEs },
};

export function getExamContent(exam: ExamId, locale: ExamLocale): ExamPageContent {
  return CONTENT[exam][locale];
}
