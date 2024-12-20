import type { IModelState } from '@/model/IModelState'
import type { IQueryPage, QueryPage } from '@/collection/IQueryPage'
import type { IQuery, Query } from '@/collection/IQuery'
import type { IApi } from '@/api/IApi'
import type Api from '@/api/Api'

export interface ICollection<T> {
  data: T[]
  api: IApi
  state: IModelState

  filter: any
  include: any[]
  fieldsSelection: any[]
  paging: IQueryPage
  sorting: any[]

  channel?: string

  factory(collection?: T[]): void
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

  updateDataSource(data: T[]): void
  queryString(): IQuery
}

export declare class Collection<T> {
  data: T[]
  api: Api
  state: IModelState

  filter: any
  include: string[]
  attributes: string[]
  fieldsSelection: string[]
  paging: QueryPage
  sorting: string[]

  channel?: string

  factory<T>(collection: T[]): void
  get<T>(filter?: any): Promise<T[]>

  where(filter: any): this
  with(relationships: string[]): this
  select(fields: string[]): this
  sort(sorting: string[]): this
  page(paging: IQueryPage): this

  joinChannel(channel?: string): void
  leaveChannel(): void

  setStateLoading(): void

  setStateSuccess(): void

  setStateError(): void

  queryString(): Query

  fetching(payload?: any): void

  fetchingError(err?: any): void

  fetched(payload: any): void

  protected broadcastCreated(e: any): void

  protected broadcastUpdated(e: any): void

  protected broadcastDeleted(e: any): void

  protected updateDataSource<T>(data: T[]): void
}
