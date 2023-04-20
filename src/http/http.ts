let http: any
let baseApi: string = '/api/'
function createHttp(config: { httpClient: any, baseApi?: string }): void
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
