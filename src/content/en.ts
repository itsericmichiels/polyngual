import type { Dictionary, StudioFormat } from './es';

// English page copy for /en, the same shape as es.ts. Written for an international audience of English
// learners; the studio samples are the same English episodes the Spanish page shows.

export const en: Dictionary = {
  locale: 'en',
  ogLocale: 'en_US',
  privacyHref: '/privacy',
  meta: {
    title: 'Polyngual | Learn English by speaking and prepare for TOEFL or TOEIC',
    description:
      'Polyngual listens to how you speak, tells you exactly what to fix and gets you ready for TOEFL, TOEIC and real life. No ads. At your pace.',
  },
  nav: { cta: 'Join the waitlist' },
  hero: {
    eyebrow: 'Waitlist open',
    headlineBefore: 'Speak English ',
    headlineMark: 'for real',
    headlineAfter: ', and see how much you improve every week.',
    sub: 'Polyngual listens to how you speak, tells you exactly what to fix and gets you ready for real life. No ads. At your pace.',
  },
  form: {
    label: 'Your email',
    placeholder: 'Your email',
    button: 'Save my spot',
    sending: 'Saving your spot…',
    consentBefore: 'I agree to receive emails from Polyngual and to the ',
    consentLink: 'privacy policy',
    consentAfter: '.',
    note: 'We open in a few weeks. You will hear before anyone else. No spam.',
    success: 'Done! Check your inbox, we have just written to you.',
    errors: {
      email: 'Check your email address, something seems to be missing.',
      consent: 'Tick the box so we can write to you.',
      server: 'We could not save it. Please try again in a moment.',
    },
  },
  demo: {
    listening: 'Listening',
    analysing: 'Analysing',
    score: 'Pronunciation',
    week: 'this week',
    caption: 'This is how Polyngual corrects you: word by word.',
    sentences: [
      {
        words: ['I', 'think', 'the', 'meeting', 'is', 'on', 'Thursday.'],
        flags: [1, 6],
        tip: { sound: '/θ/', text: 'Let your tongue touch your top teeth.' },
        score: 78,
      },
      {
        words: ['She', 'wants', 'to', 'live', 'near', 'the', 'beach.'],
        flags: [3],
        tip: { sound: '/ɪ/', text: 'Short vowel: “liv”, not “leev”.' },
        score: 84,
      },
      {
        words: ['I’ve', 'worked', 'here', 'for', 'three', 'years.'],
        flags: [1],
        tip: { sound: '/t/', text: 'Let the ending be heard: “workt”.' },
        score: 89,
      },
    ],
  },
  benefits: {
    eyebrow: 'What you will notice',
    title: 'Made for you to speak from day one.',
    items: [
      {
        title: 'Practise by speaking, not just tapping the screen.',
        body: 'Get a pronunciation score and the exact words you need to work on.',
      },
      {
        title: 'Know your real level.',
        body: 'Measure your English when you start and watch it rise, with results you can share on LinkedIn.',
      },
      {
        title: 'Arrive ready for your exam.',
        body: 'TOEFL and TOEIC mock tests with instant feedback and exercises built for the areas you need to work on.',
      },
    ],
    visuals: {
      wordsToWork: 'Words to work on',
      yourLevel: 'Your level',
      share: 'Share {level} on LinkedIn ↗',
      marked: 'Marked',
      checks: [
        { label: 'Organisation', ok: true },
        { label: 'Vocabulary', ok: true },
        { label: 'Linking words: practise today', ok: false },
      ],
    },
  },
  games: {
    eyebrow: 'Learn by playing',
    title: 'Games made from the words you need.',
    sub: 'Polyngual turns the vocabulary you find hard into personalised games, so you practise without feeling like you are studying.',
    points: [
      { title: 'With your words', body: 'The ones you missed in your last practice, not a generic list.' },
      { title: 'Short rounds', body: 'A couple of minutes, whenever you like: on the bus, in a queue, on the sofa.' },
    ],
    game: {
      name: 'Complete the sentence',
      weekWords: 'Your words',
      round: 'Round',
      points: 'Points',
      right: 'Nice!',
      wrong: 'Almost. It was',
      doneTitle: 'Game over!',
      doneBody: 'words right',
      again: 'Play again',
      note: 'Example game with sample words.',
      rounds: [
        { before: 'I need to finish this report before the ', after: '.', options: ['headline', 'deadline', 'lifeline'], answer: 'deadline' },
        { before: 'Can I ', after: ' your pen for a second?', options: ['borrow', 'lend', 'borrowing'], answer: 'borrow' },
        { before: '', after: ' it was raining, we went for a walk.', options: ['However', 'Despite', 'Although'], answer: 'Although' },
      ],
    },
  },
  studio: {
    eyebrow: 'Content that never runs out',
    title: 'You will never run out of things to listen to.',
    sub: 'Polyngual has no catalogue that runs out. It creates podcasts, stories and explanations on the spot, with the words you are learning and the topic you choose.',
    tryLabel: 'Try it',
    create: 'Create',
    steps: ['Writing the script', 'Adding the voices', 'Ready'],
    sampleNote: 'Illustrative example of a generated episode.',
    wordsLabel: 'Your words in this episode',
    formats: [
      {
        id: 'podcast',
        label: 'Podcast',
        prompt: 'What should they talk about?',
        options: [
          {
            label: 'Travel',
            sample: {
              title: 'Lost Luggage at Gate 12',
              meta: 'Podcast · 2:40 · 2 voices',
              words: ['suitcase', 'claim form', 'reference number'],
              lines: [
                { who: 'Bella', parts: [{ text: 'So your ' }, { text: 'suitcase', mark: true }, { text: ' never arrived?' }] },
                { who: 'Michael', parts: [{ text: 'No. I filled out a ' }, { text: 'claim form', mark: true }, { text: ' at the desk.' }] },
                { who: 'Bella', parts: [{ text: 'Did they give you a ' }, { text: 'reference number', mark: true }, { text: '?' }] },
              ],
            },
          },
          {
            label: 'Work',
            sample: {
              title: 'The Interview Warm-Up',
              meta: 'Podcast · 2:55 · 2 voices',
              words: ['strengths', 'deadline', 'team player'],
              lines: [
                { who: 'Michael', parts: [{ text: 'What are your biggest ' }, { text: 'strengths', mark: true }, { text: '?' }] },
                { who: 'Bella', parts: [{ text: 'I never miss a ' }, { text: 'deadline', mark: true }, { text: ', even under pressure.' }] },
                { who: 'Michael', parts: [{ text: 'And you’re a ' }, { text: 'team player', mark: true }, { text: '?' }] },
              ],
            },
          },
          {
            label: 'Food',
            sample: {
              title: 'Ordering Like a Local',
              meta: 'Podcast · 2:20 · 2 voices',
              words: ['recommend', 'spicy', 'the bill'],
              lines: [
                { who: 'Bella', parts: [{ text: 'What would you ' }, { text: 'recommend', mark: true }, { text: ' here?' }] },
                { who: 'Michael', parts: [{ text: 'The tacos. But they’re pretty ' }, { text: 'spicy', mark: true }, { text: '.' }] },
                { who: 'Bella', parts: [{ text: 'Perfect. Can we get ' }, { text: 'the bill', mark: true }, { text: ' after?' }] },
              ],
            },
          },
        ],
      },
      {
        id: 'story',
        label: 'Story',
        prompt: 'Pick a genre',
        options: [
          {
            label: 'Mystery',
            sample: {
              title: 'The Clock That Ran Backwards',
              meta: 'Story · Chapter 1 · narrator and 2 characters',
              words: ['strange', 'noticed', 'whisper'],
              lines: [
                { who: 'Narrator', parts: [{ text: 'Nina ' }, { text: 'noticed', mark: true }, { text: ' something ' }, { text: 'strange', mark: true }, { text: ' about the old clock.' }] },
                { who: 'Nina', parts: [{ text: 'Leo, look. It’s going backwards.' }] },
                { who: 'Leo', parts: [{ text: 'Shh. Did you hear that ' }, { text: 'whisper', mark: true }, { text: '?' }] },
              ],
            },
          },
          {
            label: 'Space',
            sample: {
              title: 'Signal From Station Nine',
              meta: 'Story · Chapter 1 · narrator and 2 characters',
              words: ['signal', 'crew', 'land'],
              lines: [
                { who: 'Narrator', parts: [{ text: 'At midnight, the ' }, { text: 'crew', mark: true }, { text: ' received a ' }, { text: 'signal', mark: true }, { text: '.' }] },
                { who: 'Nina', parts: [{ text: 'It’s coming from Station Nine.' }] },
                { who: 'Leo', parts: [{ text: 'Then we need a safe place to ' }, { text: 'land', mark: true }, { text: '.' }] },
              ],
            },
          },
          {
            label: 'Sports',
            sample: {
              title: 'The Last Minute',
              meta: 'Story · Chapter 1 · narrator and 2 characters',
              words: ['score', 'coach', 'give up'],
              lines: [
                { who: 'Narrator', parts: [{ text: 'One minute left, and the ' }, { text: 'score', mark: true }, { text: ' was tied.' }] },
                { who: 'Leo', parts: [{ text: 'We can’t ' }, { text: 'give up', mark: true }, { text: ' now.' }] },
                { who: 'Nina', parts: [{ text: 'Look at ' }, { text: 'Coach', mark: true }, { text: '. She has a plan.' }] },
              ],
            },
          },
        ],
      },
      {
        id: 'explainer',
        label: 'Explainer',
        prompt: 'What is not clear to you?',
        options: [
          {
            label: 'since or for?',
            sample: {
              title: 'Since vs. For',
              meta: 'Explainer · 1:10 · 1 voice',
              words: ['since', 'for'],
              lines: [
                { who: 'Voice', parts: [{ text: 'Use ' }, { text: 'for', mark: true }, { text: ' with a length of time: for two years.' }] },
                { who: 'Voice', parts: [{ text: 'Use ' }, { text: 'since', mark: true }, { text: ' with a starting point: since 2019.' }] },
                { who: 'Voice', parts: [{ text: 'Your turn: I’ve lived here ___ March.' }] },
              ],
            },
          },
          {
            label: 'make or do?',
            sample: {
              title: 'Make vs. Do',
              meta: 'Explainer · 1:05 · 1 voice',
              words: ['make', 'do'],
              lines: [
                { who: 'Voice', parts: [{ text: 'We ' }, { text: 'make', mark: true }, { text: ' things that didn’t exist: make a cake.' }] },
                { who: 'Voice', parts: [{ text: 'We ' }, { text: 'do', mark: true }, { text: ' tasks and activities: do your homework.' }] },
                { who: 'Voice', parts: [{ text: 'Your turn: ___ a decision.' }] },
              ],
            },
          },
          {
            label: 'The “th” sound',
            sample: {
              title: 'Saying “TH”',
              meta: 'Explainer · 0:55 · 1 voice',
              words: ['think', 'three', 'this'],
              lines: [
                { who: 'Voice', parts: [{ text: 'Put your tongue gently between your teeth.' }] },
                { who: 'Voice', parts: [{ text: 'Now blow softly: ' }, { text: 'think', mark: true }, { text: ', ' }, { text: 'three', mark: true }, { text: '.' }] },
                { who: 'Voice', parts: [{ text: 'Add your voice for ' }, { text: 'this', mark: true }, { text: ' and that.' }] },
              ],
            },
          },
        ],
      },
    ] satisfies StudioFormat[],
    library: [
      { kind: 'Podcasts', title: 'With your words', body: 'Two voices talk for two or three minutes using exactly the vocabulary you are working on. Then you practise each word out loud.' },
      { kind: 'Games', title: 'Learn by playing', body: 'Short games made from the vocabulary you need.' },
      { kind: 'Stories', title: 'In chapters', body: 'Adventure, mystery, animals, space, sports, fantasy or school life, with a narrator and characters in different voices.' },
      { kind: 'Explainers', title: 'On the spot', body: 'Ask about that grammar or pronunciation doubt and hear a short explanation with an example to practise.' },
      { kind: 'Weekly video', title: 'Your recap', body: 'Under a minute, vertical: the sentences you said well, how much you practised and what to reinforce next.' },
      { kind: 'Daily mission', title: 'One thing a day', body: 'A single task, how long it takes and why it helps now. No endless lists.' },
      { kind: 'Pronunciation', title: 'Word by word', body: 'The words that most get in the way of being understood, one by one, until they sound clear.' },
      { kind: 'Vocabulary', title: 'With pictures', body: 'Recognise and remember new words with visual support, without memorising lists.' },
      { kind: 'Mock tests', title: 'TOEFL and TOEIC', body: 'Tasks like the real exam, with instant feedback and exercises built for the areas you need to work on.' },
    ],
  },
  offer: {
    eyebrow: 'Founders offer',
    forever: 'forever',
    body: 'the first 200 people on the list get 50% off the annual plan, forever.',
    cta: 'Save my spot',
  },
  closing: {
    title: 'Your English, a little better every week.',
    body: 'Sign up today and be one of the first to try it.',
    cta: 'Save my spot',
  },
  footer: {
    privacy: 'Privacy policy',
    contact: 'Contact',
    rights: 'Polyngual',
    social: 'Social media',
    examPrep: '{exam} practice',
  },
};
