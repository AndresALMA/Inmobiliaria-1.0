const whatsappNumber = "5493516816010";
const whatsappMessage =
  "Hola Susana, vi su sitio web y me gustaría realizar una consulta.";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

export const site = {
  brand: "Estudio Inmobiliario Kaloustian",
  professionalName: "Susana Kaloustian",
  title: "Martillera y Corredor Público Inmobiliario",
  license: "M.P. N° 04-2435",
  location: "Córdoba Capital",
  tagline:
    "Acompañamiento inmobiliario con respaldo profesional, criterio técnico y atención cercana en cada operación.",
  description:
    "En Estudio Inmobiliario Kaloustian, Susana Kaloustian —Martillera y Corredor Público Inmobiliario (M.P. N° 04-2435)— brinda asesoramiento claro y confiable en tasaciones judiciales, tasaciones particulares y administración de inmuebles en Córdoba Capital.",
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
        "Informes claros y fundamentados, elaborados con rigor técnico para respaldar procesos con seguridad y precisión.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      alt: "Documentos y firma de un informe profesional",
      detail: "Rigor técnico y sustento sólido",
    },
    {
      id: "tasaciones-particulares",
      name: "Tasaciones particulares",
      summary:
        "Una valoración confiable para tomar decisiones patrimoniales importantes con información clara y criterio profesional.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      alt: "Entrega de llaves de una propiedad",
      detail: "Claridad para decidir con confianza",
    },
    {
      id: "administracion",
      name: "Administración",
      summary:
        "Seguimiento cercano, comunicación transparente y organización en cada etapa para cuidar el patrimonio con tranquilidad.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      alt: "Edificios residenciales y comerciales modernos",
      detail: "Tranquilidad y gestión responsable",
    },
  ],
} as const;
