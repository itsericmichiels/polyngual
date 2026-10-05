// The standalone exam landing pages: which exist, where they live, and where their CTA goes.
// A page is linked from footers, cross-links and the sitemap only once it is listed in PUBLISHED_EXAMS.

export const EXAMS = ['toefl', 'toeic', 'ielts', 'cambridge'] as const;
export type ExamId = (typeof EXAMS)[number];
export type ExamLocale = 'en' | 'es';

export const EXAM_NAMES: Record<ExamId, string> = {
  toefl: 'TOEFL',
  toeic: 'TOEIC',
  ielts: 'IELTS',
  cambridge: 'Cambridge',
};

// Add an exam here once its EN and ES content files exist.
export const PUBLISHED_EXAMS: readonly ExamId[] = ['toefl', 'toeic', 'ielts', 'cambridge'];

export const examPath = (exam: ExamId, locale: ExamLocale) =>
  locale === 'en' ? `/${exam}-practice` : `/es/preparacion-${exam}`;

export const examFromSpanishSlug = (slug: string): ExamId | null => {
  const exam = slug.replace(/^preparacion-/, '');
  return (PUBLISHED_EXAMS as readonly string[]).includes(exam) && slug.startsWith('preparacion-') ? (exam as ExamId) : null;
};

export const examAlternates = (exam: ExamId) => ({
  en: examPath(exam, 'en'),
  es: examPath(exam, 'es'),
  'x-default': examPath(exam, 'en'),
});

// Where "Take the free mock test" goes. The exam and language travel as query parameters so signup can
// open that exam's mock test and attribute the signup to this page. Until the Polyngual app is live
// (NEXT_PUBLIC_MOCK_TEST_URL unset) the button lands on the waitlist form in the page's language, whose
// saved landing URL keeps the same parameters.
export function mockTestHref(exam: ExamId, locale: ExamLocale) {
  const target = process.env.NEXT_PUBLIC_MOCK_TEST_URL;
  const url = new URL(target || `/${locale}#lista`, 'https://polyngual.invalid');
  url.searchParams.set('exam', exam);
  url.searchParams.set('lang', locale);
  url.searchParams.set('utm_source', 'polyngual');
  url.searchParams.set('utm_medium', 'exam_page');
  url.searchParams.set('utm_campaign', `${exam}-practice-${locale}`);
  return url.origin === 'https://polyngual.invalid' ? `${url.pathname}${url.search}${url.hash}` : url.toString();
}
