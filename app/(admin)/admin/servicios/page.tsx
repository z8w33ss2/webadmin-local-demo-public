'use client'

import { useState } from 'react'
import { DataTable } from '@/features/admin/components/DataTable'
import { Badge } from '@/components/ui/Badge'
import { MOCK_SERVICES } from '@/data/services'
import type { Service } from '@/types'

type TableService = {
  id: string
  title: string
  category: string
  price: string
  duration: string
  status: string
  featured: string
}

const categoryLabels: Record<string, string> = {
  consulta:   'Consulta',
  prevencion: 'Prevención',
  cirugia:    'Cirugía',
  estetica:   'Estética',
  emergencia: 'Emergencia',
  nutricion:  'Nutrición',
}

const COLUMNS = [
  { key: 'title', label: 'Servicio' },
  { key: 'category', label: 'Categoría' },
  { key: 'price', label: 'Precio base' },
  { key: 'duration', label: 'Duración' },
  { key: 'featured', label: 'Destacado' },
  { key: 'status', label: 'Estado' },
]

function toTableRow(s: Service): TableService {
  return {
    id: s.id,
    title: s.title,
    category: categoryLabels[s.category] ?? s.category,
    price: s.price.label,
    duration: s.duration,
    status: s.isActive ? 'activo' : 'inactivo',
    featured: s.isFeatured ? 'sí' : 'no',
  }
}

export default function AdminServiciosPage() {
  const [services, setServices] = useState<TableService[]>(
    MOCK_SERVICES.map(toTableRow),
  )
  const [notification, setNotification] = useState('')

  const showNotification = (msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(''), 3000)
  }

  const handleAdd = () => showNotification('✅ Demo: formulario de creación abierto')
  const handleEdit = (item: TableService) =>
    showNotification(`✏️ Demo: editando "${item.title}"`)
  const handleDelete = (item: TableService) =>
    showNotification(`🗑️ Demo: "${item.title}" eliminado (no persistido)`)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Servicios</h1>
        <p className="text-sm text-gray-500 mt-1">
          Gestiona los servicios veterinarios del negocio
        </p>
      </div>

      {/* Demo notification */}
      {notification && (
        <div className="bg-brand-50 border border-brand-200 text-brand-800 text-sm px-4 py-3 rounded-xl transition-all">
          {notification}
        </div>
      )}

      <DataTable<TableService>
        title={`Servicios (${services.length})`}
        data={services}
        columns={COLUMNS}
        searchPlaceholder="Buscar servicio..."
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        renderCell={(key, value) => {
          if (key === 'status') {
            return (
              <Badge variant={value === 'activo' ? 'success' : 'danger'} size="sm">
                {String(value)}
              </Badge>
            )
          }
          if (key === 'featured') {
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
