import type { QueryPage } from '@/collection/IQueryPage'

export interface Query {
  fields?: string
  include?: string
  append?: string[]
  filter?: any[]
  paginate?: QueryPage
  sort?: string
}
