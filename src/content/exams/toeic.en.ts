import type { ExamPageContent } from './types';

// TOEIC facts checked against ETS pages on 2026-10-03: Listening and Reading test (200 questions, 2 hours,
// 10–990) and the separate Speaking and Writing tests (0–200 each).

export const toeicEn: ExamPageContent = {
  exam: 'toeic',
  locale: 'en',
  meta: {
    title: 'TOEIC Practice Test: Free Mock for Work | Polyngual',
    description:
      'Take a free TOEIC practice test, see which listening and reading skills cost you points, and practise only those until your retest shows the gain.',
    ogAlt: 'The Polyngual loop for the TOEIC: mock test, results, practice on your gaps, retest.',
  },
  cta: 'Take the free TOEIC mock test',
  hero: {
    title: 'Stop studying what you already know. Practise only what your TOEIC mock test says you are missing.',
    sub: 'The score on your CV or promotion form comes down to a few hundred questions answered at speed. Take a free TOEIC mock test, see exactly which ones cost you points, and spend your evenings only on those.',
    note: 'Follows the TOEIC Listening and Reading format: 200 questions in two hours.',
  },
  loop: {
    title: 'How your TOEIC plan works',
    intro:
      'You do not have time to work through a whole textbook before the hiring deadline. Polyngual keeps a list of the things that cost you points and builds every practice session around it. Each retest makes the list shorter.',
    steps: ['Mock test', 'Your results', 'Practice built on your gaps', 'Retest'],
    stepDetails: [
      'Listening and Reading, timed like the real test.',
      'Points won and points lost, part by part.',
      'Every format below works on the same list.',
      'A shorter test on your gaps. What you fixed leaves the list.',
    ],
    centreTitle: 'Your gaps',
    centreSub: 'Example list',
    gaps: [
      { label: 'Short answers in Part 2', clearedInRound: 2 },
      { label: '42 business words', clearedInRound: 3 },
      { label: 'Prepositions of time', clearedInRound: 2 },
      { label: 'Reading speed in Part 7', clearedInRound: 3 },
      { label: 'Numbers in announcements' },
      { label: 'Verb forms in Part 5' },
    ],
    gapsLeft: '{n} gaps left',
    roundLabel: 'Round {n}',
    returnLabel: 'Gaps shrink each round',
    caption: 'Everything revolves around what you don’t know yet. Not a course for everyone. A plan for you.',
    a11yLabel: 'The Polyngual practice loop for the TOEIC, step by step',
  },
  steps: {
    title: 'From TOEIC mock test to a better score in 3 steps',
    items: [
      {
        title: 'Take the TOEIC mock test',
        body: 'Photographs, question-response, conversations, talks, incomplete sentences, text completion and reading passages, with the clock running. You find out how you do under real time pressure, which is where most points are lost.',
      },
      {
        title: 'See where the points went',
        body: 'Instead of one number, you see each part of the test: what you answered well and the exact words, grammar and question types that cost you points.',
      },
      {
        title: 'Practise only your gaps, then retest',
        body: 'Ten or fifteen minutes a day on your own list, on your phone, between shifts or on the commute. When you retest, fixed items come off and the plan moves on.',
      },
    ],
  },
  gapMap: {
    title: 'What a TOEIC gap map looks like',
    intro:
      'This is an example, not a real candidate. It shows the kind of breakdown you get: not just a total, but which parts are already safe and which ones are worth your next hour.',
    exampleLabel: 'Example result',
    learner: 'Sample candidate, applying for a customer service role',
    rows: [
      { skill: 'Listening: photos and talks', tone: 'strong', status: 'Strong', detail: 'Parts 1 and 4 answered correctly.' },
      { skill: 'Listening: question-response', tone: 'gap', status: '2 areas to work on', detail: 'Indirect answers in Part 2. Numbers and dates in announcements.' },
      { skill: 'Grammar', tone: 'building', status: '1 area to work on', detail: 'Verb forms and prepositions in Part 5.' },
      { skill: 'Reading speed', tone: 'building', status: '1 area to work on', detail: 'Ran out of time in the multi-passage questions.' },
      { skill: 'Vocabulary', tone: 'gap', status: '42 words to learn', detail: 'Office, travel and finance words you did not recognise.' },
    ],
    next: 'Today’s practice: 10 of the 42 words, then one Part 2 drill.',
  },
  practice: {
    title: 'TOEIC practice online for busy workdays',
    intro: 'Short formats that fit around a job. Every one pulls from your own gap list, so ten minutes on the bus goes to the points you are actually missing.',
    fixesLabel: 'Fixes',
    items: [
      {
        id: 'vocabulary-videos',
        name: 'Vocabulary videos',
        what: 'A short video for each word you missed, plus sets for words that are easy to mix up, like “borrow” and “lend”.',
        fixes: 'Business words in Part 5 and the reading passages.',
      },
      {
        id: 'explainers',
        name: 'Explainer videos',
        what: 'One grammar point explained simply, with examples taken from your own mistakes.',
        fixes: 'Verb forms, prepositions and word forms in Part 5.',
      },
      {
        id: 'exercises',
        name: 'Quick exercises',
        what: 'Short sets built from your words and the sentence patterns you missed.',
        fixes: 'Proving a gap is closed before the retest.',
      },
      {
        id: 'games',
        name: 'Games',
        what: 'A one-minute daily sprint, timed challenges and an adaptive test.',
        fixes: 'Answering fast, which the TOEIC rewards in both sections.',
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        what: 'Two hosts talk through workplace situations using the words on your list.',
        fixes: 'Following conversations at natural speed, as in Part 3.',
      },
      {
        id: 'stories',
        name: 'Stories',
        what: 'An audio story in parts, written around your words, ready for the commute.',
        fixes: 'Keeping your focus through longer talks in Part 4.',
      },
      {
        id: 'tutor',
        name: 'AI tutor conversation',
        what: 'Role-play calls, meetings and customer conversations with a tutor that answers back.',
        fixes: 'Speaking confidence for the interview after the test.',
      },
      {
        id: 'speaking',
        name: 'Speaking feedback',
        what: 'Record a sentence and see which words and sounds to fix.',
        fixes: 'Clear pronunciation, if your employer also asks for the TOEIC Speaking test.',
      },
    ],
  },
  compare: {
    title: 'A TOEIC course vs. your plan',
    left: {
      title: 'A course',
      points: [
        'Every candidate works through the same chapters.',
        'Your free time goes to grammar you already use at work.',
        'You find out what you missed on test day.',
        'Practice tests give you a total, not a reason.',
      ],
    },
    right: {
      title: 'Your Polyngual plan',
      points: [
        'Your plan comes from your own mock test mistakes.',
        'It changes after every test, based on what still costs points.',
        'You see which parts are safe long before test day.',
        'Every retest tells you exactly what moved and what did not.',
      ],
    },
  },
  examFacts: {
    title: 'The TOEIC Listening and Reading test, part by part',
    intro:
      'The TOEIC Listening and Reading test is what most employers ask for. It has 200 multiple-choice questions in two hours, split into two timed sections. Here is the format as ETS describes it, and what Polyngual practises for each part.',
    headers: { section: 'Section', tasks: 'Parts', time: 'Questions and time', polyngual: 'How Polyngual covers it' },
    rows: [
      {
        section: 'Listening',
        tasks: 'Part 1 Photographs, Part 2 Question-response, Part 3 Conversations, Part 4 Talks',
        time: '100 questions, 45 min',
        polyngual: 'Podcasts and stories at natural speed, drills on indirect answers, and numbers and dates in announcements.',
      },
      {
        section: 'Reading',
        tasks: 'Part 5 Incomplete sentences, Part 6 Text completion, Part 7 Reading comprehension',
        time: '100 questions, 75 min',
        polyngual: 'Explainer videos and quick exercises for grammar, vocabulary videos for business words, and timed games for reading speed.',
      },
    ],
    scoring:
      'Listening and Reading are each scored from 5 to 495, for a total of 10 to 990. The TOEIC Speaking and Writing tests are separate and scored 0–200 each; Polyngual’s speaking feedback and tutor help if your employer asks for them too.',
    source: 'Source: ETS, TOEIC Listening and Reading and TOEIC Speaking and Writing test formats.',
  },
  faq: {
    title: 'TOEIC practice test questions',
    items: [
      {
        q: 'Is the TOEIC mock test free?',
        a: 'Yes. The mock test and your gap map are free, so you can see which parts cost you points before deciding whether to keep practising with Polyngual.',
      },
      {
        q: 'Is the mock test like the real TOEIC?',
        a: 'It follows the Listening and Reading format: the same seven parts and the same timing. The questions are original Polyngual content, not official ETS material, and the mock does not give an official score.',
      },
      {
        q: 'How is the mock test scored?',
        a: 'You see each part separately: what you answered correctly and the words, grammar and question types behind every wrong answer. That breakdown becomes your plan.',
      },
      {
        q: 'What TOEIC score do I need for the job?',
        a: 'Employers set their own minimum, and it often depends on the role: customer-facing and international positions usually ask for more. Check the job advert or ask HR, then use that number as your target.',
      },
      {
        q: 'How long does it take to raise my TOEIC score?',
        a: 'It depends on how many gaps stand between you and your target. Your first mock test shows how many there are, and each retest shows how many are left, so you can tell whether your application date is realistic.',
      },
      {
        q: 'Can I practise in short sessions around work?',
        a: 'Yes. Most formats take a few minutes and work on a phone: a vocabulary video, a one-minute sprint, a podcast for the commute.',
      },
      {
        q: 'Does Polyngual help with TOEIC speaking?',
        a: 'The mock test covers Listening and Reading. For speaking, you can record sentences and get word-by-word pronunciation feedback and practise workplace conversations with an AI tutor.',
      },
    ],
  },
  final: {
    title: 'Find out where your TOEIC points are going.',
    body: 'The mock test covers both sections. Your gap map shows what to fix first.',
  },
  footer: {
    examPrep: 'Exam prep',
    privacy: 'Privacy',
    disclaimer:
      'TOEIC is a registered trademark of ETS. Polyngual is not affiliated with or endorsed by ETS. The mock test uses original content and does not give an official score.',
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
