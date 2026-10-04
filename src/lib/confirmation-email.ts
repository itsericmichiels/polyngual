// Confirmation email, written as the Polyngual team (no founder name: the brand stays independent).
// Spanish copy adapted from the brief; English for signups from /en. Plain, personal layout so it
// reads like a note rather than a newsletter.

type EmailLocale = 'es' | 'en';

const COPY: Record<EmailLocale, { subject: string; paragraphs: string[]; signoff: string; footer: string; unsubscribe: string }> = {
  es: {
    subject: 'Ya estás en la lista de Polyngual',
    paragraphs: [
      'Hola,',
      'Gracias por apuntarte a Polyngual.',
      'Estamos terminando los últimos detalles y abriremos en unas semanas. Como estás en la lista, entrarás antes que el público general, y si eres de las primeras 200 personas tendrás 50% de descuento en el plan anual para siempre.',
      'Mientras tanto, te pedimos un favor que nos ayuda mucho: responde a este correo y cuéntanos qué es lo que más te cuesta del inglés. ¿Hablar? ¿Entender cuando hablan rápido? ¿Un examen que tienes pendiente? Leemos todas las respuestas y con ellas decidimos qué construir primero.',
    ],
    signoff: 'Nos vemos pronto,\nEl equipo de Polyngual',
    footer: 'Recibes este correo porque te apuntaste a la lista de espera de Polyngual.',
    unsubscribe: 'Darte de baja y borrar tus datos',
  },
  en: {
    subject: 'You’re on the Polyngual waitlist',
    paragraphs: [
      'Hi,',
      'Thanks for joining Polyngual.',
      'We’re putting the finishing touches on it and will open in a few weeks. Because you’re on the list, you’ll get in before everyone else, and if you’re one of the first 200 people you’ll get 50% off the annual plan, forever.',
      'In the meantime, we have a favour to ask that helps us a lot: reply to this email and tell us what you find hardest about English. Speaking? Understanding people when they talk fast? An exam coming up? We read every reply, and they decide what we build first.',
    ],
    signoff: 'See you soon,\nThe Polyngual team',
    footer: 'You’re receiving this email because you joined the Polyngual waitlist.',
    unsubscribe: 'Unsubscribe and delete your data',
  },
};

export const CONFIRMATION_SUBJECT = COPY.es.subject;

export function confirmationEmail(unsubscribeUrl: string, locale: EmailLocale = 'es') {
  const c = COPY[locale];
  const text = [...c.paragraphs, c.signoff, `—\n${c.unsubscribe}: ${unsubscribeUrl}`].join('\n\n');

  const body = c.paragraphs.map((p) => `<p style="margin:0 0 16px">${p}</p>`).join('');
  const html = `<!doctype html><html lang="${locale}"><body style="margin:0;background:#FBF8F3">
<div style="max-width:520px;margin:0 auto;padding:32px 24px;font-family:'Nunito Sans',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#021940">
${body}
<p style="margin:0 0 32px">${c.signoff.replace('\n', '<br>')}</p>
<p style="margin:0;font-size:13px;color:#40516D;border-top:1px solid #E2E2E1;padding-top:16px">
${c.footer}
<a href="${unsubscribeUrl}" style="color:#3047E8">${c.unsubscribe}</a>.
</p></div></body></html>`;

  return { subject: c.subject, html, text };
}
