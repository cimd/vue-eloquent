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
   * Send the request to the API
   * @param { any } payload DEPRECATED
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
   * Request Model from API
   * @param { number } id Model ID
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

  /**
   * Pushes model update to API
   * @param { any } payload Model to be updated
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updating(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updatingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload?:any): void { return }

  /**
   * To store new model
   * @param { any } payload Model to be created
   */
  static store(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource
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
          handleErrors('storing', err)
          self.storingError(err)
          reject(err)
        })
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storing(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected storingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected stored(payload?:any): void { return }
  /**
   * @deprecated Use destroy method instead
   * @param { any } payload Model to be deleted
   */
  static delete(payload: any): Promise<any>
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
          self.destroyed(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('deleting', err)
          self.destroyingError(err)
          reject(err)
        })
    })
  }
  /**
   * Destroy the model
   * @param { any } payload Model to be deleted
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
          self.destroyed(response.data)
          resolve(response.data)
        })
        .catch((err: any) => {
          handleErrors('destroying', err)
          self.destroyingError(err)
          reject(err)
        })
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroying(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyingError(err?: any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected destroyed(payload?:any): void { return }



  static batchStore(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch'
    const url = _join([self.apiPrefix, self.resource, 'batch'], '/')
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchStoringError(err?: any) { return }



  static batchUpdate(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch'
    const url = _join([self.apiPrefix, self.resource, 'batch'], '/')
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchUpdatingError(err?: any) { return }


  /**
   * @deprecated Use batchDestroy instead
   * Batch destroys multiple records
   * @param { string } payload Api response
   */
  static batchDelete(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch-delete'
    const url = _join([self.apiPrefix, self.resource, 'batch-delete'], '')
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
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
   * Batch destroys multiple records
   * @param { string } payload Api response
   */
  static batchDestroy(payload: any): Promise<any>
  {
    const self = this.instance()
    // const url = self.apiPrefix + self.resource + '/batch-delete'
    const url = _join([self.apiPrefix, self.resource, 'batch-destroy'], '')
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected batchDestroyingError(err?: any) { return }


  /**
   * Fetches model logs from API
   * @param { any | number } payload Payload
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected fetchingLogsError(err?: any): void { return }


  /**
   * Transforms the response from the msw into a format that is expected
   * @param { string } response Api response
   */
  protected transformResponse(response: string): any
  {
    const resp = JSON.parse(response)
    resp.data = formatObject(resp.data, this.dates)
    return resp
  }

}
