'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { BRANDING } from '@/config/branding'
import { ROUTES, DEMO_CREDENTIALS } from '@/lib/constants'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState(DEMO_CREDENTIALS.email)
  const [password, setPassword] = useState(DEMO_CREDENTIALS.password)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Demo only: simulated "auth" with pre-filled credentials
    setTimeout(() => {
      if (
        email === DEMO_CREDENTIALS.email &&
        password === DEMO_CREDENTIALS.password
      ) {
        router.push(ROUTES.admin.dashboard)
      } else {
        setError('Credenciales incorrectas. Usa las credenciales de demo.')
        setIsLoading(false)
      }
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 to-brand-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">{BRANDING.logo.icon}</span>
          </div>
          <h1 className="text-2xl font-bold text-white">{BRANDING.fullName}</h1>
          <p className="text-brand-300 text-sm mt-1">Panel Administrativo</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Demo notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6">
            <p className="text-xs font-semibold text-amber-800 mb-1">Demo de portafolio</p>
            <p className="text-xs text-amber-600">
              Credenciales pre-llenadas. No se usa autenticación real.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Iniciar sesión</h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@vetcarelocal.mx"
              required
              autoComplete="email"
            />
            <Input
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="pointer-events-auto text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            {error && (
              <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full justify-center"
              isLoading={isLoading}
              rightIcon={<LogIn className="h-4 w-4" />}
            >
              Entrar al panel
            </Button>
          </form>
        </div>

        <p className="text-center text-brand-400 text-xs mt-6">
          © {new Date().getFullYear()} {BRANDING.fullName} · Demo de portafolio
        </p>
      </div>
    </div>
  )
}
