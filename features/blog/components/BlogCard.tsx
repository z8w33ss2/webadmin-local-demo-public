import Link from 'next/link'
import Image from 'next/image'
import { Clock, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { formatDateShort } from '@/utils/formatters'
import { ROUTES } from '@/lib/constants'
import type { BlogPost } from '@/types'

const categoryLabels: Record<string, string> = {
  salud: 'Salud',
  nutricion: 'Nutrición',
  comportamiento: 'Comportamiento',
  cuidados: 'Cuidados',
  noticias: 'Noticias',
}

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'compact'
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'compact') {
    return (
      <Link href={ROUTES.blogPost(post.slug)} className="group flex gap-4 items-start">
        <div className="relative h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="64px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-brand-700 font-medium mb-1">
            {categoryLabels[post.category] ?? post.category}
          </p>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-brand-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{formatDateShort(post.publishedAt)}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={ROUTES.blogPost(post.slug)} className="group block h-full">
      <Card hover padding="none" className="overflow-hidden h-full flex flex-col">
        {/* Cover image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="default" size="sm">
              {categoryLabels[post.category] ?? post.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-4">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6 rounded-full overflow-hidden bg-brand-100">
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </div>
              <span className="text-xs text-gray-500 truncate max-w-[120px]">
                {post.author.name.split(' ')[0]} {post.author.name.split(' ').at(-1)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readingTimeMinutes} min</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
