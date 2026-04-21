export interface AdminUser {
  id: string
  name: string
  email: string
  role: AdminRole
  avatarUrl: string
  lastLogin: string
}

export type AdminRole = 'superadmin' | 'admin' | 'editor'

export interface DashboardStat {
  id: string
  label: string
  value: string | number
  trend: number
  trendLabel: string
  icon: string
  color: StatColor
}

export type StatColor = 'teal' | 'blue' | 'amber' | 'rose' | 'violet'

export interface AdminTableRow {
  id: string
  [key: string]: unknown
}

export interface TableColumn<T extends AdminTableRow> {
  key: keyof T
  label: string
  sortable?: boolean
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface CRUDState<T> {
  items: T[]
  selectedItem: T | null
  isLoading: boolean
  isEditing: boolean
  isCreating: boolean
  searchQuery: string
}
