import { AxiosInstance } from 'axios';
declare let http: AxiosInstance;
declare let apiPrefix: string;
/**
 * Create an instance of the HTTP service.
 *
 * @param { Object } config The configuration
 * @param { AxiosInstance } [config.httpClient] AxiosInstance
 * @param { string } [config.baseURL ] The base API URL
 * @param { string } [config.apiPrefix='/api'] The API prefix
 */
declare function createHttp(config: {
    httpClient?: AxiosInstance;
    baseURL?: string;
    apiPrefix?: string;
    bearerToken?: string | null;
}): AxiosInstance;
export { http, createHttp, apiPrefix };
