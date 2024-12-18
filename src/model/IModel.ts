import type { IModelState, ModelState } from 'src/model/IModelState'
import type Action from 'src/enums/Action'
import type Actioned from 'src/enums/Actioned'
import type { Api, IApi } from 'src/api/IApi'
import Validator from './Validator'

export interface IModel {
  model: any
  originalModel: any
  defaultModel: any
  api: IApi
  protected: string[]
  relations: undefined | any[]
  state: IModelState

  getDefault(param: string): any
  factory(model?: any): void
  find(id: number): Promise<any>
  save(action?: Action): Promise<{ model: any; actioned: Actioned.CREATED | Actioned.UPDATED }>
  create(): Promise<any>
  update(): Promise<any>
  delete(): Promise<any>

  fresh(): void
  refresh(id?: number): Promise<any>
  setOriginal(): void
  getOriginal(): any

  retrieving(): void
  retrieved(): void
  creating(): void
  created(): void
  updating(): void
  updated(): void
  deleting(): void
  deleted(): void
  saved(): void

  load(args?: string | string[]): Promise<any>

  setStateLoading(): void
  setStateSuccess(): void
  setStateError(): void

  hasOne(api: any, primaryKey: number): Promise<any>
  hasMany(api: any, primaryKey: string, id: number): Promise<any[]>
}

export declare class Model<T> extends Validator {
  model: T
  originalModel: T
  defaultModel: T
  protected parameters: undefined | Partial<T>
  api: Api
  protected: string[]
  relations: undefined | any[]
  state: ModelState

  getDefault(param: string): any
  factory(model?: T): void
  setModel(data: T): void
  setOriginal(): void
  instance(): Model<T>

  find<T>(id: number): Promise<Model<T>>
  save(action?: Action): Promise<{ model: T; actioned: Actioned.CREATED | Actioned.UPDATED }>
  create<T>(): Promise<T>
  update<T>(): Promise<T>
  delete<T>(): Promise<T>

  fresh(): void
  refresh(id?: number): Promise<void>
  getOriginal(): T

  retrieving(): void
  retrievingError(err?: any): void
  retrieved(payload: any): void
  protected creating(): void
  created(payload: any): void
  protected updating(): void
  updated(payload: any): void
  deleting(): void
  deleted(payload: any): void
  saved(payload: any): void

  load(args?: string | string[]): Promise<any>
  hasOne<K>(api: Api, primaryKey: number): Promise<K>
  hasOne(api: any, primaryKey: number): Promise<any>
  hasMany<K>(api: Api, primaryKey: string, id: number): Promise<K[]>
  hasMany(api: any, primaryKey: string, id: number): Promise<any[]>
  setStateLoading(): void
  setStateSuccess(): void
  setStateError(): void
}
