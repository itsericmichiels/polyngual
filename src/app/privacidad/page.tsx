import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad | Polyngual',
  description: 'Qué datos guarda Polyngual de su lista de espera, para qué y cómo borrarlos.',
  alternates: { canonical: '/privacidad', languages: { es: '/privacidad', en: '/privacy' } },
};

// Plain-language policy for the waitlist only. Review with a lawyer before collecting anything else.
export default function PrivacyPage() {
  return (
    <main className="legal shell">
      <Link href="/es" className="legal-back">
        ← Volver
      </Link>
      <h1>Política de privacidad</h1>
      <p className="legal-updated">Última actualización: 3 de octubre de 2026</p>

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
        Analytics, que no usa cookies ni identifica a personas.
      </p>

      <h2>Cuánto tiempo</h2>
      <p>Hasta que te des de baja o hasta que la lista de espera deje de tener sentido, lo que ocurra primero.</p>

      <h2>Darte de baja o borrar tus datos</h2>
      <p>
        Cada correo que te enviamos incluye un enlace para darte de baja: al usarlo borramos tu contacto por completo. También
        puedes escribirnos a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> para pedir acceso, corrección o borrado de
        tus datos. Si crees que no los tratamos bien, puedes reclamar ante la autoridad de protección de datos de tu país.
      </p>
    </main>
  );
}
