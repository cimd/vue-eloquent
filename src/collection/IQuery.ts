import type { IQueryPage } from '../collection/IQueryPage'

export interface IQuery {
    fields?: string,
    include?: string,
    append?: string[],
    filter?: any[],
    paginate?: IQueryPage,
    sort?: string
}

export interface Query {
    fields?: string,
    include?: string,
    append?: string[],
    filter?: any[],
    paginate?: IQueryPage,
    sort?: string
}
