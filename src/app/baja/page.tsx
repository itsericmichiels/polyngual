import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/site';

type Props = { searchParams: Promise<{ e?: string; t?: string; estado?: string; lang?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { lang } = await searchParams;
  return { title: lang === 'en' ? 'Unsubscribe | Polyngual' : 'Darte de baja | Polyngual', robots: { index: false } };
}

// Reached from the link in every email. English signups get `lang=en` in that link.
const COPY = {
  es: {
    back: '← Volver',
    home: '/es',
    title: 'Darte de baja',
    confirm: (e: string) => (
      <>
        Vamos a quitar <strong>{e}</strong> de la lista de espera y borrar los datos que guardamos.
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
    confirm: (e: string) => (
      <>
        We will remove <strong>{e}</strong> from the waitlist and delete the data we keep.
      </>
    ),
    button: 'Unsubscribe me',
    messages: {
      hecho: 'Done. You have been unsubscribed and your data has been deleted. Thanks for your interest in Polyngual.',
      invalido: `This link is not valid or is incomplete. Write to ${CONTACT_EMAIL} and we will do it by hand.`,
      error: `We could not complete it right now. Try again in a while or write to ${CONTACT_EMAIL}.`,
    } as Record<string, string>,
  },
};

export default async function UnsubscribePage({ searchParams }: Props) {
  const { e, t, estado, lang } = await searchParams;
  const locale = lang === 'en' ? 'en' : 'es';
  const c = COPY[locale];
  const message = estado ? c.messages[estado] : null;

  return (
    <main className="legal shell" lang={locale}>
      <Link href={c.home} className="legal-back">
        {c.back}
      </Link>
      <h1>{c.title}</h1>
      {message ? (
        <p>{message}</p>
      ) : e && t ? (
        <form method="post" action={locale === 'en' ? '/api/baja?lang=en' : '/api/baja'} className="unsubscribe">
          <p>{c.confirm(e)}</p>
          <input type="hidden" name="e" value={e} />
          <input type="hidden" name="t" value={t} />
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
