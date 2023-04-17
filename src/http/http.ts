import AxiosInstance from 'axios'

let http = AxiosInstance
function createHttp(httpClient: typeof AxiosInstance): void
{
  http = httpClient
}

export {
  http,
  createHttp
}
