// Textos editables de la página. Cambiar acá no requiere tocar componentes.

export const hero = {
  etiqueta: 'Páginas web para emprendedores',
  titulo: 'Tu catálogo online, con pedidos directo a tu WhatsApp.',
  bajada:
    'Hacemos tu página a medida: tus productos con foto y precio, y pedidos que te llegan armados. Sin comisiones, sin cuota mensual y lista en pocos días.',
  datos: [
    { valor: '0%', texto: 'de comisión sobre tus ventas' },
    { valor: 'Sin cuota', texto: 'pago único, sin abono mensual' },
    { valor: 'Tuya', texto: 'la página y su contenido' },
  ],
};

export const problema = {
  etiqueta: 'El problema',
  preguntas: [
    '¿Pasás el día respondiendo “¿precio?” por Instagram?',
    '¿Mandás el catálogo en fotos o en PDF?',
  ],
  texto: 'Tus clientes se pierden entre mensajes y vos perdés tiempo y ventas.',
  cierre: 'Con tu página, el cliente llega sabiendo qué quiere.',
};

export const comoFunciona = {
  etiqueta: 'Cómo funciona',
  titulo: 'Del celular de tu cliente a tu WhatsApp, en tres pasos.',
  pasos: [
    { icono: 'celular', titulo: 'Entra y mira', texto: 'Tu cliente entra desde el celular y ve tus productos con foto, descripción y precio.' },
    { icono: 'carrito', titulo: 'Arma su pedido', texto: 'Elige productos y cantidades en el carrito y ve el total al instante.' },
    { icono: 'mensaje', titulo: 'Te llega armado', texto: 'Toca un botón y te llega a WhatsApp con productos, cantidades y total.' },
  ],
  // Ejemplo ilustrativo del formato del mensaje. TODO: reemplazar por una captura real.
  mensajeEjemplo: {
    titulo: 'Así llega el pedido',
    origen: "Pedido real · Verto's",
    alt: "Captura de WhatsApp: pedido a Verto's con dos panchos, aclaración sin mostaza, total de 11.000 pesos, nombre, entrega take away y pago por transferencia.",
  },
};

export const trabajos = {
  etiqueta: 'Trabajos',
  titulo: 'Páginas funcionando, no maquetas.',
  bajada: 'Abrí cada demo en tu celular, armá un pedido y mirá cómo llega a WhatsApp.',
};

export const modelos = {
  etiqueta: 'Modelos para tu rubro',
  titulo: 'Elegís un modelo probado y lo hacemos tuyo.',
  bajada:
    'Elegís un modelo ya probado y lo adaptamos a tu marca: tus colores, tu logo, tus textos y tus productos. Así ves cómo va a funcionar antes de decidir.',
  rubros: ['Indumentaria', 'Cosmética', 'Deco', 'Regalería', 'Artesanías', 'Viveros', 'Gastronomía', 'Bebidas'],
  rubrosFrase: 'Cualquier modelo se adapta a tu rubro.',
  destacado: 'Probá el pedido desde tu celular: armá uno y mirá cómo llega a WhatsApp.',
};

export const incluye = {
  etiqueta: 'Qué incluye tu página',
  titulo: 'Todo lo necesario para recibir pedidos desde el primer día.',
  items: [
    { titulo: 'Portada', texto: 'Tu logo, una imagen principal y el mensaje que te define.' },
    { titulo: 'Quiénes somos', texto: 'Una sección con tu historia y tu ubicación.' },
    { titulo: 'Catálogo con filtros', texto: 'Foto, nombre, descripción y precio de cada producto, con filtros por categoría.' },
    { titulo: 'Carrito con total', texto: 'Tu cliente elige productos y cantidades, y ve el total calculado al instante.' },
    { titulo: 'Pedido por WhatsApp', texto: 'Un botón envía el pedido completo, ya redactado, a tu número.' },
    { titulo: 'Pedido guardado', texto: 'Si el cliente cierra la página y vuelve más tarde, lo encuentra tal como lo dejó.' },
    { titulo: 'Contacto y botón flotante', texto: 'Dirección, horarios, redes y un botón de WhatsApp siempre a mano.' },
    { titulo: 'Pensada para el celular', texto: 'Diseñada primero para el teléfono, que es desde donde entra la mayoría.' },
    { titulo: 'Lista para compartir', texto: 'Vista previa al pasar el link por WhatsApp e Instagram, y SEO básico para Google.' },
    { titulo: 'Dominio propio', texto: 'Publicada en tu dominio, con certificado de seguridad.' },
    { titulo: 'Una ronda de ajustes sin cargo', texto: 'Revisamos juntos la página terminada y hacemos los cambios que necesites.' },
  ],
  despues: {
    titulo: 'Se puede sumar después',
    items: ['Cobro online', 'Panel de administración', 'Control de stock', 'Fotos profesionales', 'Diseño de logo'],
  },
};

