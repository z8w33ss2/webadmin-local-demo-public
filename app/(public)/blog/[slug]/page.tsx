import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { BlogCard } from '@/features/blog/components/BlogCard'
import { CTASection } from '@/components/sections/CTASection'
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/services/blogService'
import { buildPageTitle, buildPageDescription } from '@/config/seo'
import { formatDate } from '@/utils/formatters'
import { ROUTES } from '@/lib/constants'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: buildPageTitle(post.seo?.metaTitle ?? post.title),
    description: buildPageDescription(post.seo?.metaDescription ?? post.excerpt),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImageUrl, alt: post.title }],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, post.category, 3)

  return (
    <>
      {/* Article */}
      <article>
        {/* Cover */}
        <div className="relative h-64 md:h-96 bg-gray-100 overflow-hidden">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href={ROUTES.blog}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <span className="text-brand-700 text-sm font-semibold capitalize">
              {post.category}
            </span>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-500">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-brand-100">
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTimeMinutes} min de lectura
                </span>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="prose-content">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('## '))
                return <h2 key={i}>{line.replace('## ', '')}</h2>
              if (line.startsWith('### '))
                return <h3 key={i}>{line.replace('### ', '')}</h3>
              if (line.startsWith('> '))
                return <blockquote key={i}>{line.replace('> ', '')}</blockquote>
              if (line.startsWith('- '))
                return <p key={i} className="flex gap-2"><span>•</span><span>{line.replace('- ', '')}</span></p>
              if (line.trim() === '') return <br key={i} />
              return <p key={i}>{line}</p>
            })}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-brand-50 text-brand-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-14 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
