import type { ApiResponse, IApiResponse } from '../api/IApiResponse'

export interface IApi {
  resource: string
  apiPrefix: string
  dates: string[]

  get<T>(payload?: any): Promise<IApiResponse<T[]>>
  show<T>(id: number): Promise<IApiResponse<T>>
  store<T>(payload: Partial<T>): Promise<IApiResponse<T>>
  batchStore<T>(payload: T[]): Promise<IApiResponse<T[]>>
  update<T>(payload: Partial<T>): Promise<IApiResponse<T>>
  batchUpdate<T>(payload: T[]): Promise<IApiResponse<T[]>>
  delete(payload: any): Promise<any>
  destroy<T>(payload: Partial<T> | number): Promise<IApiResponse<T>>
  batchDestroy<T>(payload: T[]): Promise<IApiResponse<T[]>>
  logs(payload: { id: number } | number): Promise<any[]>

  transformResponse(response: string): any
  fetching(payload: any): void
  fetchingError(err: any): void
  fetched(payload: any): void
  retrieving(payload: any): void
  retrievingError(err: any): void
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

  storeValidationRules<T>(payload: any): Promise<IApiResponse<T>>
  updateValidationRules<T>(payload: any): Promise<IApiResponse<T>>
}

export declare class Api {
  resource: string
  apiPrefix: string
  dates: string[]

  /**
   * Returns the resource
   *
   * @return { string } resource
   */
  getResource(): string

  get<T>(payload?: any): Promise<ApiResponse<T[]>>
  show<T>(id: number): Promise<ApiResponse<T>>
  store<T>(payload: Partial<T>): Promise<ApiResponse<T>>
  batchStore<T>(payload: T[]): Promise<ApiResponse<T[]>>
  update<T>(payload: Partial<T>): Promise<ApiResponse<T>>
  batchUpdate<T>(payload: T[]): Promise<ApiResponse<T[]>>
  /**
   * Deletes a single model through the API
   *
   * @deprecated
   * @async
   * @static
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  delete(payload: any): Promise<any>
  destroy<T>(payload: Partial<T> | number): Promise<ApiResponse<T>>
  batchDestroy<T>(payload: T[]): Promise<ApiResponse<T[]>>
  logs(payload: { id: number } | number): Promise<any[]>

  /**
   * hasOne relationship methods
   *
   * @param { string } childResource - Child resource string to be passed on the endpoint
   * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  hasOne(childResource: string, parentId: number): Promise<any>

  /**
   * hasMany relationship methods
   *
   * @param { string } childResource - Child resource string to be passed on the endpoint
   * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  hasMany(childResource: string, parentId: number): Promise<any>

  transformResponse(response: string): any
  fetching(payload: any): void
  fetchingError(err: any): void
  fetched(payload: any): void
  retrieving(payload: any): void
  retrievingError(err: any): void
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

  storeValidationRules<T>(payload: any): Promise<ApiResponse<T>>
  updateValidationRules<T>(payload: any): Promise<ApiResponse<T>>
}
