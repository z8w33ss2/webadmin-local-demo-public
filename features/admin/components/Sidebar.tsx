'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Stethoscope,
  FileText,
  Star,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { BRANDING } from '@/config/branding'
import { ROUTES } from '@/lib/constants'

const NAV_ITEMS = [
  { href: ROUTES.admin.dashboard, label: 'Dashboard', icon: LayoutDashboard },
  { href: ROUTES.admin.services, label: 'Servicios', icon: Stethoscope },
  { href: ROUTES.admin.blog, label: 'Blog', icon: FileText },
  { href: ROUTES.admin.testimonials, label: 'Testimonios', icon: Star },
  { href: ROUTES.admin.team, label: 'Equipo', icon: Users },
  { href: ROUTES.admin.settings, label: 'Configuración', icon: Settings },
] as const

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-brand-950 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-brand-900">
        <span className="text-2xl" aria-hidden="true">{BRANDING.logo.icon}</span>
        <div>
          <p className="text-sm font-bold text-white">{BRANDING.logo.text}</p>
          <p className="text-xs text-brand-400">Panel Administrativo</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Navegación administrativa">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                isActive
                  ? 'bg-brand-700 text-white'
                  : 'text-brand-300 hover:bg-brand-800 hover:text-white',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            </Link>
          )
        })}
      </nav>

      {/* Demo notice */}
      <div className="px-4 py-3 mx-3 mb-3 rounded-xl bg-amber-900/40 border border-amber-800">
        <p className="text-xs text-amber-300 font-medium">Modo Demo</p>
        <p className="text-xs text-amber-400/70 mt-0.5">
          Los cambios no se persisten
        </p>
      </div>

      {/* User / logout */}
      <div className="px-3 py-4 border-t border-brand-900">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-800 cursor-pointer transition-colors group">
          <div className="h-8 w-8 rounded-full bg-brand-700 flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Admin Demo</p>
            <p className="text-xs text-brand-400 truncate">admin@vetcarelocal.mx</p>
          </div>
          <Link
            href={ROUTES.admin.login}
            aria-label="Cerrar sesión"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <LogOut className="h-4 w-4 text-brand-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
