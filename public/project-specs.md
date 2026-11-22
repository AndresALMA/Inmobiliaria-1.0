# Especificaciones del proyecto — Estudio Inmobiliario Kaloustian

Documento de especificaciones funcionales y técnicas del sitio estático de presencia digital para **Estudio Inmobiliario Kaloustian**.

## 1. Resumen

- **Tipo**: landing page estática, monopágina con 3 vistas seleccionables.
- **Objetivo**: presencia digital profesional para Susana Kaloustian (martillera y corredora pública inmobiliaria, Córdoba Capital), con foco en confianza, claridad y contacto directo.
- **Idioma**: español (es-AR).
- **Deploy**: GitHub Pages por GitHub Actions.

## 2. Stack técnico

| Área | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) `^7.4.13`, salida estática |
| Lenguaje | TypeScript/JS en componentes Astro, CSS global |
| UI | Sin framework de UI; HTML/CSS/JS propio |
| Backend | No hay backend; contacto por WhatsApp, teléfono y correo |
| Mapa (Opción 3) | Leaflet `1.9.4` + OpenStreetMap tiles (CDN unpkg) |
| Fuentes | Google Fonts: Cormorant Garamond, Manrope, Playfair Display, DM Sans, Lora, Source Sans 3 |
| Node | `>=22.23.4` |

### Scripts

```sh
npm install
npm run dev      # desarrollo
npm run build    # build estático en dist/
npm run preview  # previsualizar build
```

En desarrollo local, con `base: /Inmobiliaria-1.0`, el sitio se sirve bajo ese prefijo.

## 3. Configuración y deploy

- **`astro.config.mjs`**
  - `site`: `https://andresalma.github.io`
  - `base`: `/Inmobiliaria-1.0`
- **GitHub Actions**: `.github/workflows/deploy.yml` compila y publica en cada push a `main`.
- **GitHub Pages**: Source = GitHub Actions.
- Los assets públicos deben respetar `import.meta.env.BASE_URL` para funcionar bajo el prefijo del repositorio.

## 4. Estructura del proyecto

```text
public/
  favicon.svg
  images/
    contact-email.svg          # imagen destacada canal correo
    contact-property.jpg
    contact-whatsapp.svg       # imagen destacada canal WhatsApp
    hero-property.jpg
    logo-colegio.jpeg
    logo-cpcpi.svg
    susana.jpeg
  project-specs.md             # este documento
src/
  components/
    Contact.astro              # contacto Opción 1
    Footer.astro               # footer compartido
    Header.astro               # navbar compartida (no modificar estructura base)
    Hero.astro                 # hero Opción 1
    OptionSelector.astro       # selector sticky de vista/estilo/tipo
    OptionThree.astro          # vista premium con propiedades/mapa/registro
    OptionTwo.astro            # vista editorial alternativa
    Services.astro             # servicios Opción 1
  data/
    site.ts                    # fuente de verdad de contenido/marca/contacto
  layouts/
    BaseLayout.astro           # head, SEO, fuentes, Leaflet CSS, skip link
  pages/
    index.astro                # composición monopágina
  styles/
    global.css                 # estilos globales, temas, responsive
```

## 5. Fuente de verdad de contenido

`src/data/site.ts` centraliza:

- **Marca**: `Estudio Inmobiliario Kaloustian`.
- **Profesional**: Susana Kaloustian, Martillera y Corredor Público Inmobiliario, M.P. N° 04-2435.
- **Ubicación**: Córdoba Capital.
- **Contacto**: email `susanakaloustian@hotmail.com`, teléfono `351 6816010`, WhatsApp `5493516816010` con mensaje prearmado.
- **Assets locales**: foto profesional y logo CPCPI con `publicAsset()` para soportar `BASE_URL`.
- **Navegación**: Inicio, Perfil, Servicios, Contacto.
- **Servicios** (3): Tasaciones judiciales, Tasaciones particulares, Administración. Cada servicio incluye `id`, `name`, `summary`, `image`, `alt`, `detail`.

## 6. Arquitectura de la página

`index.astro` compone una sola página:

1. `OptionSelector` — barra sticky superior.
2. `Header` — navbar compartida, sin cambios estructurales entre vistas.
3. `main`
   - Panel Opción 1: `Hero` + `Services` + `Contact`.
   - `OptionTwo`.
   - `OptionThree`.
4. `Footer` compartido.

Las 3 opciones se comportan como “páginas” dentro de la monopágina, alternadas por visibilidad de paneles.

## 7. Selector de opciones (sticky)

Componente: `OptionSelector.astro`.

### Comportamiento

- Fijo arriba de todo (`position: sticky; top: 0`), visible al navegar y por encima del header.
- Botón **Ocultar**: oculta la barra y muestra botón flotante **Opciones** para reabrirla.
- Selecciona entre **Opción 1**, **Opción 2**, **Opción 3**.
- Subselectores por opción activa:
  - **Estilo**: Navy & Gold (`luxury`), Tierra (`terra`), Bosque (`forest`).
  - **Tipo**: Editorial (`editorial`), Moderna (`modern`), Cercana (`warm`).
- El cambio de tipografía aplica a todo el panel activo y también al `body[data-font]` para afectar selector/navbar/footer compartidos.

### Persistencia (localStorage)

