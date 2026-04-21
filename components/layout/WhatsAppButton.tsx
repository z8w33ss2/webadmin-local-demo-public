'use client'

import { MessageCircle } from 'lucide-react'
import { BRANDING } from '@/config/branding'

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hola, me gustaría obtener información sobre sus servicios veterinarios.',
    )
    window.open(
      `https://wa.me/${BRANDING.contact.whatsapp}?text=${message}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        aria-hidden="true"
      />
    </button>
  )
}
