import type { SpanishPageContent } from './types';

export const da: SpanishPageContent = {
  lang: 'da',
  htmlLang: 'da',
  meta: {
    title: 'Polyngual Spansk | Tal spansk i dit liv på Costa del Sol',
    description:
      'Spansk fra Spanien til dig, der bor på Costa del Sol: et kursus om markedet, lægen og rådhuset, en AI-stemmetutor og nyhederne fra din by hver morgen. 7 dage gratis.',
  },
  nav: { cta: 'Start gratis', languages: 'Sprog' },
  hero: {
    eyebrow: 'Spansk fra Spanien, lavet til Costa del Sol',
    title: 'Du bor i Spanien. Lev det nu på spansk.',
    sub: 'Et kursus bygget op om dit rigtige liv her, en stemmetutor du kan tale med når som helst, og nyhederne fra din egen by hver morgen, på dit niveau.',
    cta: 'Start din gratis uge',
    note: '7 dage gratis. Intet kort.',
  },
  year: {
    eyebrow: 'Hvorfor nu',
    title: 'Gør 2027 til året, hvor du endelig taler spansk.',
    body: 'Solen, byen og naboerne har du allerede. Det, der mangler, er sproget. Start denne vinter, og til foråret bestiller, spørger og snakker du med selvtillid.',
    points: [
      {
        title: 'Et nytårsforsæt, der holder',
        body: 'Forsæt fejler, når der ikke er noget system. Polyngual giver dig 10 til 20 minutter om dagen, en stime der tilgiver en glemt dag, og en plan der ved, hvor du snubler.',
      },
      {
        title: '90 dage til hverdagsspansk',
        body: 'Start i januar, og i april klarer du markedet, lægen og naboerne. Hvis ikke, forlænger vi dit abonnement gratis.',
      },
      {
        title: 'Alt er lettere på spansk',
        body: 'Rådhuset, din håndværker, apoteket, folkene ved siden af. Livet på kysten åbner sig, når du kan tale med det.',
      },
    ],
  },
  features: {
    eyebrow: 'Det får du',
    title: 'Alt hvad du skal bruge for at tale. Intet, du ikke skal bruge.',
    intro: 'Ingen lærebogskapitler om lufthavne, du aldrig bruger. Hver lektion handler om det liv, du allerede har her.',
    items: [
      { title: 'Et kursus til livet her', body: '12 moduler om det, du faktisk gør i Spanien: lejligheden, markedet, apoteket, lægen, weekendplaner og papirerne på rådhuset.' },
      { title: 'En stemmetutor, der svarer igen', body: 'Tal højt med Lucía, din nabo, Paco, tjeneren, eller Dra. Ruiz. De svarer, og når du går i stå, får du et tip på dit eget sprog.' },
      { title: 'Nyhederne fra din by, hver morgen', body: 'Lokale nyheder fra Estepona, Marbella, Fuengirola, Torremolinos, Málaga og Nerja, skrevet om til dit niveau.' },
      { title: 'Historier læst højt', body: 'Korte historier på dit niveau, læst af en stemme fra Spanien, så dit øre vænner sig til, hvordan man virkelig taler her.' },
      { title: 'Ord, der bliver siddende', body: 'Ordforråd med lyd på spansk fra Spanien, gentaget præcis der, hvor du snubler, til det sidder.' },
      { title: 'Se dine fremskridt', body: 'Et klart kort over, hvad du kan, og hvad du mangler, opdateret efter hver øvelse.' },
    ],
  },
  news: {
    title: 'Nyhederne fra din by, på dit niveau.',
    body: 'Hver morgen bringer Polyngual dig det, der sker på kysten, med de ord du allerede kender og de nye fremhævet. Du læser om din egen gade, ikke om fremmede i en lærebog.',
    label: 'Eksempel',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'Det kender du',
    freshLabel: 'Nyt ord',
  },
  steps: {
    title: 'Sådan virker det',
    items: [
      { title: 'Fortæl os om din situation', body: 'Du bor her, er her en del af året eller flytter snart. Din plan starter derfra.' },
      { title: 'Sig din første sætning', body: 'Læs en sætning højt og få din første vurdering på under et minut.' },
      { title: 'Øv lidt hver dag', body: 'Ti minutter er nok. Polyngual henter det, du tog fejl af, frem igen, til du kan det.' },
    ],
  },
  pricing: {
    eyebrow: 'Abonnementer',
    title: 'Vælg, hvor hurtigt du vil frem.',
    intro: 'Alle abonnementer starter med en gratis uge. Betal månedligt, eller spar med et længere abonnement.',
    recommended: 'Anbefalet',
    perMonth: 'om måneden',
    durations: { 1: 'Månedligt', 3: '3 måneder', 6: '6 måneder', 12: '12 måneder' },
    billed: (total, months) => (months === 12 ? `${total} om året` : `${total} hver ${months}. måned`),
    save: (percent) => `spar ${percent} %`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'Hele kurset, stemmetutoren og de lokale nyheder.',
        perks: ['Hele spanskkurset', 'AI-stemmetutor, 3 samtaler om dagen', 'Nyhederne fra din by hver morgen', 'Historier, ordforråd og dit fremskridtskort'],
      },
      intensive: {
        name: 'Tutor Intensiv',
        tagline: 'Til dig, der vil tale spansk hurtigt.',
        perks: ['Alt i Essential', 'Ubegrænset AI-stemmetutor (rimelig brug)', 'En personlig studieplan med opfølgning fra din coach', 'Prioriteret support: svar samme dag'],
      },
      couple: {
        name: 'Par',
        tagline: 'Essential for to, med én betaling.',
        perks: ['To personer, hver med eget kursus og egne fremskridt', 'Lær sammen, øv sammen'],
      },
    },
    cta: 'Start din gratis uge',
    trialNote: 'Du vælger dit abonnement i appen efter din gratis uge.',
    vat: 'Priser i euro, inklusive moms. Kan opsiges når som helst.',
  },
  guarantee: {
    title: 'Vores 90-dages garanti',
    body: 'Om 90 dage klarer du markedet, lægen og naboerne på spansk, ellers forlænger vi dit abonnement gratis, til du gør.',
  },
  faq: {
    title: 'Spørgsmål',
    items: [
      { q: 'Jeg er helt nybegynder. Er det noget for mig?', a: 'Ja. Kurset starter fra dine allerførste ord. Kan du allerede det grundlæggende, placerer en kort test dig længere fremme.' },
      { q: 'Er det spansk fra Spanien eller fra Latinamerika?', a: 'Fra Spanien, med et andalusisk præg: det spansk, du hører hver dag på Costa del Sol.' },
      { q: 'Er der en rigtig lærer?', a: 'Stemmetutoren er AI og er der, når du er. Med Tutor Intensiv får du også en personlig studieplan og jævnlig opfølgning fra din coach.' },
      { q: 'Hvordan virker den gratis uge?', a: 'Du får 7 dage med det hele, uden kort. Vælg kun et abonnement, hvis du vil fortsætte.' },
      { q: 'Kan jeg opsige?', a: 'Ja, når som helst på din abonnementsside. Du beholder adgangen til slutningen af den betalte periode, og du kan fortryde inden for 14 dage efter din første betaling og få det hele tilbage.' },
      { q: 'Kan min partner og jeg lære sammen?', a: 'Ja. Parabonnementet giver to personer med én betaling, hver med eget kursus og egne fremskridt.' },
      { q: 'Skal jeg installere noget?', a: 'Nej. Polyngual virker i browseren på din telefon, tablet eller computer.' },
    ],
  },
  final: {
    title: 'Dine naboer venter på at tale med dig.',
    sub: 'Start i dag, gratis i 7 dage.',
    cta: 'Start din gratis uge',
  },
  footer: { privacy: 'Privatliv', terms: 'Vilkår', rights: 'Polyngual. Alle rettigheder forbeholdes.' },
};
