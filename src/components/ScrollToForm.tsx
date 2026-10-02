'use client';

export function ScrollToForm({ label, className = 'btn btn-primary' }: { label: string; className?: string }) {
  function go(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById('lista');
    if (!target) return;
    event.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    const input = target.querySelector<HTMLInputElement>('input[type="email"]');
    window.setTimeout(() => input?.focus({ preventScroll: true }), reduced ? 0 : 550);
  }
  return (
    <a href="#lista" className={className} onClick={go}>
      <span>{label}</span>
    </a>
  );
}