export const planes = {
  etiqueta: 'Planes',
  titulo: 'Tres formas de empezar.',
  items: [
    {
      nombre: 'Esencial',
      destacado: true,
      resumen: 'Un modelo de la librería adaptado a tu marca.',
      incluye: ['Logo, colores y textos tuyos', 'Hasta 30 productos', 'Carrito y pedido por WhatsApp'],
      plazo: '3 a 5 días hábiles',
    },
    {
      nombre: 'Profesional',
      destacado: false,
      resumen: 'Todo lo del Esencial, con más espacio para crecer.',
      incluye: ['Hasta 80 productos', 'Secciones extra: promos, galería, preguntas frecuentes', 'Reglas de venta: packs, combos, mínimos'],
      plazo: '5 a 7 días hábiles',
    },
    {
      nombre: 'A medida',
      destacado: false,
      resumen: 'Diseño desde cero y funciones nuevas para tu negocio.',
      incluye: ['Diseño propio', 'Funciones pensadas para tu forma de vender'],
      plazo: 'A definir',
    },
  ],
  nota: 'Pago único, sin cuota mensual. Presupuesto cerrado por escrito antes de empezar. Opción de pago en dos partes.',
};

export const proceso = {
  etiqueta: 'Cómo trabajamos',
  titulo: 'Un proceso claro, sin sorpresas.',
  pasos: [
    { titulo: 'Charla inicial', texto: 'Nos contás qué vendés y cómo vendés hoy. Sin costo y sin compromiso.' },
    { titulo: 'Elegís modelo y colores', texto: 'Probás los modelos y definís la paleta, o usamos los colores de tu marca.' },
    { titulo: 'Presupuesto cerrado', texto: 'Valor final y plazo por escrito. Sin costos sorpresa.' },
    { titulo: 'Enviás el material', texto: 'Logo, fotos, textos y una planilla de productos que te damos lista para completar.' },
    { titulo: 'Seña y arranque', texto: 'Con el material completo y el primer pago, empieza la construcción.' },
    { titulo: 'Revisión', texto: 'Ves la página funcionando y hacemos una ronda de ajustes sin cargo.' },
    { titulo: 'Publicación', texto: 'Tu página queda online en tu dominio, lista para compartir.' },
  ],
  cierre: 'El material define el plazo: si llega completo, todo sale más rápido.',
};

export const despues = {
  etiqueta: 'Después de la entrega',
  titulo: 'Tu página sigue siendo tuya.',
  items: [
    { titulo: 'Garantía de 30 días', texto: 'Cualquier falla de funcionamiento se corrige sin cargo. Cubre errores, no cambios de contenido o diseño.' },
    { titulo: 'Todo es tuyo', texto: 'La página y su contenido pasan a ser tuyos al completar el pago, y el dominio queda a tu nombre.' },
    { titulo: 'Sin cuota mensual', texto: 'Pagás solo los cambios que pidas, cuando los pidas, con presupuesto previo.' },
    { titulo: 'Crecés sin empezar de cero', texto: 'Si más adelante querés cobro online o envíos, se reutiliza todo lo hecho.' },
  ],
};

export const nosotros = {
  etiqueta: 'Nosotros',
  titulo: 'Hablás directo con quienes hacen tu página.',
  // {comercial} se reemplaza por textoComercial, con los nombres del área comercial de equipo.ts.
  texto:
    'Devott es un equipo chico de Mendoza. Octavio programa cada página a medida, sin plantillas genéricas ni plataformas que cobran por mes. {comercial}',
  textoComercial: {
    una: '{nombres} te atiende, te asesora y acompaña tu proyecto de principio a fin.',
    varias: '{nombres} te atienden, te asesoran y acompañan tu proyecto de principio a fin.',
  },
  cita: 'Cada página la programamos nosotros, para un negocio real, con nombre y apellido.',
  perfilTecnico: 'Conocé el perfil técnico de Octavio',
};

export const ctaFinal = {
  etiqueta: 'Próximo paso',
  titulo: 'Contanos qué vendés y armamos tu página.',
  boton: 'Escribinos por WhatsApp',
};
