import AxiosInstance from 'axios'

let http
function createHttp(httpClient: AxiosInstance): void
{
    http = httpClient
}

export {
    http,
    createHttp
}
