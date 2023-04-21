let http: any
let apiPrefix: string = 'api'
function createHttp(config: { httpClient: any, apiPrefix?: string }): void
{
  // console.log('createHttp')
  http = config.httpClient

  if (config.apiPrefix) apiPrefix = config.apiPrefix
  // console.log('apiPrefix', apiPrefix)
}

export {
  http,
  createHttp,
  apiPrefix
}
