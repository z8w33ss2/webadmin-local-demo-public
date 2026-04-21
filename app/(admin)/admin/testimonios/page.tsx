'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DataTable } from '@/features/admin/components/DataTable'
import { Badge } from '@/components/ui/Badge'
import { MOCK_TESTIMONIALS } from '@/data/testimonials'
import { formatDateShort } from '@/utils/formatters'
import type { Testimonial } from '@/types'

type TableTestimonial = {
  id: string
  clientName: string
  petName: string
  service: string
  rating: string
  publishedAt: string
  highlighted: string
}

const COLUMNS = [
  { key: 'clientName', label: 'Cliente' },
  { key: 'petName', label: 'Mascota' },
  { key: 'service', label: 'Servicio' },
  { key: 'rating', label: 'Calificación' },
  { key: 'publishedAt', label: 'Fecha' },
  { key: 'highlighted', label: 'Destacado' },
]

function toTableRow(t: Testimonial): TableTestimonial {
  return {
    id: t.id,
    clientName: t.clientName,
    petName: `${t.petName} (${t.petType})`,
    service: t.service,
    rating: '⭐'.repeat(t.rating),
    publishedAt: formatDateShort(t.publishedAt),
    highlighted: t.isHighlighted ? 'sí' : 'no',
  }
}

export default function AdminTestimoniosPage() {
  const [rows] = useState<TableTestimonial[]>(MOCK_TESTIMONIALS.map(toTableRow))
  const [notification, setNotification] = useState('')

  const showNotification = (msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Testimonios</h1>
        <p className="text-sm text-gray-500 mt-1">Gestiona las reseñas de clientes</p>
      </div>

      {notification && (
        <div className="bg-brand-50 border border-brand-200 text-brand-800 text-sm px-4 py-3 rounded-xl">
          {notification}
        </div>
      )}

      <DataTable<TableTestimonial>
        title={`Testimonios (${rows.length})`}
        data={rows}
        columns={COLUMNS}
        searchPlaceholder="Buscar testimonio..."
        onAdd={() => showNotification('✅ Demo: formulario de testimonio abierto')}
        onEdit={(item) => showNotification(`✏️ Demo: editando testimonio de "${item.clientName}"`)}
        onDelete={(item) => showNotification(`🗑️ Demo: testimonio eliminado (no persistido)`)}
        renderCell={(key, value) => {
          if (key === 'highlighted') {
            return (
              <Badge variant={value === 'sí' ? 'default' : 'outline'} size="sm">
                {value === 'sí' ? '⭐ Sí' : 'No'}
              </Badge>
            )
          }
          return String(value ?? '—')
        }}
      />
    </div>
  )
}
