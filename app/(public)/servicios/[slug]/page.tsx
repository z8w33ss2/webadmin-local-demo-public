import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ArrowLeft, Check } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ServiceBookingButton } from './ServiceBookingButton'
import { getServiceBySlug, getAllServiceSlugs } from '@/services/servicesService'
import { buildPageTitle, buildPageDescription } from '@/config/seo'
import { formatPrice } from '@/utils/formatters'
import { ROUTES } from '@/lib/constants'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  return {
    title: buildPageTitle(service.title),
    description: buildPageDescription(service.shortDescription),
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href={ROUTES.home} className="hover:text-brand-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href={ROUTES.services} className="hover:text-brand-700 transition-colors">
                  Servicios
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-brand-700 font-medium" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="flex items-start gap-6">
            <div className="text-6xl hidden sm:block" aria-hidden="true">
              {service.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-gray-500">{service.shortDescription}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4 text-brand-600" />
                  <span>Duración: {service.duration}</span>
                </div>
                <div className="text-sm font-semibold text-brand-700">
                  {service.price.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Descripción del servicio</h2>
              <div className="prose-content text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                {service.fullDescription}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Features */}
              <div className="bg-brand-50 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Incluye</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-brand-700 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-2xl font-bold text-brand-700 mb-1">
                  {formatPrice(service.price.from)} USD
                </p>
                <p className="text-xs text-gray-400 mb-5">Precio base, puede variar según el caso</p>
                <ServiceBookingButton serviceTitle={service.title} />
              </div>
            </aside>
          </div>

          <Link
            href={ROUTES.services}
            className="inline-flex items-center gap-2 mt-10 text-sm text-gray-500 hover:text-brand-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver todos los servicios
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
