import type { Metadata } from 'next'
import { BlogCard } from '@/features/blog/components/BlogCard'
import { CTASection } from '@/components/sections/CTASection'
import { getAllPosts } from '@/services/blogService'
import { buildPageTitle, buildPageDescription } from '@/config/seo'

export const metadata: Metadata = {
  title: buildPageTitle('Blog Veterinario'),
  description: buildPageDescription(
    'Artículos y consejos de nuestros especialistas sobre salud, nutrición, comportamiento y cuidado de mascotas.',
  ),
}

export default function BlogPage() {
  const posts = getAllPosts({ isPublished: true })
  const featured = posts.find((p) => p.isFeatured)
  const rest = posts.filter((p) => !p.isFeatured || p.id !== featured?.id)

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-700 text-sm font-semibold uppercase tracking-wider">
            Nuestro Blog
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Consejos veterinarios
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Artículos escritos por nuestros especialistas para ayudarte a cuidar mejor a tu mascota.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
