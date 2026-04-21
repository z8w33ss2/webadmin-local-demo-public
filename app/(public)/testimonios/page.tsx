import type { Metadata } from 'next'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { getAllTestimonials, getAverageRating } from '@/services/testimonialsService'
import { buildPageTitle, buildPageDescription } from '@/config/seo'

export const metadata: Metadata = {
  title: buildPageTitle('Testimonios'),
  description: buildPageDescription(
    'Lee las opiniones de nuestros clientes sobre los servicios veterinarios de VetCare. Más de 248 reseñas con calificación promedio de 4.9.',
  ),
}

export default function TestimoniosPage() {
  const testimonials = getAllTestimonials()
  const avgRating = getAverageRating()

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            La confianza de más de 1,400 familias es nuestro mayor orgullo.
          </p>
        </div>
      </section>

      <TestimonialsSection
        testimonials={testimonials}
        averageRating={avgRating}
        totalReviews={248}
      />
      <CTASection />
    </>
  )
}
