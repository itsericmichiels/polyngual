import type { ExamPageContent } from './types';

// TOEFL facts checked against ETS pages on 2026-10-03: the updated TOEFL iBT launched on 21 January 2026,
// with the task types, base times and 1–6 scale listed below (ets.org/toefl, 2026 test specifications).

export const toeflEn: ExamPageContent = {
  exam: 'toefl',
  locale: 'en',
  meta: {
    title: 'TOEFL Practice Test: Free Mock and Your Plan | Polyngual',
    description:
      'Take a free TOEFL practice test, see exactly what you missed by skill, and practise only those gaps until your retest shows they are gone.',
    ogAlt: 'The Polyngual loop: mock test, results, practice built on your gaps, retest.',
  },
  cta: 'Take the free TOEFL mock test',
  hero: {
    title: 'Stop studying what you already know. Practise only what your TOEFL mock test says you are missing.',
    sub: 'Polyngual is not a fixed course that everyone follows. You take a free TOEFL mock test, we find exactly what you got wrong, and everything you practise afterwards is built around those gaps until they are gone.',
    note: 'Built on the TOEFL iBT task types introduced in January 2026.',
  },
  loop: {
    title: 'How your TOEFL plan works',
    intro:
      'Most TOEFL courses hand everyone the same units. Polyngual runs a loop instead, and your gaps sit in the middle of it. Each round, the list in the centre gets shorter.',
    steps: ['Mock test', 'Your results', 'Practice built on your gaps', 'Retest'],
    stepDetails: [
      'Reading, Listening, Writing and Speaking, using the current TOEFL task types.',
      'What you got right and what you missed, skill by skill.',
      'Every format below works on the same list of gaps.',
      'Take a shorter test on your gaps. Cleared items leave the list.',
    ],
    centreTitle: 'Your gaps',
    centreSub: 'Example list',
    gaps: [
      { label: 'Word order in questions', clearedInRound: 2 },
      { label: '38 academic words', clearedInRound: 3 },
      { label: 'Linking sounds when repeating', clearedInRound: 2 },
      { label: 'Polite requests in emails', clearedInRound: 3 },
      { label: 'One clear example per answer' },
      { label: 'Implied meaning in notices' },
    ],
    gapsLeft: '{n} gaps left',
    roundLabel: 'Round {n}',
    returnLabel: 'Gaps shrink each round',
    caption: 'Everything revolves around what you don’t know yet. Not a course for everyone. A plan for you.',
    a11yLabel: 'The Polyngual practice loop, step by step',
  },
  steps: {
    title: 'TOEFL mock test to retest in 3 steps',
    items: [
      {
        title: 'Take a TOEFL mock test',
        body: 'Work through Complete the Words, Build a Sentence, an email, an academic discussion, Listen and Repeat and a short interview. It is free, and you record your speaking answers in the browser.',
      },
      {
        title: 'See your gap map',
        body: 'Your result is not a single number. It shows what you got right and what you missed, grouped by skill, so you know whether your problem is vocabulary, listening speed, sentence structure or how you sound.',
      },
      {
        title: 'Practise only your gaps, then retest',
        body: 'Your daily practice uses the exact words and skills you missed. When you retest, the items you have fixed come off the list and your plan moves on to what is left.',
      },
    ],
  },
  gapMap: {
    title: 'What a TOEFL gap map looks like',
    intro:
      'This is an example, not a real learner. It shows the kind of result you get after the mock test: a short list of things to fix, not a score to worry about.',
    exampleLabel: 'Example result',
    learner: 'Sample learner, applying to a master’s programme',
    rows: [
      { skill: 'Listening', tone: 'strong', status: 'Strong', detail: 'Conversations and announcements answered correctly.' },
      { skill: 'Reading', tone: 'building', status: '1 area to work on', detail: 'Implied meaning in short notices.' },
      { skill: 'Speaking', tone: 'gap', status: '2 areas to work on', detail: 'Linking sounds in Listen and Repeat. Giving one clear example in the interview.' },
      { skill: 'Writing', tone: 'building', status: '1 area to work on', detail: 'Word order in Build a Sentence questions.' },
      { skill: 'Vocabulary', tone: 'gap', status: '38 words to learn', detail: 'Academic words missed in Complete the Words.' },
    ],
    next: 'Today’s practice: 12 of the 38 words, then one interview question.',
  },
  practice: {
    title: 'TOEFL practice online, matched to each gap',
    intro: 'Different gaps need different practice. Each format below pulls from your own list, so you never study a word or rule you already know.',
    fixesLabel: 'Fixes',
    items: [
      {
        id: 'vocabulary-videos',
        name: 'Vocabulary videos',
        what: 'A short video for each word you missed, plus sets for words that are easy to confuse.',
        fixes: 'Words you could not complete in Complete the Words.',
      },
      {
        id: 'explainers',
        name: 'Explainer videos',
        what: 'A rule explained simply, slide by slide, with examples built from your mistakes.',
        fixes: 'Grammar you got wrong in Build a Sentence.',
      },
      {
        id: 'exercises',
        name: 'Quick exercises',
        what: 'Short exercises made from your own words and phrases.',
        fixes: 'Checking that a gap is really closed before the retest.',
      },
      {
        id: 'games',
        name: 'Games',
        what: 'Timed challenges, a one-minute daily sprint and an adaptive test.',
        fixes: 'Recall under time pressure, which the adaptive sections reward.',
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        what: 'Two hosts talk about a topic you choose, using the words on your list.',
        fixes: 'Hearing new words at natural speed, as in Listen to a Conversation.',
      },
      {
        id: 'stories',
        name: 'Stories',
        what: 'An audio story in parts, written around your words, with the next part ready when you are.',
        fixes: 'Listening stamina for longer academic talks.',
      },
      {
        id: 'tutor',
        name: 'AI tutor conversation',
        what: 'Talk out loud with a tutor that asks follow-up questions.',
        fixes: 'Answers that stop too early in Take an Interview.',
      },
      {
        id: 'speaking',
        name: 'Speaking feedback',
        what: 'Record a sentence and see which words and sounds to fix.',
        fixes: 'The pronunciation slips that Listen and Repeat exposes.',
      },
    ],
  },
  compare: {
    title: 'A TOEFL curriculum vs. your plan',
    left: {
      title: 'A curriculum',
      points: [
        'Everyone studies the same units in the same order.',
        'You spend weeks on topics you already know.',
        'Progress means finishing lessons.',
        'Speaking practice is a recording nobody listens to.',
      ],
    },
    right: {
      title: 'Your Polyngual plan',
      points: [
        'Your plan is built from your own mock test mistakes.',
        'It changes after every test, based on what is still wrong.',
        'Progress means gaps leaving your list.',
        'Every spoken answer gets feedback on the words and sounds to fix.',
      ],
    },
  },
  examFacts: {
    title: 'The TOEFL iBT sections, and how Polyngual covers each one',
    intro:
      'Since 21 January 2026 the TOEFL iBT has four sections with new, shorter task types. Reading and Listening are adaptive: the second half of each section gets easier or harder depending on how the first half went. Here is the format as ETS describes it, and what Polyngual practises for each part.',
    headers: { section: 'Section', tasks: 'Task types', time: 'Base time (ETS)', polyngual: 'How Polyngual covers it' },
    rows: [
      {
        section: 'Reading',
        tasks: 'Complete the Words, Read in Daily Life, Read an Academic Passage',
        time: 'About 30 min',
        polyngual: 'Vocabulary videos and quick exercises for missing words; reading practice on notices and short academic texts.',
      },
      {
        section: 'Listening',
        tasks: 'Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk',
        time: 'About 29 min',
        polyngual: 'Podcasts and stories that use your words at natural speed, then questions on what you heard.',
      },
      {
        section: 'Writing',
        tasks: 'Build a Sentence, Write an Email, Write for an Academic Discussion',
        time: 'About 23 min',
        polyngual: 'Explainer videos for the sentence patterns you missed, and written tasks marked on clarity, organisation and grammar.',
      },
      {
        section: 'Speaking',
        tasks: 'Listen and Repeat, Take an Interview',
        time: 'About 8 min',
        polyngual: 'Word-by-word speaking feedback for Listen and Repeat, and AI tutor conversations for the interview.',
      },
    ],
    scoring:
      'Each section is scored from 1 to 6 in half-band steps, and the overall score is the average of the four. During a two-year transition, ETS also reports a comparable 0–120 score.',
    source: 'Source: ETS, TOEFL iBT test content and 2026 updates. Base times vary with the adaptive modules.',
  },
  faq: {
    title: 'TOEFL practice test questions',
    items: [
      {
        q: 'Is the TOEFL mock test free?',
        a: 'Yes. The mock test and your gap map are free. You see what you got right and what you missed before deciding whether to keep practising with Polyngual.',
      },
      {
        q: 'Is the mock test like the real TOEFL?',
        a: 'It uses the same task types as the TOEFL iBT since January 2026, such as Complete the Words, Build a Sentence, Listen and Repeat and Take an Interview. The questions are original Polyngual content, not official ETS material, and the mock does not predict an official score.',
      },
      {
        q: 'How is the mock test scored?',
        a: 'Instead of one number, you get a result for each skill: what you answered correctly and the specific words, sounds and structures you missed. Speaking and writing answers are reviewed against clear criteria, such as clarity, organisation and grammar. That list becomes your plan.',
      },
      {
        q: 'How long should I prepare for the TOEFL?',
        a: 'It depends on how far you are from the score you need. Your first mock test shows how many gaps you have, and each retest shows how many are left, so you can judge whether your test date is realistic instead of guessing.',
      },
      {
        q: 'Can I practise TOEFL speaking?',
        a: 'Yes, and it is where most people need help. You record answers for Listen and Repeat and the interview, see which words and sounds to fix, and practise conversation with an AI tutor that asks follow-up questions.',
      },
      {
        q: 'What TOEFL score do I need for university?',
        a: 'Each university and programme sets its own minimum, and many now publish it on the 1–6 scale as well as the 0–120 scale. Check the admissions page of every programme you apply to, then use that number as your target.',
      },
      {
        q: 'What changed in the TOEFL in 2026?',
        a: 'From 21 January 2026, the TOEFL iBT uses shorter task types, adaptive Reading and Listening sections and a 1–6 score scale aligned with the CEFR. ETS reports a comparable 0–120 score during a two-year transition.',
      },
    ],
  },
  final: {
    title: 'Find out what to practise for the TOEFL.',
    body: 'The mock test takes you through every section. Your gap map shows what to work on first.',
  },
  footer: {
    examPrep: 'Exam prep',
    privacy: 'Privacy',
    disclaimer:
      'TOEFL and TOEFL iBT are registered trademarks of ETS. Polyngual is not affiliated with or endorsed by ETS. The mock test uses original content and does not give an official score.',
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
