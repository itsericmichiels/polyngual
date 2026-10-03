// Spanish page copy. Headline, subheadline, benefits, offer and form text are final copy from the brief.
// An English dictionary with the same shape can be added later for /en.

export type Highlight = { text: string; mark?: boolean };
export type ScriptLine = { who: string; parts: Highlight[] };
export type StudioSample = { title: string; meta: string; lines: ScriptLine[]; words: string[] };
export type StudioFormat = { id: string; label: string; prompt: string; options: { label: string; sample: StudioSample }[] };

export const es = {
  locale: 'es',
  ogLocale: 'es_ES',
  privacyHref: '/privacidad',
  meta: {
    title: 'Polyngual | Aprende inglés hablando y prepara tu TOEFL o TOEIC',
    description:
      'Polyngual escucha cómo hablas, te dice exactamente qué corregir y te prepara para el TOEFL, el TOEIC y la vida real. Sin anuncios. A tu ritmo.',
  },
  nav: { cta: 'Únete a la lista' },
  hero: {
    eyebrow: 'Lista de espera abierta',
    headlineBefore: 'Habla inglés ',
    headlineMark: 'de verdad',
    headlineAfter: ', y comprueba cuánto mejoras cada semana.',
    // TOEFL and TOEIC are covered further down (benefit 3 and the content library), not in the hero.
    sub: 'Polyngual escucha cómo hablas, te dice exactamente qué corregir y te prepara para la vida real. Sin anuncios. A tu ritmo.',
  },
  form: {
    label: 'Tu correo',
    placeholder: 'Tu correo',
    button: 'Quiero mi lugar',
    sending: 'Guardando tu lugar…',
    consentBefore: 'Acepto recibir correos de Polyngual y la ',
    consentLink: 'política de privacidad',
    consentAfter: '.',
    note: 'Abrimos en unas semanas. Te avisamos antes que a nadie. Sin spam.',
    success: '¡Listo! Revisa tu correo, te acabamos de escribir.',
    errors: {
      email: 'Revisa tu correo, parece que falta algo.',
      consent: 'Marca la casilla para poder escribirte.',
      server: 'No hemos podido guardarlo. Inténtalo de nuevo en un momento.',
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
        body: 'Mide tu inglés al empezar y mira cómo sube, con resultados que puedes compartir en LinkedIn.',
      },
      {
        title: 'Llega listo a tu examen.',
        body: 'Simulacros de TOEFL y TOEIC con corrección inmediata y ejercicios hechos para tus puntos débiles.',
      },
    ],
    visuals: {
      wordsToWork: 'Palabras para trabajar',
      yourLevel: 'Tu nivel',
      share: 'Compartir {level} en LinkedIn ↗',
      marked: 'Corregido',
      checks: [
        { label: 'Organización', ok: true },
        { label: 'Vocabulario', ok: true },
        { label: 'Conectores: practícalos hoy', ok: false },
      ],
    },
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
    ] satisfies StudioFormat[],
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
  offer: {
    eyebrow: 'Oferta de fundadores',
    forever: 'para siempre',
    body: 'las primeras 200 personas de la lista tendrán 50% de descuento en el plan anual, para siempre.',
    cta: 'Quiero mi lugar',
  },
  closing: {
    title: 'Tu inglés, cada semana un poco mejor.',
    body: 'Apúntate hoy y sé de los primeros en probarlo.',
    cta: 'Quiero mi lugar',
  },
  footer: {
    privacy: 'Política de privacidad',
    contact: 'Contacto',
    rights: 'Polyngual',
    social: 'Redes sociales',
    examPrep: 'Preparación {exam}',
  },
};

export type Dictionary = typeof es;
