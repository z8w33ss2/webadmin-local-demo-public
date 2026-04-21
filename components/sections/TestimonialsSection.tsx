import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  averageRating?: number
  totalReviews?: number
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Calificación: ${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const petEmojis: Record<string, string> = {
    perro: '🐕',
    gato: '🐈',
    conejo: '🐇',
    ave: '🦜',
    otro: '🐾',
  }

  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <Quote className="h-8 w-8 text-brand-200" aria-hidden="true" />
        <StarRating rating={testimonial.rating} />
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
        "{testimonial.comment}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-brand-100 flex-shrink-0">
          <Image
            src={testimonial.clientAvatarUrl}
            alt={`Avatar de ${testimonial.clientName}`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {testimonial.clientName}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {petEmojis[testimonial.petType]} {testimonial.petName} · {testimonial.service}
          </p>
        </div>
      </div>
    </Card>
  )
}

export function TestimonialsSection({
  testimonials,
  averageRating = 4.9,
  totalReviews = 248,
}: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          {/* Aggregate rating */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{averageRating}</span>
            <span className="text-gray-500 text-sm">({totalReviews} reseñas)</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
