import type { ExamPageContent } from './types';

// Escrito en español, no traducido frase a frase. Mismos datos verificados que toefl.en.ts (ETS, 2026-10-03).
// Los nombres oficiales de las tareas se dejan en inglés, porque así aparecen en el examen.

export const toeflEs: ExamPageContent = {
  exam: 'toefl',
  locale: 'es',
  meta: {
    title: 'Preparación TOEFL: simulacro gratis y tu plan | Polyngual',
    description:
      'Haz un simulacro TOEFL gratis, descubre qué fallas en cada destreza y practica solo eso hasta que el siguiente test confirme que ya lo dominas.',
    ogAlt: 'El ciclo de Polyngual: simulacro, resultados, práctica sobre tus fallos y nuevo test.',
  },
  cta: 'Haz el simulacro TOEFL gratis',
  hero: {
    title: 'Deja de estudiar lo que ya sabes. Practica solo lo que tu simulacro TOEFL dice que te falta.',
    sub: 'Polyngual no es un temario cerrado que todos siguen igual. Haces un simulacro TOEFL gratis, encontramos exactamente lo que has fallado y todo lo que practicas después se construye sobre esos fallos, hasta que desaparecen.',
    note: 'Con los tipos de tarea del TOEFL iBT vigentes desde enero de 2026.',
  },
  loop: {
    title: 'Así funciona tu plan para el TOEFL',
    intro:
      'La mayoría de cursos de TOEFL dan a todo el mundo los mismos temas. Polyngual funciona como un ciclo, y en el centro están tus fallos. En cada vuelta, la lista del centro se acorta.',
    steps: ['Simulacro', 'Tus resultados', 'Práctica sobre tus fallos', 'Nuevo test'],
    stepDetails: [
      'Reading, Listening, Writing y Speaking, con las tareas actuales del TOEFL.',
      'Lo que has acertado y lo que has fallado, destreza por destreza.',
      'Todos los formatos trabajan sobre la misma lista de fallos.',
      'Un test más corto sobre tus fallos. Lo que superas sale de la lista.',
    ],
    centreTitle: 'Tus fallos',
    centreSub: 'Lista de ejemplo',
    gaps: [
      { label: 'Orden de palabras en preguntas', clearedInRound: 2 },
      { label: '38 palabras académicas', clearedInRound: 3 },
      { label: 'Enlazar sonidos al repetir', clearedInRound: 2 },
      { label: 'Peticiones educadas en emails', clearedInRound: 3 },
      { label: 'Un ejemplo claro por respuesta' },
      { label: 'Lo implícito en avisos cortos' },
    ],
    gapsLeft: 'Quedan {n}',
    roundLabel: 'Vuelta {n}',
    returnLabel: 'Cada vuelta, menos fallos',
    caption: 'Todo gira en torno a lo que aún no sabes. No es un curso para todos. Es un plan para ti.',
    a11yLabel: 'El ciclo de práctica de Polyngual, paso a paso',
  },
  steps: {
    title: 'Del simulacro TOEFL al nuevo test en 3 pasos',
    items: [
      {
        title: 'Haz un simulacro TOEFL',
        body: 'Pasarás por Complete the Words, Build a Sentence, un email, una discusión académica, Listen and Repeat y una entrevista breve. Es gratis y grabas tus respuestas orales desde el navegador.',
      },
      {
        title: 'Mira tu mapa de fallos',
        body: 'No te damos una nota sin más. Ves lo que has acertado y lo que has fallado, agrupado por destreza, para saber si lo que te frena es el vocabulario, la velocidad al escuchar, la estructura de las frases o la pronunciación.',
      },
      {
        title: 'Practica solo tus fallos y vuelve a medirte',
        body: 'Tu práctica diaria usa justo las palabras y destrezas que has fallado. Cuando repites el test, lo que ya dominas sale de la lista y el plan pasa a lo que queda.',
      },
    ],
  },
  gapMap: {
    title: 'Así es un mapa de fallos del TOEFL',
    intro:
      'Es un ejemplo, no un alumno real. Así es lo que recibes tras el simulacro: una lista corta de cosas que arreglar, no una nota que te quite el sueño.',
    exampleLabel: 'Resultado de ejemplo',
    learner: 'Alumna de ejemplo, solicita plaza en un máster',
    rows: [
      { skill: 'Listening', tone: 'strong', status: 'Bien', detail: 'Conversaciones y avisos respondidos sin errores.' },
      { skill: 'Reading', tone: 'building', status: '1 punto que trabajar', detail: 'Entender lo que no se dice en avisos cortos.' },
      { skill: 'Speaking', tone: 'gap', status: '2 puntos que trabajar', detail: 'Enlazar sonidos en Listen and Repeat. Dar un ejemplo claro en la entrevista.' },
      { skill: 'Writing', tone: 'building', status: '1 punto que trabajar', detail: 'Orden de palabras en las preguntas de Build a Sentence.' },
      { skill: 'Vocabulario', tone: 'gap', status: '38 palabras por aprender', detail: 'Palabras académicas que fallaste en Complete the Words.' },
    ],
    next: 'Práctica de hoy: 12 de las 38 palabras y una pregunta de entrevista.',
  },
  practice: {
    title: 'Practicar el TOEFL online, según lo que fallas',
    intro: 'Cada fallo pide un tipo de práctica distinto. Todos los formatos tiran de tu propia lista, así que nunca estudias una palabra o una regla que ya dominas.',
    fixesLabel: 'Sirve para',
    items: [
      {
        id: 'vocabulary-videos',
        name: 'Vídeos de vocabulario',
        what: 'Un vídeo corto por cada palabra que fallaste, y series de palabras que se confunden fácilmente.',
        fixes: 'Las palabras que no supiste completar en Complete the Words.',
      },
      {
        id: 'explainers',
        name: 'Vídeos «Explícamelo fácil»',
        what: 'Una regla explicada con calma, diapositiva a diapositiva, con ejemplos sacados de tus errores.',
        fixes: 'La gramática que fallaste en Build a Sentence.',
      },
      {
        id: 'exercises',
        name: 'Ejercicios rápidos',
        what: 'Ejercicios cortos hechos con tus propias palabras y frases.',
        fixes: 'Comprobar que un fallo está resuelto antes del nuevo test.',
      },
      {
        id: 'games',
        name: 'Juegos',
        what: 'Retos contrarreloj, un sprint diario de un minuto y un test adaptativo.',
        fixes: 'Recordar rápido y bajo presión, como piden las secciones adaptativas.',
      },
      {
        id: 'podcasts',
        name: 'Pódcasts',
        what: 'Dos presentadores hablan del tema que elijas usando las palabras de tu lista.',
        fixes: 'Oír palabras nuevas a velocidad real, como en Listen to a Conversation.',
      },
      {
        id: 'stories',
        name: 'Historias',
        what: 'Una historia en audio por capítulos, escrita con tus palabras. El siguiente capítulo te espera cuando quieras.',
        fixes: 'Aguantar la atención en las charlas académicas largas.',
      },
      {
        id: 'tutor',
        name: 'Conversación con tutor IA',
        what: 'Hablas en voz alta con un tutor que te repregunta.',
        fixes: 'Respuestas que se quedan cortas en Take an Interview.',
      },
      {
        id: 'speaking',
        name: 'Corrección del speaking',
        what: 'Grabas una frase y ves qué palabras y sonidos corregir.',
        fixes: 'Los fallos de pronunciación que destapa Listen and Repeat.',
      },
    ],
  },
  compare: {
    title: 'Un temario de TOEFL frente a tu plan',
    left: {
      title: 'Un temario',
      points: [
        'Todo el mundo estudia los mismos temas en el mismo orden.',
        'Pasas semanas con cosas que ya sabes.',
        'Avanzar es terminar lecciones.',
        'El speaking es una grabación que nadie escucha.',
      ],
    },
    right: {
      title: 'Tu plan en Polyngual',
      points: [
        'Tu plan sale de los errores de tu propio simulacro.',
        'Cambia después de cada test, según lo que sigue fallando.',
        'Avanzar es ver cómo se vacía tu lista de fallos.',
        'Cada respuesta oral recibe correcciones de palabras y sonidos concretos.',
      ],
    },
  },
  examFacts: {
    title: 'Las secciones del TOEFL iBT y cómo las trabaja Polyngual',
    intro:
      'Desde el 21 de enero de 2026, el TOEFL iBT tiene cuatro secciones con tareas nuevas y más cortas. Reading y Listening son adaptativas: la segunda mitad de cada sección se vuelve más fácil o más difícil según cómo te haya ido la primera.',
    headers: { section: 'Sección', tasks: 'Tipos de tarea', time: 'Tiempo base (ETS)', polyngual: 'Cómo lo trabaja Polyngual' },
    rows: [
      {
        section: 'Reading',
        tasks: 'Complete the Words, Read in Daily Life, Read an Academic Passage',
        time: 'Unos 30 min',
        polyngual: 'Vídeos de vocabulario y ejercicios rápidos para las palabras que faltan; lectura de avisos y textos académicos breves.',
      },
      {
        section: 'Listening',
        tasks: 'Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk',
        time: 'Unos 29 min',
        polyngual: 'Pódcasts e historias con tus palabras a velocidad real, y preguntas sobre lo que has oído.',
      },
      {
        section: 'Writing',
        tasks: 'Build a Sentence, Write an Email, Write for an Academic Discussion',
        time: 'Unos 23 min',
        polyngual: 'Vídeos «Explícamelo fácil» para las estructuras que fallaste y tareas escritas corregidas por claridad, organización y gramática.',
      },
      {
        section: 'Speaking',
        tasks: 'Listen and Repeat, Take an Interview',
        time: 'Unos 8 min',
        polyngual: 'Corrección palabra a palabra para Listen and Repeat y conversaciones con el tutor IA para la entrevista.',
      },
    ],
    scoring:
      'Cada sección se puntúa de 1 a 6 en medios puntos y la nota global es la media de las cuatro. Durante una transición de dos años, ETS también informa de una puntuación equivalente de 0 a 120.',
    source: 'Fuente: ETS, contenido del TOEFL iBT y novedades de 2026. Los tiempos base varían según los módulos adaptativos.',
  },
  faq: {
    title: 'Preguntas sobre el simulacro TOEFL',
    items: [
      {
        q: '¿El simulacro TOEFL es gratis?',
        a: 'Sí. El simulacro y tu mapa de fallos son gratis. Ves tus resultados antes de decidir si sigues con Polyngual.',
      },
      {
        q: '¿Se parece al TOEFL de verdad?',
        a: 'Usa los mismos tipos de tarea que el TOEFL iBT desde enero de 2026, como Complete the Words, Build a Sentence, Listen and Repeat y Take an Interview. Las preguntas son contenido original de Polyngual, no material oficial de ETS, y el simulacro no predice una nota oficial.',
      },
      {
        q: '¿Cómo se corrige el simulacro?',
        a: 'En lugar de una sola nota, recibes un resultado por destreza: lo que has acertado y las palabras, sonidos y estructuras concretas que has fallado. Las respuestas orales y escritas se revisan con criterios claros, como claridad, organización y gramática.',
      },
      {
        q: '¿Cuánto tiempo necesito para preparar el TOEFL?',
        a: 'Depende de lo lejos que estés de la nota que necesitas. El primer simulacro te dice cuántos fallos tienes y cada nuevo test te dice cuántos quedan: así sabes si tu fecha de examen es realista.',
      },
      {
        q: '¿Puedo practicar el speaking del TOEFL?',
        a: 'Sí, y es donde más ayuda necesita la mayoría. Grabas tus respuestas de Listen and Repeat y de la entrevista, ves qué palabras y sonidos corregir y practicas conversación con un tutor IA que te repregunta.',
      },
      {
        q: '¿Qué nota de TOEFL piden las universidades?',
        a: 'Cada universidad y cada programa fija su propio mínimo, y muchos ya lo publican en la escala de 1 a 6 además de la de 0 a 120. Consulta la página de admisiones de cada programa al que te presentes y usa esa cifra como objetivo.',
      },
      {
        q: '¿Qué ha cambiado en el TOEFL en 2026?',
        a: 'Desde el 21 de enero de 2026, el TOEFL iBT tiene tareas más cortas, Reading y Listening adaptativos y una escala de 1 a 6 alineada con el MCER. Durante dos años de transición, ETS también da una puntuación equivalente de 0 a 120.',
      },
    ],
  },
  final: {
    title: 'Descubre qué te falta para el TOEFL.',
    body: 'El simulacro pasa por todas las secciones. Tu mapa de fallos te dice por dónde empezar.',
  },
  footer: {
    examPrep: 'Preparación de exámenes',
    privacy: 'Privacidad',
    disclaimer:
      'TOEFL y TOEFL iBT son marcas registradas de ETS. Polyngual no está afiliado a ETS ni cuenta con su respaldo. El simulacro usa contenido original y no da una nota oficial.',
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
