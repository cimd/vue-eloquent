import AxiosInstance from 'axios'

let http: typeof AxiosInstance
function createHttp(httpClient: typeof AxiosInstance): void
{
    http = httpClient
}

export {
    http,
    createHttp
}
