import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad | Polyngual',
  description: 'Qué datos guarda Polyngual de su lista de espera y de su app para aprender, para qué y cómo borrarlos.',
  alternates: { canonical: '/privacidad', languages: { es: '/privacidad', en: '/en/privacy' } },
};

// Plain-language policy for the waitlist only. Review with a lawyer before collecting anything else.
export default function PrivacyPage() {
  return (
    <main className="legal shell">
      <Link href="/es" className="legal-back">
        ← Volver
      </Link>
      <h1>Política de privacidad</h1>
      <p className="legal-updated">Última actualización: 6 de octubre de 2026</p>

      <h2>Quién recoge tus datos</h2>
      <p>
        Polyngual es responsable de los datos de su lista de espera. Puedes escribirnos a{' '}
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

      <h2>Darte de baja o borrar tus datos</h2>
      <p>
        Cada correo que te enviamos incluye un enlace para darte de baja: al usarlo borramos tu contacto por completo. También
        puedes escribirnos a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> para pedir acceso, corrección o borrado de
        tus datos. Si crees que no los tratamos bien, puedes reclamar ante la autoridad de protección de datos de tu país.
      </p>
    </main>
  );
}
