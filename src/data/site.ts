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
  whatsappLink: (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
  nav: [
    { href: "#inicio", label: "Inicio" },
    { href: "#perfil", label: "Perfil" },
    { href: "#servicios", label: "Servicios" },
    { href: "#propiedades", label: "Propiedades" },
    { href: "#cobertura", label: "Zonas / Cobertura" },
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
  op2: {
    certificateImage: publicAsset("/images/hero-property.jpg"),
    certificateAlt:
      "Documentación técnica, planos y escrituras sobre un escritorio de trabajo",
    highlights: [
      {
        icon: "person_pin",
        title: "Sin intermediarios",
        text: "Trato 1 a 1 directo con Susana Kaloustian. Inspección y defensa personal de cada inmueble.",
      },
      {
        icon: "policy",
        title: "Peritaje judicial",
        text: "Informes periciales homologados con fuerza probatoria ante tribunales civiles y de familia.",
      },
      {
        icon: "verified",
        title: "Respaldo CPCPI",
        text: "Matrícula M.P. 04-2435 garantizando transparencia técnica, aranceles de ley y seguridad jurídica.",
      },
    ],
    pillars: [
      {
        num: "01",
        icon: "balance",
        title: "Tasaciones Judiciales & Periciales",
        text: "Particiones hereditarias, división de condominio, juicios de expropiación y causas concursales. Dictámenes fundamentados con pleno valor probatorio en fueros provinciales y federales (Civil, Comercial y Familia).",
        bullets: [
          "Particiones sucesorias y liquidación conyugal",
          "Peritajes de parte y designaciones de oficio",
          "Homologación oficial conforme normas TTN y CPCPI",
        ],
        cta: "Solicitar Dictamen Pericial",
      },
      {
        num: "02",
        icon: "price_change",
        title: "Tasaciones Particulares & Comerciales",
        text: "Análisis econométrico de absorción urbana en tiempo real para determinar el valor venal real de mercado en Córdoba Capital. Dossier técnico entregable y fijación de bandas de negociación para compraventa o locación.",
        bullets: [
          "Análisis de oferta comparable y absorción barrial",
          "Dossier técnico con carpeta analítica y métricas",
          "Fijación certera para no resignar plusvalía",
        ],
        cta: "Tasar Inmueble Particular",
      },
      {
        num: "03",
        icon: "corporate_fare",
        title: "Administración Integral & Gestión Patrimonial",
        text: "Cuidado del patrimonio de punta a punta: scoring crediticio riguroso de inquilinos y garantes, redacción notarial, cobranza puntual, liquidaciones con retenciones e inspecciones periódicas de mantenimiento edilicio.",
        bullets: [
          "Scoring de solvencia y verificación de títulos de garantía",
          "Cobranzas y transferencias mensuales sin retrasos",
          "Auditoría de servicios, expensas y conservación física",
        ],
        cta: "Consultar por Administración",
      },
    ],
    process: [
      {
        num: "01",
        title: "Contacto & Relevamiento",
        text: "Recepción de escrituras, planos o carátulas judiciales; fijación de alcances del peritaje o tasación.",
        icon: "task",
        label: "Auditoría inicial",
      },
      {
        num: "02",
        title: "Inspección In Situ",
        text: "Revisión ocular directa de Susana Kaloustian, mediciones, verificación de estado de conservación y entorno urbano.",
        icon: "location_searching",
        label: "Visita técnica",
      },
      {
        num: "03",
        title: "Fijación Econométrica",
        text: "Modelado comparativo de mercado, coeficientes de depreciación y determinación del valor venal fundado.",
        icon: "analytics",
        label: "Cálculo fundamentado",
      },
      {
        num: "04",
        title: "Dictamen & Presentación",
        text: "Entrega del dossier profesional timbrado y con firma digital para tribunales o presentación comercial.",
        icon: "verified",
        label: "Validez legal total",
      },
    ],
    filters: {
      tabs: ["Todas", "En Venta", "Alquiler Anual", "Terrenos / Lotes"],
      types: [
        "Todos los tipos",
        "Casas & Residencias",
        "Departamentos & Pisos",
        "Lotes & Campos",
        "Locales Comerciales",
      ],
      zones: [
        "Todas las zonas",
        "Barrio Jardín / Zona Sur",
        "Nueva Córdoba / Güemes",
        "Valle Escondido",
        "Cerro de las Rosas",
        "Villa Belgrano",
      ],
      bedrooms: [
        "Cualquiera",
        "1 Dormitorio",
        "2 Dormitorios",
        "3 Dormitorios",
        "4+ Dormitorios",
      ],
    },
    properties: [
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        alt: "Residencia contemporánea con parque y piscina",
        tags: ["En Venta", "Exclusivo", "Parque Arbolado"],
        price: "U$S 320.000",
        location: "Barrio Jardín / Zona Sur, Córdoba",
        title: "Residencia Contemporánea con Parque & Piscina",
        text: "Desarrollada en dos plantas con terminaciones de categoría, quincho climatizado, 4 dormitorios en suite y diseño bioclimático integrado al bosque nativo.",
        specs: [
          ["Dormitorios", "4 en suite"],
          ["Baños", "4"],
          ["Cochera", "2 Doble"],
          ["Sup. Tot/Cub", "420 / 310 m²"],
        ],
        category: "En Venta",
        type: "Casas & Residencias",
        zone: "Barrio Jardín / Zona Sur",
        bedrooms: "4+ Dormitorios",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        alt: "Semipiso premium con terraza panorámica",
        tags: ["En Venta", "Vista Panorámica", "A Estrenar"],
        price: "U$S 145.000",
        location: "Nueva Córdoba / Güemes, Córdoba",
        title: "Semipiso Premium con Terraza Panorámica",
        text: "Excepcional unidad en piso alto con orientación este, asador propio en balcón terraza, carpintería de aluminio DVH, cochera cubierta y amenities de categoría.",
        specs: [
          ["Dormitorios", "2 c/ placares"],
          ["Baños", "2 compl."],
          ["Cochera", "1 Cubierta"],
          ["Sup. Tot/Cub", "98 / 85 m²"],
        ],
        category: "En Venta",
        type: "Departamentos & Pisos",
        zone: "Nueva Córdoba / Güemes",
        bedrooms: "2 Dormitorios",
      },
      {
        image:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        alt: "Lote residencial en entorno natural consolidado",
        tags: ["En Venta", "Lote / Terreno", "Bosque Serrano"],
        price: "U$S 88.000",
        location: "Valle Escondido, Córdoba Capital",
        title: "Lote Residencial en Entorno Natural Consolidado",
        text: "Terreno plano de 650 m² con servicios subterráneos listos para conectar. Escrituración inmediata, fondo a espacio verde y seguridad 24 hs en urbanización de primera línea.",
        specs: [
          ["Superficie", "650 m²"],
          ["Frente", "20 mts"],
          ["Servicios", "Subterráneos"],
          ["Posesión", "Inmediata"],
        ],
        category: "En Venta",
        type: "Lotes & Campos",
        zone: "Valle Escondido",
        bedrooms: "Cualquiera",
      },
    ],
    coverage: [
      {
        icon: "location_city",
        title: "Nueva Córdoba & Güemes",
        text: "Departamentos, renta universitaria y locales de categoría",
      },
      {
        icon: "nature_people",
        title: "Cerro de las Rosas & Villa Belgrano",
        text: "Casonas de jerarquía, oficinas corporativas y clínicas",
      },
      {
        icon: "park",
        title: "Barrio Jardín & Countries Zona Sur / Manantiales",
        text: "Viviendas familiares, condominios y barrios cerrados",
      },
      {
        icon: "terrain",
        title: "Sierras Chicas & Villa Allende",
        text: "Propiedades campestres, quintas y loteos serranos",
      },
      {
        icon: "domain",
        title: "Centro & Tribunales de Córdoba",
        text: "Peritajes judiciales, oficinas legales y sedes corporativas",
      },
    ],
    formServices: [
      ["judicial", "Tasación Judicial / Peritaje de Parte"],
      ["particular", "Tasación Particular para Compra/Venta"],
      ["administracion", "Administración Integral de Alquiler"],
      ["propiedad", "Consulta por Propiedad del Catálogo"],
      ["otro", "Otra consulta técnica personalizada"],
    ],
  },
} as const;
