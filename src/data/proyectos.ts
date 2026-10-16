// Trabajos que aparecen en el carrusel del inicio y en la sección "Trabajos".
// Para sumar uno: copiá un bloque, cambiá los datos y agregá las capturas en
// src/assets/proyectos/ (una de celular 390x844 y una de escritorio 1440x900).
import type { ImageMetadata } from 'astro';

import vertosMobile from '../assets/proyectos/vertos-mobile.png';
import vertosDesktop from '../assets/proyectos/vertos-desktop.png';
import bodegaMobile from '../assets/proyectos/bodega-guerrero-mobile.png';
import bodegaDesktop from '../assets/proyectos/bodega-guerrero-desktop.png';
import burgerMobile from '../assets/proyectos/burgerland-mobile.png';
import burgerDesktop from '../assets/proyectos/burgerland-desktop.png';
import milcaMobile from '../assets/proyectos/milca-jewelry-mobile.png';
import milcaDesktop from '../assets/proyectos/milca-jewelry-desktop.png';
import gtMobile from '../assets/proyectos/gerardo-tello-mobile.png';
import gtDesktop from '../assets/proyectos/gerardo-tello-desktop.png';

export type Proyecto = {
  nombre: string;
  rubro: string;
  // 'publicado' = demo en vivo; 'modelo' = demo con datos de ejemplo; 'en-desarrollo' = sin demo todavía.
  estado: 'publicado' | 'modelo' | 'en-desarrollo';
  necesidad: string;
  solucion: string;
  funciones: string[];
  // null = todavía no hay link público: se ofrece pedir la demo por WhatsApp.
  demo: string | null;
  capturas: { mobile: ImageMetadata; desktop: ImageMetadata } | null;
  // En false, aparece en el carrusel del inicio pero no en "Trabajos".
  enTrabajos: boolean;
};

export const proyectos: Proyecto[] = [
  {
    nombre: "Verto's",
    rubro: 'Gastronomía · Panchos a la masa',
    estado: 'publicado',
    necesidad: 'Un menú claro desde el celular, para que el cliente pida sin preguntar precio por precio.', // TODO: confirmar con el cliente
    solucion: 'Menú con categorías, carrito con total y pedido que llega armado al WhatsApp del local, con aviso de abierto o cerrado.',
    funciones: ['Menú por categorías', 'Carrito', 'Pedido por WhatsApp', 'Horarios'],
    demo: 'https://vertos.vercel.app',
    capturas: { mobile: vertosMobile, desktop: vertosDesktop },
    enTrabajos: true,
  },
  {
    nombre: 'Bodega Guerrero',
    rubro: 'Bodega · Vinos de Mendoza',
    estado: 'publicado',
    necesidad: 'Vender vino por caja, armar cajas mixtas y pedir la confirmación de mayoría de edad.',
    solucion: 'Catálogo por línea y varietal, armado de cajas de 6 por vino o mixtas, y aviso de mayoría de edad al entrar.',
    funciones: ['Venta por caja', 'Cajas mixtas', 'Mayoría de edad', 'Pedido por WhatsApp'],
    demo: 'https://bodega-guerrero.octatoledo7.workers.dev',
    capturas: { mobile: bodegaMobile, desktop: bodegaDesktop },
    enTrabajos: true,
  },
  {
    nombre: 'BurgerLand',
    rubro: 'Gastronomía · Hamburguesería',
    estado: 'modelo',
    necesidad: 'Un menú donde cada hamburguesa tiene opciones (punto de la carne) y extras que cambian el precio.',
    solucion: 'Menú con opciones y extras por producto, buscador, horarios, costo de envío y checkout que arma el pedido completo.',
    funciones: ['Opciones y extras', 'Buscador', 'Envío y retiro', 'Pedido por WhatsApp'],
    demo: 'https://burguer-land.octatoledo7.workers.dev',
    capturas: { mobile: burgerMobile, desktop: burgerDesktop },
    enTrabajos: true,
  },
  {
    nombre: 'Milca Jewelry',
    rubro: 'Joyería · Acero con baño de oro',
    estado: 'modelo',
    necesidad: 'Dejar Tiendanube y vender desde un catálogo propio, más simple, donde cada pieza tiene talle, largo o baño.',
    solucion: 'Catálogo con fichas y galería de fotos, elección de variantes, guía de talles y carrito que arma el pedido con opción regalo.',
    funciones: ['Catálogo con fichas', 'Variantes por pieza', 'Guía de talles', 'Pedido por WhatsApp'],
    demo: 'https://milcajewelry.octatoledo7.workers.dev',
    capturas: { mobile: milcaMobile, desktop: milcaDesktop },
    enTrabajos: true,
  },
  {
    nombre: 'Gerardo Tello Inmobiliaria',
    rubro: 'Inmobiliaria · San Martín, Mendoza',
    estado: 'publicado',
    necesidad: 'Dejar la plantilla de Wasi por un sitio rápido en el celular, con el precio a la vista y la consulta directa por WhatsApp.',
    solucion: 'Selector alquilar o comprar, listado con filtros, ficha con galería y mapa, y consulta por WhatsApp con la propiedad ya indicada.',
    funciones: ['Alquiler y venta', 'Filtros', 'Ficha con galería', 'Consulta por WhatsApp'],
    demo: 'https://inmobiliariagt.octatoledo7.workers.dev',
    capturas: { mobile: gtMobile, desktop: gtDesktop },
    enTrabajos: true,
  },
  {
    nombre: 'Marketplace de vehículos',
    rubro: 'Proyecto propio · Automotor',
    estado: 'en-desarrollo',
    necesidad: 'Que concesionarias chicas y particulares publiquen su stock con un perfil propio para compartir en redes.',
    solucion: 'Buscador por zona y características, perfil por vendedor y contacto directo por WhatsApp.',
    funciones: ['Perfiles de vendedor', 'Filtros por zona', 'Contacto por WhatsApp'],
    demo: null,
    capturas: null, // TODO: sumar capturas cuando haya una versión para mostrar
    enTrabajos: true,
  },
];

export const estadoEtiqueta: Record<Proyecto['estado'], string> = {
  publicado: 'Demo en vivo',
  modelo: 'Modelo con datos de ejemplo',
  'en-desarrollo': 'En desarrollo',
};
