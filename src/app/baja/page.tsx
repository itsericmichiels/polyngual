import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Darte de baja | Polyngual', robots: { index: false } };

type Props = { searchParams: Promise<{ e?: string; t?: string; estado?: string }> };

const MESSAGES: Record<string, string> = {
  hecho: 'Listo. Te hemos dado de baja y hemos borrado tus datos. Gracias por haberte interesado en Polyngual.',
  invalido: 'Este enlace no es válido o está incompleto. Escríbenos a hola@polyngual.app y lo hacemos a mano.',
  error: 'No hemos podido completarlo ahora mismo. Inténtalo de nuevo en un rato o escríbenos a hola@polyngual.app.',
};

export default async function UnsubscribePage({ searchParams }: Props) {
  const { e, t, estado } = await searchParams;
  const message = estado ? MESSAGES[estado] : null;

  return (
    <main className="legal shell">
      <Link href="/es" className="legal-back">
        ← Volver
      </Link>
      <h1>Darte de baja</h1>
      {message ? (
        <p>{message}</p>
      ) : e && t ? (
        <form method="post" action="/api/baja" className="unsubscribe">
          <p>
            Vamos a quitar <strong>{e}</strong> de la lista de espera y borrar los datos que guardamos.
          </p>
          <input type="hidden" name="e" value={e} />
          <input type="hidden" name="t" value={t} />
          <button type="submit" className="btn btn-dark">
            <span>Darme de baja</span>
          </button>
        </form>
      ) : (
        <p>{MESSAGES.invalido}</p>
      )}
    </main>
  );
}
