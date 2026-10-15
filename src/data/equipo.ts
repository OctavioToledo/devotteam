// Equipo y foto del bloque "Nosotros".
// Para poner la foto: guardala en src/assets/equipo/ e importala acá (ver README).
import type { ImageMetadata } from 'astro';

export type Integrante = {
  nombre: string;
  rol: string;
  area: 'desarrollo' | 'comercial';
  foto: ImageMetadata | null; // null = se muestra un recuadro con las iniciales
};

export const equipo: Integrante[] = [
  { nombre: 'Octavio Toledo', rol: 'Desarrollo full stack', area: 'desarrollo', foto: null },
  { nombre: '[HERMANA 1]', rol: 'Atención comercial', area: 'comercial', foto: null }, // TODO: nombre y foto
  { nombre: '[HERMANA 2]', rol: 'Seguimiento de clientes', area: 'comercial', foto: null }, // TODO: nombre y foto
];

// Foto grande del bloque Nosotros (Octavio, o Octavio y su hermana). null = recuadro de espera.
export const fotoEquipo: { src: ImageMetadata | null; alt: string } = {
  src: null, // TODO: foto real del equipo
  alt: 'Octavio Toledo y equipo de Devott en Mendoza',
};

// Video de presentación. Mientras sea null, el espacio queda oculto.
export const videoPresentacion: { url: string; titulo: string } | null = null;

// Testimonios reales. El bloque solo se muestra si `activo` es true y hay al menos uno.
export const testimonios = {
  activo: false,
  items: [] as { texto: string; nombre: string; negocio: string }[],
};
