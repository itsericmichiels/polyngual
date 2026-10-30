import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Términos de uso | Polyngual',
  description: 'Las condiciones para usar Polyngual, su beta, su prueba gratis y sus planes de pago: qué ofrecemos, qué esperamos de ti y qué no garantizamos.',
  alternates: { canonical: '/terminos', languages: { es: '/terminos', en: '/en/terms' } },
};

// Plain-language terms: waitlist, beta, trial and the exam prep's paid plans. Mirrors /en/terms; keep both in sync.
// Published before a lawyer's review (Eric, 2026-10-29); review it.
export default function TermsPage() {
  return (
    <main className="legal shell">
      <Link href="/es" className="legal-back">
        ← Volver
      </Link>
      <h1>Términos de uso</h1>
      <p className="legal-updated">Última actualización: 30 de octubre de 2026</p>

      <h2>Quiénes somos</h2>
      <p>
        Polyngual es una app para aprender inglés hablando y preparar exámenes como el TOEFL y el TOEIC, desarrollada con la
        tecnología de Voxeo. Polyngual y Voxeo son servicios de 924 Fund LLC, que opera con los nombres Polyngual y Voxeo (10055 W
        Dartmouth Ave, E104, Lakewood, CO 80227, Estados Unidos). Para cualquier duda sobre estos términos, escríbenos a{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Al usar Polyngual aceptas estos términos</h2>
      <p>
        Estos términos se aplican a esta web, a la lista de espera y a la app (incluida la práctica de exámenes). Si no estás
        de acuerdo con ellos, no uses el servicio. Cómo tratamos tus datos lo explica nuestra{' '}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>

      <h2>La beta</h2>
      <ul>
        <li>Abrimos Polyngual primero como beta gratuita para un número limitado de personas. Cuando se llenan las plazas, te apuntamos a la lista para la siguiente tanda.</li>
        <li>Al ser una beta, puede tener errores, cambiar o dejar de estar disponible un tiempo. Tus comentarios nos ayudan a mejorarla.</li>
        <li>La beta no tiene coste. Cuando termina tu plaza sigues con el plan Gratis, sin cobros, salvo que elijas un plan de pago.</li>
        <li>La oferta de fundadores (50% de descuento en el plan anual para las primeras 200 personas de la lista) se aplica cuando abramos los planes de pago, mientras mantengas ese plan.</li>
      </ul>

      <h2>Planes de pago de la preparación de exámenes</h2>
      <ul>
        <li>Al crear tu cuenta tienes 7 días de prueba gratis con acceso completo (incluye un examen completo de práctica), sin tarjeta. Al terminar sigues con el plan Gratis, sin cobros.</li>
        <li>Los precios se muestran en dólares estadounidenses antes de pagar, y los pagos los gestiona Stripe.</li>
        <li>El plan Mensual se cobra por adelantado cada mes y se renueva solo hasta que lo canceles desde «Gestionar pago». Al cancelarlo mantienes el acceso hasta el final del mes ya pagado y no se cobra nada más.</li>
        <li>El plan de 3 meses es un pago único y no se renueva. Incluye la garantía, con sus propias{' '}<a href="/examen/garantia">condiciones</a>.</li>
        <li>Fuera de la garantía no devolvemos pagos ya hechos, salvo que la ley de tu país te dé ese derecho.</li>
        <li>Podemos cambiar los precios, pero nunca el de un periodo que ya has pagado, y te avisaremos antes de que un cambio afecte a tu renovación.</li>
        <li>Tu cuenta es personal: se puede usar en un teléfono, una tableta y un ordenador a la vez. Compartirla con otras personas puede llevar a suspenderla.</li>
      </ul>

      <h2>Tu cuenta</h2>
      <ul>
        <li>Debes darnos un correo real y tuyo, y cuidar tu contraseña o tu enlace de acceso. La cuenta es personal.</li>
        <li>Si eres menor de edad, necesitas el permiso de tu madre, padre o tutor para usar la app.</li>
        <li>Puedes dejar de usar Polyngual cuando quieras y pedirnos que borremos tu cuenta.</li>
      </ul>

      <h2>Lo que no puedes hacer</h2>
      <ul>
        <li>Usar el servicio para algo ilegal, ofensivo o que moleste a otras personas.</li>
        <li>Intentar entrar en cuentas ajenas, saturar el servicio o copiar su contenido de forma automática.</li>
        <li>Revender, publicar o compartir los ejercicios, simulacros o materiales de Polyngual sin nuestro permiso.</li>
      </ul>
      <p>Podemos suspender una cuenta que incumpla estas normas.</p>

      <h2>Exámenes oficiales</h2>
      <p>
        Polyngual no está afiliado ni respaldado por ETS, Cambridge, el British Council ni IDP. TOEFL y TOEIC son marcas de
        ETS, e IELTS es marca de sus propietarios. Nuestros simulacros usan los mismos tipos de tarea que los exámenes
        oficiales, pero sus preguntas son nuestras y sus resultados no predicen ni sustituyen una nota oficial.
      </p>

      <h2>Inteligencia artificial y resultados</h2>
      <p>
        Parte de las correcciones, explicaciones, podcasts, historias y conversaciones se generan con inteligencia artificial
        y pueden contener errores. Te ayudamos a practicar y a ver qué te falta, pero no garantizamos una nota ni un
        resultado concreto en ningún examen.
      </p>

      <h2>Tu contenido</h2>
      <p>
        Lo que escribes o grabas en la app sigue siendo tuyo. Nos das permiso para procesarlo solo para corregirte, darte tu
        plan y mejorar el servicio, como explica la política de privacidad.
      </p>

      <h2>Nuestra responsabilidad</h2>
      <p>
        Ofrecemos el servicio tal como está, especialmente durante la beta. En la medida en que la ley lo permita, no
        respondemos de daños indirectos ni de decisiones que tomes basándote en la app (por ejemplo, la fecha en que
        haces tu examen). Nada de esto limita los derechos que te reconoce la ley de consumo de tu país.
      </p>

      <h2>Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes del estado de Colorado (Estados Unidos). Si surge un desacuerdo, escríbenos
        primero para intentar resolverlo. Si no es posible, lo resolverán los tribunales competentes de Colorado, salvo que la
        ley de consumo de tu país te permita acudir a los de tu país.
      </p>

      <h2>Cambios</h2>
      <p>
        Podemos actualizar estos términos. Si el cambio es importante, te avisaremos por correo o en la app antes de que se
        aplique. La fecha de arriba indica la última versión.
      </p>
    </main>
  );
}
