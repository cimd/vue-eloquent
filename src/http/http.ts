import type { AxiosInstance } from 'axios'
import axios from 'axios'

let http: AxiosInstance
let apiPrefix = 'api'

/**
 * Create an instance of the HTTP service.
 *
 * @param { Object } config The configuration
 * @param { AxiosInstance } [config.httpClient] AxiosInstance
 * @param { string } [config.baseURL ] The base API URL
 * @param { string } [config.apiPrefix='/api'] The API prefix
 */
function createHttp(config: {
  httpClient?: AxiosInstance
  baseURL?: string
  apiPrefix?: string
  bearerToken?: string | null
}): AxiosInstance {
  if (!config.httpClient && !config.baseURL)
    throw new Error('You must provide either a httpClient or a baseURL')

  if (config.httpClient) {
    http = config.httpClient
  } else {
    http = axios.create({
      withCredentials: true,
      baseURL: config.baseURL
    })
  }

  if (config.apiPrefix) apiPrefix = config.apiPrefix
  if (config.bearerToken)
    http.defaults.headers.common.Authorization = `Bearer ${config.bearerToken}`

  return http
}

export { http, createHttp, apiPrefix }
