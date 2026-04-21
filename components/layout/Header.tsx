'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/utils/cn'
import { BRANDING } from '@/config/branding'
import { PUBLIC_NAV_ITEMS } from '@/config/navigation'
import { Button } from '@/components/ui'
import { ROUTES } from '@/lib/constants'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={ROUTES.home}
            className="flex items-center gap-2 font-bold text-xl text-brand-700 hover:text-brand-800 transition-colors"
            aria-label={`${BRANDING.fullName} - Inicio`}
          >
            <span className="text-2xl" aria-hidden="true">
              {BRANDING.logo.icon}
            </span>
            <span>{BRANDING.logo.text}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {PUBLIC_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BRANDING.contact.phone}`}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{BRANDING.contact.phone}</span>
            </a>
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  `https://wa.me/${BRANDING.contact.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20cita`,
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            >
              Agendar cita
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0',
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="px-4 py-3 space-y-1 bg-white" aria-label="Navegación móvil">
          {PUBLIC_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:text-brand-700 hover:bg-brand-50 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 pb-2 border-t border-gray-100">
            <Button size="md" className="w-full justify-center">
              Agendar cita por WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
