# 🐾 WebAdmin Local — Demo Pública

> **Demo comercial de alta calidad** de un sitio corporativo administrable para negocios locales.  
> Construido como portafolio técnico · No contiene datos ni credenciales reales.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

---

## 📋 Descripción

**WebAdmin Local** es una demo de producto SaaS para vender sitios web corporativos a negocios locales (veterinarias, clínicas, bufetes, restaurantes, etc.). 

Este repositorio muestra las capacidades técnicas y de diseño del sistema sin exponer lógica de negocio sensible ni permitir que sea usado comercialmente de forma directa.

**Negocio demo:** VetCare Centro Veterinario — datos 100% ficticios.

---

## ✨ Características

### Sitio Público
- **Home** — Hero animado, estadísticas, servicios destacados, testimonios, CTA
- **Servicios** — Listado + página de detalle con precios y características
- **Blog** — Grid de artículos + posts completos con tiempo de lectura
- **Testimonios** — Reseñas con calificación y datos de mascotas
- **Contacto** — Formulario visual (demo) + información de contacto
- **Botón WhatsApp** — Flotante con animación pulse en todas las páginas

### Panel Administrativo (simulado)
- **Login** — Pantalla con credenciales de demo pre-llenadas
- **Dashboard** — KPIs, tabla de citas del día, accesos rápidos
- **CRUD Servicios** — DataTable con búsqueda, editar, eliminar (mock)
- **CRUD Blog** — Gestión de artículos con estados y filtros
- **CRUD Testimonios** — Gestión de reseñas
- **Equipo** — Tarjetas del equipo médico
- **Configuración** — Edición visual de branding

---

## 🏗️ Arquitectura

```
├── app/                     # Next.js App Router
│   ├── (public)/            # Rutas del sitio público
│   │   ├── page.tsx         # Home
│   │   ├── servicios/       # Listado + [slug]
│   │   ├── blog/            # Listado + [slug]
│   │   ├── testimonios/
│   │   └── contacto/
│   └── (admin)/             # Panel administrativo
│       └── admin/
│           ├── login/
│           ├── dashboard/
│           ├── servicios/
│           ├── blog/
│           ├── testimonios/
│           ├── equipo/
│           └── configuracion/
├── components/              # Componentes reutilizables
│   ├── ui/                  # Button, Card, Badge, Input
│   ├── layout/              # Header, Footer, WhatsAppButton
│   └── sections/            # Hero, ServicesSection, etc.
├── features/                # Lógica por dominio
│   ├── admin/               # Sidebar, DashboardCard, DataTable
│   ├── blog/                # BlogCard
│   └── services/
├── services/                # Capa de acceso a datos (mock)
├── data/                    # Datos mock centralizados
├── types/                   # TypeScript interfaces
├── config/                  # Branding, navegación, SEO
├── utils/                   # cn(), formatters
└── lib/                     # constants
```

---

## 🚀 Inicio rápido

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/webadmin-local-demo.git
cd webadmin-local-demo

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio público.  
Admin en [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

**Credenciales demo:**
```
Email:    admin@vetcarelocal.mx
Password: demo1234
```

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 14 (App Router) | Framework principal con SSG/SSR |
| TypeScript (strict) | Tipado estricto, sin `any` |
| Tailwind CSS | Estilos con design system propio |
| Lucide React | Iconos |
| clsx + tailwind-merge | Composición de clases |

---

## 📐 Buenas prácticas implementadas

- ✅ **TypeScript estricto** — sin `any`, tipos en todo el codebase
- ✅ **Server Components** — páginas como SC por defecto, `'use client'` solo donde necesario
- ✅ **DRY** — data layer separado, servicios reutilizables
- ✅ **SEO** — Metadata API de Next.js por página, títulos dinámicos
- ✅ **Accesibilidad** — aria-labels, roles, nav semántica, focus-visible
- ✅ **Responsive** — Mobile-first, breakpoints sm/md/lg
- ✅ **Seguridad** — Sin credenciales reales, sin APIs expuestas, datos mock
- ✅ **Performance** — `next/image` optimizado, `generateStaticParams` para SSG

---

## 🗺️ Roadmap (versión completa)

- [ ] Integración con **Supabase** (base de datos real)
- [ ] Autenticación con **Supabase Auth** + middleware de rutas
- [ ] Subida de imágenes con **Supabase Storage**
- [ ] Sistema de citas/agenda con calendario
- [ ] Notificaciones por **WhatsApp Business API**
- [ ] Analíticas con **Google Analytics 4**
- [ ] Multi-tenant (un sistema, múltiples negocios)
- [ ] Sitemap dinámico + robots.txt

---

## 📄 Licencia

Este proyecto es una **demo de portafolio**. No está licenciado para uso comercial directo. 
Puedes usarlo como referencia y aprendizaje.

---

> Desarrollado con ❤️ como demostración de capacidades técnicas en Next.js, TypeScript y diseño de sistemas.
