import { BRANDING } from '@/config/branding'
import { Button } from '@/components/ui'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export function CTASection({
  title = '¿Listo para cuidar a tu mascota?',
  subtitle = 'Agenda tu cita hoy mismo. Nuestro equipo está listo para atenderte.',
  primaryLabel = 'Agendar por WhatsApp',
  secondaryLabel = 'Llamar ahora',
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-700 to-brand-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-brand-200 mb-10 max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-brand-800 hover:bg-brand-50 shadow-lg hover:shadow-xl"
            onClick={() =>
              window.open(
                `https://wa.me/${BRANDING.contact.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20cita`,
                '_blank',
                'noopener,noreferrer',
              )
            }
          >
            💬 {primaryLabel}
          </Button>
          <a href={`tel:${BRANDING.contact.phone}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-300 text-white hover:bg-brand-800 w-full sm:w-auto"
            >
              📞 {secondaryLabel}
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-brand-300">
          {BRANDING.contact.schedule}
        </p>
      </div>
    </section>
  )
}
