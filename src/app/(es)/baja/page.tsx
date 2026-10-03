import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = { title: 'Darte de baja | Polyngual', robots: { index: false } };

type Props = { searchParams: Promise<{ e?: string; t?: string; estado?: string; l?: string }> };

// Unsubscribe page. Spanish by default; links in emails sent to /en signups add l=en.
const COPY = {
  es: {
    back: '← Volver',
    home: '/es',
    title: 'Darte de baja',
    confirm: (email: string) => (
      <>
        Vamos a quitar <strong>{email}</strong> de la lista de espera y borrar los datos que guardamos.
      </>
    ),
    button: 'Darme de baja',
    messages: {
      hecho: 'Listo. Te hemos dado de baja y hemos borrado tus datos. Gracias por haberte interesado en Polyngual.',
      invalido: `Este enlace no es válido o está incompleto. Escríbenos a ${CONTACT_EMAIL} y lo hacemos a mano.`,
      error: `No hemos podido completarlo ahora mismo. Inténtalo de nuevo en un rato o escríbenos a ${CONTACT_EMAIL}.`,
    } as Record<string, string>,
  },
  en: {
    back: '← Back',
    home: '/en',
    title: 'Unsubscribe',
    confirm: (email: string) => (
      <>
        We’ll remove <strong>{email}</strong> from the waitlist and delete the data we hold.
      </>
    ),
    button: 'Unsubscribe me',
    messages: {
      hecho: 'Done. You’ve been unsubscribed and your data has been deleted. Thanks for your interest in Polyngual.',
      invalido: `This link is invalid or incomplete. Email us at ${CONTACT_EMAIL} and we’ll do it by hand.`,
      error: `We couldn’t finish that just now. Please try again later or email us at ${CONTACT_EMAIL}.`,
    } as Record<string, string>,
  },
};

export default async function UnsubscribePage({ searchParams }: Props) {
  const { e, t, estado, l } = await searchParams;
  const lang = l === 'en' ? 'en' : 'es';
  const c = COPY[lang];
  const message = estado ? c.messages[estado] : null;

  return (
    <main className="legal shell" lang={lang}>
      <Link href={c.home} className="legal-back">
        {c.back}
      </Link>
      <h1>{c.title}</h1>
      {message ? (
        <p>{message}</p>
      ) : e && t ? (
        <form method="post" action="/api/baja" className="unsubscribe">
          <p>{c.confirm(e)}</p>
          <input type="hidden" name="e" value={e} />
          <input type="hidden" name="t" value={t} />
          {lang === 'en' ? <input type="hidden" name="l" value="en" /> : null}
          <button type="submit" className="btn btn-dark">
            <span>{c.button}</span>
          </button>
        </form>
      ) : (
        <p>{c.messages.invalido}</p>
      )}
    </main>
  );
}
