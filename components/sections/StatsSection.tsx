const STATS = [
  { value: '+15', label: 'Años de experiencia', emoji: '🏆' },
  { value: '1,400+', label: 'Clientes satisfechos', emoji: '👥' },
  { value: '4', label: 'Especialistas certificados', emoji: '🩺' },
  { value: '98%', label: 'Tasa de éxito quirúrgico', emoji: '💉' },
] as const

export function StatsSection() {
  return (
    <section className="py-16 bg-brand-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label, emoji }) => (
            <div key={label} className="text-center">
              <div className="text-3xl mb-2" aria-hidden="true">{emoji}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-brand-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
