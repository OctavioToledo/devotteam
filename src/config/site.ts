// Datos de contacto y mensajes de WhatsApp. Es el único lugar donde están.

export const site = {
  name: 'Devott',
  firma: 'Devott Team',
  bajada: 'Desarrollo web a medida',
  ciudad: 'Mendoza',
  provincia: 'Mendoza',
  pais: 'Argentina',
  title: 'Páginas web para emprendedores en Mendoza | Devott',
  description:
    'Catálogo online con carrito y pedidos que llegan armados a tu WhatsApp. Páginas a medida para emprendedores de Mendoza: sin comisiones, sin cuota mensual.',
  // Google Search Console, método "Etiqueta HTML": solo el valor de content="…". Vacío = no se agrega.
  googleVerification: '',
};

export const contacto = {
  // Formato wa.me: 549 + característica sin 0 + número sin 15 (+54 2634 280036, celular de Octavio).
  whatsapp: '5492634280036',
  whatsappVisible: '2634 280036',
  email: 'equipodevott@gmail.com',
  // TODO: usuario de Instagram de Devott (sin @). Vacío = no se muestra.
  instagram: '',
  perfilTecnico: 'https://octavio-toledo.vercel.app',
};

export const mensajes = {
  general: 'Hola Devott! Tengo un emprendimiento de ___ y quiero mi catálogo online.',
  plan: (plan: string) => `Hola Devott! Me interesa el plan ${plan}, ¿me pasan info y valor?`,
  modelo: (modelo: string) => `Hola Devott! Me gustó el modelo ${modelo} para mi negocio.`,
  proyecto: (proyecto: string) => `Hola Devott! Vi el trabajo de ${proyecto} y quiero algo parecido para mi negocio.`,
};

export const waLink = (texto: string = mensajes.general) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`;

export const instagramLink = () =>
  contacto.instagram ? `https://instagram.com/${contacto.instagram}` : '';
