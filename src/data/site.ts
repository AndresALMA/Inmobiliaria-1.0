const whatsappNumber = "5493516816010";
const whatsappMessage =
  "Hola Susana, vi su sitio web y me gustaría realizar una consulta.";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export const site = {
  brand: "Inmobiliaria Kaloustian Susana",
  professionalName: "Susana Kaloustian",
  title: "Martillera y Corredor Público Inmobiliario",
  license: "M.P. N° 04-2435",
  location: "Córdoba Capital",
  tagline:
    "Asesoramiento inmobiliario con respaldo profesional en tasaciones y administración.",
  description:
    "Inmobiliaria Kaloustian Susana. Martillera y Corredor Público Inmobiliario. M.P. N° 04-2435. Tasaciones judiciales, tasaciones particulares y administración en Córdoba Capital.",
  email: "susanakaloustian@hotmail.com",
  phoneDisplay: "351 6816010",
  phoneTel: "+543516816010",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  photo: {
    src: publicAsset("/images/susana.jpeg"),
    alt: "Susana Kaloustian, martillera y corredor público inmobiliario",
  },
  colegioLogo: {
    src: publicAsset("/images/logo-cpcpi.svg"),
    alt: "Logo del Colegio Profesional de Martilleros y Corredores Públicos de la Provincia de Córdoba",
  },
  nav: [
    { href: "#inicio", label: "Inicio" },
    { href: "#perfil", label: "Perfil" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ],
  services: [
    {
      id: "tasaciones-judiciales",
      name: "Tasaciones judiciales",
      summary:
        "Informes de valuación elaborados con criterio técnico y respaldo de matrícula profesional para procesos judiciales.",
    },
    {
      id: "tasaciones-particulares",
      name: "Tasaciones particulares",
      summary:
        "Valoración de inmuebles para operaciones de compraventa, sucesiones, garantías u otras decisiones patrimoniales.",
    },
    {
      id: "administracion",
      name: "Administración",
      summary:
        "Gestión y administración de inmuebles con seguimiento responsable y atención personalizada.",
    },
  ],
} as const;
