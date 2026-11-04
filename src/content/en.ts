import { es, type Dictionary, type PathItem, type StudioFormat } from './es';

// English page copy for /en. Same shape as es.ts. The sample episodes and game sentences are
// English content in both versions, so they are reused from es.ts with only their labels translated.

const FORMAT_LABELS: Record<string, { label: string; prompt: string; options: string[] }> = {
  podcast: { label: 'Podcast', prompt: 'What should they talk about?', options: ['Travel', 'Work', 'Food'] },
  story: { label: 'Story', prompt: 'Pick a genre', options: ['Mystery', 'Space', 'Sports'] },
  explainer: { label: 'Explainer', prompt: 'What’s confusing you?', options: ['since or for?', 'make or do?', 'The “th” sound'] },
};

const SPEAKERS: Record<string, string> = { Narrador: 'Narrator', Voz: 'Voice' };

const translateMeta = (meta: string) =>
  meta
    .replace('Historia', 'Story')
    .replace('Explicación', 'Explainer')
    .replace('Capítulo', 'Chapter')
    .replace('narrador y 2 personajes', 'narrator and 2 characters')
    .replace(/(\d) voces/, '$1 voices')
    .replace(/1 voz/, '1 voice');

const formats: StudioFormat[] = es.studio.formats.map((format) => {
  const labels = FORMAT_LABELS[format.id];
  return {
    ...format,
    label: labels.label,
    prompt: labels.prompt,
    options: format.options.map((option, i) => ({
      label: labels.options[i],
      sample: {
        ...option.sample,
        meta: translateMeta(option.sample.meta),
        lines: option.sample.lines.map((line) => ({ ...line, who: SPEAKERS[line.who] ?? line.who })),
      },
    })),
  };
});

