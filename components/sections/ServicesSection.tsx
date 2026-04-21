import Link from 'next/link'
import { ArrowRight, Clock, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/utils/formatters'
import { ROUTES } from '@/lib/constants'
import type { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
  title?: string
  subtitle?: string
  showViewAll?: boolean
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={ROUTES.serviceDetail(service.slug)} className="group block">
      <Card hover padding="none" className="overflow-hidden h-full">
        {/* Icon header */}
        <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-6 flex items-center justify-between">
          <span className="text-4xl" aria-hidden="true">{service.icon}</span>
          {service.isFeatured && (
            <Badge variant="default" size="sm">Destacado</Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{service.duration}</span>
            </div>
            <span className="text-sm font-semibold text-brand-700">
              {service.price.label}
            </span>
          </div>
        </div>

        {/* CTA row */}
        <div className="px-5 pb-5">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
            Ver detalles <ChevronRight className="h-4 w-4" />
          </span>
        </div>
      </Card>
    </Link>
  )
}

export function ServicesSection({
  services,
  title = 'Nuestros Servicios',
  subtitle = 'Atención veterinaria integral para el bienestar de tu mascota',
  showViewAll = true,
}: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wider">
            Lo que ofrecemos
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View all CTA */}
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link href={ROUTES.services}>
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
