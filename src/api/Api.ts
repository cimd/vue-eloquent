import { formatObject } from '../helpers/formatObject'
import { apiPrefix, http } from '../http/http'
import _join from 'lodash/join'
import ApiError from '../api/ApiError'
import type { IAxiosError } from './IAxiosError'
import { IApiResponse } from './IApiResponse'
import { reactive } from 'vue'
import { IQueryPage } from '../collection/IQueryPage'
import ApiQuery from '../api/ApiQuery'

export default abstract class Api extends ApiQuery {
  /**
   * Resource name. Will be appended to the apiPrefix endpoint
   * @param { string } resource
   */
  protected resource: string = ''

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

  /**
   * Relates to Laravel Precognition
   *
   * If set to true it will append a header of Precognition = true
   * to the store and update requests
   * @param { boolean } validateRequests
   */
  protected validateRequests = false

  /**
   * Filters used on GET request
   */
  protected filter: any = reactive({})
  /**
   * Relations used on GET request
   */
  protected include: string[] = reactive([])
  /**
   * Fields to requested through API
   */
  protected fieldsSelection: string[] = reactive([])
  /**
   * Pagination used on GET request
   */
  protected paging: IQueryPage = reactive({ })
  /**
   * Sorting used on GET request
   */
  protected sorting: string[] = reactive([])

  protected constructor()
  {
    super()
  }

  static instance()
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new this()
  }

  /**
   * Sends the request to the API
   *
   * @async
   * @static
   * @param { any } payload - DEPRECATED. Use the where method instead
   * @return { Promise<any> } The data from the API
   */
  get<T>(payload?: any): Promise<IApiResponse<T>>
  {
    // const self = this.instance()
    const url = _join([this.apiPrefix, this.resource], '/')

    let queryString: any
    payload ? queryString = payload : queryString = this.queryString()
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

  static async get<T>(payload?: any): Promise<IApiResponse<T>>
  {
    const self = this.instance()
    return await self.get(payload)
  }

  /**
   * Requests a single model from the API
   *
   * @async
   * @static
   * @param { number } id - Model ID
   * @return { Promise<any> } The data from the API
   */
  static show<T>(id: number): Promise<IApiResponse<T>>
  {
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
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static validateUpdate<T>(payload: any): Promise<IApiResponse<T>>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource], '/')
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload,
          {
            headers: { 'Precognition': true }
          })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  /**
   * Updates a single model to the API
   *
   * @async
   * @static
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static update<T>(payload: any): Promise<IApiResponse<T>>
  {
    const self = this.instance()
    const url: string = _join([self.apiPrefix, self.resource, payload.id], '/')
    self.updating(payload)
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
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
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static store<T>(payload: any): Promise<IApiResponse<T>>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource], '/')
    self.storing(payload)
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
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
   * Validate the store request
   *
   * @async
   * @static
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static validateStore<T>(payload: any): Promise<IApiResponse<T>>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource], '/')
    return new Promise((resolve, reject) => {
      http
        .post(url, payload,
          {
            headers: { 'Precognition': true }
          })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
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
  static delete(payload: any): Promise<any>
  {
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
   * @param { any | number } payload - Model or Model Id
   * @return { Promise<any> } The data from the API
   */
  static destroy(payload: any | number): Promise<any>
  {
    const id: number = typeof payload === 'number'? payload : payload.id
    const self = this.instance()
    const url:string = _join([self.apiPrefix, self.resource, id], '/')
    self.destroying(payload)
    return new Promise((resolve, reject) => {
      http
        .delete(url, {
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
   * @param { any[] } payload - Models. Will be wrapped in a data ({data: payload}) property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchStore<T>(payload: T[]): Promise<IApiResponse<T[]>>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch'], '/')
    return new Promise((resolve, reject) => {
      http
        .post(url, { data: payload }, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchStoringError?(err?: any): void { return }


  /**
   * Updates multiple models to the API
   *
   * @async
   * @static
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchUpdate<T>(payload: T[]): Promise<IApiResponse<T[]>>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch'], '/')
    return new Promise((resolve, reject) => {
      http
        .patch(url, { data: payload }, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          self.batchUpdatingError(err)
          reject(new ApiError('BatchUpdate', err))
        })
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchUpdatingError?(err?: any) : void { return }

  /**
   * @deprecated Use batchDestroy instead
   * Batch destroys multiple records
   * @param { string } payload Api response
   */
  static batchDelete(payload: any[]): Promise<any>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch-delete'], '/')
    return new Promise((resolve, reject) => {
      http
        .post(url, { data: payload }, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
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
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchDestroy<T>(payload: T[]): Promise<IApiResponse<T[]>>
  {
    const self = this.instance()
    const url = _join([self.apiPrefix, self.resource, 'batch-destroy'], '/')
    return new Promise((resolve, reject) => {
      http
        .patch(url, { data: payload }, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          self.batchDestroyingError(err)
          reject(new ApiError('BatchDestroy', err))
        })
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchDestroyingError?(err?: any): void { return }

  /**
   * Fetches model logs from API
   *
   * @async
   * @static
   * @param { any | number } payload Payload
   * @return { Promise<any> } The data from the API
   */
  static logs(payload: { id: number } | number): Promise<any[]>
  {
    const self = this.instance()
    let id: number
    if (typeof payload === 'number') {
      id = payload
    } else {
      id = payload.id
    }
    // const url = self.apiPrefix + self.resource + '/' + id + '/logs'
    const url = _join([self.apiPrefix, self.resource, id, 'logs'], '/')
    // console.log(url)
    return new Promise((resolve, reject) => {
      http
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
        .get(url, {
          // params: payload,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingLogsError(err?: any): void { return }

  /**
   * Transforms the response from the msw into a format that is expected
   *
   * @param { string } response Api response
   * @return { any } Parsed response
   */
  protected transformResponse(response: string): any
  {
    const resp = JSON.parse(response)
    // console.log(resp)
    resp.data = formatObject(resp.data, this.dates)
    return resp
  }

  /**
  * Fetching runs before get method
   * @param { any } payload Payload
  */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetching(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingError(err?: any): void { return }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetched(payload?: any): void { return }

  /**
   * Retrieving runs before show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieving(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrievingError(err?: any): void { return }
  /**
   * Retrieved runs after show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved(payload?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storing(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected stored(payload?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updating(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updatingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroying(payload?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyed(payload?: any): void { return }
}
