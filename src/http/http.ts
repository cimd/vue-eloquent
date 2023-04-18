import {AxiosInstance} from 'axios'

let http: AxiosInstance
function createHttp(httpClient: AxiosInstance): void
{
  http = httpClient
}

export {
  http,
  createHttp
}
