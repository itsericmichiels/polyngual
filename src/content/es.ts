// Spanish page copy. The home page is Polyngual's front door: who we are, then a way into each of the three products
// (exam prep, Business, Spanish). en.ts has the same shape; every visible string on the home page comes from one of these files.

export type Highlight = { text: string; mark?: boolean };
export type ScriptLine = { who: string; parts: Highlight[] };
export type StudioSample = { title: string; meta: string; lines: ScriptLine[]; words: string[] };
export type StudioFormat = { id: string; label: string; prompt: string; options: { label: string; sample: StudioSample }[] };
export type PathItem = {
  id: 'test' | 'business' | 'spanish';
  /** The product's name, above the card's title. */
  kicker: string;
  /** The short version, in the hero's list and the closing section. */
  door: { title: string; detail: string };
  title: string;
  body: string;
  points: string[];
  cta: string;
  note: string;
};

export const es = {
  locale: 'es',
  htmlLang: 'es',
  ogLocale: 'es_ES',
  ogImage: '/og.png',
  privacyHref: '/privacidad',
  termsHref: '/terminos',
  switcher: { label: 'EN', href: '/en', name: 'Read in English', hrefLang: 'en' },
  meta: {
    title: 'Polyngual | Aprende inglés y español hablando',
    description:
      'Polyngual escucha cómo hablas y te dice exactamente qué corregir. Prepara el TOEFL o el TOEIC, habla inglés en el trabajo con seguridad o aprende el español que necesitas para vivir en España.',
  },
  nav: { cta: 'Elige tu curso' },
  hero: {
    eyebrow: 'Inglés y español, hablando desde el primer día',
    headlineBefore: 'Aprende un idioma ',
    headlineMark: 'hablando',
    headlineAfter: ', con un plan hecho para tu objetivo.',
    sub: 'Polyngual escucha cómo hablas, te dice exactamente qué corregir y organiza tu práctica según lo que necesitas: un examen, tu trabajo o tu vida en España. Sin anuncios. A tu ritmo.',
  },
  // The three products. Each one's button target is decided in lib/site.ts (pathHref); the order here is the order on the page.
  paths: {
    label: '¿Para qué estás aprendiendo?',
    eyebrow: 'Elige tu curso',
    title: 'Una forma de aprender, tres objetivos.',
    sub: 'Todos los cursos te escuchan hablar y crean tu práctica a partir de tus fallos. Lo que cambia es el objetivo.',
    items: [
      {
        id: 'test',
        kicker: 'Polyngual Test',
        door: { title: 'Un examen de inglés', detail: 'TOEFL · TOEIC' },
        title: 'Saca la nota que necesitas en el TOEFL o el TOEIC.',
        body: 'Simulacros completos con los tipos de tarea actuales y corrección al momento.',
        points: [
          'Empiezas con un simulacro completo para saber dónde estás',
          'Corrección inmediata de tu speaking y tu writing',
          'Un plan de estudio hecho con las preguntas que fallas',
        ],
        cta: 'Prepara tu examen',
        note: 'Empezar es gratis.',
      },
      {
        id: 'business',
        kicker: 'Polyngual Business',
        door: { title: 'Inglés para el trabajo', detail: 'De B1 a C2' },
        title: 'Habla inglés en el trabajo con seguridad.',
        body: 'Para profesionales que ya trabajan en inglés y quieren sonar claros y seguros con su jefe, sus clientes y su equipo.',
        points: [
          'Ensaya tus propias presentaciones con un tutor y recibe un informe por escrito',
          'Noticias de tu sector, seguidas de una conversación sobre ellas',
          'Un coach que conoce tu puesto, con mensajes y llamadas en directo',
        ],
        cta: 'Solicitar acceso',
        note: 'Por invitación mientras abrimos los primeros grupos.',
      },
      {
        id: 'spanish',
        kicker: 'Polyngual Spanish',
        door: { title: 'Español para vivir en España', detail: 'Desde A1' },
        title: 'Aprende el español que necesitas en España.',
        body: 'Para quien vive en España o va a mudarse, empezando desde cero.',
        points: [
          'Un curso A1 completo en el español de España',
          'Situaciones del día a día con un tutor que habla contigo: la farmacia, el mercado, el ayuntamiento',
          'Noticias de la Costa del Sol escritas para tu nivel',
        ],
        cta: 'Empieza español gratis',
        note: 'Gratis durante la beta. En la app, elige español.',
      },
    ] satisfies PathItem[] as PathItem[],
    // The Business request is an email until Business has a sign-up of its own.
    businessEmail: {
      subject: 'Polyngual Business: solicitud de acceso',
      body: 'Hola,\n\nMe gustaría probar Polyngual Business.\n\nMi puesto:\nMi empresa y su sector:\nPara qué uso el inglés en el trabajo:\n',
    },
  },
  demo: {
    listening: 'Escuchando',
    analysing: 'Analizando',
    score: 'Pronunciación',
    week: 'esta semana',
    caption: 'Así te corrige Polyngual: palabra por palabra.',
    sentences: [
      {
        words: ['I', 'think', 'the', 'meeting', 'is', 'on', 'Thursday.'],
        flags: [1, 6],
        tip: { sound: '/θ/', text: 'Saca un poco la lengua entre los dientes.' },
        score: 78,
      },
      {
        words: ['She', 'wants', 'to', 'live', 'near', 'the', 'beach.'],
        flags: [3],
        tip: { sound: '/ɪ/', text: 'Vocal corta: «liv», no «liiv».' },
        score: 84,
      },
      {
        words: ['I’ve', 'worked', 'here', 'for', 'three', 'years.'],
        flags: [1],
        tip: { sound: '/t/', text: 'Que se oiga el final: «workt».' },
        score: 89,
      },
    ],
  },
  benefits: {
    eyebrow: 'Lo que vas a notar',
    title: 'Hecho para que hables desde el primer día.',
    items: [
      {
        title: 'Practica hablando, no solo tocando la pantalla.',
        body: 'Recibe una puntuación de tu pronunciación y las palabras concretas que debes trabajar.',
      },
      {
        title: 'Conoce tu nivel real.',
        body: 'Mide tu nivel al empezar y mira cómo sube, con resultados que puedes compartir en LinkedIn.',
      },
      {
        title: 'Práctica hecha con tus fallos.',
        body: 'Lo que fallas hoy se convierte en los ejercicios de mañana, tanto si preparas un examen como una reunión o una visita al médico.',
      },
    ],
  },
  games: {
    eyebrow: 'Aprende jugando',
    title: 'Juegos hechos con las palabras que tú necesitas.',
    sub: 'Polyngual convierte el vocabulario que te cuesta en juegos personalizados. Así practicas sin que parezca que estudias.',
    points: [
      { title: 'Con tus palabras', body: 'Las que fallaste en tu última práctica, no una lista genérica.' },
      { title: 'Partidas cortas', body: 'Un par de minutos, cuando quieras: en el bus, en la cola, en el sofá.' },
    ],
    game: {
      name: 'Completa la frase',
      weekWords: 'Tus palabras',
      round: 'Ronda',
      points: 'Puntos',
      right: '¡Bien!',
      wrong: 'Casi. Era',
      doneTitle: '¡Partida terminada!',
      doneBody: 'palabras acertadas',
      again: 'Jugar otra vez',
      note: 'Ejemplo de juego con palabras de muestra.',
      rounds: [
        { before: 'I need to finish this report before the ', after: '.', options: ['headline', 'deadline', 'lifeline'], answer: 'deadline' },
        { before: 'Can I ', after: ' your pen for a second?', options: ['borrow', 'lend', 'borrowing'], answer: 'borrow' },
        { before: '', after: ' it was raining, we went for a walk.', options: ['However', 'Despite', 'Although'], answer: 'Although' },
      ],
    },
  },
  studio: {
    eyebrow: 'Contenido sin fin',
    title: 'Nunca te vas a quedar sin nada que escuchar.',
    sub: 'Polyngual no tiene un catálogo que se acaba. Crea podcasts, historias y explicaciones al momento, con las palabras que estás aprendiendo y el tema que tú elijas.',
    tryLabel: 'Pruébalo',
    create: 'Crear',
    steps: ['Escribiendo el guion', 'Poniendo las voces', 'Listo'],
    sampleNote: 'Ejemplo ilustrativo de un episodio generado.',
    wordsLabel: 'Tus palabras en este episodio',
    formats: [
      {
        id: 'podcast',
        label: 'Podcast',
        prompt: '¿De qué quieres que hablen?',
        options: [
          {
            label: 'Viajes',
            sample: {
              title: 'Lost Luggage at Gate 12',
              meta: 'Podcast · 2:40 · 2 voces',
              words: ['suitcase', 'claim form', 'reference number'],
              lines: [
                { who: 'Bella', parts: [{ text: 'So your ' }, { text: 'suitcase', mark: true }, { text: ' never arrived?' }] },
                { who: 'Michael', parts: [{ text: 'No. I filled out a ' }, { text: 'claim form', mark: true }, { text: ' at the desk.' }] },
                { who: 'Bella', parts: [{ text: 'Did they give you a ' }, { text: 'reference number', mark: true }, { text: '?' }] },
              ],
            },
          },
          {
            label: 'Trabajo',
            sample: {
              title: 'The Interview Warm-Up',
              meta: 'Podcast · 2:55 · 2 voces',
              words: ['strengths', 'deadline', 'team player'],
              lines: [
                { who: 'Michael', parts: [{ text: 'What are your biggest ' }, { text: 'strengths', mark: true }, { text: '?' }] },
                { who: 'Bella', parts: [{ text: 'I never miss a ' }, { text: 'deadline', mark: true }, { text: ', even under pressure.' }] },
                { who: 'Michael', parts: [{ text: 'And you’re a ' }, { text: 'team player', mark: true }, { text: '?' }] },
              ],
            },
          },
          {
            label: 'Comida',
            sample: {
              title: 'Ordering Like a Local',
              meta: 'Podcast · 2:20 · 2 voces',
              words: ['recommend', 'spicy', 'the bill'],
              lines: [
                { who: 'Bella', parts: [{ text: 'What would you ' }, { text: 'recommend', mark: true }, { text: ' here?' }] },
                { who: 'Michael', parts: [{ text: 'The tacos. But they’re pretty ' }, { text: 'spicy', mark: true }, { text: '.' }] },
                { who: 'Bella', parts: [{ text: 'Perfect. Can we get ' }, { text: 'the bill', mark: true }, { text: ' after?' }] },
              ],
            },
          },
        ],
      },
      {
        id: 'story',
        label: 'Historia',
        prompt: 'Elige un género',
        options: [
          {
            label: 'Misterio',
            sample: {
              title: 'The Clock That Ran Backwards',
              meta: 'Historia · Capítulo 1 · narrador y 2 personajes',
              words: ['strange', 'noticed', 'whisper'],
              lines: [
                { who: 'Narrador', parts: [{ text: 'Nina ' }, { text: 'noticed', mark: true }, { text: ' something ' }, { text: 'strange', mark: true }, { text: ' about the old clock.' }] },
                { who: 'Nina', parts: [{ text: 'Leo, look. It’s going backwards.' }] },
                { who: 'Leo', parts: [{ text: 'Shh. Did you hear that ' }, { text: 'whisper', mark: true }, { text: '?' }] },
              ],
            },
          },
          {
            label: 'Espacio',
            sample: {
              title: 'Signal From Station Nine',
              meta: 'Historia · Capítulo 1 · narrador y 2 personajes',
              words: ['signal', 'crew', 'land'],
              lines: [
                { who: 'Narrador', parts: [{ text: 'At midnight, the ' }, { text: 'crew', mark: true }, { text: ' received a ' }, { text: 'signal', mark: true }, { text: '.' }] },
                { who: 'Nina', parts: [{ text: 'It’s coming from Station Nine.' }] },
                { who: 'Leo', parts: [{ text: 'Then we need a safe place to ' }, { text: 'land', mark: true }, { text: '.' }] },
              ],
            },
          },
          {
            label: 'Deportes',
            sample: {
              title: 'The Last Minute',
              meta: 'Historia · Capítulo 1 · narrador y 2 personajes',
              words: ['score', 'coach', 'give up'],
              lines: [
                { who: 'Narrador', parts: [{ text: 'One minute left, and the ' }, { text: 'score', mark: true }, { text: ' was tied.' }] },
                { who: 'Leo', parts: [{ text: 'We can’t ' }, { text: 'give up', mark: true }, { text: ' now.' }] },
                { who: 'Nina', parts: [{ text: 'Look at ' }, { text: 'Coach', mark: true }, { text: '. She has a plan.' }] },
              ],
            },
          },
        ],
      },
      {
        id: 'explainer',
        label: 'Explicación',
        prompt: '¿Qué no te queda claro?',
        options: [
          {
            label: '¿since o for?',
            sample: {
              title: 'Since vs. For',
              meta: 'Explicación · 1:10 · 1 voz',
              words: ['since', 'for'],
              lines: [
                { who: 'Voz', parts: [{ text: 'Use ' }, { text: 'for', mark: true }, { text: ' with a length of time: for two years.' }] },
                { who: 'Voz', parts: [{ text: 'Use ' }, { text: 'since', mark: true }, { text: ' with a starting point: since 2019.' }] },
                { who: 'Voz', parts: [{ text: 'Your turn: I’ve lived here ___ March.' }] },
              ],
            },
          },
          {
            label: '¿make o do?',
            sample: {
              title: 'Make vs. Do',
              meta: 'Explicación · 1:05 · 1 voz',
              words: ['make', 'do'],
              lines: [
                { who: 'Voz', parts: [{ text: 'We ' }, { text: 'make', mark: true }, { text: ' things that didn’t exist: make a cake.' }] },
                { who: 'Voz', parts: [{ text: 'We ' }, { text: 'do', mark: true }, { text: ' tasks and activities: do your homework.' }] },
                { who: 'Voz', parts: [{ text: 'Your turn: ___ a decision.' }] },
              ],
            },
          },
          {
            label: 'El sonido «th»',
            sample: {
              title: 'Saying “TH”',
              meta: 'Explicación · 0:55 · 1 voz',
              words: ['think', 'three', 'this'],
              lines: [
                { who: 'Voz', parts: [{ text: 'Put your tongue gently between your teeth.' }] },
                { who: 'Voz', parts: [{ text: 'Now blow softly: ' }, { text: 'think', mark: true }, { text: ', ' }, { text: 'three', mark: true }, { text: '.' }] },
                { who: 'Voz', parts: [{ text: 'Add your voice for ' }, { text: 'this', mark: true }, { text: ' and that.' }] },
              ],
            },
          },
        ],
      },
    ] satisfies StudioFormat[] as StudioFormat[],
    library: [
      { kind: 'Podcasts', title: 'Con tus palabras', body: 'Dos voces conversan dos o tres minutos usando justo el vocabulario que estás trabajando. Luego practicas cada palabra en voz alta.' },
      { kind: 'Juegos', title: 'Para aprender jugando', body: 'Partidas cortas creadas con el vocabulario que necesitas.' },
      { kind: 'Historias', title: 'Por capítulos', body: 'Aventura, misterio, animales, espacio, deportes, fantasía o vida escolar. Con narrador y personajes de voces distintas.' },
      { kind: 'Explicaciones', title: 'En el momento', body: 'Pregunta esa duda de gramática o pronunciación y escucha una explicación corta, con un ejemplo para practicar.' },
      { kind: 'Vídeo semanal', title: 'Tu resumen', body: 'Menos de un minuto, en vertical: las frases que dijiste bien, cuánto practicaste y qué toca reforzar.' },
      { kind: 'Misión diaria', title: 'Una cosa al día', body: 'Una sola tarea, cuánto dura y por qué te ayuda ahora. Sin listas interminables.' },
      { kind: 'Pronunciación', title: 'Palabra por palabra', body: 'Las palabras que más frenan que te entiendan, una a una, hasta que suenan claras.' },
      { kind: 'Vocabulario', title: 'Con imágenes', body: 'Reconoce y recuerda palabras nuevas con apoyo visual, sin memorizar listas.' },
      { kind: 'Simulacros', title: 'TOEFL y TOEIC', body: 'Tareas como las del examen real, con corrección inmediata y ejercicios hechos para tus puntos débiles.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que suele preguntarse antes de empezar.',
    items: [
      {
        q: '¿Qué es Polyngual?',
        a: 'Una app de idiomas que enseña escuchándote hablar. Tiene tres cursos: preparación del TOEFL y el TOEIC, inglés para el trabajo (Business) y español para quien vive en España. En cada uno te dice qué corregir palabra por palabra y crea tu práctica con las palabras y los fallos que te cuestan.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Puedes empezar gratis la preparación de exámenes y el curso de español. Si más adelante quieres un plan de pago, verás el precio en la app antes de pagar nada. Business es por invitación mientras abrimos los primeros grupos.',
      },
      {
        q: '¿Cuándo puedo empezar?',
        a: 'Hoy mismo. Elige tu curso y en unos minutos estarás practicando. Para Business, solicita acceso y te escribimos.',
      },
      {
        q: '¿Sirve para preparar el TOEFL o el TOEIC?',
        a: 'Sí. Tienes simulacros con los tipos de tarea actuales, corrección inmediata y práctica hecha con tus fallos. Polyngual no está afiliado a ETS y no predice tu nota oficial.',
      },
      {
        q: '¿Necesito un nivel mínimo?',
        a: 'Depende del curso. Español empieza desde cero (A1). Business es para quien ya trabaja en inglés (de B1 a C2). La preparación de exámenes empieza con un simulacro completo que te dice dónde estás.',
      },
      {
        q: '¿Qué hacéis con mi voz y mis datos?',
        a: 'Usamos tu voz solo para puntuar tu pronunciación y no guardamos esas grabaciones. No hay anuncios y no vendemos tus datos. Los detalles están en la política de privacidad.',
      },
      {
        q: '¿En qué idiomas está?',
        a: 'Enseñamos inglés (exámenes y Business) y el español de España. La web y la app están en español y en inglés.',
      },
    ],
  },
  closing: {
    title: 'Cada semana, un poco mejor.',
    body: 'Elige por dónde quieres empezar.',
  },
  visuals: {
    wordsLabel: 'Palabras para trabajar',
    levelLabel: 'Tu nivel',
    share: 'Compartir {level} en LinkedIn ↗',
    corrected: 'Corregido',
    checks: ['Organización', 'Vocabulario', 'Conectores: practícalos hoy'],
  },
  footer: {
    social: 'Redes sociales',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    contact: 'Contacto',
    rights: 'Polyngual',
    examPrep: 'Preparación {exam}',
  },
};

export type Dictionary = typeof es;
