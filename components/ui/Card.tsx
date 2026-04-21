import { cn } from '@/utils/cn'
import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

function Card({ hover = false, padding = 'md', className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-gray-100 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('pb-4 border-b border-gray-100', className)} {...props}>
      {children}
    </div>
  )
}

function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('py-4', className)} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={cn('pt-4 border-t border-gray-100', className)} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardContent, CardFooter }
