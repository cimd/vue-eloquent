import {http} from 'boot/axios'
import {Notify} from 'quasar'
import {formatObject} from 'src/app/models/api/formatObject'
import handleErrors from 'src/app/models/handleErrors'

export default abstract class Api {
  /**
   * Resource name. Will be appended to the baseApi endpoint
   * @param { string } resource
   */
  protected resource = '' as string

  /**
   * Base API endpoint
   * @param { string } baseApi
   */
  protected baseApi = '/api/v1/' as string

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

  static get(payload?: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource
    self.fetching(payload)
    return new Promise((resolve, reject) => {
      http
        .get(url, {
          params: payload,
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          self.fetched(response.data)
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors(err)
          reject(err)
        })
    })
  }

  static show(id: number): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource + '/' + id
    self.retrieving(id)
    return new Promise((resolve, reject) => {
      http
        .get(url, {
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          self.retrieved(response.data)
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors(err)
          reject(err)
        })
    })
  }

  static update(payload: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource + '/' + payload.id
    self.updating(payload)
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          self.updated(response.data)
          resolve(response.data)
        })
        .catch((err) => {
          Notify.create({
            message: 'Error Updating',
            progress: true,
            color: 'negative',
            actions: [
              {
                label: 'Dismiss',
                color: 'white',
                handler: () => { /* ... */ },
              },
            ],
          })
          handleErrors(err)
          reject(err)
        })
    })
  }

  static store(payload: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource
    self.creating(payload)
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
          retries: 0,
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          self.created(response.data)
          resolve(response.data)
        })
        .catch((err) => {
          Notify.create({
            message: 'Error Creating',
            progress: true,
            color: 'negative',
            actions: [
              {
                label: 'Dismiss',
                color: 'white',
                handler: () => { /* ... */ },
              },
            ],
          })
          handleErrors(err)
          reject(err)
        })
    })
  }

  static delete(payload: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource + '/' + payload.id
    self.deleting(payload)
    return new Promise((resolve, reject) => {
      http
        .delete(url, {
          transformResponse: [(data: string) => self.transformResponse(data)],
        })
        .then((response) => {
          self.deleted(response.data)
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors(err)
          reject(err)
        })
    })
  }

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
    const url = self.baseApi + self.resource + '/' + id + '/logs'
    return new Promise((resolve, reject) => {
      http
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
        .get(url, payload, {
          transformResponse: [(data: string) => self.transformResponse(data)],
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors(err)
          reject(err)
        })
    })
  }

  /**
   * Transforms the response from the server into a format that is expected
   * @param { string } response Api response
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
  /**
   * Retrieved runs after show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected retrieved(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected creating(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected created(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updating(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected updated(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected deleting(payload?:any): void { return }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected deleted(payload?:any): void { return }
}
