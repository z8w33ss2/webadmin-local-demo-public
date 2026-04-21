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
    phone: '+506 2222-3333',
    phoneRaw: '50622223333',
    whatsapp: '50622223333',
    email: 'contacto@vetcarelocal.cr',
    address: 'Av. Central, Barrio Amón, San José, Costa Rica',
    mapsUrl:
      'https://maps.google.com/?q=Av.+Central+Barrio+Amon+San+Jose+Costa+Rica',
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
