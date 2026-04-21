import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DashboardCard } from '@/features/admin/components/DashboardCard'
import { Badge } from '@/components/ui/Badge'
import { MOCK_DASHBOARD_STATS, MOCK_RECENT_APPOINTMENTS } from '@/data/stats'
import { buildPageTitle } from '@/config/seo'
import { ROUTES } from '@/lib/constants'

export const metadata: Metadata = {
  title: buildPageTitle('Dashboard'),
}

type AppointmentStatus = 'completado' | 'en-progreso' | 'programado'

const statusConfig: Record<AppointmentStatus, { label: string; variant: 'success' | 'warning' | 'info' }> = {
  completado:   { label: 'Completado', variant: 'success' },
  'en-progreso': { label: 'En progreso', variant: 'warning' },
  programado:   { label: 'Programado', variant: 'info' },
}

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1 capitalize">{today}</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {MOCK_DASHBOARD_STATS.map((stat) => (
          <DashboardCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Recent appointments table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">Citas de hoy</h2>
          <Link
            href={ROUTES.admin.services}
            className="inline-flex items-center gap-1 text-xs text-brand-700 hover:text-brand-800 font-medium transition-colors"
          >
            Ver todo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {['Hora', 'Cliente', 'Mascota', 'Servicio', 'Veterinario', 'Estado'].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_RECENT_APPOINTMENTS.map((apt) => {
                const status = apt.status as AppointmentStatus
                const cfg = statusConfig[status] ?? statusConfig.programado
                return (
                  <tr key={apt.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-sm text-gray-600">{apt.time}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{apt.clientName}</td>
                    <td className="px-5 py-3.5 text-gray-600">{apt.petName}</td>
                    <td className="px-5 py-3.5 text-gray-600">{apt.service}</td>
                    <td className="px-5 py-3.5 text-gray-600">{apt.vet}</td>
                    <td className="px-5 py-3.5">
                      <Badge variant={cfg.variant} size="sm">{cfg.label}</Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { href: ROUTES.admin.services, emoji: '🩺', label: 'Gestionar Servicios', desc: '6 servicios activos' },
          { href: ROUTES.admin.blog, emoji: '📝', label: 'Gestionar Blog', desc: '6 artículos publicados' },
          { href: ROUTES.admin.testimonials, emoji: '⭐', label: 'Gestionar Testimonios', desc: '8 testimonios activos' },
        ].map(({ href, emoji, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-brand-200 transition-all duration-200 group"
          >
            <span className="text-3xl" aria-hidden="true">{emoji}</span>
            <div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                {label}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand-600 ml-auto transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  )
}
