import Action from './enums/Action'
import Actioned from './enums/Actioned'
export interface Api {
  resource: string
  apiPrefix: string
  dates: string[]

  get(): Promise<any>
  show(id: string): Promise<any>
  store(payload: any): Promise<any>
  batchStore(payload: any[]): Promise<any>
  update(payload: any): Promise<any>
  batchUpdate(payload: any[]): Promise<any>
  destroy(id: string): Promise<any>
  destroyBatch(payload: any[]): Promise<any>

  transformResponse(response: string): any
  fetchint(payload: any): void
  fetchingError(err: any): void
  fetched(payload: any): void
  retriving(payload: any): void
  retrivingError(err: any): void
  retrieved(payload: any): void
  storing(payload: any): void
  storingError(err: any): void
  stored(payload: any): void
  updating(payload: any): void
  updatingError(err: any): void
  updated(payload: any): void
  destroying(payload: any): void
  destroyingError(err: any): void
  destroyed(payload: any): void
}

export interface Model {
  model: any
  originalModel: any
  defaultModel: any
  parameters: undefined | any
  api: Api
  protected: string[]
  relations: undefined | any
  state: ModelState

  getDefault(param: string): any
  factory(model?: any): void
  find(id: number): Promise<any>
  save(action?: Action): Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }>
  create(): Promise<any>
  update(): Promise<any>
  delete(): Promise<any>

  fresh(): void
  refresh(id?: number): Promise<any>
  setOriginal(): void
  getOriginal(): any

  retriving(): void
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

export interface Validator {
  model: any
  validations: any
  v$: any
  $invalid: any
  $model: any

  initValidations(): void
  $validate(): void
  $reset(): void
  set$Model(model: any): void
}

export interface ModelState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export interface Collection {
  data: any[]
  api: Api
  state: ModelState
}
