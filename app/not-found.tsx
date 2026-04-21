import Link from 'next/link'
import { Button } from '@/components/ui'
import { ROUTES } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6" aria-hidden="true">🐾</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mb-8">
          La página que buscas no existe o fue movida. Regresa al inicio y encuentra lo que necesitas.
        </p>
        <Link href={ROUTES.home}>
          <Button size="lg">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  )
}
