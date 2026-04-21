export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export const PUBLIC_NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' },
]

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Servicios', href: '/admin/servicios' },
  { label: 'Blog', href: '/admin/blog' },
  { label: 'Testimonios', href: '/admin/testimonios' },
  { label: 'Equipo', href: '/admin/equipo' },
  { label: 'Configuración', href: '/admin/configuracion' },
]

export const FOOTER_NAV: Record<string, NavItem[]> = {
  Empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Equipo', href: '/equipo' },
    { label: 'Blog', href: '/blog' },
  ],
  Servicios: [
    { label: 'Consulta General', href: '/servicios/consulta-general' },
    { label: 'Vacunación', href: '/servicios/vacunacion' },
    { label: 'Cirugía', href: '/servicios/cirugia' },
    { label: 'Grooming', href: '/servicios/grooming' },
  ],
  Legal: [
    { label: 'Aviso de Privacidad', href: '/privacidad' },
    { label: 'Términos de Uso', href: '/terminos' },
  ],
}
