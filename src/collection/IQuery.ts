import type { QueryPage } from '@/collection/IQueryPage'

export interface Query {
  fields?: string
  include?: string
  append?: string[]
  filter?: any[]
  limit?: number
  paginate?: QueryPage
  sort?: string
}
