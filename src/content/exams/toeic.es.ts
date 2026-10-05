import type { ExamPageContent } from './types';

// Escrito en español neutro (el TOEIC se pide mucho en Latinoamérica y en España). Mismos datos que toeic.en.ts.
// Los nombres de las partes del examen se dejan como aparecen en el TOEIC.

export const toeicEs: ExamPageContent = {
  exam: 'toeic',
  locale: 'es',
  meta: {
    title: 'Preparación TOEIC: simulacro gratis | Polyngual',
    description:
      'Haz un simulacro TOEIC gratis, descubre en qué partes pierdes puntos y practica solo eso hasta que el siguiente test muestre la mejora.',
    ogAlt: 'El ciclo de Polyngual para el TOEIC: simulacro, resultados, práctica sobre tus fallos y nuevo test.',
  },
  cta: 'Haz el simulacro TOEIC gratis',
  hero: {
    title: 'Deja de estudiar lo que ya sabes. Practica solo lo que tu simulacro TOEIC dice que te falta.',
    sub: 'La nota que pide la empresa depende de unos cientos de preguntas respondidas a contrarreloj. Haz un simulacro TOEIC gratis, mira exactamente cuáles te restan puntos y dedica tu tiempo libre solo a eso.',
    note: 'Con el formato del TOEIC Listening and Reading: 200 preguntas en dos horas.',
  },
  loop: {
    title: 'Así funciona tu plan para el TOEIC',
    intro:
      'No te da tiempo a terminar un libro entero antes del proceso de selección. Polyngual guarda la lista de lo que te quita puntos y monta cada sesión de práctica alrededor de ella. Con cada nuevo test, la lista se acorta.',
    steps: ['Simulacro', 'Tus resultados', 'Práctica sobre tus fallos', 'Nuevo test'],
    stepDetails: [
      'Listening y Reading, con el mismo tiempo que el examen real.',
      'Puntos ganados y puntos perdidos, parte por parte.',
      'Todos los formatos trabajan sobre la misma lista.',
      'Un test más corto sobre tus fallos. Lo que superas sale de la lista.',
    ],
    centreTitle: 'Tus fallos',
    centreSub: 'Lista de ejemplo',
    gaps: [
      { label: 'Respuestas indirectas (Part 2)', clearedInRound: 2 },
      { label: '42 palabras de negocios', clearedInRound: 3 },
      { label: 'Preposiciones de tiempo', clearedInRound: 2 },
      { label: 'Velocidad lectora (Part 7)', clearedInRound: 3 },
      { label: 'Cifras en anuncios' },
      { label: 'Tiempos verbales (Part 5)' },
    ],
    gapsLeft: 'Quedan {n}',
    roundLabel: 'Vuelta {n}',
    returnLabel: 'Cada vuelta, menos fallos',
    caption: 'Todo gira en torno a lo que aún no sabes. No es un curso para todos. Es un plan para ti.',
    a11yLabel: 'El ciclo de práctica de Polyngual para el TOEIC, paso a paso',
  },
  steps: {
    title: 'Del simulacro TOEIC a una nota mejor en 3 pasos',
    items: [
      {
        title: 'Haz el simulacro TOEIC',
        body: 'Fotografías, pregunta-respuesta, conversaciones, charlas, frases incompletas, textos para completar y lecturas, con el reloj en marcha. Así ves cómo rindes bajo presión de tiempo, que es donde se pierden más puntos.',
      },
      {
        title: 'Mira dónde se fueron los puntos',
        body: 'En lugar de una sola cifra, ves cada parte del examen: lo que has hecho bien y las palabras, la gramática y los tipos de pregunta que te restaron.',
      },
      {
        title: 'Practica solo tus fallos y vuelve a medirte',
        body: 'Diez o quince minutos al día con tu propia lista, desde el móvil, entre turnos o en el transporte. En el siguiente test, lo que ya dominas sale de la lista y el plan sigue con lo demás.',
      },
    ],
  },
  gapMap: {
    title: 'Así es un mapa de fallos del TOEIC',
    intro:
      'Es un ejemplo, no un candidato real. Muestra el tipo de desglose que recibes: no solo un total, sino qué partes ya tienes aseguradas y cuáles merecen tu próxima hora de estudio.',
    exampleLabel: 'Resultado de ejemplo',
    learner: 'Candidato de ejemplo, opta a un puesto de atención al cliente',
    rows: [
      { skill: 'Listening: fotos y charlas', tone: 'strong', status: 'Bien', detail: 'Parts 1 y 4 sin errores.' },
      { skill: 'Listening: pregunta-respuesta', tone: 'gap', status: '2 puntos que trabajar', detail: 'Respuestas indirectas en la Part 2. Cifras y fechas en los anuncios.' },
      { skill: 'Gramática', tone: 'building', status: '1 punto que trabajar', detail: 'Tiempos verbales y preposiciones en la Part 5.' },
      { skill: 'Velocidad lectora', tone: 'building', status: '1 punto que trabajar', detail: 'Se acabó el tiempo en las preguntas de varios textos.' },
      { skill: 'Vocabulario', tone: 'gap', status: '42 palabras por aprender', detail: 'Palabras de oficina, viajes y finanzas que no reconociste.' },
    ],
    next: 'Práctica de hoy: 10 de las 42 palabras y un ejercicio de Part 2.',
  },
  practice: {
    title: 'Practicar el TOEIC online con poco tiempo',
    intro: 'Formatos cortos que caben en una jornada de trabajo. Todos tiran de tu lista de fallos, así que diez minutos en el autobús van a los puntos que de verdad te faltan.',
    fixesLabel: 'Sirve para',
    items: [
      {
        id: 'vocabulary-videos',
        name: 'Vídeos de vocabulario',
        what: 'Un vídeo corto por cada palabra que fallaste, y series de palabras que se confunden, como «borrow» y «lend».',
        fixes: 'El vocabulario de negocios de la Part 5 y de las lecturas.',
      },
      {
        id: 'explainers',
        name: 'Vídeos «Explícamelo fácil»',
        what: 'Un punto de gramática explicado con calma, con ejemplos sacados de tus errores.',
        fixes: 'Tiempos verbales, preposiciones y formas de palabra en la Part 5.',
      },
      {
        id: 'exercises',
        name: 'Ejercicios rápidos',
        what: 'Series cortas con tus palabras y las estructuras que fallaste.',
        fixes: 'Comprobar que un fallo está resuelto antes del nuevo test.',
      },
      {
        id: 'games',
        name: 'Juegos',
        what: 'Un sprint diario de un minuto, retos contrarreloj y un test adaptativo.',
        fixes: 'Responder rápido, que es lo que premia el TOEIC en las dos secciones.',
      },
      {
        id: 'podcasts',
        name: 'Pódcasts',
        what: 'Dos presentadores hablan de situaciones de trabajo con las palabras de tu lista.',
        fixes: 'Seguir conversaciones a velocidad real, como en la Part 3.',
      },
      {
        id: 'stories',
        name: 'Historias',
        what: 'Una historia en audio por capítulos, escrita con tus palabras, para escuchar de camino al trabajo.',
        fixes: 'Mantener la atención en las charlas largas de la Part 4.',
      },
      {
        id: 'tutor',
        name: 'Conversación con tutor IA',
        what: 'Simulas llamadas, reuniones y conversaciones con clientes con un tutor que te responde.',
        fixes: 'Hablar con seguridad en la entrevista que viene después del examen.',
      },
      {
        id: 'speaking',
        name: 'Corrección del speaking',
        what: 'Grabas una frase y ves qué palabras y sonidos corregir.',
        fixes: 'Una pronunciación clara, por si la empresa también pide el TOEIC Speaking.',
      },
    ],
  },
  compare: {
    title: 'Un curso de TOEIC frente a tu plan',
    left: {
      title: 'Un curso',
      points: [
        'Todos los candidatos siguen los mismos capítulos.',
        'Tu tiempo libre se va en gramática que ya usas en el trabajo.',
        'Descubres lo que fallas el día del examen.',
        'Los exámenes de práctica te dan un total, no una explicación.',
      ],
    },
    right: {
      title: 'Tu plan en Polyngual',
      points: [
        'Tu plan sale de los errores de tu propio simulacro.',
        'Cambia después de cada test, según lo que aún te resta puntos.',
        'Sabes qué partes tienes aseguradas mucho antes del examen.',
        'Cada nuevo test te dice qué ha mejorado y qué no.',
      ],
    },
  },
  examFacts: {
    title: 'El TOEIC Listening and Reading, parte por parte',
    intro:
      'El TOEIC Listening and Reading es el que piden la mayoría de empresas. Son 200 preguntas tipo test en dos horas, repartidas en dos secciones con tiempo propio. Este es el formato según ETS y lo que practicas en Polyngual para cada parte.',
    headers: { section: 'Sección', tasks: 'Partes', time: 'Preguntas y tiempo', polyngual: 'Cómo lo trabaja Polyngual' },
    rows: [
      {
        section: 'Listening',
        tasks: 'Part 1 Fotografías, Part 2 Pregunta-respuesta, Part 3 Conversaciones, Part 4 Charlas',
        time: '100 preguntas, 45 min',
        polyngual: 'Pódcasts e historias a velocidad real, ejercicios de respuestas indirectas y de cifras y fechas en anuncios.',
      },
      {
        section: 'Reading',
        tasks: 'Part 5 Frases incompletas, Part 6 Textos para completar, Part 7 Comprensión lectora',
        time: '100 preguntas, 75 min',
        polyngual: 'Vídeos «Explícamelo fácil» y ejercicios para la gramática, vídeos de vocabulario de negocios y juegos contrarreloj para leer más rápido.',
      },
    ],
    scoring:
      'Listening y Reading se puntúan cada uno de 5 a 495, con un total de 10 a 990. Los TOEIC Speaking y Writing son exámenes aparte, de 0 a 200 cada uno; la corrección del speaking y el tutor de Polyngual te ayudan si la empresa también los pide.',
    source: 'Fuente: ETS, formatos del TOEIC Listening and Reading y del TOEIC Speaking and Writing.',
  },
  faq: {
    title: 'Preguntas sobre el simulacro TOEIC',
    items: [
      {
        q: '¿El simulacro TOEIC es gratis?',
        a: 'Sí. El simulacro y tu mapa de fallos son gratis, así ves en qué partes pierdes puntos antes de decidir si sigues con Polyngual.',
      },
      {
        q: '¿Se parece al TOEIC de verdad?',
        a: 'Sigue el formato del Listening and Reading: las mismas siete partes y el mismo tiempo. Las preguntas son contenido original de Polyngual, no material oficial de ETS, y el simulacro no da una nota oficial.',
      },
      {
        q: '¿Cómo se corrige el simulacro?',
        a: 'Ves cada parte por separado: lo que has acertado y las palabras, la gramática y el tipo de pregunta detrás de cada fallo. Ese desglose se convierte en tu plan.',
      },
      {
        q: '¿Qué nota de TOEIC piden para el puesto?',
        a: 'Cada empresa fija su propio mínimo y suele depender del puesto: los de atención al cliente o con trato internacional suelen pedir más. Míralo en la oferta o pregunta a Recursos Humanos y usa esa cifra como objetivo.',
      },
      {
        q: '¿Cuánto tardo en subir mi nota de TOEIC?',
        a: 'Depende de cuántos fallos te separan de tu objetivo. El primer simulacro te dice cuántos son y cada nuevo test cuántos quedan, así sabes si llegas a la fecha de tu candidatura.',
      },
      {
        q: '¿Puedo practicar en ratos cortos?',
        a: 'Sí. La mayoría de formatos duran unos minutos y funcionan en el móvil: un vídeo de vocabulario, un sprint de un minuto o un pódcast para el trayecto.',
      },
      {
        q: '¿Polyngual ayuda con el speaking del TOEIC?',
        a: 'El simulacro cubre Listening y Reading. Para hablar, puedes grabar frases y recibir corrección palabra a palabra, y practicar conversaciones de trabajo con un tutor IA.',
      },
    ],
  },
  final: {
    title: 'Descubre dónde estás perdiendo puntos en el TOEIC.',
    body: 'El simulacro cubre las dos secciones. Tu mapa de fallos te dice qué arreglar primero.',
  },
  footer: {
    examPrep: 'Preparación de exámenes',
    privacy: 'Privacidad',
    disclaimer:
      'TOEIC es una marca registrada de ETS. Polyngual no está afiliado a ETS ni cuenta con su respaldo. El simulacro usa contenido original y no da una nota oficial.',
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
