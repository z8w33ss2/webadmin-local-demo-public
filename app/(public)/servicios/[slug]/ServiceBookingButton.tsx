'use client'

import { Button } from '@/components/ui'
import { BRANDING } from '@/config/branding'

interface ServiceBookingButtonProps {
  serviceTitle: string
}

export function ServiceBookingButton({ serviceTitle }: ServiceBookingButtonProps) {
  return (
    <Button
      className="w-full justify-center"
      onClick={() =>
        window.open(
          `https://wa.me/${BRANDING.contact.whatsapp}?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(serviceTitle)}`,
          '_blank',
          'noopener,noreferrer',
        )
      }
    >
      Agendar este servicio
    </Button>
  )
}
