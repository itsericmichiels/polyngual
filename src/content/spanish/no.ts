import type { SpanishPageContent } from './types';

export const no: SpanishPageContent = {
  lang: 'no',
  htmlLang: 'nb',
  meta: {
    title: 'Polyngual Spansk | Snakk spansk i livet ditt på Costa del Sol',
    description:
      'Spansk fra Spania for deg som bor på Costa del Sol: et kurs om markedet, legen og rådhuset, en AI-stemmetutor og nyhetene fra stedet ditt hver morgen. 7 dager gratis.',
  },
  nav: { cta: 'Start gratis', languages: 'Språk' },
  hero: {
    eyebrow: 'Spansk fra Spania, laget for Costa del Sol',
    title: 'Du bor i Spania. Lev det nå på spansk.',
    sub: 'Et kurs bygd rundt det ekte livet ditt her, en stemmetutor du kan snakke med når som helst, og nyhetene fra ditt eget sted hver morgen, på ditt nivå.',
    cta: 'Start den gratis uken',
    note: '7 dager gratis. Ingen kort.',
  },
  year: {
    eyebrow: 'Hvorfor nå',
    title: 'Gjør 2027 til året du endelig snakker spansk.',
    body: 'Sola, stedet og naboene har du allerede. Det som mangler, er språket. Start i vinter, så bestiller, spør og prater du med selvtillit til våren.',
    points: [
      {
        title: 'Et nyttårsforsett som holder',
        body: 'Forsett ryker når det ikke finnes noe system. Polyngual gir deg 10 til 20 minutter om dagen, en rekke som tilgir en glemt dag, og en plan som vet hvor du snubler.',
      },
      {
        title: '90 dager til hverdagsspansk',
        body: 'Start i januar, så klarer du markedet, legen og naboene i april. Består du ikke testen vår etter 90 dager, er de neste 90 dagene gratis.',
      },
      {
        title: 'Alt er lettere på spansk',
        body: 'Rådhuset, håndverkeren, apoteket, folkene ved siden av. Livet på kysten åpner seg når du kan snakke med det.',
      },
    ],
  },
  features: {
    eyebrow: 'Dette får du',
    title: 'Alt du trenger for å snakke. Ingenting du ikke trenger.',
    intro: 'Ingen lærebokkapitler om flyplasser du aldri bruker. Hver leksjon handler om livet du allerede har her.',
    items: [
      { title: 'Et kurs for livet her', body: '12 moduler om det du faktisk gjør i Spania: leiligheten, markedet, apoteket, legen, helgeplaner og papirene på rådhuset.' },
      { title: 'En stemmetutor som svarer', body: 'Snakk høyt med Lucía, naboen din, Paco, servitøren, eller Dra. Ruiz. De svarer, og når du står fast, får du et hint.' },
      { title: 'Nyhetene fra stedet ditt, hver morgen', body: 'Lokale nyheter fra Estepona, Marbella, Fuengirola, Torremolinos, Málaga og Nerja, skrevet om til ditt nivå.' },
      { title: 'Historier lest høyt', body: 'Korte historier på ditt nivå, lest av en stemme fra Spania, så øret ditt venner seg til hvordan folk faktisk snakker her.' },
      { title: 'Ord som sitter', body: 'Ordforråd med lyd på spansk fra Spania, som kommer tilbake akkurat der du snubler til det sitter.' },
      { title: 'Se fremgangen din', body: 'Et tydelig kart over hva du kan og hva du mangler, oppdatert etter hver øvelse.' },
    ],
  },
  news: {
    title: 'Nyhetene fra stedet ditt, på ditt nivå.',
    body: 'Hver morgen gir Polyngual deg det som skjer på kysten, med ordene du allerede kan og de nye markert. Du leser om din egen gate, ikke om fremmede i en lærebok.',
    label: 'Eksempel',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'Dette kan du',
    freshLabel: 'Nytt ord',
  },
  steps: {
    title: 'Slik fungerer det',
    items: [
      { title: 'Fortell oss om situasjonen din', body: 'Du bor her, er her deler av året eller flytter snart. Planen din starter der.' },
      { title: 'Si den første setningen din', body: 'Les en setning høyt og få din første vurdering på under ett minutt.' },
      { title: 'Øv litt hver dag', body: 'Ti minutter holder. Polyngual henter fram igjen det du tok feil av, til du kan det.' },
    ],
  },
  pricing: {
    eyebrow: 'Abonnementer',
    title: 'Velg hvor fort du vil komme deg fram.',
    intro: 'Alle abonnementer starter med en gratis uke. Betal månedlig, eller spar med et lengre abonnement.',
    recommended: 'Anbefalt',
    perMonth: 'i måneden',
    durations: { 1: 'Månedlig', 3: '3 måneder', 6: '6 måneder' },
    billed: (total, months) => `${total} hver ${months}. måned`,
    save: (percent) => `spar ${percent} %`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'Hele kurset, stemmetutoren og de lokale nyhetene.',
        perks: ['Hele spanskkurset', 'AI-stemmetutor, 3 samtaler om dagen', 'Nyhetene fra stedet ditt hver morgen', 'Historier, ordforråd og fremgangskartet ditt'],
      },
      intensive: {
        name: 'Tutor Intensiv',
        tagline: 'For deg som vil snakke spansk fort.',
        perks: ['Alt i Essential', 'Stemme- eller videotutor: opptil 30 minutter om dagen', 'En personlig studieplan med oppfølging fra coachen din', 'Prioritert support: svar samme dag'],
      },
      couple: {
        name: 'Par',
        tagline: 'Essential for to, med én betaling.',
        perks: ['To personer, hver med eget kurs og egen fremgang', 'Lær sammen, øv sammen'],
      },
    },
    cta: 'Start den gratis uken',
    trialNote: 'Du velger abonnement i appen etter den gratis uken.',
    vat: 'Priser i euro, inkludert mva. Kan sies opp når som helst.',
  },
  guarantee: {
    title: 'Vår 90-dagersgaranti',
    body: 'Om 90 dager klarer du markedet, legen og naboene på spansk. Etter 90 dager med et betalt abonnement tar du testen vår: består du den ikke, er de neste 90 dagene gratis.',
  },
  appLanguageNote: 'Appen finnes i dag på engelsk, tysk og dansk. Norsk kommer.',
  faq: {
    title: 'Spørsmål',
    items: [
      { q: 'Jeg er helt nybegynner. Passer dette for meg?', a: 'Ja. Kurset starter fra de aller første ordene dine. Kan du allerede det grunnleggende, plasserer en kort test deg lenger fram.' },
      { q: 'Er det spansk fra Spania eller fra Latin-Amerika?', a: 'Fra Spania, med et andalusisk preg: den spansken du hører hver dag på Costa del Sol.' },
      { q: 'Finnes det en ekte lærer?', a: 'Stemmetutoren er AI og er der når du er. Med Tutor Intensiv får du også en personlig studieplan og jevnlig oppfølging fra coachen din.' },
      { q: 'Hvordan fungerer den gratis uken?', a: 'Du får 7 dager med alt, uten kort. Velg et abonnement bare hvis du vil fortsette.' },
      { q: 'Kan jeg si opp?', a: 'Ja, når som helst på abonnementssiden din. Du beholder tilgangen til slutten av perioden du har betalt for, og du kan angre innen 14 dager etter første betaling og få alt tilbake.' },
      { q: 'Kan partneren min og jeg lære sammen?', a: 'Ja. Parabonnementet gir to personer med én betaling, hver med eget kurs og egen fremgang.' },
      { q: 'Må jeg installere noe?', a: 'Nei. Polyngual fungerer i nettleseren på mobilen, nettbrettet eller datamaskinen.' },
    ],
  },
  final: {
    title: 'Naboene dine venter på å snakke med deg.',
    sub: 'Start i dag, gratis i 7 dager.',
    cta: 'Start den gratis uken',
  },
  footer: { privacy: 'Personvern', terms: 'Vilkår', rights: 'Polyngual. Alle rettigheter forbeholdt.' },
};
