// Equipo y foto del bloque "Nosotros".
import type { ImageMetadata } from 'astro';
import { contacto } from '../config/site';

export type Integrante = {
  nombre: string;
  area: string; // etiqueta corta, en mayúsculas en la página
  rol: string; // para los datos de Google
  bio: string; // una o dos líneas
  link?: { texto: string; url: string };
};

export const equipo: Integrante[] = [
  {
    nombre: 'Octavio Toledo',
    area: 'Desarrollo',
    rol: 'Desarrollador full stack',
    bio: 'Desarrollador full stack con varios años de experiencia. Diseña y programa cada página a medida.',
    link: { texto: 'Ver perfil técnico', url: contacto.perfilTecnico },
  },
  {
    nombre: 'Bianca Toledo',
    area: 'Gestión y ventas',
    rol: 'Gestión comercial, administración y auditorías',
    bio: 'Licenciada en Gestión Ambiental, con experiencia en ventas, administración, auditorías y optimización de procesos. Te asesora y acompaña tu proyecto.',
  },
];

// Foto grande del bloque Nosotros. Se toma sola de src/assets/phototeam (.jpg, .jpeg, .png, .webp o .avif).
// Mientras no exista, se muestra el recuadro "Foto del equipo · Próximamente".
const fotosEquipo = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/{phototeam,PhotoTeam,photoTeam}.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

export const fotoEquipo: { src: ImageMetadata | null; alt: string; pie: string } = {
  src: Object.values(fotosEquipo)[0]?.default ?? null,
  alt: 'Octavio y Bianca Toledo, hermanos y fundadores de Devott, tomados del brazo sobre un fondo blanco.',
  pie: 'Octavio y Bianca · Devott Team',
};

// Video de presentación. Mientras sea null, el espacio queda oculto.
export const videoPresentacion: { url: string; titulo: string } | null = null;

// Testimonios reales. El bloque solo se muestra si `activo` es true y hay al menos uno.
export const testimonios = {
  activo: false,
  items: [] as { texto: string; nombre: string; negocio: string }[],
};
