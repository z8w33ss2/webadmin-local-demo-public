import { MOCK_SERVICES } from '@/data/services'
import type { Service, ServiceCategory, ServiceFilters } from '@/types'

/**
 * Retorna todos los servicios activos.
 * En producción, esto sería una llamada a la base de datos.
 */
export function getAllServices(filters?: ServiceFilters): Service[] {
  let services = [...MOCK_SERVICES]

  if (filters?.isActive !== undefined) {
    services = services.filter((s) => s.isActive === filters.isActive)
  }

  if (filters?.isFeatured !== undefined) {
    services = services.filter((s) => s.isFeatured === filters.isFeatured)
  }

  if (filters?.category) {
    services = services.filter((s) => s.category === filters.category)
  }

  return services.sort((a, b) => a.order - b.order)
}

/**
 * Retorna un servicio por su slug.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return MOCK_SERVICES.find((s) => s.slug === slug)
}

/**
 * Retorna los servicios destacados para la home.
 */
export function getFeaturedServices(limit: number = 4): Service[] {
  return getAllServices({ isActive: true, isFeatured: true }).slice(0, limit)
}

/**
 * Retorna los slugs de todos los servicios (para generateStaticParams).
 */
export function getAllServiceSlugs(): string[] {
  return MOCK_SERVICES.filter((s) => s.isActive).map((s) => s.slug)
}

/**
 * Retorna los servicios por categoría.
 */
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return getAllServices({ category, isActive: true })
}
