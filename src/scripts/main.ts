import { inject, track } from '@vercel/analytics';

// Analítica liviana de Vercel, sin cookies.
inject({ mode: import.meta.env.PROD ? 'production' : 'development' });

// Clics en botones de WhatsApp, separados por origen (hero, plan, modelo, flotante, cta-final…).
document.addEventListener('click', (e) => {
  const link = (e.target as Element).closest<HTMLElement>('[data-wa]');
  if (!link) return;
  const props: Record<string, string> = { origen: link.dataset.wa ?? 'desconocido' };
  if (link.dataset.waDetalle) props.detalle = link.dataset.waDetalle;
  track('whatsapp_click', props);
});

// Demos abiertas desde Trabajos o Modelos.
document.addEventListener('click', (e) => {
  const link = (e.target as Element).closest<HTMLElement>('[data-demo]');
  if (link) track('demo_click', { proyecto: link.dataset.demo ?? '' });
});

// Animaciones de entrada.
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}
