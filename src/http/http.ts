import { AxiosInstance } from 'axios'

let http: any
let apiPrefix: string = 'api'

/**
 * Create an instance of the HTTP service.
 *
 * @param { Object } config The configuration
 * @param { AxiosInstance } [config.httpClient] AxiosInstance
 * @param { string } [config.apiPrefix='/api'] The API prefix
 */
function createHttp(config: { httpClient: AxiosInstance, apiPrefix?: string }): void
{
  http = config.httpClient
  if (config.apiPrefix) apiPrefix = config.apiPrefix
}

export {
  http,
  createHttp,
  apiPrefix
}
