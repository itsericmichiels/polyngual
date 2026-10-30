import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad | Polyngual',
  description: 'Qué datos guarda Polyngual de su lista de espera, su app para aprender y su preparación de TOEFL y TOEIC, para qué y cómo borrarlos.',
  alternates: { canonical: '/privacidad', languages: { es: '/privacidad', en: '/en/privacy' } },
};

// Plain-language policy: waitlist, learning app and exam prep (/examen). Keep in sync with /en/privacy.
export default function PrivacyPage() {
  return (
    <main className="legal shell">
      <Link href="/es" className="legal-back">
        ← Volver
      </Link>
      <h1>Política de privacidad</h1>
      <p className="legal-updated">Última actualización: 30 de octubre de 2026</p>

      <h2>Quién recoge tus datos</h2>
      <p>
        Polyngual es un servicio de 924 Fund LLC, que opera con los nombres Polyngual y Voxeo (10055 W Dartmouth Ave, E104,
        Lakewood, CO 80227, Estados Unidos), responsable de tus datos. Polyngual funciona con la tecnología de Voxeo. Puedes escribirnos a{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> para cualquier cosa relacionada con tus datos.
      </p>

      <h2>Qué guardamos</h2>
      <ul>
        <li>Tu correo electrónico.</li>
        <li>El país desde el que te apuntaste, deducido de tu conexión (la lista no guarda tu dirección IP).</li>
        <li>La fecha y el orden en que te apuntaste, para la oferta de fundadores.</li>
        <li>Cómo llegaste a la página: el enlace o la campaña de origen, si la hay.</li>
        <li>El idioma de la página en la que te apuntaste, para escribirte en él.</li>
      </ul>

      <h2>Para qué</h2>
      <p>
        Solo para gestionar la lista de espera: confirmarte que estás dentro, avisarte cuando abramos y aplicarte la oferta de
        fundadores si te corresponde. La base legal es tu consentimiento, que das al marcar la casilla del formulario. No
        vendemos ni compartimos tus datos con nadie para publicidad.
      </p>

      <h2>Con quién trabajamos</h2>
      <p>
        Guardamos la lista y enviamos los correos con <strong>Resend</strong> (Resend, Inc., Estados Unidos), que trata los
        datos por cuenta nuestra. Organizamos la lista en nuestro CRM, <strong>HighLevel</strong> (HighLevel, Inc., Estados
        Unidos). La web está alojada en <strong>Vercel</strong>, y medimos las visitas con Vercel Web
        Analytics, que no usa cookies ni identifica a personas. Solo si lo aceptas en el aviso de cookies, también
        usamos <strong>Google Analytics</strong> y <strong>Google Tag Manager</strong> (Google Ireland Ltd.), que ponen
        cookies para medir visitas y qué botones se pulsan. No los usamos para publicidad. Puedes cambiar tu elección
        en cualquier momento con el botón «Cookies» de la esquina inferior.
      </p>

      <h2>Cuánto tiempo</h2>
      <p>Hasta que te des de baja o hasta que la lista de espera deje de tener sentido, lo que ocurra primero.</p>

      <h2>La app para aprender (learn.polyngual.app)</h2>
      <p>Cuando creas una cuenta para aprender con Polyngual, también guardamos lo que la app necesita para enseñarte:</p>
      <ul>
        <li>Tu correo, el nombre con el que quieres que te llamemos y el idioma en que usas la app.</li>
        <li>
          Tus respuestas al empezar: para qué aprendes, tu examen y su fecha si tienes uno, tu prueba de nivel, los minutos
          al día que elegiste y la hora a la que quieres el recordatorio, con tu zona horaria.
        </li>
        <li>Lo que practicas y cómo te va: tus respuestas a los ejercicios, las palabras que aprendes, tus puntuaciones y tu progreso.</li>
        <li>
          Tu voz cuando haces un ejercicio hablado. Para puntuar tu pronunciación enviamos la grabación a{' '}
          <strong>Microsoft Azure AI Speech</strong>, que devuelve la puntuación; no guardamos esa grabación. Si grabas tu
          nombre en tu perfil, lo guardamos hasta que lo borres.
        </li>
        <li>
          Tus conversaciones con el tutor de conversación, que funciona con la IA de <strong>Google</strong> (Gemini). El
          tutor escucha lo que dices durante la conversación para responderte.
        </li>
        <li>Cómo usas la app (qué páginas abres y qué haces), para mejorarla. Sin cookies de publicidad.</li>
      </ul>
      <p>
        Usamos todo esto solo para tu curso: tu plan, tu nivel, tu progreso y los correos sobre tu aprendizaje (una
        bienvenida, un recordatorio diario a la hora que elegiste, algunos mensajes si dejas de practicar y un resumen
        semanal). Cada uno de esos correos tiene un enlace para dejar de recibirlos. La base legal es el contrato que
        aceptas al crear tu cuenta; no vendemos tus datos ni los usamos para publicidad.
      </p>
      <p>
        Los datos de la app se guardan en <strong>Supabase</strong>, la app está alojada en <strong>Vercel</strong> y sus
        correos se envían con <strong>Resend</strong>. Guardamos tu cuenta mientras la uses; pídenos borrarla y la borramos
        con todo lo que contiene.
      </p>

      <h2>Preparación de TOEFL y TOEIC (polyngual.app/examen)</h2>
      <p>Cuando te apuntas a la beta o creas una cuenta para preparar un examen, guardamos:</p>
      <ul>
        <li>
          Tu cuenta: tu correo y una contraseña, o tu acceso con Google (de Google solo recibimos tu nombre, tu correo y tu
          foto de perfil).
        </li>
        <li>
          Tu inscripción en la beta: el examen (TOEFL o TOEIC), tu plaza o tu puesto en la lista de espera, tu lengua
          materna, el mes de tu examen si nos lo dices, el idioma de la página y el enlace del grupo desde el que llegaste.
        </li>
        <li>
          Tu práctica: la fecha de tu examen, tus respuestas, tus exámenes de práctica y puntuaciones, las palabras y áreas en
          las que fallas, tus tareas de escritura y expresión oral con su nota y sus comentarios, y las explicaciones breves
          que preparamos para ti.
        </li>
        <li>
          Tu voz en las tareas orales. Enviamos la grabación a <strong>Microsoft Azure AI Speech</strong> para transcribirla
          y puntuarla, y <strong>no guardamos la grabación</strong>. Guardamos la transcripción y el resultado.
        </li>
        <li>
          Lo que nos envías con «¿Algo va mal?»: tu mensaje, la página y la pregunta en la que estabas, la respuesta que
          elegiste y el tipo de navegador.
        </li>
        <li>
          Si tú quieres: tu apodo y los consejos que compartes en la comunidad (los revisamos antes de publicarlos), y tu
          resultado real del examen si nos lo cuentas, con tu permiso antes de citarlo.
        </li>
        <li>
          Tu plan: si es Gratis, la prueba de 7 días, una plaza beta o un plan de pago, y hasta cuándo. Si pagas, el
          identificador de cliente de Stripe, el plan, el importe y las fechas; nunca vemos ni guardamos tu tarjeta.
        </li>
        <li>
          Tus dispositivos: para que la cuenta sea personal, se puede usar en un teléfono, una tableta y un ordenador a la
          vez. Guardamos un identificador aleatorio de cada uno, su tipo, el navegador y cuándo se usó por última vez.
        </li>
        <li>
          La garantía del plan de 3 meses: la nota que quieres conseguir y, si la reclamas, tu resultado oficial y el informe
          de notas que subes, que solo revisamos nosotros para decidir la reclamación.
        </li>
      </ul>
      <p>
        Usamos estos datos solo para prepararte para tu examen y mejorar el producto. Las tareas escritas y las
        transcripciones orales se corrigen con un modelo de IA de <strong>OpenAI</strong>, que recibe el texto, no el audio,
        y no lo usa para entrenar sus modelos. Los datos se guardan en <strong>Supabase</strong>, la web está alojada en{' '}
        <strong>Vercel</strong>, los correos se envían con <strong>Resend</strong> y los pagos los gestiona{' '}
        <strong>Stripe</strong> (Stripe, Inc., Estados Unidos); nunca vemos tu tarjeta.
      </p>
      <p>
        Te enviamos los correos que necesita tu cuenta (confirmarla, entrar, cambiar la contraseña), una bienvenida cuando
        consigues plaza en la beta, un resumen semanal de tu estudio, un aviso antes de que termine tu prueba gratis o tu
        plaza beta, y algunos correos en torno a la fecha de tu examen (antes, el mismo día y para preguntarte cómo te fue),
        que puedes dejar de recibir con el enlace de cada uno. La base legal es el contrato que aceptas al
        apuntarte; no vendemos tus datos ni los usamos para publicidad.
      </p>
      <p>
        Guardamos tu cuenta mientras la uses. Si no usas Polyngual durante 6 meses (y el acceso que tuvieras ha terminado), te
        avisamos por correo al menos 14 días antes y después borramos tus datos de práctica, lo que publicaste en la comunidad
        y tus avisos de problemas. Si te apuntas a la lista de espera sin cuenta, borramos ese registro tras 6 meses sin
        cambios. Puedes pedirnos en cualquier momento que borremos tu cuenta con todo lo que contiene.
      </p>

      <h2>Dónde se guardan tus datos</h2>
      <p>
        Polyngual es un servicio para personas de América Latina operado desde Estados Unidos. Tus datos se guardan y se
        procesan fuera de tu país: en Estados Unidos (Vercel, Resend, Stripe, OpenAI y Microsoft Azure) y en la Unión Europea
        (Irlanda), donde está la base de datos de Supabase. Solo trabajamos con proveedores que tratan los datos por cuenta
        nuestra, con medidas de seguridad como el cifrado de las conexiones, y solo para darte el servicio.
      </p>

      <h2>Contenido hecho con inteligencia artificial</h2>
      <p>
        Parte del contenido de Polyngual se genera con ayuda de inteligencia artificial: preguntas
        y textos de práctica, explicaciones, frases de ejemplo, pódcasts e historias, y las voces de los ejercicios de
        comprensión auditiva, que son sintéticas, no personas reales. Las correcciones de lo que escribes y dices, y el tutor
        de conversación, también las produce una IA en tiempo real. Lo indicamos para que siempre sepas cuándo interactúas con
        una IA, como exige la normativa europea. La IA puede equivocarse: si ves un error, pulsa «¿Algo va mal?».
      </p>

      <h2>Darte de baja o borrar tus datos</h2>
      <p>
        Cada correo que te enviamos incluye un enlace para darte de baja: al usarlo borramos tu contacto por completo. También
        puedes escribirnos a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> para pedir acceso, corrección o borrado de
        tus datos. Si crees que no los tratamos bien, puedes reclamar ante la autoridad de protección de datos de tu país.
      </p>
    </main>
  );
}
