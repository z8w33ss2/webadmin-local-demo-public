'use client'

import { useState } from 'react'
import { DataTable } from '@/features/admin/components/DataTable'
import { Badge } from '@/components/ui/Badge'
import { MOCK_BLOG_POSTS } from '@/data/blog'
import { formatDateShort } from '@/utils/formatters'
import type { BlogPost } from '@/types'

type TablePost = {
  id: string
  title: string
  author: string
  category: string
  readingTime: string
  publishedAt: string
  status: string
  featured: string
}

const categoryLabels: Record<string, string> = {
  salud:          'Salud',
  nutricion:      'Nutrición',
  comportamiento: 'Comportamiento',
  cuidados:       'Cuidados',
  noticias:       'Noticias',
}

const COLUMNS = [
  { key: 'title', label: 'Título', className: 'max-w-[280px]' },
  { key: 'author', label: 'Autor' },
  { key: 'category', label: 'Categoría' },
  { key: 'readingTime', label: 'Lectura' },
  { key: 'publishedAt', label: 'Publicado' },
  { key: 'featured', label: 'Destacado' },
  { key: 'status', label: 'Estado' },
]

function toTableRow(p: BlogPost): TablePost {
  return {
    id: p.id,
    title: p.title,
    author: p.author.name.split(' ').slice(0, 2).join(' '),
    category: categoryLabels[p.category] ?? p.category,
    readingTime: `${p.readingTimeMinutes} min`,
    publishedAt: formatDateShort(p.publishedAt),
    status: p.isPublished ? 'publicado' : 'borrador',
    featured: p.isFeatured ? 'sí' : 'no',
  }
}

export default function AdminBlogPage() {
  const [posts] = useState<TablePost[]>(MOCK_BLOG_POSTS.map(toTableRow))
  const [notification, setNotification] = useState('')

  const showNotification = (msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(''), 3000)
  }

  const handleAdd = () => showNotification('✅ Demo: formulario de nuevo artículo abierto')
  const handleEdit = (item: TablePost) =>
    showNotification(`✏️ Demo: editando "${item.title.substring(0, 40)}..."`)
  const handleDelete = (item: TablePost) =>
    showNotification(`🗑️ Demo: artículo eliminado (no persistido)`)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
        <p className="text-sm text-gray-500 mt-1">
          Gestiona los artículos del blog veterinario
        </p>
      </div>

      {/* Demo notification */}
      {notification && (
        <div className="bg-brand-50 border border-brand-200 text-brand-800 text-sm px-4 py-3 rounded-xl transition-all">
          {notification}
        </div>
      )}

      <DataTable<TablePost>
        title={`Artículos (${posts.length})`}
        data={posts}
        columns={COLUMNS}
        searchPlaceholder="Buscar artículo..."
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        renderCell={(key, value) => {
          if (key === 'status') {
            return (
              <Badge
                variant={value === 'publicado' ? 'success' : 'warning'}
                size="sm"
              >
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
          if (key === 'title') {
            return (
              <span className="text-gray-900 font-medium line-clamp-1 max-w-[260px] block">
                {String(value)}
              </span>
            )
          }
          return String(value ?? '—')
        }}
      />
    </div>
  )
}
