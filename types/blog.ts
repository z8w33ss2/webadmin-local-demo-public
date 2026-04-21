export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImageUrl: string
  author: BlogAuthor
  category: BlogCategory
  tags: string[]
  readingTimeMinutes: number
  isPublished: boolean
  isFeatured: boolean
  publishedAt: string
  updatedAt: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface BlogAuthor {
  id: string
  name: string
  role: string
  avatarUrl: string
}

export type BlogCategory =
  | 'salud'
  | 'nutricion'
  | 'comportamiento'
  | 'cuidados'
  | 'noticias'

export interface BlogFilters {
  category?: BlogCategory
  tag?: string
  isPublished?: boolean
  isFeatured?: boolean
}
