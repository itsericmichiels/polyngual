import { es, type Dictionary, type StudioFormat } from './es';

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
    title: 'Polyngual | Learn English by speaking and get ready for the TOEFL or TOEIC',
    description:
      'Polyngual listens to how you speak, tells you exactly what to fix, and gets you ready for the TOEFL, the TOEIC and real life. No ads. At your own pace.',
  },
  nav: { cta: 'Join the waitlist' },
  hero: {
    eyebrow: 'Waitlist now open',
    headlineBefore: 'Speak English ',
    headlineMark: 'for real',
    headlineAfter: ', and see how much you improve every week.',
    sub: 'Polyngual listens to how you speak, tells you exactly what to fix, and gets you ready for real life. No ads. At your own pace.',
  },
  form: {
    label: 'Your email',
    placeholder: 'Your email',
    button: 'Save my spot',
    sending: 'Saving your spot…',
    consentBefore: 'I agree to receive emails from Polyngual and accept the ',
    consentLink: 'privacy policy',
    consentAfter: '.',
    note: 'We open in a few weeks. You’ll hear before anyone else. No spam.',
    success: 'Done! Check your inbox, we just wrote to you.',
    errors: {
      email: 'Check your email, something looks missing.',
      consent: 'Tick the box so we can write to you.',
      server: 'We couldn’t save it. Please try again in a moment.',
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
        body: 'Measure your English when you start and watch it rise, with results you can share on LinkedIn.',
      },
      {
        title: 'Walk into your exam ready.',
        body: 'TOEFL and TOEIC practice tests with instant feedback and exercises built around your weak spots.',
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
        a: 'An app for learning English by speaking. It listens to how you speak, tells you what to fix word by word, and builds your practice (games, podcasts, stories and explanations) from the words you find hard.',
      },
      {
        q: 'How much does it cost?',
        a: 'We start with a free beta for a small group. When paid plans open, the first 200 people on the list get 50% off the annual plan, for ever.',
      },
      {
        q: 'When can I start?',
        a: 'We open in groups. Join the list and we will email you as soon as there is a place for you.',
      },
      {
        q: 'Does it help with the TOEFL or the TOEIC?',
        a: 'Yes. You get mock tests with the current task types, instant feedback, and practice built from your mistakes. Polyngual is not affiliated with ETS and does not predict your official score.',
      },
      {
        q: 'Do I need a minimum level?',
        a: 'No. You check your level when you start and the practice adapts to you, from A1 to C1.',
      },
      {
        q: 'What do you do with my voice and my data?',
        a: 'We use your voice only to score your pronunciation and we do not keep those recordings. There are no ads and we do not sell your data. The details are in the privacy policy.',
      },
      {
        q: 'Which languages is it in?',
        a: 'The website and the app are in English and Spanish. For now we teach English.',
      },
    ],
  },
  offer: {
    eyebrow: 'Founder offer',
    body: 'the first 200 people on the list get 50% off the annual plan, forever.',
    cta: 'Save my spot',
    forever: 'forever',
  },
  app: {
    eyebrow: 'Free beta now open',
    nav: 'Start free',
    cta: 'Start learning free',
    note: 'Free during the beta. No card needed.',
    orList: 'Rather hear when we launch? Join the list',
  },
  closing: {
    title: 'Your English, a little better every week.',
    body: 'Join today and be among the first to try it.',
    cta: 'Save my spot',
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
