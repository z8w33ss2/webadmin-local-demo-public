import { MOCK_TESTIMONIALS, MOCK_TEAM } from '@/data/testimonials'
import type { Testimonial, TeamMember } from '@/types'

/**
 * Retorna todos los testimonios publicados.
 */
export function getAllTestimonials(): Testimonial[] {
  return [...MOCK_TESTIMONIALS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

/**
 * Retorna los testimonios destacados para la home.
 */
export function getHighlightedTestimonials(limit: number = 6): Testimonial[] {
  return MOCK_TESTIMONIALS.filter((t) => t.isHighlighted).slice(0, limit)
}

/**
 * Calcula el promedio de calificaciones.
 */
export function getAverageRating(): number {
  const total = MOCK_TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0)
  return Math.round((total / MOCK_TESTIMONIALS.length) * 10) / 10
}

/**
 * Retorna el equipo médico activo.
 */
export function getActiveTeamMembers(): TeamMember[] {
  return MOCK_TEAM.filter((m) => m.isActive)
}
