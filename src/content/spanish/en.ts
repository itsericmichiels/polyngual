import type { SpanishPageContent } from './types';

export const en: SpanishPageContent = {
  lang: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Polyngual Spanish | Speak Spanish for your life on the Costa del Sol',
    description:
      'Spanish from Spain for people who live on the Costa del Sol: a course built around the market, the doctor and the town hall, an AI voice tutor, and your town’s news every morning. 7 days free.',
  },
  nav: { cta: 'Start free', languages: 'Language' },
  hero: {
    eyebrow: 'Spanish from Spain, made for the Costa del Sol',
    title: 'You live in Spain. Now live it in Spanish.',
    sub: 'A course built around your real life here, a voice tutor you can talk to any time, and the news from your own town every morning, at your level.',
    cta: 'Start your free week',
    note: '7 days free. No card needed.',
  },
  year: {
    eyebrow: 'Why now',
    title: 'Make 2027 the year you finally speak Spanish.',
    body: 'You already have the sun, the town and the neighbours. What is missing is the language. Start this winter and by spring you can order, ask and chat with confidence.',
    points: [
      {
        title: 'A New Year plan that lasts',
        body: 'Resolutions fail when there is no system. Polyngual gives you 10 to 20 minutes a day, a streak that forgives a missed day, and a plan that knows where you slip.',
      },
      {
        title: '90 days to everyday Spanish',
        body: 'Begin in January and by April you handle the market, the doctor and your neighbours. If you don’t pass our test after 90 days, the next 90 are free.',
      },
      {
        title: 'Everything is easier in Spanish',
        body: 'The town hall, your builder, the pharmacy, the people next door. Life on the coast opens up when you can talk to it.',
      },
    ],
  },
  features: {
    eyebrow: 'What you get',
    title: 'Everything you need to speak, nothing you don’t.',
    intro: 'No textbook chapters about airports you will never use. Every lesson is about the life you already have here.',
    items: [
      {
        title: 'A course built for life here',
        body: '12 modules on what you actually do in Spain: the flat, the market, the pharmacy, the doctor, weekend plans and the paperwork at the town hall.',
      },
      {
        title: 'A voice tutor who answers back',
        body: 'Talk out loud with Lucía your neighbour, Paco the waiter or Dra. Ruiz. They reply, and when you get stuck you get a hint in your own language.',
      },
      {
        title: 'Your town’s news, every morning',
        body: 'Local news from Estepona, Marbella, Fuengirola, Torremolinos, Málaga and Nerja, rewritten at your level.',
      },
      {
        title: 'Stories read aloud',
        body: 'Short stories at your level, read by a voice from Spain, so your ear gets used to the way people really speak here.',
      },
      {
        title: 'Words that stick',
        body: 'Vocabulary with Spain Spanish audio, brought back right where you slip until it sticks.',
      },
      {
        title: 'See your progress',
        body: 'A clear map of what you know and what you are missing, updated after every exercise.',
      },
    ],
  },
  news: {
    title: 'The news from your town, at your level.',
    body: 'Every morning Polyngual brings you what is happening on the coast, with the words you already know and the new ones to learn highlighted. You read about your own street, not about strangers in a textbook.',
    label: 'Example',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'You know this',
    freshLabel: 'New word',
  },
  steps: {
    title: 'How it works',
    items: [
      { title: 'Tell us your situation', body: 'Living here, here part of the year, or moving soon. Your plan starts from there.' },
      { title: 'Say your first sentence', body: 'Read one sentence aloud and get your first speaking score in under a minute.' },
      { title: 'Practise a little every day', body: 'Ten minutes is enough. Polyngual brings back what you got wrong until you get it right.' },
    ],
  },
  pricing: {
    eyebrow: 'Plans',
    title: 'Choose how fast you want to go.',
    intro: 'Every plan starts with a free week. Pay monthly, or save by choosing a longer plan.',
    recommended: 'Recommended',
    perMonth: 'a month',
    durations: { 1: 'Monthly', 3: '3 months', 6: '6 months', 12: '12 months' },
    billed: (total, months) => (months === 12 ? `${total} a year` : `${total} every ${months} months`),
    save: (percent) => `save ${percent}%`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'The full course, the voice tutor and the local news.',
        perks: ['The full Spanish course', 'AI voice tutor, 3 conversations a day', 'Your town’s news every morning', 'Stories, vocabulary and your progress map'],
      },
      intensive: {
        name: 'Tutor Intensive',
        tagline: 'For people who want to speak Spanish fast.',
        perks: ['Everything in Essential', 'Unlimited AI voice tutor (fair use)', 'A personal study plan, with check-ins from your coach', 'Priority support: answers the same day'],
      },
      couple: {
        name: 'Couples',
        tagline: 'Essential for two, with one payment.',
        perks: ['Two learners, each with their own course and progress', 'Learn together, practise together'],
      },
    },
    cta: 'Start your free week',
    trialNote: 'Choose your plan inside the app after your free week.',
    vat: 'Prices in euros, VAT included. Cancel at any time.',
  },
  guarantee: {
    title: 'Our 90-day guarantee',
    body: 'In 90 days you’ll handle the market, the doctor and your neighbours in Spanish. After 90 days on a paid plan, take our test: if you don’t pass, your next 90 days are free.',
  },
  faq: {
    title: 'Questions',
    items: [
      { q: 'I am a complete beginner. Is this for me?', a: 'Yes. The course starts from your very first words. If you already know the basics, a short check places you further along.' },
      { q: 'Is it Spanish from Spain or from Latin America?', a: 'Spain, with an Andalusian touch: the Spanish you hear every day on the Costa del Sol.' },
      { q: 'Is there a real teacher?', a: 'The voice tutor is AI and is there whenever you are. On Tutor Intensive you also get a personal study plan and regular check-ins from your coach.' },
      { q: 'How does the free week work?', a: 'You get 7 days of everything, with no card. Choose a plan only if you want to keep going.' },
      { q: 'Can I cancel?', a: 'Yes, at any time from your plan page. You keep access until the end of the period you paid for, and you can withdraw within 14 days of your first payment for a full refund.' },
      { q: 'Can my partner and I learn together?', a: 'Yes. The couples plan gives you two learners with one payment, each with their own course and progress.' },
      { q: 'Do I need to install anything?', a: 'No. Polyngual works in the browser on your phone, tablet or computer.' },
    ],
  },
  final: {
    title: 'Your neighbours are waiting to talk to you.',
    sub: 'Start today, free for 7 days.',
    cta: 'Start your free week',
  },
  footer: { privacy: 'Privacy', terms: 'Terms of use', rights: 'Polyngual. All rights reserved.' },
};
