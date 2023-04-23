import { formatObject } from '../helpers/formatObject'
import handleErrors from '../helpers/handleErrors'
import { apiPrefix, http } from '../http/http'
import _join from 'lodash/join'

export default abstract class Api {
  /**
   * Resource name. Will be appended to the apiPrefix endpoint
   * @param { string } resource
   */
  protected resource = '' as string

  /**
   * Base API endpoint
   * @param { string } apiPrefix
   */
  protected apiPrefix = apiPrefix

  /**
   * API response parameters to be converted to Date
   * Accepts dot notation
   * @param { string[] } dates
   */
  protected dates = ['created_at', 'updated_at', 'deleted_at'] as string[]

  /**
   * @constructor
   */
  protected constructor()
  {
    return
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
  static get(payload?: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource
    const url = _join([self.apiPrefix, self.resource], '/')
    // console.log(url)
    self.fetching(payload)
    return new Promise((resolve, reject) => {
      http
        .get(url, {
          params: payload,
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.fetched(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('fetching', err)
          self.fetchingError(err)
          reject(err)
        })
    })
  }

  /**
   * Requests a single model from the API
   *
   * @async
   * @static
   * @param { number } id - Model ID
   * @return { Promise<any> } The data from the API
   */
  static show(id: number): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/' + id
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
          handleErrors('retrieving', err)
          self.retrtievingError(err)
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
  static update(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/' + payload.id
    const url = _join([self.apiPrefix, self.resource, payload.id], '/')
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
          handleErrors('updating', err)
          self.updatingError(err)
          reject(err)
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
  static store(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource
    const url = _join([self.apiPrefix, self.resource], '/')
    self.creating(payload)
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
          retries: 0,
          transformResponse: [(data: any) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.created(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('storing', err)
          self.storingError(err)
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
    // const url = self.apiPrefix + self.resource + '/' + payload.id
    const url = _join([self.apiPrefix, self.resource, payload.id], '/')
    self.deleting(payload)
    return new Promise((resolve, reject) => {
      http
        .delete(url, {
          transformResponse: [(data: string) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.deleted(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('deleting', err)
          self.deletingError(err)
          reject(err)
        })
    })
  }

  /**
   * Destroys a single model through the API
   *
   * @async
   * @static
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static destroy(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/' + payload.id
    const url = _join([self.apiPrefix, self.resource, payload.id], '/')
    self.destroying(payload)
    return new Promise((resolve, reject) => {
      http
        .delete(url, {
          transformResponse: [(data: string) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          self.deleted(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('deleting', err)
          self.deletingError(err)
          reject(err)
        })
    })
  }

  /**
   * Stores multiple models to the API
   *
   * @async
   * @static
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchStore(payload: any[]): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch'
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
          handleErrors('batchStoring', err)
          self.batchStoringError(err)
          reject(err)
        })
    })
  }
  protected batchStoringError(err?: any) { return }


  /**
   * Updates multiple models to the API
   *
   * @async
   * @static
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchUpdate(payload: any[]): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch'
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
          handleErrors('batchUpdating', err)
          self.batchUpdatingError(err)
          reject(err)
        })
    })
  }
  protected batchUpdatingError(err?: any) { return }

  /**
   * @deprecated Use batchDestroy instead
   * Batch destroys multiple records
   * @param { string } payload Api response
   */
  static batchDelete(payload: any[]): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch-delete'
    const url = _join([self.apiPrefix, self.resource, 'batch-delete'], '')
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
          handleErrors('batchDestroying', err)
          self.batchDestroyingError(err)
          reject(err)
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
  static batchDestroy(payload: any[]): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch-delete'
    const url = _join([self.apiPrefix, self.resource, 'batch-destroy'], '')
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
          handleErrors('batchDestroying', err)
          self.batchDestroyingError(err)
          reject(err)
        })
    })
  }
  protected batchDestroyingError(err?: any) { return }

  /**
   * Fetches model logs from API
   *
   * @async
   * @static
   * @param { any | number } payload Payload
   * @return { Promise<any> } The data from the API
   */
  static logs(payload: any | number): Promise<any>
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
    return new Promise((resolve, reject) => {
      http
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
        .get(url, payload, {
          transformResponse: [(data: string) => self.transformResponse(data)],
        })
        .then((response: { data: any }) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('fetchingLogs', err)
          self.fetchingLogsError(err)
          reject(err)
        })
    })
  }

  /**
   * Transforms the response from the msw into a format that is expected
   *
   * @param { string } response Api response
   * @return { any } Parsed response
   */
  protected transformResponse(response: string): any
  {
    const resp = JSON.parse(response)
    resp.data = formatObject(resp.data, this.dates)
    return resp
  }

  /**
  * Fetching runs before get method
   * @param { any } payload Payload
  */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetching(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingError(err?: any): void { return }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetched(payload?:any): void { return }
  /**
   * Retrieving runs before show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieving(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrievingError(err?: any): void { return }
  /**
   * Retrieved runs after show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected creating(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected created(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updating(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updatingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroying(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destryingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyed(payload?:any): void { return }
}
