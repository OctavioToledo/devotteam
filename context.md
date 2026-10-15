# Proyecto: Sitio web institucional de Devott

## Contexto
Devott es una marca de desarrollo de software de Mendoza, Argentina. Hace páginas web
a medida para emprendedores: catálogo online de productos con carrito, donde el pedido
llega armado al WhatsApp del negocio (productos, cantidades y total). Sin comisiones
por venta y sin cuota mensual: pago único y la página es del cliente.

El equipo es chico y real: Octavio Toledo (desarrollador full stack, programa cada
página) y [NOMBRE HERMANA 1] y [NOMBRE HERMANA 2] (atención comercial y seguimiento
de clientes). Firma secundaria: "Devott Team".

Este sitio NO es un portfolio personal. Es la cara de la empresa frente a clientes
potenciales: dueños de emprendimientos que hoy venden por Instagram y WhatsApp
(comida, bebidas, bodegas, ropa, cosmética, deco, regalos). Muchos no son técnicos
y van a entrar desde el celular, casi siempre desde un link que les pasaron por WhatsApp.

## Objetivo
Que el visitante:
1. Entienda en 5 segundos qué ofrecemos.
2. Confíe en que somos un equipo serio, viendo trabajos reales y demos funcionando.
3. Nos escriba por WhatsApp. TODA la página empuja a esa acción.

## Tono y textos
- Español rioplatense con voseo ("contanos", "probá", "tu página").
- Cercano, claro, sin tecnicismos. Frases cortas.
- Honesto: nunca inventar testimonios, cantidad de clientes, años de experiencia ni
  métricas. Si falta un dato, dejar un placeholder marcado con TODO.
- NO mostrar precios en ningún lugar del sitio. Los valores se consultan por WhatsApp.

