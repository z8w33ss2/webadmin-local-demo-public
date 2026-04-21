'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { BRANDING } from '@/config/branding'

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: BRANDING.contact.address,
    href: BRANDING.contact.mapsUrl,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: BRANDING.contact.phone,
    href: `tel:${BRANDING.contact.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: BRANDING.contact.email,
    href: `mailto:${BRANDING.contact.email}`,
  },
  {
    icon: Clock,
    label: 'Horario',
    value: BRANDING.contact.schedule,
    href: null,
  },
] as const

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulated submit (demo only)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wider">
            Contáctanos
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Estamos aquí para ti
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            ¿Tienes dudas o quieres agendar una cita? Escríbenos y te respondemos en menos de 2 horas.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4" aria-hidden="true">✅</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Mensaje enviado!
                  </h2>
                  <p className="text-gray-500">
                    Nos pondremos en contacto contigo en menos de 2 horas.
                  </p>
                  <p className="text-xs text-gray-400 mt-4">(Demo — no se envía ningún dato real)</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Envíanos un mensaje
                  </h2>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Nombre"
                        placeholder="Tu nombre completo"
                        required
                        autoComplete="name"
                      />
                      <Input
                        label="Teléfono"
                        type="tel"
                        placeholder="+52 55 0000-0000"
                        autoComplete="tel"
                      />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      autoComplete="email"
                    />
                    <Input
                      label="Nombre de tu mascota"
                      placeholder="¿Cómo se llama?"
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 hover:border-gray-300 transition-colors resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full justify-center"
                      isLoading={isLoading}
                      rightIcon={<Send className="h-4 w-4" />}
                    >
                      Enviar mensaje
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      Demo — los datos no se almacenan ni se envían.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-4">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-brand-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-gray-500 hover:text-brand-700 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-500">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-brand-50 border border-brand-100 aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-3" aria-hidden="true">🗺️</div>
                  <p className="text-sm text-gray-500">
                    Av. Insurgentes Sur 1234, CDMX
                  </p>
                  <a
                    href={BRANDING.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-brand-700 hover:underline"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
