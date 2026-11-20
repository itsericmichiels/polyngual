import type { SpanishPageContent } from './types';

export const nl: SpanishPageContent = {
  lang: 'nl',
  htmlLang: 'nl',
  meta: {
    title: 'Polyngual Spaans | Spreek Spaans in je leven aan de Costa del Sol',
    description:
      'Spaans uit Spanje voor wie aan de Costa del Sol woont: een cursus rond de markt, de dokter en het gemeentehuis, een AI-spraaktutor en elke ochtend het nieuws uit je eigen dorp. 7 dagen gratis.',
  },
  nav: { cta: 'Gratis beginnen', languages: 'Taal' },
  hero: {
    eyebrow: 'Spaans uit Spanje, gemaakt voor de Costa del Sol',
    title: 'Je woont in Spanje. Leef het nu in het Spaans.',
    sub: 'Een cursus rond je echte leven hier, een spraaktutor met wie je altijd kunt praten, en elke ochtend het nieuws uit je eigen dorp, op jouw niveau.',
    cta: 'Start je gratis week',
    note: '7 dagen gratis. Geen kaart nodig.',
  },
  year: {
    eyebrow: 'Waarom nu',
    title: 'Maak van 2027 het jaar waarin je eindelijk Spaans spreekt.',
    body: 'De zon, het dorp en de buren heb je al. Wat ontbreekt, is de taal. Begin deze winter en in het voorjaar bestel, vraag en klets je met zelfvertrouwen.',
    points: [
      {
        title: 'Een goed voornemen dat blijft',
        body: 'Voornemens mislukken als er geen systeem is. Polyngual geeft je 10 tot 20 minuten per dag, een reeks die een gemiste dag vergeeft en een plan dat weet waar je struikelt.',
      },
      {
        title: '90 dagen naar alledaags Spaans',
        body: 'Begin in januari en in april red je je op de markt, bij de dokter en met je buren. Haal je onze test na 90 dagen niet, dan zijn de volgende 90 dagen gratis.',
      },
      {
        title: 'In het Spaans gaat alles makkelijker',
        body: 'Het gemeentehuis, je aannemer, de apotheek, de mensen naast je. Het leven aan de kust gaat open als je ermee kunt praten.',
      },
    ],
  },
  features: {
    eyebrow: 'Wat je krijgt',
    title: 'Alles wat je nodig hebt om te spreken. Niets wat je niet nodig hebt.',
    intro: 'Geen hoofdstukken over vliegvelden die je nooit gebruikt. Elke les gaat over het leven dat je hier al hebt.',
    items: [
      { title: 'Een cursus voor het leven hier', body: '12 modules over wat je in Spanje echt doet: het appartement, de markt, de apotheek, de dokter, weekendplannen en de papieren op het gemeentehuis.' },
      { title: 'Een spraaktutor die terugpraat', body: 'Praat hardop met Lucía, je buurvrouw, Paco, de ober, of Dra. Ruiz. Ze antwoorden, en als je vastloopt krijg je een hint.' },
      { title: 'Het nieuws uit je dorp, elke ochtend', body: 'Lokaal nieuws uit Estepona, Marbella, Fuengirola, Torremolinos, Málaga en Nerja, herschreven op jouw niveau.' },
      { title: 'Verhalen voorgelezen', body: 'Korte verhalen op jouw niveau, voorgelezen door een stem uit Spanje, zodat je oor went aan hoe men hier echt praat.' },
      { title: 'Woorden die blijven hangen', body: 'Woordenschat met audio in Spaans uit Spanje, die terugkomt precies waar je struikelt, tot hij blijft hangen.' },
      { title: 'Zie je vooruitgang', body: 'Een duidelijke kaart van wat je kunt en wat je nog mist, bijgewerkt na elke oefening.' },
    ],
  },
  news: {
    title: 'Het nieuws uit je dorp, op jouw niveau.',
    body: 'Elke ochtend brengt Polyngual je wat er aan de kust gebeurt, met de woorden die je al kent en de nieuwe gemarkeerd. Je leest over je eigen straat, niet over vreemden in een lesboek.',
    label: 'Voorbeeld',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'Dit ken je',
    freshLabel: 'Nieuw woord',
  },
  steps: {
    title: 'Zo werkt het',
    items: [
      { title: 'Vertel ons je situatie', body: 'Je woont hier, bent hier een deel van het jaar of verhuist binnenkort. Je plan begint daar.' },
      { title: 'Zeg je eerste zin', body: 'Lees één zin hardop en krijg binnen een minuut je eerste score.' },
      { title: 'Oefen elke dag een beetje', body: 'Tien minuten is genoeg. Polyngual haalt terug wat je fout deed, tot je het kunt.' },
    ],
  },
  pricing: {
    eyebrow: 'Abonnementen',
    title: 'Kies hoe snel je vooruit wilt.',
    intro: 'Elk abonnement begint met een gratis week. Betaal per maand of bespaar met een langer abonnement.',
    recommended: 'Aanbevolen',
    perMonth: 'per maand',
    durations: { 1: 'Per maand', 3: '3 maanden', 6: '6 maanden' },
    billed: (total, months) => `${total} per ${months} maanden`,
    save: (percent) => `${percent}% korting`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'De hele cursus, de spraaktutor en het lokale nieuws.',
        perks: ['De volledige cursus Spaans', 'Spraaktutor: tot 15 minuten per dag', 'Elke ochtend het nieuws uit je dorp', 'Verhalen, woordenschat en je voortgangskaart'],
      },
      intensive: {
        name: 'Tutor Intensief',
        tagline: 'Voor wie snel Spaans wil spreken.',
        perks: ['Alles uit Essential', 'Spraak- of videotutor: tot 30 minuten per dag', 'Een persoonlijk studieplan met check-ins van je coach', 'Voorrang bij support: antwoord dezelfde dag'],
      },
      couple: {
        name: 'Stellen',
        tagline: 'Essential voor twee, met één betaling.',
        perks: ['Twee personen, elk met een eigen cursus en voortgang', 'Samen leren, samen oefenen'],
      },
    },
    cta: 'Start je gratis week',
    trialNote: 'Je kiest je abonnement in de app na je gratis week.',
    vat: 'Prijzen in euro, inclusief btw. Altijd opzegbaar.',
  },
  guarantee: {
    title: 'Onze 90-dagengarantie',
    body: 'Binnen 90 dagen red je je in het Spaans op de markt, bij de dokter en met je buren. Na 90 dagen met een betaald abonnement doe je onze test: haal je hem niet, dan zijn de volgende 90 dagen gratis.',
  },
  appLanguageNote: 'De app is nu beschikbaar in het Engels, Duits en Deens. Nederlands komt eraan.',
  faq: {
    title: 'Vragen',
    items: [
      { q: 'Ik ben een echte beginner. Is dit iets voor mij?', a: 'Ja. De cursus begint bij je allereerste woorden. Ken je de basis al, dan plaatst een korte test je verder.' },
      { q: 'Is het Spaans uit Spanje of uit Latijns-Amerika?', a: 'Uit Spanje, met een Andalusisch tintje: het Spaans dat je elke dag aan de Costa del Sol hoort.' },
      { q: 'Is er een echte docent?', a: 'De spraaktutor is AI en is er wanneer jij tijd hebt. Met Tutor Intensief krijg je ook een persoonlijk studieplan en regelmatige check-ins van je coach.' },
      { q: 'Hoe werkt de gratis week?', a: 'Je krijgt 7 dagen alles, zonder kaart. Kies alleen een abonnement als je door wilt gaan.' },
      { q: 'Kan ik opzeggen?', a: 'Ja, altijd, op je abonnementspagina. Je houdt toegang tot het einde van de betaalde periode, en je kunt binnen 14 dagen na je eerste betaling herroepen en alles terugkrijgen.' },
      { q: 'Kunnen mijn partner en ik samen leren?', a: 'Ja. Het abonnement voor stellen geeft twee personen met één betaling, elk met een eigen cursus en voortgang.' },
      { q: 'Moet ik iets installeren?', a: 'Nee. Polyngual werkt in de browser op je telefoon, tablet of computer.' },
    ],
  },
  final: {
    title: 'Je buren wachten om met je te praten.',
    sub: 'Begin vandaag, 7 dagen gratis.',
    cta: 'Start je gratis week',
  },
  footer: { privacy: 'Privacy', terms: 'Gebruiksvoorwaarden', rights: 'Polyngual. Alle rechten voorbehouden.' },
};
