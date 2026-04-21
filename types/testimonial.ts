export interface Testimonial {
  id: string
  clientName: string
  clientAvatarUrl: string
  petName: string
  petType: PetType
  rating: number
  comment: string
  service: string
  isHighlighted: boolean
  publishedAt: string
}

export type PetType = 'perro' | 'gato' | 'conejo' | 'ave' | 'otro'

export interface TeamMember {
  id: string
  name: string
  role: string
  specialty: string
  bio: string
  avatarUrl: string
  credentials: string[]
  isActive: boolean
}
