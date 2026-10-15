# Devott · Sitio institucional

Landing de Devott: páginas web para emprendedores, con catálogo, carrito y pedidos que llegan armados a WhatsApp. Una sola página con navegación por anclas, tema claro y oscuro, y todo el contenido separado del código.

## Stack: Astro

- **Astro 7**, sitio 100 % estático. El HTML se genera al compilar. El JavaScript que llega al navegador es mínimo: menú del celular, tema claro/oscuro, carrusel, acordeón, animaciones de entrada y analítica.
- **CSS plano con variables** (`src/styles/global.css`), con los tokens del `design.md`. No hay framework de estilos.
- **Imágenes** con `astro:assets`: AVIF/WebP en varios tamaños y carga diferida, generadas al compilar.
- **Fuentes** autoalojadas con Fontsource (`font-display: swap`): Cormorant Garamond, DM Sans e IBM Plex Mono, los reemplazos que indica el `design.md`.
- **Vercel Analytics** sin cookies, con un evento `whatsapp_click` por cada botón de WhatsApp (propiedad `origen`).

Por qué Astro y no Vite + React como en las landings de clientes: este sitio es casi todo contenido, no una app con carrito. Astro no manda React al navegador, así que el sitio carga más rápido (Lighthouse móvil: 99 Performance, 100 Accesibilidad, 100 SEO). Además los componentes son HTML con un poco de lógica, fáciles de mantener para una sola persona.

## Correrlo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para probar la versión final
```

Node 22.22 o superior (ver `.node-version`).

## Deploy en Vercel

1. Importar el repo en Vercel. Detecta Astro solo y no hace falta configurar nada más.
2. En *Settings → Environment Variables*, definir `SITE_URL` con el dominio final sin barra (ej. `https://devott.com.ar`). Se usa para la URL canónica, el sitemap, el robots.txt y la imagen de vista previa.
3. En la pestaña *Analytics*, activar Web Analytics. Los eventos personalizados (`whatsapp_click`, `demo_click`) requieren un plan que los incluya.

## Editar contenido

No hace falta tocar componentes. Todo está en estos archivos:

| Qué | Dónde |
|---|---|
| Número de WhatsApp, correo, Instagram, mensajes precargados | `src/config/site.ts` |
| Textos de todas las secciones (hero, problema, planes, proceso…) | `src/data/contenido.ts` |
| Trabajos y carrusel del inicio | `src/data/proyectos.ts` |
| Modelos de la librería | `src/data/modelos.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Equipo, foto de Nosotros, video y testimonios | `src/data/equipo.ts` |

### Agregar un proyecto

1. Sacar dos capturas: celular (390 × 844) y escritorio (1440 × 900). Guardarlas en `src/assets/proyectos/` como `nombre-mobile.png` y `nombre-desktop.png`.
2. En `src/data/proyectos.ts`, importarlas arriba y copiar un bloque de la lista:

```ts
import nuevoMobile from '../assets/proyectos/nuevo-mobile.png';
import nuevoDesktop from '../assets/proyectos/nuevo-desktop.png';

{
  nombre: 'Nombre del negocio',
  rubro: 'Rubro · Detalle',
  estado: 'publicado',        // 'publicado' | 'modelo' | 'en-desarrollo'
  necesidad: 'Qué necesitaba el negocio.',
  solucion: 'Qué hicimos.',
  funciones: ['Carrito', 'Pedido por WhatsApp'],
  demo: 'https://…',          // null si todavía no hay link
  capturas: { mobile: nuevoMobile, desktop: nuevoDesktop },
  enTrabajos: true,
},
```

El orden de la lista es el orden en el carrusel y en Trabajos. Si `demo` es `null`, la tarjeta muestra "Pedí la demo" y abre WhatsApp.

### Poner la foto del equipo

Guardar la foto como `src/assets/phototeam.jpg` (también sirve `.png`, `.webp` o `.avif`; vertical 4:5, al menos 1000 px de alto) y volver a compilar. Aparece sola en el bloque Nosotros, sin tocar código. Si la foto es de una sola persona, ajustar `alt` y `pie` de `fotoEquipo` en `src/data/equipo.ts`.

Las fotos individuales van en el campo `foto` de cada integrante. Sin foto, se muestran las iniciales.

### Activar testimonios

Cuando haya testimonios reales, cargarlos en `testimonios.items` (`src/data/equipo.ts`) y poner `activo: true`. La sección aparece sola.

### Sumar el video de presentación

En `src/data/equipo.ts`, cambiar `videoPresentacion` por `{ url: 'https://www.youtube-nocookie.com/embed/ID', titulo: '…' }`.

## SEO

- **Datos estructurados** (`src/layouts/Base.astro`): empresa (servicio profesional en Mendoza, con equipo y contacto), sitio, página, planes como servicios (sin precios) y preguntas frecuentes. Se arman solos desde `src/data/`, así que al editar el contenido se actualizan.
- **Título y descripción:** `site.title` y `site.description` en `src/config/site.ts`. El título de la portada incluye "Páginas web para emprendedores en Mendoza".
- **Sitemap y robots:** `/sitemap-index.xml` y `/robots.txt`, con el dominio de `SITE_URL`.
- **Preguntas frecuentes:** las respuestas cerradas siguen en el HTML (`hidden="until-found"`): Google las lee y la búsqueda del navegador las abre.
- **Encabezados de seguridad y caché** en `vercel.json`.

### Google Search Console (después de publicar con el dominio final)

1. Entrar a https://search.google.com/search-console y agregar la propiedad con **Prefijo de URL** (ej. `https://devott.com.ar`).
2. Elegir **Etiqueta HTML**, copiar solo el valor de `content="…"` y cargarlo en Vercel como variable `PUBLIC_GOOGLE_SITE_VERIFICATION`. Hacer *Redeploy* y tocar **Verificar**.
3. En **Sitemaps**, enviar `sitemap-index.xml`.
4. Crear el perfil de **Google Business** de Devott en Mendoza con el mismo nombre, teléfono y link. Es lo que más ayuda a aparecer en búsquedas locales.

## Estructura

```
src/
  config/site.ts        contacto y mensajes de WhatsApp
  data/                 contenido editable
  assets/proyectos/     capturas de los trabajos
  components/           una sección por archivo
  layouts/Base.astro    <head>, SEO, Open Graph, schema.org
  scripts/main.ts       analítica y animaciones
  styles/global.css     tokens y estilos base
  pages/index.astro     arma la página
  pages/robots.txt.ts   robots.txt con la URL del sitio
public/                 favicon, apple-touch-icon, og.png
```

## Pendientes

Ver [TODO.md](TODO.md).
