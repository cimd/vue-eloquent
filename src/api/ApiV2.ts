import { ApiResponse } from './ApiResponse'
import { apiPrefix, http } from '../http/http'
import ApiError from './ApiError'
import ApiQuery from './ApiQuery'
import { IAxiosError } from './IAxiosError'
import { serializeModel } from '../helpers/objects/SerializeModel'
import joinUrl from '../helpers/strings/joinUrl'
import { ModelParams } from '../model/IModelParams'
import ModelV2 from '../model/ModelV2'

export interface ApiConfig {
  serialize: boolean
  model: ModelV2
}

export interface config {
  resource: string
}

export default abstract class ApiV2<T extends ModelParams> extends ApiQuery {

  /**
   * Resource name. Will be appended to the apiPrefix endpoint
   */
  $resource: string

  protected constructor() {
    console.log('ApiV2 Constructor')
    super()

    Object.defineProperties(this, {
      $resource: {
        enumerable: false,
        writable: true,
      },
    })
  }

  static config(params: ApiConfig): this {
    const self = this.instance()
    return self.config(params)
  }

  static async get(): Promise<ApiResponse<T[]>> {
    const self = new this()
    return await self.get()
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
  static async show(id: number): Promise<ApiResponse<T>> {
    const self = this.instance()

    const config = {
      resource: self.$resource,
      apiPrefix: self.apiPrefix(),
      model: self.model(),
      transformResponse: (response: string) => serializeModel(JSON.parse(response), self.config().model),
    }

    const callbacks = {
      retrieving: (payload?: any) => {
        self.retrieving(payload)
      },
      retrieved: (payload?: any) => {
        self.retrieved(payload)
      },
      retrievingError: (err?: any) => {
        self.retrievingError(err)
      },
    }

    return await show<T>(id, config, callbacks)
  }

  /**
   * Updates a single model to the API
   *
   * @async
   * @static
   * @template {T extends IModelParams}
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static update(payload: Partial<T>): Promise<ApiResponse<T>> {
    const self = new this()
    const url: string = joinUrl([self.apiPrefix(), self.$resource, payload.id])

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
  static store(payload: Partial<T>): Promise<ApiResponse<T>> {
    const self = this.instance()
    const url = joinUrl([self.apiPrefix(), this.$resource])
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
   * Destroys a single model through the API
   *
   * @async
   * @static
   * @template T
   * @param { Partial<T> | number } payload - Model or Model Id
   * @param { boolean } isModel - If it's a model, it will automatically push the model's id to the API
   * @return { Promise<ApiResponse<T> } The data from the API
   */
  static destroy(payload: Partial<T> | number, isModel: boolean = true): Promise<ApiResponse<T>> {
    const id: number = typeof payload === 'number' ? payload : payload?.id
    const self = this.instance()

    let params = null
    !isModel ? params = payload : null

    let url = ''
    if (isModel) {
      url = joinUrl([self.apiPrefix(), this.$resource, id])
    } else {
      url = joinUrl([self.apiPrefix(), this.$resource])
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
  static batchStore(payload: T[]): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    const url = joinUrl([self.apiPrefix(), this.$resource, 'batch'])
    return new Promise((resolve, reject) => {
      http
        .post(url, { data: payload }, {
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

  /**
   * Updates multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<ApiResponse<T[]>> } The data from the API
   */
  static batchUpdate(payload: T[]): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    const url = joinUrl([self.apiPrefix(), this.$resource, 'batch'])
    return new Promise((resolve, reject) => {
      http
        .patch(url, { data: payload }, {
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

  /**
   * Destroys multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { T[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchDestroy(payload: T[]): Promise<ApiResponse<T[]>> {
    const self = this.instance()
    const url = joinUrl([self.apiPrefix(), this.$resource, 'batch-destroy'])
    return new Promise((resolve, reject) => {
      http
        .patch(url, { data: payload }, {
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

  /**
   * Fetches model logs from API
   *
   * @async
   * @static
   * @param { any | number } payload Payload
   * @return { Promise<ApiResponse<any[]>> } The data from the API
   */
  static logs(payload: { id: number } | number): Promise<ApiResponse<any[]>> {
    const self = this.instance()
    let id: number
    if (typeof payload === 'number') {
      id = payload
    } else {
      id = payload.id
    }
    const url = joinUrl([self.apiPrefix, this.$resource, id, 'logs'])

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

  config(params?: ApiConfig): ApiConfig {
    return params ? params : {
      serialize: true,
      model: this.model()
    }
  }

  get(): Promise<ApiResponse<T[]>> {
    const url = joinUrl([this.apiPrefix(), this.$resource])

    const queryString = this.queryString()
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

  protected apiPrefix() {
    return apiPrefix
  }

  protected model() {
    return ModelV2
  }

  /**
   * Parses the json string to object, and serializes the model
   *
   * @param { string } response
   * @protected
   */
  protected transformResponse(response: string): any {
    const responseObj = JSON.parse(response)
    responseObj.data = serializeModel(responseObj.data, this.model())

    return responseObj
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchStoringError?(err?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchUpdatingError?(err?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchDestroyingError?(err?: any): void { return }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingLogsError(err?: any): void { return }

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
