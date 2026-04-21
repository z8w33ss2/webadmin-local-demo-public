export const APP_NAME = 'VetCare'
export const APP_FULL_NAME = 'VetCare Centro Veterinario'

export const ROUTES = {
  home: '/',
  services: '/servicios',
  serviceDetail: (slug: string) => `/servicios/${slug}`,
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
  testimonials: '/testimonios',
  contact: '/contacto',
  admin: {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    services: '/admin/servicios',
    blog: '/admin/blog',
    testimonials: '/admin/testimonios',
    team: '/admin/equipo',
    settings: '/admin/configuracion',
  },
} as const

export const PAGINATION = {
  defaultPageSize: 9,
  adminPageSize: 10,
} as const

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const

/** Credenciales de demo (solo visual, sin lógica real). */
export const DEMO_CREDENTIALS = {
  email: 'admin@vetcarelocal.mx',
  password: 'demo1234',
} as const
