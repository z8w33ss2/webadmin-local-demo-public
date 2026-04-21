import { MOCK_BLOG_POSTS } from '@/data/blog'
import type { BlogPost, BlogCategory, BlogFilters } from '@/types'

/**
 * Retorna todos los posts del blog.
 */
export function getAllPosts(filters?: BlogFilters): BlogPost[] {
  let posts = [...MOCK_BLOG_POSTS]

  if (filters?.isPublished !== undefined) {
    posts = posts.filter((p) => p.isPublished === filters.isPublished)
  }

  if (filters?.isFeatured !== undefined) {
    posts = posts.filter((p) => p.isFeatured === filters.isFeatured)
  }

  if (filters?.category) {
    posts = posts.filter((p) => p.category === filters.category)
  }

  if (filters?.tag) {
    posts = posts.filter((p) => p.tags.includes(filters.tag!))
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

/**
 * Retorna un post por su slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return MOCK_BLOG_POSTS.find((p) => p.slug === slug && p.isPublished)
}

/**
 * Retorna los posts destacados.
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return getAllPosts({ isPublished: true, isFeatured: true }).slice(0, limit)
}

/**
 * Retorna los slugs de todos los posts publicados (para generateStaticParams).
 */
export function getAllPostSlugs(): string[] {
  return MOCK_BLOG_POSTS.filter((p) => p.isPublished).map((p) => p.slug)
}

/**
 * Retorna posts relacionados (misma categoría, excluyendo el actual).
 */
export function getRelatedPosts(
  currentSlug: string,
  category: BlogCategory,
  limit: number = 3,
): BlogPost[] {
  return getAllPosts({ isPublished: true, category })
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit)
}