| Clave | Valor | Default |
|---|---|---|
| `inmobiliaria-option-view` | `op1` \| `op2` \| `op3` | `op1` |
| `inmobiliaria-option-bar-hidden` | `"1"` \| `"0"` | `"0"` |
| `inmobiliaria-theme-${op}` | `luxury` \| `terra` \| `forest` | `luxury` |
| `inmobiliaria-font-${op}` | `editorial` \| `modern` \| `warm` | `editorial` |

### Navegación compartida

El script remapea anchors del nav compartido según la opción activa:

- Opción 1: `#inicio`, `#perfil`, `#servicios`, `#contacto`.
- Opción 2: `#inicio-op2`, `#perfil-op2`, `#servicios-op2`, `#contacto-op2`.
- Opción 3: `#inicio-op3`, `#perfil-op3`, `#servicios-op3`, `#propiedades-op3`, `#contacto-op3`.

## 8. Vistas

### Opción 1 — Base / institucional

- Hero, Servicios, Contacto.
- Estética navy/white/gold, confianza/profesionalismo.
- CTA principal a WhatsApp; contacto con datos directos.
- Bloque visual destacado de canales: WhatsApp y correo con imágenes grandes.

### Opción 2 — Editorial / alternativa

- Diseño distinto en composición, fondo y ritmo visual.
- Incluye foto de la clienta y propuesta de valor diferenciada.
- Secciones: inicio, servicios, perfil, contacto.
- Mantiene datos de contacto y bloque visual destacado de canales.

### Opción 3 — Premium / inmobiliaria

- Más elaborada, con foco en propiedades y presencia local.
- Incluye hero premium, perfil, servicios, propiedades destacadas, mapa/listado local, contacto y registro.
- **Propiedades**: cards con imagen, estado, precio, detalle, ubicación y CTA a WhatsApp.
- **Mapa/listado local**:
  - Leaflet + OpenStreetMap.
  - Marcadores y tarjetas sincronizados; click/focus en listado resalta tarjeta y abre popup.
  - `invalidateSize()` al hacerse visible el panel.
  - Enlace “Abrir mapa” a Google Maps.
- **Registro**: formulario con campos estándar (nombre y apellido, correo, teléfono, contraseña, confirmar contraseña, aceptación). Validación client-side: requeridos, formato email, patrón/tamaño teléfono, contraseña mínima 8, coincidencia de contraseñas, checkbox requerido. Mensaje de éxito mock; **sin backend**.

## 9. Sistema visual

### Tokens/temas

- Tema por defecto: Navy & Gold (`luxury`).
- Temas alternativos por panel: Tierra (`terra`), Bosque (`forest`).
- Tipografías por panel: Editorial, Moderna, Cercana.
- Variables CSS en `:root` y overrides por `[data-theme]` / `[data-font]`.

### Accesibilidad y UX

- Skip link “Saltar al contenido”.
- `aria-pressed`, `role="radiogroup"`, `aria-label` en selector.
- `aria-hidden`/`hidden` en paneles inactivos.
- `focus-visible` visible.
- Imágenes decorativas en canales con `alt=""`; imágenes informativas con alt descriptivo.
- `loading="lazy"` en imágenes no críticas; eager donde corresponde.

### Responsive

Breakpoints principales en `global.css`:

- **1024px**: grids pasan a 1 columna en secciones principales.
- **760px**: compactación fuerte del selector (labels ocultas, filas compactas, Estilo/Tipo en dos columnas), acciones y canales en columna.
- **420px**: ajustes finos de espaciado/tipografía.

El selector móvil está compactado para reducir altura y mantener usabilidad.

## 10. Contacto y canales

- **WhatsApp**: enlace `wa.me` con mensaje prearmado.
- **Correo**: `mailto:`.
- **Teléfono**: `tel:`.
- **Bloque visual destacado** (secciones de contacto, las 3 opciones): cards grandes con imagen/logo de WhatsApp y correo, texto corto y enlace.

## 11. Assets e imágenes

### Locales (`public/images`)

- `susana.jpeg` — foto profesional.
- `logo-cpcpi.svg` / `logo-colegio.jpeg` — respaldo institucional.
- `hero-property.jpg`, `contact-property.jpg` — fondos/soporte visual.
- `contact-whatsapp.svg`, `contact-email.svg` — canales destacados.

### Externas

- Unsplash: imágenes mock de servicios/propiedades/interiores.
- Unpkg/Leaflet: JS/CSS de mapa.
- Google Fonts: tipografías.

> Nota: las imágenes externas requieren conexión a Internet; para producción cerrada conviene localizarlas.

## 12. Estado actual y pendientes conocidos

- **Build**: `npm run build` pasa.
- **Sin backend**: registro y formularios no persisten datos.
- **Contenido**: textos/datos sujetos a validación final con la clienta.
- **Pendientes típicos**: dominio final, ajuste fino de copy/legal, eventual localización de imágenes externas, analítica/SEO adicional si se requiere.

## 13. Criterios de mantenimiento

- No modificar la estructura base de `Header.astro` compartida sin validar el requerimiento.
- Mantener `OptionSelector` sticky y funcional en las 3 vistas.
- Agregar contenido nuevo en `site.ts` cuando sea dato compartido.
- Para nuevas rutas públicas, respetar `base`/`BASE_URL`.
- Ejecutar `npm run build` antes de cerrar cambios.