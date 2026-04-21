import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { StatsSection } from '@/components/sections/StatsSection'
import { getFeaturedServices } from '@/services/servicesService'
import { getHighlightedTestimonials, getAverageRating } from '@/services/testimonialsService'
import { DEFAULT_SEO } from '@/config/seo'

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
}

export default function HomePage() {
  const featuredServices = getFeaturedServices(6)
  const testimonials = getHighlightedTestimonials(6)
  const avgRating = getAverageRating()

  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection services={featuredServices} />
      <TestimonialsSection
        testimonials={testimonials}
        averageRating={avgRating}
        totalReviews={248}
      />
      <CTASection />
    </>
  )
}
