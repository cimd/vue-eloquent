import { AxiosInstance } from 'axios'

let http: AxiosInstance
let baseApi: string = '/api/'
function createHttp(config: { httpClient: AxiosInstance, baseApi?: string }): void
{
  console.log('createHttp')
  http = config.httpClient

  if (config.baseApi) baseApi = config.baseApi

  console.log('baseApi', baseApi)
}

export {
  http,
  createHttp,
  baseApi
}
