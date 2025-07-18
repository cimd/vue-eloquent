import { formatObject } from '@/helpers/formatObject'
import { apiPrefix, http } from '@/http/http'
import _join from 'lodash/join'
import ApiError from '@/api/ApiError'
import type { IAxiosError } from '@/api/IAxiosError'
import type { ApiResponse } from '@/api/IApiResponse'
import ApiQuery from '@/api/ApiQuery'
import type { ModelParams } from '@/model/IModelParams'

export default abstract class Api extends ApiQuery {
  /**
   * Resource name. Will be appended to the apiPrefix endpoint
   * @param { string } resource
   */
  declare protected resource: string

  /**
   * Base API endpoint
   * @param { string } apiPrefix
   */
  protected apiPrefix: string = apiPrefix

  /**
   * API response parameters to be converted to Date
   * Accepts dot notation
   * @param { string[] } dates
   */
  protected dates: string[] = ['created_at', 'updated_at', 'deleted_at']

  protected constructor() {
    super()
  }

  /**
   * Returns instance
   *
   * @async
   * @static
   * @return { this }
   */
  static instance(): this {
    return new this()
  }

  static async get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    return await self.get(payload)
  }

  /**
   * Requests a single model from the API
   *
   * @async
   * @static
   * @template T
   * @param { number } id - Model ID
   * @return { Promise<any> } The data from the API
   */
  static show<T>(id: number | string): Promise<ApiResponse<T>> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, id], '/')
    self.retrieving(id)
    return new Promise((resolve, reject) => {
      http
        .get(url, {
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.retrieved(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          self.retrievingError(err)
          reject(new ApiError('Show', err))
        })
    })
  }

  /**
   * Validate the update request
   *
   * @async
   * @static
   * @template T
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static updateValidationRules<T>(payload: any): Promise<ApiResponse<T>> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, payload.id], '/')

    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
          headers: { 'Request-Rules': true },
        })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          reject(err.response)
        })
    })
  }

  /**
   * Updates a single model to the API
   *
   * @async
   * @static
   * @template {T extends ModelParams}
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static update<T extends ModelParams>(
    payload: Partial<T>,
  ): Promise<ApiResponse<T>> {
    const self = this.instance()
    const url: string = _join([self.apiPrefix, self.resource, payload.id], '/')
    self.updating(payload)
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.updated(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          self.updatingError(err)
          reject(new ApiError('Update', err))
        })
    })
  }

  /**
   * Stores new model through the API
   *
   * @async
   * @static
   * @template T
   * @param { Partial<T> } payload - Model
   * @return { Promise<ApiResponse<T>> } The data from the API
   */
  static store<T>(payload: T | Partial<T>): Promise<ApiResponse<T>> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource], '/')
    self.storing(payload)
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.stored(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          self.storingError(err)
          reject(new ApiError('Store', err))
        })
    })
  }

  /**
   * hasOne relationship methods
   *
   * @param { string } childResource - Child resource string to be passed on the endpoint
   * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  static hasOne(childResource: string, parentId: number) {
    const self = this.instance()
    return {
      get(payload: any): Promise<any[]> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource],
          '/',
        )
        self.fetching(payload)
        return new Promise((resolve, reject) => {
          http
            .get(url, {
              params: payload,
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.fetched(response.data)
              resolve(response.data.data[ 0 ])
            })
            .catch((err: any) => {
              self.fetchingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      show(payload: { id: number | string }): Promise<ApiResponse<any>> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource, payload.id],
          '/',
        )
        self.retrieving(payload)
        return new Promise((resolve, reject) => {
          http
            .get(url, {
              params: payload,
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.retrieved(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.retrievingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      store(payload: any): Promise<ApiResponse<any>> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource],
          '/',
        )
        self.storing(payload)
        return new Promise((resolve, reject) => {
          http
            .post(url, payload, {
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.stored(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.storingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      update(payload: any): Promise<ApiResponse<any>> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource, payload.id],
          '/',
        )
        self.updating(payload)
        return new Promise((resolve, reject) => {
          http
            .patch(url, payload, {
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.updated(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.updatingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      delete(payload: any) {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource, payload.id],
          '/',
        )
        self.destroying(payload)
        return new Promise((resolve, reject) => {
          http
            .delete(url, {
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.destroyed(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.destroyingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
    }
  }

  /**
   * hasMany relationship methods
   *
   * @param { string } childResource - Child resource string to be passed on the endpoint
   * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  static hasMany(childResource: string, parentId: number) {
    const self = this.instance()
    return {
      get(payload: any): Promise<any[]> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource],
          '/',
        )
        self.fetching(payload)
        return new Promise((resolve, reject) => {
          http
            .get(url, {
              params: payload,
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.fetched(response.data)
              resolve(response.data.data)
            })
            .catch((err: any) => {
              self.fetchingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      show(payload: { id: number | string }): Promise<ApiResponse<any>> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource, payload.id],
          '/',
        )
        self.retrieving(payload)
        return new Promise((resolve, reject) => {
          http
            .get(url, {
              params: payload,
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.retrieved(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.retrievingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      store(payload: any): Promise<ApiResponse<any>> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource],
          '/',
        )
        self.storing(payload)
        return new Promise((resolve, reject) => {
          http
            .post(url, payload, {
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.stored(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.storingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      update(payload: any): Promise<ApiResponse<any>> {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource, payload.id],
          '/',
        )
        self.updating(payload)
        return new Promise((resolve, reject) => {
          http
            .patch(url, payload, {
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.updated(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.updatingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
      delete(payload: any) {
        const url = _join(
          [self.apiPrefix, self.resource, parentId, childResource, payload.id],
          '/',
        )
        self.destroying(payload)
        return new Promise((resolve, reject) => {
          http
            .delete(url, {
              transformResponse: [(data: any) => self.transformResponse(data)],
            })
            .then((response: { data: any }) => {
              self.destroyed(response.data)
              resolve(response.data)
            })
            .catch((err: any) => {
              self.destroyingError(err)
              reject(new ApiError('Store', err))
            })
        })
      },
    }
  }

  /**
   * Deletes a single model through the API
   *
   * @deprecated
   * @async
   * @static
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static delete(payload: any): Promise<any> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, payload.id], '/')
    self.destroying(payload)
    return new Promise((resolve, reject) => {
      http
        .delete(url, {
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.destroyed(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          self.destroyingError(err)
          reject(new ApiError('Delete', err))
        })
    })
  }

  /**
   * Destroys a single model through the API
   *
   * @async
   * @static
   * @template T
   * @param { Partial<T> | number } payload - Model or Model Id
   * @param { boolean } isModel - If it's a model, it will automatically push the model's id to the API
   * @return { Promise<ApiResponse<T> } The data from the API
   */
  static destroy<T extends ModelParams>(
    payload: Partial<T> | number,
    isModel = true,
  ): Promise<ApiResponse<T>>;
  static destroy<T extends ModelParams>(
    payload: Partial<T> | number,
    isModel = true,
  ): Promise<ApiResponse<T>> {
    const id: number = typeof payload === 'number' ? payload : payload.id
    const self = this.instance()

    let params = null
    if (!isModel) {
      params = payload
    }

    let url = ''
    if (isModel) {
      url = _join([self.apiPrefix, self.resource, id], '/')
    } else {
      url = _join([self.apiPrefix, self.resource], '/')
    }

    self.destroying(payload)
    return new Promise((resolve, reject) => {
      http
        .delete(url, {
          params,
          transformResponse: [(data: string) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.destroyed(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          self.destroyingError(err)
          reject(new ApiError('Destroy', err))
        })
    })
  }

  /**
   * Stores multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { T[] } payload - Models. Will be wrapped in a data ({data: payload}) property before submitting to the API
   * @return { Promise<ApiResponse<T[]>> } The data from the API
   */
  static batchStore<T>(payload: T[]): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch'], '/')
    return new Promise((resolve, reject) => {
      http
        .post(
          url,
          { data: payload },
          {
            transformResponse: [(data: any) => self.transformResponse(data)],
          },
        )
        .then((response: { data: any }) => {
          // self.setSucess()
          resolve(response.data)
        })
        .catch((err: any) => {
          self.batchStoringError(err)
          reject(new ApiError('BatchStoring', err))
        })
    })
  }

  /**
   * Updates multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<ApiResponse<T[]>> } The data from the API
   */
  static batchUpdate<T>(payload: T[]): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch'], '/')
    return new Promise((resolve, reject) => {
      http
        .patch(
          url,
          { data: payload },
          {
            transformResponse: [(data: any) => self.transformResponse(data)],
          },
        )
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          self.batchUpdatingError(err)
          reject(new ApiError('BatchUpdate', err))
        })
    })
  }

  /**
   * @deprecated Use batchDestroy instead
   * Batch destroys multiple records
   * @param { string } payload Api response
   */
  static batchDelete(payload: any[]): Promise<any> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch-delete'], '/')
    return new Promise((resolve, reject) => {
      http
        .post(
          url,
          { data: payload },
          {
            transformResponse: [(data: any) => self.transformResponse(data)],
          },
        )
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          self.batchDestroyingError(err)
          reject(new ApiError('BatchDelete', err))
        })
    })
  }

  /**
   * Destroys multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { T[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchDestroy<T>(payload: T[]): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch-destroy'], '/')
    return new Promise((resolve, reject) => {
      http
        .patch(
          url,
          { data: payload },
          {
            transformResponse: [(data: any) => self.transformResponse(data)],
          },
        )
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          self.batchDestroyingError(err)
          reject(new ApiError('BatchDestroy', err))
        })
    })
  }

  /**
   * Fetches model logs from API
   *
   * @async
   * @static
   * @param { any | number } payload Payload
   * @return { Promise<any> } The data from the API
   */
  static logs(payload: { id: number } | number): Promise<any[]> {
    const self = this.instance()
    let id: number
    if (typeof payload === 'number') {
      id = payload
    } else {
      id = payload.id
    }
    const url = _join([self.apiPrefix, self.resource, id, 'logs'], '/')

    return new Promise((resolve, reject) => {
      http
        .get(url, {
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          self.fetchingLogsError(err)
          reject(new ApiError('Logs', err))
        })
    })
  }

  /**
   * Returns the resource
   *
   * @return { string } resource
   */
  static getResource(): string {
    const self = this.instance()
    return self.resource
  }

  /**
   * Sends the request to the API
   *
   * @async
   * @static
   * @template T
   * @param { Partial<T> } payload - DEPRECATED. Use the where method instead
   * @return { ApiResponse<T[]> } The data from the API
   */
  get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>>;
  get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>> {
    const url = _join([this.apiPrefix, this.resource], '/')

    let queryString: any
    if (payload) {
      queryString = payload
    } else {
      queryString = this.queryString()
    }
    this.fetching(queryString)

    return new Promise((resolve, reject) => {
      http
        .get(url, {
          params: queryString,
          transformResponse: [(data: any) => this.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          this.fetched(response.data)
          resolve(response.data)
        })
        .catch((err: IAxiosError) => {
          this.fetchingError(err)
          reject(new ApiError('Get', err))
        })
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchStoringError?(err?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchUpdatingError?(err?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchDestroyingError?(err?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingLogsError(err?: any): void {
    return
  }

  /**
   * Transforms the response from the msw into a format that is expected
   *
   * @param { string } response Api response
   * @return { any } Parsed response
   */
  protected transformResponse(response: string): any {
    if (response === null) {
      return null
    }

    const resp = JSON.parse(response)
    if (resp.data !== null) {
      resp.data = formatObject(resp.data, this.dates)
    }
    
    return resp
  }

  /**
   * Fetching runs before get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetching(payload?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingError(err?: any): void {
    return
  }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetched(payload?: any): void {
    return
  }

  /**
   * Retrieving runs before show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieving(payload?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrievingError(err?: any): void {
    return
  }
  /**
   * Retrieved runs after show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved(payload?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storing(payload?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storingError(err?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected stored(payload?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updating(payload?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updatingError(err?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload?: any): void {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroying(payload?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyingError(err?: any): void {
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyed(payload?: any): void {
    return
  }
}
