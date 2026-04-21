import type { Metadata } from 'next'
import { BRANDING } from '@/config/branding'
import { buildPageTitle } from '@/config/seo'

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

      {/* Branding section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-4">
          Información del negocio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: 'Nombre del negocio', value: BRANDING.fullName },
            { label: 'Slogan', value: BRANDING.tagline },
            { label: 'Teléfono', value: BRANDING.contact.phone },
            { label: 'Email', value: BRANDING.contact.email },
            { label: 'WhatsApp', value: BRANDING.contact.phoneRaw },
            { label: 'Horario', value: BRANDING.contact.schedule },
          ].map(({ label, value }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {label}
              </label>
              <input
                defaultValue={value}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                readOnly
                onClick={() => {}}
              />
            </div>
          ))}
        </div>

        <div className="pt-4 flex gap-3">
          <button
            className="bg-brand-700 text-white text-sm px-5 py-2.5 rounded-xl hover:bg-brand-800 transition-colors"
            onClick={() => alert('Demo: cambios no persistidos')}
          >
            Guardar cambios
          </button>
          <button className="text-sm text-gray-500 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            Cancelar
          </button>
        </div>
      </div>

      {/* Social links */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="text-base font-semibold text-gray-900 border-b border-gray-100 pb-4">
          Redes sociales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {Object.entries(BRANDING.social).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 capitalize">
                {key}
              </label>
              <input
                defaultValue={value}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
