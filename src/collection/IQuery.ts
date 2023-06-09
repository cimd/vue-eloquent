import type { IQueryPage } from '../collection/IQueryPage'

export interface IQuery {
    fields?: string,
    include?: string,
    filter?: any[],
    page?: IQueryPage,
    sort?: string
}
