import Api from '../api/Api'
import handleErrors from '../helpers/handleErrors'
import { http } from '../http/http'

export default class BatchApi extends Api {
  constructor() {
    super()
  }

  static batchStore(payload: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource + '/batch'
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          // self.setSucess()
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors('batchStoring', err)
          self.batchStoringError(err)
          reject(err)
        })
    })
  }
  protected batchStoringError(err?: any) { return }


  static batchUpdate(payload: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource + '/batch'
    return new Promise((resolve, reject) => {
      http
        .patch(url, payload, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors('batchUpdating', err)
          self.batchUpdatingError(err)
          reject(err)
        })
    })
  }
  protected batchUpdatingError(err?: any) { return }

  static batchDelete(payload: any): Promise<any>
  {
    const self = this.instance()
    const url = self.baseApi + self.resource + '/batch-delete'
    return new Promise((resolve, reject) => {
      http
        .post(url, payload, {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          retries: 0,
          transformResponse: [(data) => self.transformResponse(data)],
        })
        .then((response) => {
          resolve(response.data)
        })
        .catch((err) => {
          handleErrors('batchDeleting', err)
          self.batchDeletingError(err)
          reject(err)
        })
    })
  }
  protected batchDeletingError(err?: any) { return }
}
