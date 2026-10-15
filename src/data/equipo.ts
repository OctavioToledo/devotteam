// Equipo y foto del bloque "Nosotros".
import type { ImageMetadata } from 'astro';

export type Integrante = {
  nombre: string;
  rol: string;
  area: 'desarrollo' | 'comercial';
  foto: ImageMetadata | null; // null = se muestra un recuadro con las iniciales
};

export const equipo: Integrante[] = [
  { nombre: 'Octavio Toledo', rol: 'Desarrollo full stack', area: 'desarrollo', foto: null },
  { nombre: 'Bianca Toledo', rol: 'Atención comercial', area: 'comercial', foto: null }, // TODO: foto
  // TODO: nombre de la segunda persona del área comercial; descomentar cuando esté.
  // { nombre: '', rol: 'Seguimiento de clientes', area: 'comercial', foto: null },
];

// Foto grande del bloque Nosotros. Se toma sola de src/assets/phototeam (.jpg, .jpeg, .png, .webp o .avif).
// Mientras no exista, se muestra el recuadro "Foto del equipo · Próximamente".
const fotosEquipo = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/{phototeam,PhotoTeam,photoTeam}.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

export const fotoEquipo: { src: ImageMetadata | null; alt: string; pie: string } = {
  src: Object.values(fotosEquipo)[0]?.default ?? null,
  // Ajustar alt y pie si la foto es de una sola persona.
  alt: 'Octavio y Bianca Toledo, el equipo de Devott, en Mendoza',
  pie: 'Octavio y Bianca Toledo',
};

// Video de presentación. Mientras sea null, el espacio queda oculto.
export const videoPresentacion: { url: string; titulo: string } | null = null;

// Testimonios reales. El bloque solo se muestra si `activo` es true y hay al menos uno.
export const testimonios = {
  activo: false,
  items: [] as { texto: string; nombre: string; negocio: string }[],
};
