import type { ExamPageContent } from './types';

// La versión prioritaria de esta página (público en España y Europa). Escrita en español, no traducida.
// Datos de B2 First y C1 Advanced comprobados en cambridgeenglish.org el 2026-10-03.

export const cambridgeEs: ExamPageContent = {
  exam: 'cambridge',
  locale: 'es',
  meta: {
    title: 'Preparación Cambridge B2 y C1: simulacro gratis | Polyngual',
    description:
      'Haz un simulacro gratis de B2 First o C1 Advanced, descubre qué te falla del Use of English y practica solo eso hasta que el siguiente test lo confirme.',
    ogAlt: 'El ciclo de Polyngual para Cambridge: simulacro, resultados, práctica sobre tus fallos y nuevo test.',
  },
  cta: 'Haz el simulacro Cambridge gratis',
  hero: {
    title: 'Deja de estudiar lo que ya sabes. Practica solo lo que tu simulacro de Cambridge dice que te falta.',
    sub: 'Para acreditar un B2 o un C1 en la universidad, en unas oposiciones o para el Erasmus no necesitas repasar todo el temario, solo lo que te falta. Haz un simulacro gratis de B2 First o C1 Advanced, mira exactamente qué fallas y practica solo eso.',
    note: 'B2 First o C1 Advanced. Eliges tu nivel más abajo.',
  },
  loop: {
    title: 'Así funciona tu plan para Cambridge',
    intro:
      'Las academias suelen seguir el mismo libro de principio a fin. Polyngual hace otra cosa: pone en el centro lo que has fallado, sobre todo en el Use of English, y lo trabaja hasta que un nuevo test demuestra que ya lo dominas.',
    steps: ['Simulacro', 'Tus resultados', 'Práctica sobre tus fallos', 'Nuevo test'],
    stepDetails: [
      'Reading and Use of English, Writing, Listening y Speaking, con el formato de Cambridge.',
      'Lo que has acertado y lo que has fallado, prueba por prueba.',
      'Todos los formatos trabajan sobre la misma lista.',
      'Un test más corto sobre tus fallos. Lo que superas sale de la lista.',
    ],
    centreTitle: 'Tus fallos',
    centreSub: 'Lista de ejemplo',
    gaps: [
      { label: 'Phrasal verbs con «get»', clearedInRound: 2 },
      { label: 'Formación de palabras: sufijos', clearedInRound: 3 },
      { label: 'Pasiva en las transformaciones', clearedInRound: 2 },
      { label: 'Colocaciones con «make» y «do»', clearedInRound: 3 },
      { label: 'Conectores en el ensayo' },
      { label: 'Comparar fotos (Part 2)' },
    ],
    gapsLeft: 'Quedan {n}',
    roundLabel: 'Vuelta {n}',
    returnLabel: 'Cada vuelta, menos fallos',
    caption: 'Todo gira en torno a lo que aún no sabes. No es un curso para todos. Es un plan para ti.',
    a11yLabel: 'El ciclo de práctica de Polyngual para Cambridge, paso a paso',
  },
  steps: {
    title: 'Del simulacro de Cambridge a tu certificado en 3 pasos',
    items: [
      {
        title: 'Haz el simulacro de B2 First o C1 Advanced',
        body: 'Eliges tu nivel y haces las cuatro pruebas: Reading and Use of English, Writing, Listening y Speaking.',
      },
      {
        title: 'Mira tu mapa de fallos',
        body: 'No te quedas con una nota. Ves cada prueba por separado y, dentro del Use of English, el phrasal verb, el sufijo o la estructura exacta que te ha costado el punto.',
      },
      {
        title: 'Practica solo tus fallos y vuelve a medirte',
        body: 'Tu práctica diaria usa justo lo que has fallado. En el siguiente test, lo que ya dominas sale de la lista y el plan sigue con lo que queda.',
      },
    ],
  },
  gapMap: {
    title: 'Así es un mapa de fallos de Cambridge',
    intro:
      'Es un ejemplo, no un alumno real: qué pruebas ya tienes encarriladas y qué hay que arreglar, empezando por el Use of English.',
    exampleLabel: 'Resultado de ejemplo',
    learner: 'Alumna de ejemplo, B2 First, necesita el certificado para el Erasmus',
    rows: [
      { skill: 'Listening', tone: 'strong', status: 'Bien', detail: 'Entrevista y monólogos sin apenas errores.' },
      { skill: 'Use of English', tone: 'gap', status: '3 puntos que trabajar', detail: 'Phrasal verbs, formación de palabras con sufijos y la pasiva en las transformaciones.' },
      { skill: 'Reading', tone: 'building', status: '1 punto que trabajar', detail: 'El texto con párrafos que faltan (Part 6).' },
      { skill: 'Writing', tone: 'building', status: '1 punto que trabajar', detail: 'Conectores y organización del ensayo.' },
      { skill: 'Speaking', tone: 'gap', status: '1 punto que trabajar', detail: 'Comparar las dos fotos sin solo describirlas (Part 2).' },
    ],
    next: 'Práctica de hoy: 6 transformaciones con pasiva y un vídeo sobre sufijos.',
  },
  practice: {
    title: 'Practicar el Use of English y el speaking de Cambridge',
    intro: 'El Use of English es la parte que más miedo da y la que más se puede entrenar. Cada formato tira de tu lista.',
    fixesLabel: 'Sirve para',
    items: [
      {
        id: 'explainers',
        name: 'Vídeos «Explícamelo fácil»',
        what: 'Una estructura explicada con calma, diapositiva a diapositiva, con ejemplos sacados de tus errores.',
        fixes: 'Las transformaciones de la Part 4: pasiva, estilo indirecto, condicionales.',
      },
      {
        id: 'vocabulary-videos',
        name: 'Vídeos de vocabulario',
        what: 'Un vídeo corto por cada palabra que fallaste, y series de palabras que se confunden.',
        fixes: 'Phrasal verbs y colocaciones de los huecos del Use of English.',
      },
      {
        id: 'exercises',
        name: 'Ejercicios rápidos',
        what: 'Huecos y transformaciones hechos con tus propias palabras y estructuras.',
        fixes: 'Formación de palabras y prefijos o sufijos que se te resisten.',
      },
      {
        id: 'games',
        name: 'Juegos',
        what: 'Un sprint diario de un minuto, retos contrarreloj y un test adaptativo.',
        fixes: 'Responder rápido en una prueba larga con muchas partes.',
      },
      {
        id: 'tutor',
        name: 'Conversación con tutor IA',
        what: 'Hablas en voz alta con un tutor que te repregunta y te hace opinar.',
        fixes: 'La discusión de las Parts 3 y 4 del Speaking.',
      },
      {
        id: 'speaking',
        name: 'Corrección del speaking',
        what: 'Grabas una frase y ves qué palabras y sonidos corregir.',
        fixes: 'La pronunciación, que también puntúa en el Speaking.',
      },
      {
        id: 'podcasts',
        name: 'Pódcasts',
        what: 'Dos presentadores hablan del tema que elijas usando tus palabras.',
        fixes: 'Entrevistas y conversaciones como las de la Part 4 del Listening.',
      },
      {
        id: 'stories',
        name: 'Historias',
        what: 'Una historia en audio por capítulos, escrita con tus palabras.',
        fixes: 'Seguir un monólogo largo, como en la Part 2 del Listening.',
      },
    ],
  },
  compare: {
    title: 'Un temario de Cambridge frente a tu plan',
    left: {
      title: 'Un temario',
      points: [
        'Todo el grupo hace las mismas unidades del libro en el mismo orden.',
        'Repasas gramática que ya dominabas.',
        'Haces modelos de examen completos y te quedas con la nota.',
        'El speaking se practica de vez en cuando, en grupo.',
      ],
    },
    right: {
      title: 'Tu plan en Polyngual',
      points: [
        'Tu plan sale de los errores de tu propio simulacro.',
        'Cambia después de cada test, según lo que sigues fallando.',
        'Sabes qué phrasal verbs y estructuras te quedan por dominar.',
        'Hablas en voz alta todos los días, con correcciones concretas.',
      ],
    },
  },
  variants: {
    title: '¿B2 First o C1 Advanced?',
    intro: 'Las dos pruebas tienen la misma estructura y cambian el nivel y la duración. Elige el certificado que te piden.',
    options: [
      {
        id: 'b2',
        label: 'B2 First',
        who: 'El nivel que suelen pedir para acreditar inglés en la universidad, en el Erasmus y en muchas oposiciones.',
        points: [
          'Reading and Use of English: 7 partes y 52 preguntas en 1 h 15 min.',
          'Use of English: huecos, formación de palabras y transformaciones (Parts 2, 3 y 4).',
          'Aprobado de 160 a 179 en la Cambridge English Scale; de 180 a 190 el certificado indica nivel C1.',
        ],
        cta: 'Haz el simulacro B2 First gratis',
      },
      {
        id: 'c1',
        label: 'C1 Advanced',
        who: 'Para másteres, docencia en inglés y puestos que piden un nivel avanzado.',
        points: [
          'Reading and Use of English: 8 partes y 56 preguntas en 1 h 30 min.',
          'Textos más largos y un Use of English más exigente en vocabulario y estructuras.',
          'Aprobado de 180 a 199 en la Cambridge English Scale; de 200 a 210 el certificado indica nivel C2.',
        ],
        cta: 'Haz el simulacro C1 Advanced gratis',
      },
    ],
  },
  examFacts: {
    title: 'Las pruebas de B2 First y C1 Advanced y cómo las trabaja Polyngual',
    intro:
      'Los dos exámenes tienen cuatro pruebas, y el Reading and Use of English da notas separadas para Reading y para Use of English.',
    headers: { section: 'Prueba', tasks: 'Qué haces', time: 'Tiempo (B2 / C1)', polyngual: 'Cómo lo trabaja Polyngual' },
    rows: [
      {
        section: 'Reading and Use of English',
        tasks: 'B2: 7 partes, 52 preguntas. C1: 8 partes, 56 preguntas. Use of English en las Parts 2, 3 y 4.',
        time: '1 h 15 / 1 h 30',
        polyngual: 'Vídeos «Explícamelo fácil» para las transformaciones, vídeos de vocabulario para phrasal verbs y colocaciones, y ejercicios de formación de palabras.',
      },
      {
        section: 'Writing',
        tasks: '2 partes: un ensayo obligatorio y una tarea a elegir',
        time: '1 h 20 / 1 h 30',
        polyngual: 'Explicaciones y ejercicios hechos con los errores de tu propio texto: conectores, registro y organización.',
      },
      {
        section: 'Listening',
        tasks: '4 partes, 30 preguntas',
        time: 'Unos 40 min',
        polyngual: 'Pódcasts e historias con tus palabras y preguntas sobre lo que has oído.',
      },
      {
        section: 'Speaking',
        tasks: '4 partes, en pareja con otro candidato',
        time: '14 min / 15 min',
        polyngual: 'Conversaciones con el tutor IA para las Parts 3 y 4 y corrección de pronunciación palabra a palabra.',
      },
    ],
    scoring:
      'Recibes una puntuación en la Cambridge English Scale para Reading, Use of English, Writing, Listening y Speaking, y una nota global.',
    source: 'Fuente: Cambridge University Press & Assessment, formatos y resultados de B2 First y C1 Advanced.',
  },
  faq: {
    title: 'Preguntas sobre el simulacro de Cambridge',
    items: [
      {
        q: '¿El simulacro de Cambridge es gratis?',
        a: 'Sí. El simulacro y tu mapa de fallos son gratis, así ves qué te falla del Use of English y del resto de pruebas antes de decidir si sigues con Polyngual.',
      },
      {
        q: '¿Me presento al B2 First o al C1 Advanced?',
        a: 'Al que te pida tu universidad, tu oposición o tu beca. Si vas justo de nivel, el B2 First es más seguro; si sacas una nota alta en el B2 First, el propio certificado lo indica como nivel C1.',
      },
      {
        q: '¿Se parece al examen de Cambridge de verdad?',
        a: 'Sigue el formato de B2 First y C1 Advanced: las mismas pruebas, los mismos tipos de tarea y los mismos tiempos. Las preguntas son contenido original de Polyngual, no material oficial de Cambridge, y el simulacro no da una nota oficial.',
      },
      {
        q: '¿Cómo preparo el Use of English?',
        a: 'Practicando lo que fallas, no todo el libro. El simulacro te dice qué phrasal verbs, sufijos y estructuras te cuestan, y tu plan los trabaja hasta que el siguiente test confirma que los dominas.',
      },
      {
        q: '¿Cuánto tiempo necesito para preparar el B2 o el C1?',
        a: 'Depende de cuántos fallos te separan del aprobado. El primer simulacro te dice cuántos tienes y cada nuevo test cuántos quedan, así sabes si llegas a la convocatoria.',
      },
      {
        q: '¿Puedo practicar el speaking sin compañero?',
        a: 'Sí. El tutor IA te repregunta y te hace opinar como en las Parts 3 y 4, y la corrección del speaking te dice qué palabras y sonidos mejorar.',
      },
      {
        q: '¿Qué nota necesito para aprobar?',
        a: 'En B2 First, de 160 a 179 en la Cambridge English Scale obtienes el B2 y de 180 a 190 el certificado indica C1. En C1 Advanced, de 180 a 199 obtienes el C1 y de 200 a 210 el certificado indica C2.',
      },
    ],
  },
  final: {
    title: 'Descubre qué te falta para tu B2 o tu C1.',
    body: 'El simulacro pasa por las cuatro pruebas. Tu mapa de fallos te dice por dónde empezar.',
  },
  footer: {
    examPrep: 'Preparación de exámenes',
    privacy: 'Privacidad',
    disclaimer:
      'Cambridge, B2 First y C1 Advanced son marcas de Cambridge University Press & Assessment. Polyngual no está afiliado a Cambridge ni cuenta con su respaldo. El simulacro usa contenido original y no da una nota oficial.',
    rights: 'Polyngual',
    langSwitch: 'In English',
  },
  practiceNames: {
    'vocabulary-videos': 'Vídeos de vocabulario',
    explainers: 'Explícamelo fácil',
    exercises: 'Ejercicios rápidos',
    games: 'Juegos',
    podcasts: 'Pódcasts',
    stories: 'Historias',
    tutor: 'Tutor IA',
    speaking: 'Corrección oral',
  },
};
