import { IModelState } from '../model/IModelState'
import { IQueryPage } from '../collection/IQueryPage'
import { IQuery } from '../collection/IQuery'
import Api from '../api/Api'

export interface ICollection {
    data: any[]
    api: Api
    state: IModelState

    filter: any
    include: any[]
    fieldsSelection: any[]
    paging: IQueryPage
    sorting: any[]

    channel?: string

    factory(collection?: any[]): void
    get(filter?: any): Promise<any>

    where(filter: any): this
    with(relationships: string[]): this
    select(fields: string[]): this
    sort(sorting: string[]): this
    page(paging: IQueryPage): this

    joinChannel(channel?: string): void
    leaveChannel(): void
    broadcastCreated(e: any): void
    broadcastUpdated(e: any): void
    broadcastDeleted(e: any): void

    setStateLoading(): void
    setStateSuccess(): void
    setStateError(): void

    updateDataSource(data: any[]): void
    queryString(): IQuery
}


