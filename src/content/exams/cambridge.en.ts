import type { ExamPageContent } from './types';

// B2 First and C1 Advanced facts checked against cambridgeenglish.org on 2026-10-03.
// The Spanish page (cambridge.es.ts) is the priority version of this page.

export const cambridgeEn: ExamPageContent = {
  exam: 'cambridge',
  locale: 'en',
  meta: {
    title: 'Cambridge B2 First & C1 Practice Test | Polyngual',
    description:
      'Take a free B2 First or C1 Advanced practice test, see exactly what you miss in Use of English, and practise only that until your retest confirms it.',
    ogAlt: 'The Polyngual loop for Cambridge exams: mock test, results, practice on your gaps, retest.',
  },
  cta: 'Take the free Cambridge mock test',
  hero: {
    title: 'Stop studying what you already know. Practise only what your Cambridge mock test says you are missing.',
    sub: 'Whether you need B2 or C1 for university, a public sector job or Erasmus, you do not need to cover the whole coursebook again, only what you are missing. Take a free B2 First or C1 Advanced mock test, see exactly what you got wrong, and practise only that.',
    note: 'B2 First or C1 Advanced. Choose your level below.',
  },
  loop: {
    title: 'How your Cambridge plan works',
    intro:
      'Most exam classes follow one coursebook from start to finish. Polyngual puts what you got wrong in the middle, especially in Use of English, and works on it until a retest shows you have it.',
    steps: ['Mock test', 'Your results', 'Practice built on your gaps', 'Retest'],
    stepDetails: [
      'Reading and Use of English, Writing, Listening and Speaking, in the Cambridge format.',
      'What you got right and what you missed, paper by paper.',
      'Every format below works on the same list.',
      'A shorter test on your gaps. What you fixed leaves the list.',
    ],
    centreTitle: 'Your gaps',
    centreSub: 'Example list',
    gaps: [
      { label: 'Phrasal verbs with “get”', clearedInRound: 2 },
      { label: 'Word formation: suffixes', clearedInRound: 3 },
      { label: 'Passive in key word transformations', clearedInRound: 2 },
      { label: 'Collocations with “make” and “do”', clearedInRound: 3 },
      { label: 'Linking words in the essay' },
      { label: 'Comparing photos (Part 2)' },
    ],
    gapsLeft: '{n} gaps left',
    roundLabel: 'Round {n}',
    returnLabel: 'Gaps shrink each round',
    caption: 'Everything revolves around what you don’t know yet. Not a course for everyone. A plan for you.',
    a11yLabel: 'The Polyngual practice loop for Cambridge exams, step by step',
  },
  steps: {
    title: 'From Cambridge mock test to your certificate in 3 steps',
    items: [
      {
        title: 'Take a B2 First or C1 Advanced mock test',
        body: 'Choose your level and take all four papers: Reading and Use of English, Writing, Listening and Speaking.',
      },
      {
        title: 'See your gap map',
        body: 'You do not just get a mark. You see each paper on its own and, inside Use of English, the exact phrasal verb, suffix or structure that cost you the point.',
      },
      {
        title: 'Practise only your gaps, then retest',
        body: 'Your daily practice uses exactly what you missed. When you retest, what you have mastered leaves the list and the plan carries on with the rest until exam day.',
      },
    ],
  },
  gapMap: {
    title: 'What a Cambridge gap map looks like',
    intro:
      'This is an example, not a real learner: which papers are on track and what needs fixing, starting with Use of English.',
    exampleLabel: 'Example result',
    learner: 'Sample learner, B2 First, needs the certificate for Erasmus',
    rows: [
      { skill: 'Listening', tone: 'strong', status: 'Strong', detail: 'Interview and short monologues answered well.' },
      { skill: 'Use of English', tone: 'gap', status: '3 areas to work on', detail: 'Phrasal verbs, word formation with suffixes, and the passive in transformations.' },
      { skill: 'Reading', tone: 'building', status: '1 area to work on', detail: 'The gapped text with missing paragraphs (Part 6).' },
      { skill: 'Writing', tone: 'building', status: '1 area to work on', detail: 'Linking words and essay structure.' },
      { skill: 'Speaking', tone: 'gap', status: '1 area to work on', detail: 'Comparing the two photos instead of describing them (Part 2).' },
    ],
    next: 'Today’s practice: 6 passive transformations and one video on suffixes.',
  },
  practice: {
    title: 'Use of English and speaking practice for Cambridge',
    intro: 'Use of English is the part people fear most, and the part that responds best to practice. Each format draws on your own list.',
    fixesLabel: 'Fixes',
    items: [
      {
        id: 'explainers',
        name: 'Explainer videos',
        what: 'A structure explained simply, slide by slide, with examples built from your mistakes.',
        fixes: 'Key word transformations in Part 4: passive, reported speech, conditionals.',
      },
      {
        id: 'vocabulary-videos',
        name: 'Vocabulary videos',
        what: 'A short video for each word you missed, plus sets for words that are easy to confuse.',
        fixes: 'Phrasal verbs and collocations in the Use of English gaps.',
      },
      {
        id: 'exercises',
        name: 'Quick exercises',
        what: 'Gap fills and transformations made from your own words and structures.',
        fixes: 'Word formation and the prefixes and suffixes you keep missing.',
      },
      {
        id: 'games',
        name: 'Games',
        what: 'A one-minute daily sprint, timed challenges and an adaptive test.',
        fixes: 'Keeping your pace through a long paper with many parts.',
      },
      {
        id: 'tutor',
        name: 'AI tutor conversation',
        what: 'Talk out loud with a tutor that asks follow-up questions and your opinion.',
        fixes: 'The discussion in Speaking Parts 3 and 4.',
      },
      {
        id: 'speaking',
        name: 'Speaking feedback',
        what: 'Record a sentence and see which words and sounds to fix.',
        fixes: 'Pronunciation, which is also assessed in Speaking.',
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        what: 'Two hosts discuss a topic you choose, using your words.',
        fixes: 'Interviews and conversations like Listening Part 4.',
      },
      {
        id: 'stories',
        name: 'Stories',
        what: 'An audio story in parts, written around your words.',
        fixes: 'Following a long monologue, as in Listening Part 2.',
      },
    ],
  },
  compare: {
    title: 'A Cambridge coursebook vs. your plan',
    left: {
      title: 'A coursebook',
      points: [
        'The whole class works through the same units in the same order.',
        'You revise grammar you already knew.',
        'You do full practice papers and only keep the mark.',
        'Speaking is practised now and then, in a group.',
      ],
    },
    right: {
      title: 'Your Polyngual plan',
      points: [
        'Your plan comes from your own mock test mistakes.',
        'It changes after every test, based on what you still get wrong.',
        'You know which phrasal verbs and structures are left to master.',
        'You speak out loud every day, with specific corrections.',
      ],
    },
  },
  variants: {
    title: 'B2 First or C1 Advanced?',
    intro: 'Both exams have the same structure; the level and the timing change. Choose the certificate you are asked for.',
    options: [
      {
        id: 'b2',
        label: 'B2 First',
        who: 'The level usually asked for to certify English at university, for Erasmus and for many public sector jobs.',
        points: [
          'Reading and Use of English: 7 parts and 52 questions in 1 hour 15 minutes.',
          'Use of English: gap fills, word formation and key word transformations (Parts 2, 3 and 4).',
          'A pass is 160 to 179 on the Cambridge English Scale; from 180 to 190 the certificate states Level C1.',
        ],
        cta: 'Take the free B2 First mock test',
      },
      {
        id: 'c1',
        label: 'C1 Advanced',
        who: 'For master’s programmes, teaching in English and jobs that ask for an advanced level.',
        points: [
          'Reading and Use of English: 8 parts and 56 questions in 1 hour 30 minutes.',
          'Longer texts and a Use of English paper that asks for more vocabulary and structures.',
          'A pass is 180 to 199 on the Cambridge English Scale; from 200 to 210 the certificate states Level C2.',
        ],
        cta: 'Take the free C1 Advanced mock test',
      },
    ],
  },
  examFacts: {
    title: 'The B2 First and C1 Advanced papers, and how Polyngual covers each one',
    intro:
      'Both exams have four papers, and Reading and Use of English gives separate scores for Reading and for Use of English.',
    headers: { section: 'Paper', tasks: 'What you do', time: 'Time (B2 / C1)', polyngual: 'How Polyngual covers it' },
    rows: [
      {
        section: 'Reading and Use of English',
        tasks: 'B2: 7 parts, 52 questions. C1: 8 parts, 56 questions. Use of English is Parts 2, 3 and 4.',
        time: '1 h 15 / 1 h 30',
        polyngual: 'Explainer videos for transformations, vocabulary videos for phrasal verbs and collocations, and word formation exercises.',
      },
      {
        section: 'Writing',
        tasks: '2 parts: a compulsory essay and a task you choose',
        time: '1 h 20 / 1 h 30',
        polyngual: 'Explanations and exercises built from the mistakes in your own writing: linking, register and organisation.',
      },
      {
        section: 'Listening',
        tasks: '4 parts, 30 questions',
        time: 'About 40 min',
        polyngual: 'Podcasts and stories using your words, with questions on what you heard.',
      },
      {
        section: 'Speaking',
        tasks: '4 parts, with another candidate',
        time: '14 min / 15 min',
        polyngual: 'AI tutor conversations for Parts 3 and 4, and word-by-word pronunciation feedback.',
      },
    ],
    scoring:
      'You get a Cambridge English Scale score for Reading, Use of English, Writing, Listening and Speaking, plus an overall score.',
    source: 'Source: Cambridge University Press & Assessment, B2 First and C1 Advanced formats and results.',
  },
  faq: {
    title: 'Cambridge practice test questions',
    items: [
      {
        q: 'Is the Cambridge mock test free?',
        a: 'Yes. The mock test and your gap map are free, so you can see what you miss in Use of English and the other papers before deciding whether to keep practising with Polyngual.',
      },
      {
        q: 'Should I take B2 First or C1 Advanced?',
        a: 'Take the one your university, employer or scholarship asks for. If your level is borderline, B2 First is the safer choice; a high score on B2 First is reported on the certificate as Level C1.',
      },
      {
        q: 'Is the mock test like the real Cambridge exam?',
        a: 'It follows the B2 First and C1 Advanced format: the same papers, task types and timing. The questions are original Polyngual content, not official Cambridge material, and the mock does not give an official result.',
      },
      {
        q: 'How do I prepare for Use of English?',
        a: 'By practising what you get wrong rather than the whole book. The mock test shows which phrasal verbs, suffixes and structures cost you points, and your plan works on them until a retest confirms you have them.',
      },
      {
        q: 'How long does it take to prepare for B2 or C1?',
        a: 'It depends on how many gaps stand between you and a pass. Your first mock test shows how many there are and each retest shows how many are left, so you can tell whether you will be ready for your exam date.',
      },
      {
        q: 'Can I practise speaking without a partner?',
        a: 'Yes. The AI tutor asks follow-up questions and your opinion, as in Parts 3 and 4, and speaking feedback shows which words and sounds to improve.',
      },
      {
        q: 'What score do I need to pass?',
        a: 'In B2 First, 160 to 179 on the Cambridge English Scale gives you B2, and 180 to 190 is reported as C1. In C1 Advanced, 180 to 199 gives you C1, and 200 to 210 is reported as C2.',
      },
    ],
  },
  final: {
    title: 'Find out what you need for your B2 or C1.',
    body: 'The mock test covers all four papers. Your gap map shows where to start.',
  },
  footer: {
    examPrep: 'Exam prep',
    privacy: 'Privacy',
    disclaimer:
      'Cambridge, B2 First and C1 Advanced are trademarks of Cambridge University Press & Assessment. Polyngual is not affiliated with or endorsed by Cambridge. The mock test uses original content and does not give an official result.',
    rights: 'Polyngual',
    langSwitch: 'En español',
  },
  practiceNames: {
    'vocabulary-videos': 'Vocabulary videos',
    explainers: 'Explainer videos',
    exercises: 'Quick exercises',
    games: 'Games',
    podcasts: 'Podcasts',
    stories: 'Stories',
    tutor: 'AI tutor',
    speaking: 'Speaking feedback',
  },
};
