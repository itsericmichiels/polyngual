import type { ExamPageContent } from './types';

// Escrito en español, no traducido frase a frase. Mismos datos que ielts.en.ts (ielts.org, 2026-10-03).

export const ieltsEs: ExamPageContent = {
  exam: 'ielts',
  locale: 'es',
  meta: {
    title: 'Preparación IELTS: simulacro gratis y tu plan | Polyngual',
    description:
      'Haz un simulacro IELTS gratis, descubre en qué banda está cada destreza y practica solo lo que te separa de tu objetivo en Writing y Speaking.',
    ogAlt: 'El ciclo de Polyngual para el IELTS: simulacro, resultados, práctica sobre tus fallos y nuevo test.',
  },
  cta: 'Haz el simulacro IELTS gratis',
  hero: {
    title: 'Deja de estudiar lo que ya sabes. Practica solo lo que tu simulacro IELTS dice que te falta.',
    sub: 'Los visados y las universidades suelen pedir una banda mínima en cada destreza, no solo en la nota global, y una sola destreza baja puede frenar toda la solicitud. Haz un simulacro IELTS gratis, encuentra qué te está bajando la banda y practica solo eso.',
    note: 'Academic o General Training. Lo eliges más abajo.',
  },
  loop: {
    title: 'Así funciona tu plan para el IELTS',
    intro:
      'Casi nunca fallan las cuatro destrezas por igual: suelen ser una o dos, y muchas veces Writing o Speaking. Polyngual pone esos fallos en el centro de tu plan y los trabaja hasta que un nuevo test demuestra que han mejorado.',
    steps: ['Simulacro', 'Tus resultados', 'Práctica sobre tus fallos', 'Nuevo test'],
    stepDetails: [
      'Listening, Reading, Writing y Speaking, con el formato del IELTS.',
      'Dónde está cada destreza y qué la frena.',
      'Todos los formatos trabajan sobre la misma lista.',
      'Un test más corto sobre tus fallos. Lo que superas sale de la lista.',
    ],
    centreTitle: 'Tus fallos',
    centreSub: 'Lista de ejemplo',
    gaps: [
      { label: 'Describir tendencias (Task 1)', clearedInRound: 2 },
      { label: 'Conectar ideas (Task 2)', clearedInRound: 3 },
      { label: 'Desarrollar respuestas (Part 3)', clearedInRound: 2 },
      { label: '35 palabras temáticas', clearedInRound: 3 },
      { label: 'Ortografía en el Listening' },
      { label: 'True / False / Not Given' },
    ],
    gapsLeft: 'Quedan {n}',
    roundLabel: 'Vuelta {n}',
    returnLabel: 'Cada vuelta, menos fallos',
    caption: 'Todo gira en torno a lo que aún no sabes. No es un curso para todos. Es un plan para ti.',
    a11yLabel: 'El ciclo de práctica de Polyngual para el IELTS, paso a paso',
  },
  steps: {
    title: 'Del simulacro IELTS a tu banda objetivo en 3 pasos',
    items: [
      {
        title: 'Haz el simulacro IELTS',
        body: 'Listening, Reading, las dos tareas de Writing y una entrevista oral en tres partes. Antes eliges Academic o General Training, para que las lecturas y la Task 1 coincidan con el examen al que te presentas.',
      },
      {
        title: 'Mira tu mapa de fallos, destreza por destreza',
        body: 'El resultado separa cada destreza, porque así están escritos los requisitos de visados y universidades. En cada una ves lo que haces bien y lo concreto que la frena.',
      },
      {
        title: 'Practica solo tus fallos y vuelve a medirte',
        body: 'Empiezas por la destreza más lejos de tu objetivo. En el siguiente test, lo que ya dominas sale de la lista y el plan pasa a la siguiente destreza que no llega.',
      },
    ],
  },
  gapMap: {
    title: 'Así es un mapa de fallos del IELTS',
    intro:
      'Es un ejemplo, no un candidato real. Muestra el tipo de desglose que recibes: qué destrezas ya están donde las necesitas y cuáles no llegan, con el motivo.',
    exampleLabel: 'Resultado de ejemplo',
    learner: 'Candidata de ejemplo, Academic, necesita la misma banda en todo',
    rows: [
      { skill: 'Listening', tone: 'strong', status: 'En objetivo', detail: 'Mapas y preguntas de opción múltiple bien resueltos.' },
      { skill: 'Reading', tone: 'building', status: '1 punto que trabajar', detail: 'Preguntas True / False / Not Given.' },
      { skill: 'Writing', tone: 'gap', status: '2 puntos que trabajar', detail: 'Describir tendencias en la Task 1. Conectar ideas en el ensayo de la Task 2.' },
      { skill: 'Speaking', tone: 'gap', status: '1 punto que trabajar', detail: 'Respuestas demasiado cortas en la discusión de la Part 3.' },
      { skill: 'Vocabulario', tone: 'building', status: '35 palabras por aprender', detail: 'Palabras de medio ambiente, trabajo y educación.' },
    ],
    next: 'Práctica de hoy: un gráfico de Task 1 y 8 de las 35 palabras.',
  },
  practice: {
    title: 'Practicar Writing y Speaking del IELTS según tus fallos',
    intro: 'Writing y Speaking son donde más banda se pierde, así que ahí es donde tu plan dedica más tiempo. Todos los formatos tiran de tu propia lista.',
    fixesLabel: 'Sirve para',
    items: [
      {
        id: 'tutor',
        name: 'Conversación con tutor IA',
        what: 'Una entrevista oral con repreguntas, como el examinador en las Parts 1 y 3.',
        fixes: 'Respuestas que se quedan cortas en el Speaking.',
      },
      {
        id: 'speaking',
        name: 'Corrección del speaking',
        what: 'Grabas una frase y ves qué palabras y sonidos corregir.',
        fixes: 'La pronunciación, uno de los cuatro criterios de la banda de Speaking.',
      },
      {
        id: 'explainers',
        name: 'Vídeos «Explícamelo fácil»',
        what: 'Una estructura explicada con calma, con ejemplos sacados de tu propio ensayo.',
        fixes: 'Conectores y frases complejas en la Task 2.',
      },
      {
        id: 'vocabulary-videos',
        name: 'Vídeos de vocabulario',
        what: 'Un vídeo corto por cada palabra que fallaste, y series de palabras que se confunden.',
        fixes: 'El vocabulario temático que sube Writing y Speaking.',
      },
      {
        id: 'exercises',
        name: 'Ejercicios rápidos',
        what: 'Series cortas hechas con tus palabras y tus frases.',
        fixes: 'Comprobar que un fallo está resuelto antes del nuevo test.',
      },
      {
        id: 'podcasts',
        name: 'Pódcasts',
        what: 'Dos presentadores hablan del tema que elijas, con tus palabras.',
        fixes: 'Seguir a hablantes con acentos distintos, como en el Listening.',
      },
      {
        id: 'stories',
        name: 'Historias',
        what: 'Una historia en audio por capítulos, escrita con tus palabras.',
        fixes: 'Captar detalles en grabaciones largas.',
      },
      {
        id: 'games',
        name: 'Juegos',
        what: 'Un sprint diario de un minuto, retos contrarreloj y un test adaptativo.',
        fixes: 'Recordar rápido para los 60 minutos del Reading.',
      },
    ],
  },
  compare: {
    title: 'Un curso de IELTS frente a tu plan',
    left: {
      title: 'Un curso',
      points: [
        'El mismo tiempo para las cuatro destrezas, saques lo que saques.',
        'Ensayos modelo para copiar, sin correcciones sobre el tuyo.',
        'Speaking sin nadie que te repregunte.',
        'Una banda de práctica al final y ninguna explicación.',
      ],
    },
    right: {
      title: 'Tu plan en Polyngual',
      points: [
        'Más tiempo para la destreza más lejos de tu objetivo.',
        'Ejercicios hechos con los errores de tu propia redacción.',
        'Entrevistas orales con repreguntas y correcciones.',
        'Cada nuevo test muestra qué fallos se han cerrado y qué destreza va después.',
      ],
    },
  },
  variants: {
    title: '¿Academic o General Training?',
    intro: 'Listening y Speaking son iguales en los dos. Reading y Writing cambian, así que elige el que te pida tu visado, tu empresa o tu universidad.',
    options: [
      {
        id: 'academic',
        label: 'Academic',
        who: 'Para estudiar en la universidad y para algunos colegios profesionales.',
        points: [
          'Reading: textos más largos de libros, revistas especializadas y periódicos.',
          'Writing Task 1: describir un gráfico, una tabla o un diagrama en al menos 150 palabras.',
          'Writing Task 2: un ensayo de al menos 250 palabras.',
        ],
        cta: 'Haz el simulacro IELTS Academic gratis',
      },
      {
        id: 'general',
        label: 'General Training',
        who: 'Se pide a menudo para visados de trabajo, emigración y algunos cursos de formación.',
        points: [
          'Reading: textos cotidianos como avisos, anuncios y documentos de trabajo.',
          'Writing Task 1: una carta de al menos 150 palabras, por ejemplo para pedir información.',
          'Writing Task 2: un ensayo de al menos 250 palabras.',
        ],
        cta: 'Haz el simulacro IELTS General Training gratis',
      },
    ],
  },
  examFacts: {
    title: 'Las secciones del IELTS y cómo las trabaja Polyngual',
    intro:
      'Las dos versiones del IELTS evalúan las cuatro destrezas en cuatro pruebas.',
    headers: { section: 'Sección', tasks: 'Qué haces', time: 'Tiempo', polyngual: 'Cómo lo trabaja Polyngual' },
    rows: [
      {
        section: 'Listening',
        tasks: '4 partes, 40 preguntas. Igual en Academic y General Training.',
        time: 'Unos 30 min',
        polyngual: 'Pódcasts e historias con distintos hablantes y ejercicios de ortografía y cifras en las respuestas.',
      },
      {
        section: 'Reading',
        tasks: '3 secciones, 40 preguntas. Los textos cambian entre Academic y General Training.',
        time: '60 min',
        polyngual: 'Vídeos de vocabulario para las palabras que fallaste y juegos contrarreloj para leer más rápido.',
      },
      {
        section: 'Writing',
        tasks: 'Task 1 (gráfico o carta, 150+ palabras) y Task 2 (ensayo, 250+ palabras)',
        time: '60 min',
        polyngual: 'Vídeos «Explícamelo fácil» y ejercicios hechos con los errores de tu redacción.',
      },
      {
        section: 'Speaking',
        tasks: 'Una entrevista cara a cara en tres partes',
        time: '11–14 min',
        polyngual: 'Entrevistas con el tutor IA con repreguntas y corrección de pronunciación palabra a palabra.',
      },
    ],
    scoring:
      'Cada destreza recibe una banda de 1 a 9, y la banda global es la media de las cuatro, redondeada a la media banda o banda entera más cercana.',
    source: 'Fuente: IELTS, formatos y puntuación de Academic y General Training.',
  },
  faq: {
    title: 'Preguntas sobre el simulacro IELTS',
    items: [
      {
        q: '¿El simulacro IELTS es gratis?',
        a: 'Sí. El simulacro y tu mapa de fallos son gratis, así ves qué destreza te está bajando la banda antes de decidir si sigues con Polyngual.',
      },
      {
        q: '¿Me presento al Academic o al General Training?',
        a: 'Al que te pida tu visado, tu empresa o tu universidad. El Academic suele ser para estudiar; el General Training se pide a menudo para trabajar y emigrar. Listening y Speaking son iguales en los dos.',
      },
      {
        q: '¿Se parece al IELTS de verdad?',
        a: 'Sigue el formato del IELTS: cuatro destrezas, los mismos tipos de tarea y los mismos tiempos. Las preguntas son contenido original de Polyngual, no material oficial del IELTS, y el simulacro no da una banda oficial.',
      },
      {
        q: '¿Cómo se evalúan Writing y Speaking?',
        a: 'Tus respuestas se revisan con criterios claros: si respondes a la tarea, cómo conectas las ideas, tu vocabulario y tu gramática, y en el oral también la pronunciación. Ves cuál de ellos frena cada destreza.',
      },
      {
        q: '¿Qué banda necesito para mi visado o mi universidad?',
        a: 'Depende del tipo de visado, del país y del curso, y muchos piden un mínimo en cada destreza además de la nota global. Consulta los requisitos oficiales de tu visado o la página de admisiones del curso y usa esas bandas como objetivo.',
      },
      {
        q: '¿Cuánto tiempo necesito para preparar el IELTS?',
        a: 'Depende de lo lejos que esté cada destreza de tu objetivo. El primer simulacro te enseña los fallos y cada nuevo test cuántos quedan, así sabes si tu fecha es realista.',
      },
      {
        q: '¿Puedo practicar el speaking del IELTS por mi cuenta?',
        a: 'Sí. El tutor IA te hace entrevistas con repreguntas como en las Parts 1 y 3, y la corrección del speaking te dice qué palabras y sonidos mejorar.',
      },
    ],
  },
  final: {
    title: 'Descubre qué destreza te está bajando la banda.',
    body: 'El simulacro cubre las cuatro destrezas. Tu mapa de fallos te dice por dónde empezar.',
  },
  footer: {
    examPrep: 'Preparación de exámenes',
    privacy: 'Privacidad',
    disclaimer:
      'IELTS es una marca registrada del British Council, IDP IELTS y Cambridge University Press & Assessment. Polyngual no está afiliado a ellos ni cuenta con su respaldo. El simulacro usa contenido original y no da una banda oficial.',
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
