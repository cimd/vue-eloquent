import type { IQueryPage } from '@/collection/QueryPageInterface'

export interface IQuery {
    fields?: string,
    include?: string,
    filter?: any[],
    page?: IQueryPage,
    sort?: string
}
