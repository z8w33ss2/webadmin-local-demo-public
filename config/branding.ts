/**
 * Configuración central de marca del negocio.
 * Modificar solo este archivo para cambiar el branding en toda la app.
 */
export const BRANDING = {
  name: 'VetCare',
  fullName: 'VetCare Centro Veterinario',
  tagline: 'El cuidado que tu mascota merece',
  description:
    'Centro veterinario integral con más de 15 años de experiencia. Atendemos a tu mascota con el más alto nivel profesional y el cariño que merece.',

  contact: {
    phone: '+52 55 1234-5678',
    phoneRaw: '5215512345678',
    whatsapp: '5215512345678',
    email: 'contacto@vetcarelocal.mx',
    address: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX 03100',
    mapsUrl:
      'https://maps.google.com/?q=Av.+Insurgentes+Sur+1234+CDMX',
    schedule: 'Lun–Vie 8:00–20:00 · Sáb–Dom 9:00–17:00',
  },

  social: {
    facebook: 'https://facebook.com/vetcarelocal',
    instagram: 'https://instagram.com/vetcarelocal',
    twitter: 'https://twitter.com/vetcarelocal',
  },

  colors: {
    primary: '#0f766e',
    secondary: '#14b8a6',
    accent: '#f97316',
  },

  logo: {
    text: 'VetCare',
    icon: '🐾',
  },
} as const

export type Branding = typeof BRANDING
