import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { BRANDING } from '@/config/branding'
import { FOOTER_NAV } from '@/config/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{BRANDING.logo.icon}</span>
              <span className="text-xl font-bold text-white">{BRANDING.logo.text}</span>
            </Link>
            <p className="text-brand-200 text-sm leading-relaxed mb-6">
              {BRANDING.description}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={BRANDING.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-900 text-brand-300 hover:bg-brand-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BRANDING.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-900 text-brand-300 hover:bg-brand-700 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BRANDING.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-900 text-brand-300 hover:bg-brand-700 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(FOOTER_NAV).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm text-brand-300">{BRANDING.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${BRANDING.contact.phone}`}
                  className="text-sm text-brand-300 hover:text-white transition-colors"
                >
                  {BRANDING.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${BRANDING.contact.email}`}
                  className="text-sm text-brand-300 hover:text-white transition-colors"
                >
                  {BRANDING.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm text-brand-300">{BRANDING.contact.schedule}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-400">
            © {currentYear} {BRANDING.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-brand-600">
            Demo de portafolio — datos ficticios
          </p>
        </div>
      </div>
    </footer>
  )
}
