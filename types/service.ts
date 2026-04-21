export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  imageUrl: string
  price: {
    from: number
    currency: 'USD'
    label: string
  }
  features: string[]
  duration: string
  category: ServiceCategory
  isActive: boolean
  isFeatured: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export type ServiceCategory =
  | 'consulta'
  | 'prevencion'
  | 'cirugia'
  | 'estetica'
  | 'emergencia'
  | 'nutricion'

export interface ServiceFilters {
  category?: ServiceCategory
  isFeatured?: boolean
  isActive?: boolean
}