## Diseño
- Seguir el archivo design.md adjunto como fuente principal de estilo.
- Si design.md no define algo, usar como respaldo la identidad del material de venta
  actual: fondo oscuro casi negro (#15110E), bordó (#6B1E2B), dorado (#B8913A),
  crema (#F6F1EA); tipografías Cormorant Garamond (títulos) y Montserrat (textos).
- Estética: elegante, prolija, con mucho aire. Nada de fotos de stock genéricas.
- Mobile-first: diseñar y probar primero en 375px de ancho, después escalar a desktop.
- Animaciones sutiles al hacer scroll (fade/slide cortos), respetando
  prefers-reduced-motion.

## Estructura (one-page con navegación por anclas)

1. **Header fijo**: logo "Devott", menú (Trabajos · Servicio · Cómo trabajamos ·
   Nosotros · Preguntas) y botón "Escribinos" a WhatsApp. En mobile, menú hamburguesa.

2. **Hero**
   - Etiqueta: "Páginas web para emprendedores"
   - Título: "Tu catálogo online, con pedidos directo a tu WhatsApp."
   - Bajada: "Hacemos tu página a medida: tus productos con foto y precio, y pedidos
     que te llegan armados. Sin comisiones, sin cuota mensual y lista en pocos días."
   - Botones: "Probá una demo" (ancla a Trabajos) y "Hablemos por WhatsApp".
   - Visual: mockup de celular con captura de una landing real.

3. **El problema**
   "¿Pasás el día respondiendo '¿precio?' por Instagram? ¿Mandás el catálogo en fotos
   o en PDF? Tus clientes se pierden entre mensajes y vos perdés tiempo y ventas."
   Cierre: "Con tu página, el cliente llega sabiendo qué quiere."

4. **Cómo funciona** (3 pasos con íconos)
   1. Tu cliente entra desde el celular y ve tus productos con foto, descripción y precio.
   2. Arma su pedido en el carrito y ve el total al instante.
   3. Toca un botón y te llega a WhatsApp con productos, cantidades y total.
   Incluir espacio para una captura del mensaje real que llega (placeholder).

5. **Trabajos** (sección clave para generar confianza)
   Tarjetas con: captura, nombre, rubro, qué necesitaba el negocio, qué se hizo,
   botón "Ver demo en vivo" (abre en pestaña nueva) y etiquetas de funciones.
   Proyectos iniciales:
   - Verto's: gastronómico, menú con categorías, carrito y pedido por WhatsApp. [LINK]
   - Bodega Guerrero: venta por cajas, packs mixtos y aviso de mayoría de edad. [LINK]
   - [OTROS PROYECTOS + LINKS]
   Debe ser trivial agregar proyectos nuevos (ver "Datos").

6. **Modelos para tu rubro**
   "Elegís un modelo ya probado y lo adaptamos a tu marca: tus colores, tu logo, tus
   textos y tus productos. Así ves cómo va a funcionar antes de decidir."
   Una tarjeta por modelo (estilo, funciones destacadas, ideal para, demo).
   Debajo, chips de rubros: Indumentaria · Cosmética · Deco · Regalería · Artesanías ·
   Viveros · Gastronomía · Bebidas. Frase: "Cualquier modelo se adapta a tu rubro."
   Destacado: "Probá el pedido desde tu celular: armá uno y mirá cómo llega a WhatsApp."

7. **Qué incluye tu página** (grilla de 2 columnas, 1 en mobile)
   Portada · Quiénes somos · Catálogo con filtros por categoría · Carrito con total ·
   Pedido por WhatsApp · Pedido guardado si el cliente vuelve · Contacto con botón
   flotante · Pensada para el celular · Lista para compartir (vista previa en WhatsApp
   e Instagram, SEO básico) · Dominio propio con certificado de seguridad · Una ronda
   de ajustes sin cargo.
   Bloque aparte "Se puede sumar después": cobro online, panel de administración,
   control de stock, fotos profesionales, diseño de logo.

8. **Planes** (SIN precios)
   Tres tarjetas, con Esencial destacado:
   - Esencial: modelo de la librería adaptado a tu marca, hasta 30 productos, carrito
     y pedido por WhatsApp. Plazo: 3 a 5 días hábiles.
   - Profesional: todo lo del Esencial, hasta 80 productos, secciones extra (promos,
     galería, preguntas frecuentes) y reglas de venta especiales (packs, combos,
     mínimos). Plazo: 5 a 7 días hábiles.
   - A medida: diseño desde cero y funciones nuevas para tu negocio. Plazo a definir.
   Cada tarjeta termina en el botón "Consultá el valor", que abre WhatsApp con un
   mensaje que menciona ese plan.
   Línea debajo: "Pago único, sin cuota mensual. Presupuesto cerrado por escrito antes
   de empezar. Opción de pago en dos partes."

9. **Cómo trabajamos** (timeline vertical, 7 pasos)
   1. Charla inicial: nos contás qué vendés y cómo vendés hoy. Sin costo y sin compromiso.
   2. Elegís modelo y colores, o usamos los de tu marca.
   3. Presupuesto cerrado: valor final y plazo por escrito. Sin costos sorpresa.
   4. Enviás el material: logo, fotos, textos y una planilla de productos que te damos.
   5. Seña y arranque.
   6. Revisión: ves la página funcionando y hacemos una ronda de ajustes sin cargo.
   7. Publicación en tu dominio, lista para compartir.
   Cierre: "El material define el plazo: si llega completo, todo sale más rápido."

10. **Después de la entrega** (tarjetas)
    Garantía de 30 días ante fallas · La página y su contenido son tuyos · Sin cuota
    mensual: pagás solo los cambios que pidas, con presupuesto previo · Crecés sin
    empezar de cero (cobro online o envíos reutilizan todo lo hecho).

11. **Nosotros**
    "Devott es un equipo chico de Mendoza. Octavio programa cada página a medida, sin
    plantillas genéricas ni plataformas que cobran por mes. [HERMANA 1] y [HERMANA 2]
    te atienden, te asesoran y acompañan tu proyecto de principio a fin. Hablás
    directo con quienes hacen tu página."
    Tarjetas de equipo con foto real (placeholder hasta tenerlas), nombre y rol.
    Link discreto: "Conocé el perfil técnico de Octavio" → octavio-toledo.vercel.app
    Dejar preparado (oculto) un espacio para un video de presentación futuro.

12. **Preguntas frecuentes** (acordeón accesible)
    - Ya vendo por Instagram, ¿para qué quiero una página? → La página va en tu bio.
      Instagram atrae; la página ordena el pedido y te ahorra responder precios uno por uno.
    - ¿Por qué no Tiendanube o similar? → Esas plataformas cobran todos los meses y
      comisiones por venta. Acá pagás una vez y la página es tuya.
    - ¿Cuánto cuesta? → Depende del plan y de tus productos. Escribinos y te pasamos un
      presupuesto cerrado, sin compromiso. Es un pago único, con opción en dos pagos.
    - ¿Y si quiero cambiar precios o productos? → Lo pedís cuando haga falta y pagás
      solo ese cambio, con presupuesto previo.
    - No tengo fotos ni textos. → Los textos los ordenamos a partir de tus ideas. Para
      fotos alcanza con el celular y un fondo liso; si no, se cotiza aparte.
    - ¿Puedo cobrar online? → Esta versión cierra la venta por WhatsApp. El cobro
      online se puede sumar después sin rehacer nada.
    - ¿Cuánto tarda? → Entre 3 y 7 días hábiles según el plan, desde que recibimos
      el material completo.

13. **CTA final**
    Etiqueta "Próximo paso". Título: "Contanos qué vendés y armamos tu página."
    Botón grande a WhatsApp, más correo e Instagram.

14. **Footer**
    Logo, "Devott Team · Desarrollo web a medida", Mendoza, Argentina, contacto,
    Instagram [USUARIO], © 2026 Devott.

15. **Botón flotante de WhatsApp** visible en todo el sitio, sin tapar contenido en mobile.

## WhatsApp
- Número: 5492634280036 (formato wa.me, verificar).
- Todos los enlaces usan https://wa.me/NUMERO?text=MENSAJE_CODIFICADO.
- Mensajes precargados según el origen, por ejemplo:
  - General: "Hola Devott! Tengo un emprendimiento de ___ y quiero mi catálogo online."
  - Por plan: "Hola Devott! Me interesa el plan Esencial, ¿me pasan info y valor?"
  - Por modelo: "Hola Devott! Me gustó el modelo Bodega Guerrero para mi negocio."
- Centralizar el número y los mensajes en un solo archivo de configuración.

## Datos
Separar todo el contenido editable del código en archivos de datos (JSON/TS/MD):
proyectos, modelos, planes, pasos, preguntas frecuentes, equipo y contacto.
Agregar un proyecto o cambiar un texto no debe requerir tocar componentes.
Escribir un README corto explicando cómo hacerlo.

## Requisitos técnicos
- Elegí vos el stack, priorizando: sitio estático o casi estático, carga muy rápida,
  deploy simple en Vercel y facilidad de mantenimiento por una sola persona.
  Justificá la elección en el README.
- Lighthouse objetivo: 90+ en Performance, Accessibility, Best Practices y SEO (mobile).
- Imágenes optimizadas (WebP/AVIF, tamaños responsivos, lazy loading) y fuentes con
  font-display: swap.
- SEO: title y meta description orientados a "páginas web para emprendedores en
  Mendoza", HTML semántico, un solo h1, schema.org LocalBusiness/ProfessionalService,
  sitemap.xml, robots.txt y URL canónica [DOMINIO].
- Open Graph y Twitter Card con imagen propia de 1200x630 (placeholder diseñado con
  la marca): es clave porque el link se comparte por WhatsApp.
- Favicon y apple-touch-icon.
- Accesibilidad: contraste AA, alt en imágenes, foco visible, navegación por teclado
  y aria en el menú mobile y el acordeón.
- Analítica liviana (Vercel Analytics o similar) y registro de eventos de clic en cada
  botón de WhatsApp, diferenciando el origen (hero, plan, modelo, flotante, CTA final).
- Sin cookies invasivas ni scripts pesados de terceros.

## Restricciones
- Nada de contenido falso: sin testimonios inventados, logos de clientes ficticios
  ni contadores de clientes. Dejar un componente de testimonios listo pero
  desactivado hasta tener reales.
- Nada de precios en el sitio.
- Nada de fotos de stock de personas u oficinas.

## Entregables
1. Proyecto funcionando localmente y listo para deploy en Vercel.
2. README con stack elegido, cómo correrlo, cómo editar contenido y cómo agregar
   proyectos.
3. Lista de TODOs con todo lo que falta que yo provea (fotos, links, textos).

## Forma de trabajo
Antes de escribir código, proponé la estructura de carpetas, el stack elegido y un
resumen de cómo vas a aplicar el design.md. Esperá mi confirmación. Después
construí sección por sección y revisá en vista mobile al terminar cada una.
