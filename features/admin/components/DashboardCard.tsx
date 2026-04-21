import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { DashboardStat } from '@/types'

const colorMap: Record<string, string> = {
  teal:   'bg-brand-50 text-brand-700 border-brand-100',
  blue:   'bg-blue-50 text-blue-700 border-blue-100',
  amber:  'bg-amber-50 text-amber-700 border-amber-100',
  rose:   'bg-rose-50 text-rose-700 border-rose-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
}

const iconMap: Record<string, string> = {
  stethoscope:  '🩺',
  users:        '👥',
  'dollar-sign': '💰',
  scissors:     '✂️',
}

interface DashboardCardProps {
  stat: DashboardStat
}

export function DashboardCard({ stat }: DashboardCardProps) {
  const isPositive = stat.trend > 0
  const isNeutral = stat.trend === 0

  return (
    <div
      className={cn(
        'bg-white rounded-2xl border shadow-sm p-6 flex flex-col gap-4',
        'hover:shadow-md transition-shadow duration-200',
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            'h-12 w-12 rounded-xl border flex items-center justify-center text-2xl',
            colorMap[stat.color] ?? colorMap.teal,
          )}
          aria-hidden="true"
        >
          {iconMap[stat.icon] ?? '📊'}
        </div>
        <div
          className={cn(
            'flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
            isNeutral
              ? 'bg-gray-100 text-gray-500'
              : isPositive
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-red-50 text-red-700',
          )}
        >
          {isNeutral ? (
            <Minus className="h-3 w-3" />
          ) : isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          <span>{Math.abs(stat.trend)}%</span>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
        <p className="text-xs text-gray-400 mt-1">{stat.trendLabel}</p>
      </div>
    </div>
  )
}
