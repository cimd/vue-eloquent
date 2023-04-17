import {http} from 'boot/axios'
import {Notify} from 'quasar'
import BaseApi from 'src/app/models/api/Api'
import handleErrors from 'src/app/models/handleErrors'

export default class BatchApi extends BaseApi {
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
}
