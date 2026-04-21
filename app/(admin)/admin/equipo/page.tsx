import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { getActiveTeamMembers } from '@/services/testimonialsService'
import { buildPageTitle } from '@/config/seo'

export const metadata: Metadata = {
  title: buildPageTitle('Equipo'),
}

export default function AdminEquipoPage() {
  const team = getActiveTeamMembers()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Equipo</h1>
          <p className="text-sm text-gray-500 mt-1">Miembros del equipo médico</p>
        </div>
        <button className="text-sm bg-brand-700 text-white px-4 py-2 rounded-xl hover:bg-brand-800 transition-colors">
          + Agregar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow"
          >
            <div className="relative h-16 w-16 rounded-2xl overflow-hidden bg-brand-100 flex-shrink-0">
              <Image
                src={member.avatarUrl}
                alt={member.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-sm text-brand-700">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{member.specialty}</p>
                </div>
                <Badge variant={member.isActive ? 'success' : 'danger'} size="sm">
                  {member.isActive ? 'Activo' : 'Inactivo'}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {member.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
