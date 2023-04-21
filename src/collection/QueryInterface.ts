import type { IQueryPage } from '@/collection/QueryPageInterface'

export interface IQuery {
    include?: string,
    filter?: any[],
    page?: IQueryPage,
    sort?: string
}
