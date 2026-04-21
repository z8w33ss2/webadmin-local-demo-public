import type { Metadata } from 'next'
import { buildPageTitle } from '@/config/seo'
import { ConfigForm } from './ConfigForm'

export const metadata: Metadata = {
  title: buildPageTitle('Configuración'),
}

export default function AdminConfiguracionPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
        <p className="text-sm text-gray-500 mt-1">
          Ajusta el branding y datos de contacto del negocio
        </p>
      </div>

      {/* Demo notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-amber-800 mb-1">Modo Demo</p>
        <p className="text-sm text-amber-700">
          Los cambios en esta sección son visuales y no se persisten. En la versión
          completa con Supabase, estos datos se guardarían en base de datos.
        </p>
      </div>

      <ConfigForm />
    </div>
  )
}

