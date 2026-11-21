const whatsappNumber = "5493516816010";
const whatsappMessage =
  "Hola Susana, vi tu web y me gustaría hacer una consulta.";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export const site = {
  brand: "Inmobiliaria Kaloustian Susana",
  professionalName: "Susana Kaloustian",
  title: "Martillera y Corredora Pública Inmobiliaria",
  license: "M.P. N° 04-2435",
  location: "Córdoba Capital",
  tagline:
    "Tasaciones judiciales y particulares, y administración inmobiliaria, con matrícula profesional en Córdoba.",
  description:
    "Sitio de Inmobiliaria Kaloustian Susana, martillera y corredora pública inmobiliaria. M.P. N° 04-2435, Córdoba Capital.",
  email: "susanakaloustian@hotmail.com",
  phoneDisplay: "351 6816010",
  phoneTel: "+543516816010",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  photo: {
    src: publicAsset("/images/susana.jpeg"),
    alt: "Susana Kaloustian, martillera y corredora pública inmobiliaria",
  },
  colegioLogo: {
    src: publicAsset("/images/logo-colegio.jpeg"),
    alt: "Colegio Profesional de Martilleros Corredores Públicos de la Provincia de Córdoba",
  },
  nav: [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ],
  services: [
    {
      id: "tasaciones-judiciales",
      name: "Tasaciones judiciales",
      summary:
        "Informes de valuación para procesos judiciales, con criterio técnico y respaldo de matrícula profesional.",
    },
    {
      id: "tasaciones-particulares",
      name: "Tasaciones particulares",
      summary:
        "Valoración de inmuebles para compraventa, sucesiones, garantías u otras decisiones patrimoniales.",
    },
    {
      id: "administracion",
      name: "Administración",
      summary:
        "Administración inmobiliaria para propietarios que necesitan orden, seguimiento y trato cercano.",
    },
  ],
} as const;