export const en: Dictionary = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  ogImage: '/og-en.png',
  privacyHref: '/en/privacy',
  termsHref: '/en/terms',
  switcher: { label: 'ES', href: '/es', name: 'Leer en español', hrefLang: 'es' },
  meta: {
    title: 'Polyngual | Learn English and Spanish by speaking',
    description:
      'Polyngual listens to how you speak and tells you exactly what to fix. Get ready for the TOEFL or TOEIC, speak English at work with confidence, or learn the Spanish you need to live in Spain.',
  },
  nav: { cta: 'Find your course' },
  hero: {
    eyebrow: 'English and Spanish, spoken from day one',
    headlineBefore: 'Learn a language ',
    headlineMark: 'by speaking',
    headlineAfter: ', with a plan built for your goal.',
    sub: 'Polyngual listens to how you speak, tells you exactly what to fix and builds your practice around what you need: an exam, your job or your life in Spain. No ads. At your own pace.',
  },
  paths: {
    label: 'What are you learning for?',
    eyebrow: 'Choose your course',
    title: 'One way of learning, three goals.',
    sub: 'Every course listens to you speak and builds your practice from your mistakes. What changes is the goal.',
    items: [
      {
        id: 'test',
        kicker: 'Polyngual Test',
        door: { title: 'An English exam', detail: 'TOEFL · TOEIC' },
        title: 'Get the score you need on the TOEFL or TOEIC.',
        body: 'Full practice tests with the current task types, scored as you go.',
        points: [
          'Start with a full practice test to see where you stand',
          'Instant feedback on your speaking and writing',
          'A study plan built from the questions you miss',
        ],
        cta: 'Start exam prep',
        note: 'Free to start.',
      },
      {
        id: 'business',
        kicker: 'Polyngual Business',
        door: { title: 'English for work', detail: 'B1 to C2' },
        title: 'Speak English at work with confidence.',
        body: 'For professionals who already work in English and want to sound clear and sure of themselves with their boss, clients and team.',
        points: [
          'Rehearse your own presentations with a tutor and get a written debrief',
          'News from your industry, followed by a conversation about it',
          'A coach who knows your role, with messages and live calls',
        ],
        cta: 'Request access',
        note: 'By invitation while we open the first groups.',
      },
      {
        id: 'spanish',
        kicker: 'Polyngual Spanish',
        door: { title: 'Spanish for life in Spain', detail: 'From A1' },
        title: 'Learn the Spanish you need in Spain.',
        body: 'For people who live in Spain or are moving here, starting from zero.',
        points: [
          'A complete A1 course in the Spanish spoken in Spain',
          'Everyday scenes with a tutor who talks with you: the pharmacy, the market, the town hall',
          'Local news from the Costa del Sol, written at your level',
        ],
        cta: 'Start Spanish free',
        note: 'Free during the beta. In the app, choose Spanish.',
      },
    ] satisfies PathItem[] as PathItem[],
    businessEmail: {
      subject: 'Polyngual Business: access request',
      body: 'Hi,\n\nI would like to try Polyngual Business.\n\nMy role:\nMy company and its industry:\nWhat I use English for at work:\n',
    },
  },
  demo: {
    listening: 'Listening',
    analysing: 'Analysing',
    score: 'Pronunciation',
    week: 'this week',
    caption: 'How Polyngual corrects you: word by word.',
    sentences: [
      { ...es.demo.sentences[0], tip: { sound: '/θ/', text: 'Let your tongue peek out between your teeth.' } },
      { ...es.demo.sentences[1], tip: { sound: '/ɪ/', text: 'Short vowel: “liv”, not “leev”.' } },
      { ...es.demo.sentences[2], tip: { sound: '/t/', text: 'Let the ending be heard: “workt”.' } },
    ],
  },
  benefits: {
    eyebrow: 'What you’ll notice',
    title: 'Built so you speak from day one.',
    items: [
      {
        title: 'Practise by speaking, not just tapping the screen.',
        body: 'Get a score for your pronunciation and the exact words you need to work on.',
      },
      {
        title: 'Know your real level.',
        body: 'Measure your level when you start and watch it rise, with results you can share on LinkedIn.',
      },
      {
        title: 'Practice built from your mistakes.',
        body: 'What you get wrong today becomes tomorrow’s exercises, whether you’re preparing for an exam, a meeting or a visit to the doctor.',
      },
    ],
  },
  games: {
    eyebrow: 'Learn by playing',
    title: 'Games made from the words you need.',
    sub: 'Polyngual turns the vocabulary you struggle with into personalised games. So you practise without it feeling like studying.',
    points: [
      { title: 'Your words', body: 'The ones you missed in your last practice, not a generic list.' },
      { title: 'Short rounds', body: 'A couple of minutes, whenever you like: on the bus, in a queue, on the sofa.' },
    ],
    game: {
      ...es.games.game,
      name: 'Fill the gap',
      weekWords: 'Your words',
      round: 'Round',
      points: 'Points',
      right: 'Nice!',
      wrong: 'Close. It was',
      doneTitle: 'Round complete!',
      doneBody: 'words right',
      again: 'Play again',
      note: 'Example game with sample words.',
    },
  },
  studio: {
    ...es.studio,
    eyebrow: 'Endless content',
    title: 'You’ll never run out of things to listen to.',
    sub: 'Polyngual doesn’t have a catalogue that runs out. It creates podcasts, stories and explainers on the spot, using the words you’re learning and the topic you choose.',
    tryLabel: 'Try it',
    create: 'Create',
    steps: ['Writing the script', 'Adding the voices', 'Ready'],
    sampleNote: 'Illustrative example of a generated episode.',
    wordsLabel: 'Your words in this episode',
    formats,
    library: [
      { kind: 'Podcasts', title: 'With your words', body: 'Two voices chat for two or three minutes using exactly the vocabulary you’re working on. Then you practise each word out loud.' },
      { kind: 'Games', title: 'Learn by playing', body: 'Short rounds built from the vocabulary you need.' },
      { kind: 'Stories', title: 'Chapter by chapter', body: 'Adventure, mystery, animals, space, sports, fantasy or school life. With a narrator and characters in different voices.' },
      { kind: 'Explainers', title: 'On the spot', body: 'Ask that grammar or pronunciation question and hear a short explanation, with an example to practise.' },
      { kind: 'Weekly video', title: 'Your recap', body: 'Under a minute, vertical: the sentences you got right, how much you practised and what to work on next.' },
      { kind: 'Daily Mission', title: 'One thing a day', body: 'A single task, how long it takes and why it helps right now. No endless lists.' },
      { kind: 'Pronunciation', title: 'Word by word', body: 'The words that most get in the way of being understood, one at a time, until they sound clear.' },
      { kind: 'Vocabulary', title: 'With pictures', body: 'Recognise and remember new words with visual support, without memorising lists.' },
      { kind: 'Practice tests', title: 'TOEFL and TOEIC', body: 'Tasks like the real exam, with instant feedback and exercises built around your weak spots.' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'What people usually ask before starting.',
    items: [
      {
        q: 'What is Polyngual?',
        a: 'A language app that teaches by listening to you speak. It has three courses: exam prep for the TOEFL and TOEIC, English for work (Business), and Spanish for people living in Spain. In each one it tells you what to fix, word by word, and builds your practice from the words and mistakes you find hard.',
      },
      {
        q: 'How much does it cost?',
        a: 'You can start exam prep and the Spanish course for free. If you later want a paid plan, you’ll see its price in the app before you pay anything. Business is by invitation while we open the first groups.',
      },
      {
        q: 'When can I start?',
        a: 'Today. Choose your course and you’ll be practising in a few minutes. For Business, request access and we’ll write to you.',
      },
      {
        q: 'Does it help with the TOEFL or the TOEIC?',
        a: 'Yes. You get mock tests with the current task types, instant feedback, and practice built from your mistakes. Polyngual is not affiliated with ETS and does not predict your official score.',
      },
      {
        q: 'Do I need a minimum level?',
        a: 'It depends on the course. Spanish starts from zero (A1). Business is for people who already work in English (B1 to C2). Exam prep starts with a full practice test that shows where you stand.',
      },
      {
        q: 'What do you do with my voice and my data?',
        a: 'We use your voice only to score your pronunciation and we do not keep those recordings. There are no ads and we do not sell your data. The details are in the privacy policy.',
      },
      {
        q: 'Which languages is it in?',
        a: 'We teach English (exam prep and Business) and the Spanish spoken in Spain. The website and the app are in English and Spanish.',
      },
    ],
  },
  closing: {
    title: 'A little better every week.',
    body: 'Choose where you want to start.',
  },
  visuals: {
    wordsLabel: 'Words to work on',
    levelLabel: 'Your level',
    share: 'Share {level} on LinkedIn ↗',
    corrected: 'Corrected',
    checks: ['Organisation', 'Vocabulary', 'Linking words: practise today'],
  },
  footer: {
    social: 'Social media',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    contact: 'Contact',
    rights: 'Polyngual',
    examPrep: '{exam} practice',
  },
};
