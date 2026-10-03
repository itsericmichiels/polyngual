import type { ExamId, ExamLocale } from '@/lib/exams';

export type PracticeFormat =
  | 'vocabulary-videos'
  | 'explainers'
  | 'exercises'
  | 'games'
  | 'podcasts'
  | 'stories'
  | 'tutor'
  | 'speaking';

export type GapTone = 'strong' | 'building' | 'gap';

export type ExamPageContent = {
  exam: ExamId;
  locale: ExamLocale;
  meta: { title: string; description: string; ogAlt: string };
  cta: string;
  hero: { title: string; sub: string; note: string };
  loop: {
    title: string;
    intro: string;
    steps: [string, string, string, string];
    stepDetails: [string, string, string, string];
    centreTitle: string;
    centreSub: string;
    /** Example gaps in the centre. `clearedInRound` 2 or 3 removes the item after that retest; omitted items stay. */
    gaps: { label: string; clearedInRound?: 2 | 3 }[];
    gapsLeft: string; // "{n} gaps left"
    roundLabel: string; // "Round {n}"
    returnLabel: string;
    caption: string;
    a11yLabel: string;
  };
  steps: { title: string; items: { title: string; body: string }[] };
  gapMap: {
    title: string;
    intro: string;
    exampleLabel: string;
    learner: string;
    rows: { skill: string; tone: GapTone; status: string; detail: string }[];
    next: string;
  };
  practice: {
    title: string;
    intro: string;
    fixesLabel: string;
    items: { id: PracticeFormat; name: string; what: string; fixes: string }[];
  };
  compare: {
    title: string;
    left: { title: string; points: string[] };
    right: { title: string; points: string[] };
  };
  examFacts: {
    title: string;
    intro: string;
    headers: { section: string; tasks: string; time: string; polyngual: string };
    rows: { section: string; tasks: string; time: string; polyngual: string }[];
    scoring: string;
    source: string;
  };
  /** A choice the visitor makes before the table: IELTS Academic vs General Training, Cambridge B2 vs C1. */
  variants?: {
    title: string;
    intro: string;
    options: { id: string; label: string; who: string; points: string[]; cta: string }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { title: string; body: string };
  footer: {
    examPrep: string;
    privacy: string;
    disclaimer: string;
    rights: string;
    langSwitch: string;
  };
  practiceNames: Record<PracticeFormat, string>;
};
