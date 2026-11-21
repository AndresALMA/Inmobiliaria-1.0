# Inmobiliaria Kaloustian Susana

Landing page de presencia digital para Susana Kaloustian, martillera y corredora pública inmobiliaria de Córdoba Capital (M.P. N° 04-2435).

## Stack

- [Astro](https://astro.build) (export estático) + TypeScript
- Sin framework de UI ni backend: contacto por WhatsApp, teléfono y correo
- Deploy en GitHub Pages mediante GitHub Actions

## Desarrollo local

Requiere Node.js >= 22.23.4.

```sh
npm install
npm run dev
```

El sitio se sirve en `http://localhost:4321/Inmobiliaria-1.0/` (el prefijo `base` configurado para GitHub Pages también aplica en desarrollo).

Para generar y revisar el build de producción:

```sh
npm run build
npm run preview
```

## Estructura

```
src/
  components/   Header, Hero, Services, Contact, Footer
  data/site.ts  Contenido editable (datos, servicios, contacto, assets)
  layouts/      BaseLayout (head, SEO, fuentes)
  pages/        index.astro (landing one-page)
  styles/       global.css
public/
  images/       Foto y logo del Colegio
```

El contenido editable está centralizado en `src/data/site.ts`.

## Deploy

El flujo `.github/workflows/deploy.yml` compila y publica el sitio en cada push a `main`.
El `site` y `base` en `astro.config.mjs` deben permanecer alineados con el nombre del repositorio:

- `site`: `https://andresalma.github.io`
- `base`: `/Inmobiliaria-1.0`

En GitHub, el origen de Pages debe estar configurado como **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## Estado

Prototipo MVP-1: presencia informativa sin login ni formulario externo. Pendiente de validación de textos con la clienta, elección de dominio y cierre de la propuesta comercial.
