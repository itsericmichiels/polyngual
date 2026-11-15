import type { SpanishPageContent } from './types';

export const de: SpanishPageContent = {
  lang: 'de',
  htmlLang: 'de',
  meta: {
    title: 'Polyngual Spanisch | Spanisch für dein Leben an der Costa del Sol',
    description:
      'Spanisch aus Spanien für alle, die an der Costa del Sol leben: ein Kurs rund um Markt, Arzt und Rathaus, ein KI-Sprach-Tutor und jeden Morgen die Nachrichten aus deinem Ort. 7 Tage kostenlos.',
  },
  nav: { cta: 'Kostenlos starten', languages: 'Sprache' },
  hero: {
    eyebrow: 'Spanisch aus Spanien, gemacht für die Costa del Sol',
    title: 'Du lebst in Spanien. Jetzt leb es auf Spanisch.',
    sub: 'Ein Kurs rund um dein echtes Leben hier, ein Sprach-Tutor, mit dem du jederzeit sprechen kannst, und jeden Morgen die Nachrichten aus deinem Ort, auf deinem Niveau.',
    cta: 'Kostenlose Woche starten',
    note: '7 Tage kostenlos. Keine Karte nötig.',
  },
  year: {
    eyebrow: 'Warum jetzt',
    title: 'Mach 2027 zu dem Jahr, in dem du endlich Spanisch sprichst.',
    body: 'Die Sonne, den Ort und die Nachbarn hast du schon. Was fehlt, ist die Sprache. Fang diesen Winter an, und im Frühling bestellst, fragst und plauderst du mit Selbstvertrauen.',
    points: [
      {
        title: 'Ein Neujahrsvorsatz, der hält',
        body: 'Vorsätze scheitern, wenn es kein System gibt. Polyngual gibt dir 10 bis 20 Minuten am Tag, eine Serie, die einen verpassten Tag verzeiht, und einen Plan, der weiß, wo du hängst.',
      },
      {
        title: '90 Tage bis zum Alltagsspanisch',
        body: 'Fang im Januar an, und im April kommst du auf dem Markt, beim Arzt und mit deinen Nachbarn zurecht. Bestehst du nach 90 Tagen unseren Test nicht, sind die nächsten 90 Tage kostenlos.',
      },
      {
        title: 'Auf Spanisch ist alles leichter',
        body: 'Das Rathaus, dein Handwerker, die Apotheke, die Leute nebenan. Das Leben an der Küste öffnet sich, wenn du mit ihm sprechen kannst.',
      },
    ],
  },
  features: {
    eyebrow: 'Was du bekommst',
    title: 'Alles, was du zum Sprechen brauchst. Nichts, was du nicht brauchst.',
    intro: 'Keine Lehrbuchkapitel über Flughäfen, die du nie benutzt. Jede Lektion dreht sich um das Leben, das du hier schon hast.',
    items: [
      { title: 'Ein Kurs für das Leben hier', body: '12 Module über das, was du in Spanien wirklich tust: die Wohnung, der Markt, die Apotheke, der Arzt, Pläne fürs Wochenende und die Formulare im Rathaus.' },
      { title: 'Ein Sprach-Tutor, der antwortet', body: 'Sprich laut mit Lucía, deiner Nachbarin, mit Paco, dem Kellner, oder mit Dra. Ruiz. Sie antworten, und wenn du nicht weiterweißt, bekommst du einen Tipp in deiner Sprache.' },
      { title: 'Die Nachrichten aus deinem Ort, jeden Morgen', body: 'Lokalnachrichten aus Estepona, Marbella, Fuengirola, Torremolinos, Málaga und Nerja, auf dein Niveau umgeschrieben.' },
      { title: 'Vorgelesene Geschichten', body: 'Kurze Geschichten auf deinem Niveau, gelesen von einer Stimme aus Spanien, damit sich dein Ohr an das echte Spanisch hier gewöhnt.' },
      { title: 'Wörter, die bleiben', body: 'Wortschatz mit Audio in spanischem Spanisch, genau dort wiederholt, wo du hängst, bis er sitzt.' },
      { title: 'Sieh deinen Fortschritt', body: 'Eine klare Karte von dem, was du kannst und was dir noch fehlt, nach jeder Übung aktualisiert.' },
    ],
  },
  news: {
    title: 'Die Nachrichten aus deinem Ort, auf deinem Niveau.',
    body: 'Jeden Morgen bringt dir Polyngual, was an der Küste passiert, mit den Wörtern, die du schon kennst, und den neuen markiert. Du liest über deine eigene Straße, nicht über Fremde aus dem Lehrbuch.',
    label: 'Beispiel',
    headline: 'El mercadillo de Fuengirola abre este martes con nuevos puestos de fruta y verdura.',
    known: 'mercadillo',
    fresh: 'puestos',
    knownLabel: 'Kennst du schon',
    freshLabel: 'Neues Wort',
  },
  steps: {
    title: 'So funktioniert es',
    items: [
      { title: 'Erzähl uns von deiner Situation', body: 'Du lebst hier, bist einen Teil des Jahres hier oder ziehst bald her. Dein Plan beginnt genau dort.' },
      { title: 'Sag deinen ersten Satz', body: 'Lies einen Satz laut vor und bekomm in weniger als einer Minute deine erste Bewertung.' },
      { title: 'Übe jeden Tag ein bisschen', body: 'Zehn Minuten reichen. Polyngual holt zurück, was du falsch gemacht hast, bis es sitzt.' },
    ],
  },
  pricing: {
    eyebrow: 'Abos',
    title: 'Wähle, wie schnell du vorankommen willst.',
    intro: 'Jedes Abo beginnt mit einer kostenlosen Woche. Zahl monatlich oder spar mit einem längeren Abo.',
    recommended: 'Empfohlen',
    perMonth: 'pro Monat',
    durations: { 1: 'Monatlich', 3: '3 Monate', 6: '6 Monate', 12: '12 Monate' },
    billed: (total, months) => (months === 12 ? `${total} pro Jahr` : `${total} alle ${months} Monate`),
    save: (percent) => `${percent} % sparen`,
    tiers: {
      essential: {
        name: 'Essential',
        tagline: 'Der ganze Kurs, der Sprach-Tutor und die Lokalnachrichten.',
        perks: ['Der komplette Spanischkurs', 'KI-Sprach-Tutor, 3 Gespräche am Tag', 'Jeden Morgen die Nachrichten aus deinem Ort', 'Geschichten, Wortschatz und deine Fortschrittskarte'],
      },
      intensive: {
        name: 'Tutor Intensiv',
        tagline: 'Für alle, die schnell Spanisch sprechen wollen.',
        perks: ['Alles aus Essential', 'KI-Sprach-Tutor ohne Limit (faire Nutzung)', 'Ein persönlicher Lernplan mit Check-ins deines Coaches', 'Bevorzugter Support: Antwort am selben Tag'],
      },
      couple: {
        name: 'Paare',
        tagline: 'Essential für zwei, mit einer Zahlung.',
        perks: ['Zwei Personen, jede mit eigenem Kurs und Fortschritt', 'Zusammen lernen, zusammen üben'],
      },
    },
    cta: 'Kostenlose Woche starten',
    trialNote: 'Dein Abo wählst du nach der kostenlosen Woche in der App.',
    vat: 'Preise in Euro, inklusive Mehrwertsteuer. Jederzeit kündbar.',
  },
  guarantee: {
    title: 'Unsere 90-Tage-Garantie',
    body: 'In 90 Tagen kommst du auf dem Markt, beim Arzt und mit deinen Nachbarn auf Spanisch zurecht. Nach 90 Tagen mit einem bezahlten Abo machst du unseren Test: Bestehst du ihn nicht, sind die nächsten 90 Tage kostenlos.',
  },
  faq: {
    title: 'Fragen',
    items: [
      { q: 'Ich bin absoluter Anfänger. Ist das etwas für mich?', a: 'Ja. Der Kurs beginnt bei deinen allerersten Wörtern. Wenn du die Grundlagen schon kannst, bringt dich ein kurzer Test weiter nach vorne.' },
      { q: 'Ist es Spanisch aus Spanien oder aus Lateinamerika?', a: 'Aus Spanien, mit andalusischer Note: das Spanisch, das du jeden Tag an der Costa del Sol hörst.' },
      { q: 'Gibt es einen echten Lehrer?', a: 'Der Sprach-Tutor ist eine KI und immer da, wenn du Zeit hast. Mit Tutor Intensiv bekommst du außerdem einen persönlichen Lernplan und regelmäßige Check-ins deines Coaches.' },
      { q: 'Wie funktioniert die kostenlose Woche?', a: 'Du bekommst 7 Tage lang alles, ohne Karte. Ein Abo wählst du nur, wenn du weitermachen willst.' },
      { q: 'Kann ich kündigen?', a: 'Ja, jederzeit auf deiner Abo-Seite. Du behältst den Zugang bis zum Ende des bezahlten Zeitraums und kannst innerhalb von 14 Tagen nach deiner ersten Zahlung widerrufen und alles zurückbekommen.' },
      { q: 'Können mein Partner und ich zusammen lernen?', a: 'Ja. Mit dem Paar-Abo lernt ihr zu zweit mit einer Zahlung, jeder mit eigenem Kurs und Fortschritt.' },
      { q: 'Muss ich etwas installieren?', a: 'Nein. Polyngual läuft im Browser auf deinem Handy, Tablet oder Computer.' },
    ],
  },
  final: {
    title: 'Deine Nachbarn warten darauf, mit dir zu sprechen.',
    sub: 'Fang heute an, 7 Tage kostenlos.',
    cta: 'Kostenlose Woche starten',
  },
  footer: { privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', rights: 'Polyngual. Alle Rechte vorbehalten.' },
};
