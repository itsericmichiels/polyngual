// Final Spanish copy from the brief. Plain, personal layout so it reads like a note from Eric.

export const CONFIRMATION_SUBJECT = 'Ya estás en la lista de Polyngual';

const PARAGRAPHS = [
  'Hola,',
  'Gracias por apuntarte. Soy Eric, el fundador de Polyngual.',
  'Estamos terminando los últimos detalles y abriremos en unas semanas. Como estás en la lista, entrarás antes que el público general, y si eres de las primeras 200 personas tendrás 50% de descuento en el plan anual para siempre.',
  'Mientras tanto, te pido un favor que me ayuda mucho: responde a este correo y cuéntame qué es lo que más te cuesta del inglés. ¿Hablar? ¿Entender cuando hablan rápido? ¿Un examen que tienes pendiente? Leo todas las respuestas y con ellas decidimos qué construir primero.',
];

export function confirmationEmail(unsubscribeUrl: string) {
  const text = [...PARAGRAPHS, 'Nos vemos pronto,\nEric', `—\nDarte de baja y borrar tus datos: ${unsubscribeUrl}`].join('\n\n');

  const body = PARAGRAPHS.map((p) => `<p style="margin:0 0 16px">${p}</p>`).join('');
  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#FBF8F3">
<div style="max-width:520px;margin:0 auto;padding:32px 24px;font-family:'Nunito Sans',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#021940">
${body}
<p style="margin:0 0 32px">Nos vemos pronto,<br>Eric</p>
<p style="margin:0;font-size:13px;color:#40516D;border-top:1px solid #E2E2E1;padding-top:16px">
Recibes este correo porque te apuntaste a la lista de espera de Polyngual.
<a href="${unsubscribeUrl}" style="color:#3047E8">Darte de baja y borrar tus datos</a>.
</p></div></body></html>`;

  return { subject: CONFIRMATION_SUBJECT, html, text };
}
