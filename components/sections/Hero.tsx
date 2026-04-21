'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui'
import { BRANDING } from '@/config/branding'
import { ROUTES } from '@/lib/constants'

const TRUST_BADGES = [
  { icon: Shield, label: '+15 años de experiencia' },
  { icon: Clock, label: 'Urgencias 24/7' },
  { icon: Star, label: '+1,400 clientes satisfechos' },
] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #14b8a6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0d9488 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-700 opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-600 opacity-20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-brand-800/60 border border-brand-600 text-brand-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Atención veterinaria integral en CDMX
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              El cuidado que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">
                tu mascota
              </span>{' '}
              merece
            </h1>

            <p className="text-lg text-brand-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {BRANDING.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BRANDING.contact.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20cita`,
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
                className="bg-white text-brand-800 hover:bg-brand-50 shadow-lg hover:shadow-xl"
              >
                Agendar cita por WhatsApp
              </Button>
              <Link href={ROUTES.services}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-300 text-brand-100 hover:bg-brand-800 w-full sm:w-auto"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Ver servicios
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-brand-200 text-sm"
                >
                  <Icon className="h-4 w-4 text-brand-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image / visual card */}
          <div className="hidden lg:flex justify-center animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 border border-brand-600 shadow-2xl flex items-center justify-center">
                <span className="text-9xl" aria-hidden="true">🐾</span>
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                  ⭐
                </div>
                <div>
                  <p className="text-xs text-gray-500">Calificación</p>
                  <p className="text-sm font-bold text-gray-900">4.9 / 5.0</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-xl">
                  🏥
                </div>
                <div>
                  <p className="text-xs text-gray-500">Urgencias</p>
                  <p className="text-sm font-bold text-gray-900">24/7 disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
