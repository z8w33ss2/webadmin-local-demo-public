import type { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CTASection } from '@/components/sections/CTASection'
import { getAllServices } from '@/services/servicesService'
import { buildPageTitle, buildPageDescription } from '@/config/seo'

export const metadata: Metadata = {
  title: buildPageTitle('Nuestros Servicios'),
  description: buildPageDescription(
    'Conoce todos nuestros servicios veterinarios: consulta general, vacunación, cirugía, grooming, urgencias 24/7 y nutrición especializada.',
  ),
}

export default function ServiciosPage() {
  const services = getAllServices({ isActive: true })

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wider">
            Lo que ofrecemos
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Nuestros Servicios
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Atención veterinaria integral con los más altos estándares de calidad y calidez para tu mascota.
          </p>
        </div>
      </section>

      <ServicesSection
        services={services}
        title="Todos nuestros servicios"
        subtitle="Encuentra el servicio que tu mascota necesita"
        showViewAll={false}
      />
      <CTASection />
    </>
  )
}
