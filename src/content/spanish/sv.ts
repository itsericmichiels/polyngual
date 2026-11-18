import type { SpanishPageContent } from './types';

export const sv: SpanishPageContent = {
  lang: 'sv',
  htmlLang: 'sv',
  meta: {
    title: 'Polyngual Spanska | Prata spanska i ditt liv på Costa del Sol',
    description:
      'Spanska från Spanien för dig som bor på Costa del Sol: en kurs kring marknaden, läkaren och kommunen, en AI-rösttutor och nyheterna från din ort varje morgon. 7 dagar gratis.',
  },
  nav: { cta: 'Börja gratis', languages: 'Språk' },
  hero: {
    eyebrow: 'Spanska från Spanien, gjord för Costa del Sol',
    title: 'Du bor i Spanien. Lev det nu på spanska.',
    sub: 'En kurs byggd kring ditt riktiga liv här, en rösttutor du kan prata med när som helst, och nyheterna från din egen ort varje morgon, på din nivå.',
    cta: 'Starta din gratisvecka',
    note: '7 dagar gratis. Inget kort behövs.',
  },
  year: {
    eyebrow: 'Varför nu',
    title: 'Gör 2027 till året då du äntligen pratar spanska.',
    body: 'Solen, orten och grannarna har du redan. Det som saknas är språket. Börja i vinter, så beställer, frågar och småpratar du med självförtroende till våren.',
    points: [
      {
        title: 'Ett nyårslöfte som håller',
        body: 'Nyårslöften spricker när det inte finns något system. Polyngual ger dig 10 till 20 minuter om dagen, en svit som förlåter en missad dag och en plan som vet var du snubblar.',
      },
      {
        title: '90 dagar till vardagsspanska',
        body: 'Börja i januari, så klarar du marknaden, läkaren och grannarna i april. Klarar du inte vårt test efter 90 dagar, är de följande 90 dagarna gratis.',
      },
      {
        title: 'Allt är lättare på spanska',
        body: 'Kommunen, hantverkaren, apoteket, folket bredvid. Livet vid kusten öppnar sig när du kan prata med det.',
      },
    ],
  },
  features: {
    eyebrow: 'Det här får du',
    title: 'Allt du behöver för att prata. Inget du inte behöver.',
    intro: 'Inga läroboksavsnitt om flygplatser du aldrig använder. Varje lektion handlar om livet du redan har här.',
    items: [
      { title: 'En kurs för livet här', body: '12 moduler om det du faktiskt gör i Spanien: lägenheten, marknaden, apoteket, läkaren, helgplaner och pappren på kommunen.' },
      { title: 'En rösttutor som svarar', body: 'Prata högt med Lucía, din granne, Paco, servitören, eller Dra. Ruiz. De svarar, och när du kör fast får du en ledtråd.' },
      { title: 'Nyheterna från din ort, varje morgon', body: 'Lokala nyheter från Estepona, Marbella, Fuengirola, Torremolinos, Málaga och Nerja, omskrivna till din nivå.' },
      { title: 'Berättelser som läses högt', body: 'Korta berättelser på din nivå, lästa av en röst från Spanien, så att ditt öra vänjer sig vid hur man faktiskt pratar här.' },
      { title: 'Ord som fastnar', body: 'Ordförråd med ljud på spanska från Spanien, som kommer tillbaka precis där du snubblar tills det sitter.' },
      { title: 'Se dina framsteg', body: 'En tydlig karta över vad du kan och vad du saknar, uppdaterad efter varje övning.' },
    ],
  },
  news: {
    title: 'Nyheterna från din ort, på din nivå.',
    body: 'Varje morgon ger dig Polyngual det som händer på kusten, med orden du redan kan och de nya markerade. Du läser om din egen gata, inte om främlingar i en lärobok.',
    label: 'Exempel',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'Det här kan du',
    freshLabel: 'Nytt ord',
  },
  steps: {
    title: 'Så fungerar det',
    items: [
      { title: 'Berätta om din situation', body: 'Du bor här, är här en del av året eller flyttar snart. Din plan börjar där.' },
      { title: 'Säg din första mening', body: 'Läs en mening högt och få ditt första betyg på mindre än en minut.' },
      { title: 'Öva lite varje dag', body: 'Tio minuter räcker. Polyngual tar fram det du gjorde fel igen, tills du kan det.' },
    ],
  },
  pricing: {
    eyebrow: 'Abonnemang',
    title: 'Välj hur snabbt du vill komma framåt.',
    intro: 'Alla abonnemang börjar med en gratisvecka. Betala månadsvis eller spara med ett längre abonnemang.',
    recommended: 'Rekommenderas',
    perMonth: 'i månaden',
    durations: { 1: 'Månadsvis', 3: '3 månader', 6: '6 månader' },
    billed: (total, months) => `${total} var ${months}:e månad`,
    save: (percent) => `spara ${percent} %`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'Hela kursen, rösttutorn och de lokala nyheterna.',
        perks: ['Hela spanskakursen', 'AI-rösttutor, 3 samtal om dagen', 'Nyheterna från din ort varje morgon', 'Berättelser, ordförråd och din framstegskarta'],
      },
      intensive: {
        name: 'Tutor Intensiv',
        tagline: 'För dig som vill prata spanska snabbt.',
        perks: ['Allt i Essential', 'Obegränsad AI-rösttutor (rimlig användning)', 'En personlig studieplan med uppföljning från din coach', 'Prioriterad support: svar samma dag'],
      },
      couple: {
        name: 'Par',
        tagline: 'Essential för två, med en betalning.',
        perks: ['Två personer, var och en med egen kurs och egna framsteg', 'Lär er tillsammans, öva tillsammans'],
      },
    },
    cta: 'Starta din gratisvecka',
    trialNote: 'Du väljer abonnemang i appen efter din gratisvecka.',
    vat: 'Priser i euro, inklusive moms. Säg upp när du vill.',
  },
  guarantee: {
    title: 'Vår 90-dagarsgaranti',
    body: 'Om 90 dagar klarar du marknaden, läkaren och grannarna på spanska. Efter 90 dagar med ett betalt abonnemang gör du vårt test: klarar du det inte, är de följande 90 dagarna gratis.',
  },
  faq: {
    title: 'Frågor',
    items: [
      { q: 'Jag är nybörjare. Passar det mig?', a: 'Ja. Kursen börjar från dina allra första ord. Kan du redan grunderna placerar ett kort test dig längre fram.' },
      { q: 'Är det spanska från Spanien eller Latinamerika?', a: 'Från Spanien, med en andalusisk touch: den spanska du hör varje dag på Costa del Sol.' },
      { q: 'Finns det en riktig lärare?', a: 'Rösttutorn är AI och finns där när du har tid. Med Tutor Intensiv får du också en personlig studieplan och regelbunden uppföljning från din coach.' },
      { q: 'Hur fungerar gratisveckan?', a: 'Du får 7 dagar med allt, utan kort. Välj ett abonnemang bara om du vill fortsätta.' },
      { q: 'Kan jag säga upp?', a: 'Ja, när som helst på din abonnemangssida. Du behåller tillgången till slutet av perioden du betalat för, och du kan ångra dig inom 14 dagar efter din första betalning och få allt tillbaka.' },
      { q: 'Kan min partner och jag lära oss tillsammans?', a: 'Ja. Parabonnemanget ger två personer med en betalning, var och en med egen kurs och egna framsteg.' },
      { q: 'Behöver jag installera något?', a: 'Nej. Polyngual fungerar i webbläsaren på mobilen, surfplattan eller datorn.' },
    ],
  },
  final: {
    title: 'Dina grannar väntar på att få prata med dig.',
    sub: 'Börja i dag, gratis i 7 dagar.',
    cta: 'Starta din gratisvecka',
  },
  footer: { privacy: 'Integritet', terms: 'Villkor', rights: 'Polyngual. Alla rättigheter förbehållna.' },
};
