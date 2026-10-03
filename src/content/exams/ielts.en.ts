import type { ExamPageContent } from './types';

// IELTS facts checked against ielts.org on 2026-10-03: Academic and General Training share Listening and
// Speaking; Reading and Writing differ. Timings and the 9-band scale as listed below.

export const ieltsEn: ExamPageContent = {
  exam: 'ielts',
  locale: 'en',
  meta: {
    title: 'IELTS Practice Test: Free Mock, Band by Band | Polyngual',
    description:
      'Take a free IELTS practice test, see the band each skill is at, and practise only the writing and speaking gaps between you and your target.',
    ogAlt: 'The Polyngual loop for IELTS: mock test, results, practice on your gaps, retest.',
  },
  cta: 'Take the free IELTS mock test',
  hero: {
    title: 'Stop studying what you already know. Practise only what your IELTS mock test says you are missing.',
    sub: 'Visas and universities usually ask for a band in every skill, not just overall, and one low skill can hold the whole application back. Take a free IELTS mock test, find the skill and the exact gaps holding your band down, and practise only those.',
    note: 'Academic or General Training. You choose below.',
  },
  loop: {
    title: 'How your IELTS plan works',
    intro:
      'For most people the problem is one or two skills, usually Writing or Speaking, not all four. Polyngual keeps those gaps in the middle of your plan and works on them until a retest shows they have moved.',
    steps: ['Mock test', 'Your results', 'Practice built on your gaps', 'Retest'],
    stepDetails: [
      'Listening, Reading, Writing and Speaking, in the IELTS format.',
      'Where each skill stands, and what is holding it down.',
      'Every format below works on the same list.',
      'A shorter test on your gaps. What you fixed leaves the list.',
    ],
    centreTitle: 'Your gaps',
    centreSub: 'Example list',
    gaps: [
      { label: 'Describing trends in Task 1', clearedInRound: 2 },
      { label: 'Linking ideas in Task 2', clearedInRound: 3 },
      { label: 'Extending answers in Part 3', clearedInRound: 2 },
      { label: '35 topic words', clearedInRound: 3 },
      { label: 'Spelling in Listening answers' },
      { label: 'True / False / Not Given' },
    ],
    gapsLeft: '{n} gaps left',
    roundLabel: 'Round {n}',
    returnLabel: 'Gaps shrink each round',
    caption: 'Everything revolves around what you don’t know yet. Not a course for everyone. A plan for you.',
    a11yLabel: 'The Polyngual practice loop for IELTS, step by step',
  },
  steps: {
    title: 'From IELTS mock test to your target band in 3 steps',
    items: [
      {
        title: 'Take the IELTS mock test',
        body: 'Listening, Reading, both Writing tasks and a speaking interview in three parts. Pick Academic or General Training first, so the reading texts and Writing Task 1 match the test you will sit.',
      },
      {
        title: 'See your gap map, skill by skill',
        body: 'Your result shows each skill on its own, because that is how visa and university requirements are written. Under each one: what you did well and the specific things that held it down.',
      },
      {
        title: 'Practise only your gaps, then retest',
        body: 'Most of your time goes to the weakest skill first. When you retest, fixed items leave the list and your plan moves on to the next skill that is short of your target.',
      },
    ],
  },
  gapMap: {
    title: 'What an IELTS gap map looks like',
    intro:
      'This is an example, not a real candidate. It shows the kind of breakdown you get: which skills are already where you need them and which ones are short, with the reasons why.',
    exampleLabel: 'Example result',
    learner: 'Sample candidate, Academic, needs the same band in every skill',
    rows: [
      { skill: 'Listening', tone: 'strong', status: 'On target', detail: 'Maps and multiple choice answered well.' },
      { skill: 'Reading', tone: 'building', status: '1 area to work on', detail: 'True / False / Not Given questions.' },
      { skill: 'Writing', tone: 'gap', status: '2 areas to work on', detail: 'Describing trends in Task 1. Linking ideas in the Task 2 essay.' },
      { skill: 'Speaking', tone: 'gap', status: '1 area to work on', detail: 'Short answers in the Part 3 discussion.' },
      { skill: 'Vocabulary', tone: 'building', status: '35 words to learn', detail: 'Topic words for environment, work and education.' },
    ],
    next: 'Today’s practice: one Task 1 chart, then 8 of the 35 words.',
  },
  practice: {
    title: 'IELTS writing and speaking practice, built on your gaps',
    intro: 'Writing and Speaking are where most bands are lost, so that is where your plan spends most of its time. Every format pulls from your own list.',
    fixesLabel: 'Fixes',
    items: [
      {
        id: 'tutor',
        name: 'AI tutor conversation',
        what: 'A spoken interview with follow-up questions, like the examiner in Parts 1 and 3.',
        fixes: 'Answers that stop too soon in the Speaking test.',
      },
      {
        id: 'speaking',
        name: 'Speaking feedback',
        what: 'Record a sentence and see which words and sounds to fix.',
        fixes: 'Pronunciation, one of the four things the Speaking band is based on.',
      },
      {
        id: 'explainers',
        name: 'Explainer videos',
        what: 'A structure explained simply, with examples built from your own essay.',
        fixes: 'Linking words and complex sentences in Writing Task 2.',
      },
      {
        id: 'vocabulary-videos',
        name: 'Vocabulary videos',
        what: 'A short video for each word you missed, plus sets for words that are easy to confuse.',
        fixes: 'The topic vocabulary that lifts Writing and Speaking.',
      },
      {
        id: 'exercises',
        name: 'Quick exercises',
        what: 'Short sets built from your own words and sentences.',
        fixes: 'Checking a gap is closed before the retest.',
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        what: 'Two hosts discuss a topic you choose, using your words.',
        fixes: 'Following speakers with different accents, as in the Listening test.',
      },
      {
        id: 'stories',
        name: 'Stories',
        what: 'An audio story in parts, written around your words.',
        fixes: 'Listening for detail over a longer recording.',
      },
      {
        id: 'games',
        name: 'Games',
        what: 'A one-minute daily sprint, timed challenges and an adaptive test.',
        fixes: 'Quick recall for the 60-minute Reading test.',
      },
    ],
  },
  compare: {
    title: 'An IELTS course vs. your plan',
    left: {
      title: 'A course',
      points: [
        'Equal time on all four skills, whatever your scores.',
        'Model essays to copy, with no feedback on yours.',
        'Speaking practice without anyone asking a follow-up question.',
        'One practice band at the end and no reason behind it.',
      ],
    },
    right: {
      title: 'Your Polyngual plan',
      points: [
        'More time on the skill that is furthest from your target.',
        'Exercises built from the mistakes in your own writing.',
        'Spoken interviews with follow-up questions and feedback.',
        'Every retest shows which gaps have closed and which skill is next.',
      ],
    },
  },
  variants: {
    title: 'Academic or General Training?',
    intro: 'Listening and Speaking are the same in both. Reading and Writing are different, so choose the one your visa, employer or university asks for.',
    options: [
      {
        id: 'academic',
        label: 'Academic',
        who: 'For university study, and for some professional registrations.',
        points: [
          'Reading: longer texts from books, journals and newspapers.',
          'Writing Task 1: describe a graph, table, chart or diagram in at least 150 words.',
          'Writing Task 2: an essay of at least 250 words.',
        ],
        cta: 'Take the free IELTS Academic mock test',
      },
      {
        id: 'general',
        label: 'General Training',
        who: 'Often asked for work visas and migration, and for some training courses.',
        points: [
          'Reading: everyday texts such as notices, adverts and workplace documents.',
          'Writing Task 1: a letter of at least 150 words, for example asking for information.',
          'Writing Task 2: an essay of at least 250 words.',
        ],
        cta: 'Take the free IELTS General Training mock test',
      },
    ],
  },
  examFacts: {
    title: 'The IELTS sections, and how Polyngual covers each one',
    intro:
      'Both versions of IELTS test the four skills in four parts. Here is the format as IELTS describes it, and what Polyngual practises for each part.',
    headers: { section: 'Section', tasks: 'What you do', time: 'Time', polyngual: 'How Polyngual covers it' },
    rows: [
      {
        section: 'Listening',
        tasks: '4 parts, 40 questions. The same in Academic and General Training.',
        time: 'About 30 min',
        polyngual: 'Podcasts and stories with different speakers, and quick exercises on spelling and numbers in answers.',
      },
      {
        section: 'Reading',
        tasks: '3 sections, 40 questions. Academic and General Training use different texts.',
        time: '60 min',
        polyngual: 'Vocabulary videos for the words you missed and timed games for reading speed.',
      },
      {
        section: 'Writing',
        tasks: 'Task 1 (chart description or letter, 150+ words) and Task 2 (essay, 250+ words)',
        time: '60 min',
        polyngual: 'Explainer videos and exercises built from your own writing mistakes.',
      },
      {
        section: 'Speaking',
        tasks: 'A face-to-face interview in three parts',
        time: '11–14 min',
        polyngual: 'AI tutor interviews with follow-up questions, and word-by-word pronunciation feedback.',
      },
    ],
    scoring:
      'Each skill gets a band from 1 to 9, and the overall band is the average of the four, rounded to the nearest half or whole band.',
    source: 'Source: IELTS, Academic and General Training test formats and scoring.',
  },
  faq: {
    title: 'IELTS practice test questions',
    items: [
      {
        q: 'Is the IELTS mock test free?',
        a: 'Yes. The mock test and your gap map are free, so you can see which skill is holding your band down before deciding whether to keep practising with Polyngual.',
      },
      {
        q: 'Should I take Academic or General Training?',
        a: 'Take the one your visa, employer or university asks for. Academic is usually for university study; General Training is often asked for work and migration. Listening and Speaking are the same in both.',
      },
      {
        q: 'Is the mock test like the real IELTS?',
        a: 'It follows the IELTS format: four skills, the same task types and the same timing. The questions are original Polyngual content, not official IELTS material, and the mock does not give an official band.',
      },
      {
        q: 'How are writing and speaking assessed?',
        a: 'Your answers are reviewed against clear criteria, such as how well you answer the task, how your ideas connect, your vocabulary and your grammar, plus pronunciation for speaking. You see which of these is holding each skill down.',
      },
      {
        q: 'What band do I need for my visa or university?',
        a: 'It depends on the visa category, the country and the course, and many ask for a minimum in each skill as well as overall. Check the official requirements for your visa or the course admissions page and use those bands as your target.',
      },
      {
        q: 'How long should I prepare for IELTS?',
        a: 'It depends on how far each skill is from your target. Your first mock test shows the gaps, and each retest shows how many are left, so you can judge whether your test date is realistic.',
      },
      {
        q: 'Can I practise IELTS speaking on my own?',
        a: 'Yes. The AI tutor runs interviews with follow-up questions like Parts 1 and 3, and speaking feedback shows which words and sounds to fix.',
      },
    ],
  },
  final: {
    title: 'Find out which skill is holding your IELTS band down.',
    body: 'The mock test covers all four skills. Your gap map shows where to start.',
  },
  footer: {
    examPrep: 'Exam prep',
    privacy: 'Privacy',
    disclaimer:
      'IELTS is a registered trademark of the British Council, IDP IELTS and Cambridge University Press & Assessment. Polyngual is not affiliated with or endorsed by them. The mock test uses original content and does not give an official band.',
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
