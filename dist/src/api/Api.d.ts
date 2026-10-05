import { ApiResponse } from './IApiResponse';
import { default as ApiQuery } from './ApiQuery';
import { ModelParams } from '../model/IModelParams';
export default abstract class Api extends ApiQuery {
    /**
     * Resource name. Will be appended to the apiPrefix endpoint
     * @param { string } resource
     */
    protected resource: string;
    /**
     * Base API endpoint
     * @param { string } apiPrefix
     */
    protected apiPrefix: string;
    /**
     * API response parameters to be converted to Date
     * Accepts dot notation
     * @param { string[] } dates
     */
    protected dates: string[];
    protected constructor();
    static get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>>;
    /**
     * Requests the first record of the list from the API
     *
     * @async
     * @static
     * @template T
     * @return { Promise<ApiResponse<T | null>> } The first record, or null when the list is empty
     */
    static first<T>(): Promise<ApiResponse<T | null>>;
    /**
     * Requests a single model from the API
     *
     * @async
     * @static
     * @template T
     * @param { number } id - Model ID
     * @return { Promise<any> } The data from the API
     */
    static show<T>(id: number | string): Promise<ApiResponse<T>>;
    /**
     * Validate the update request
     *
     * @async
     * @static
     * @template T
     * @param { any } payload - Model
     * @return { Promise<any> } The data from the API
     */
    static updateValidationRules<T>(payload: any): Promise<ApiResponse<T>>;
    /**
     * Updates a single model to the API
     *
     * @async
     * @static
     * @template {T extends ModelParams}
     * @param { any } payload - Model
     * @return { Promise<any> } The data from the API
     */
    static update<T extends ModelParams>(payload: Partial<T>): Promise<ApiResponse<T>>;
    /**
     * Stores new model through the API
     *
     * @async
     * @static
     * @template T
     * @param { Partial<T> } payload - Model
     * @return { Promise<ApiResponse<T>> } The data from the API
     */
    static store<T>(payload: T | Partial<T>): Promise<ApiResponse<T>>;
    /**
     * hasOne relationship methods
     *
     * @param { string } childResource - Child resource string to be passed on the endpoint
     * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
     * @return { Promise<{get, show, create, update, delete}> } Collection of Models
     */
    static hasOne(childResource: string, parentId: number): {
        get(payload?: any): Promise<any[]>;
        show(payload: {
            id: number | string;
        }): Promise<ApiResponse<any>>;
        store(payload: any): Promise<ApiResponse<any>>;
        update(payload: any): Promise<ApiResponse<any>>;
        delete(payload: any): Promise<ApiResponse<any>>;
    };
    /**
     * hasMany relationship methods
     *
     * @param { string } childResource - Child resource string to be passed on the endpoint
     * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
     * @return { Promise<{get, show, create, update, delete}> } Collection of Models
     */
    static hasMany(childResource: string, parentId: number): {
        get(payload?: any): Promise<any[]>;
        show(payload: {
            id: number | string;
        }): Promise<ApiResponse<any>>;
        store(payload: any): Promise<ApiResponse<any>>;
        update(payload: any): Promise<ApiResponse<any>>;
        delete(payload: any): Promise<ApiResponse<any>>;
    };
    /**
     * Deletes a single model through the API
     *
     * @deprecated
     * @async
     * @static
     * @param { any } payload - Model
     * @return { Promise<any> } The data from the API
     */
    static delete(payload: any): Promise<any>;
    /**
     * Destroys a single model through the API
     *
     * @async
     * @static
     * @template T
     * @param { Partial<T> | number } payload - Model or Model Id
     * @param { boolean } isModel - If it's a model, it will automatically push the model's id to the API
     * @return { Promise<ApiResponse<T> } The data from the API
     */
    static destroy<T extends ModelParams>(payload: Partial<T> | number, isModel?: boolean): Promise<ApiResponse<T>>;
    /**
     * Stores multiple models to the API
     *
     * @async
     * @static
     * @template T
     * @param { T[] } payload - Models. Will be wrapped in a data ({data: payload}) property before submitting to the API
     * @return { Promise<ApiResponse<T[]>> } The data from the API
     */
    static batchStore<T>(payload: T[]): Promise<ApiResponse<T[]>>;
    /**
     * Updates multiple models to the API
     *
     * @async
     * @static
     * @template T
     * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
     * @return { Promise<ApiResponse<T[]>> } The data from the API
     */
    static batchUpdate<T>(payload: T[]): Promise<ApiResponse<T[]>>;
    /**
     * @deprecated Use batchDestroy instead
     * Batch destroys multiple records
     * @param { string } payload Api response
     */
    static batchDelete(payload: any[]): Promise<any>;
    /**
     * Destroys multiple models to the API
     *
     * @async
     * @static
     * @template T
     * @param { T[] } payload - Models. Will be wrapped in a data property before submitting to the API
     * @return { Promise<any> } The data from the API
     */
    static batchDestroy<T>(payload: T[]): Promise<ApiResponse<T[]>>;
    /**
     * Fetches model logs from API
     *
     * @async
     * @static
     * @param { any | number } payload Payload
     * @return { Promise<any> } The data from the API
     */
    static logs(payload: {
        id: number;
    } | number): Promise<any[]>;
    /**
     * Returns the resource
     *
     * @return { string } resource
     */
    static getResource(): string;
    /**
     * Builds the full URL of an endpoint under the resource: `{apiPrefix}/{resource}/{...path}`.
     * Meant for `send()`, which uses its path as given.
     *
     * @static
     * @param { string[] } path - Segments appended after the resource
     * @return { string } The URL
     */
    static url(...path: string[]): string;
    /**
     * Sends a request to a custom endpoint, for routes that don't fit the REST methods above,
     * e.g. `POST api/execution/accounts/{id}/proposals`. `url()` builds that kind of path.
     *
     * The path is the full URL and is used as given: neither the apiPrefix nor the resource is
     * added. It is relative to the http client's baseURL, unless absolute.
     *
     * Resolves with the response body as is: unlike the REST methods, dates are not converted and
     * the lifecycle hooks (fetching, stored, ...) are not called.
     *
     * @async
     * @static
     * @template T
     * @param { 'get' | 'post' | 'put' | 'patch' | 'delete' } method - HTTP method
     * @param { string } path - Full URL of the endpoint
     * @param { object } [data] - Request body
     * @param { object } [params] - Query string parameters
     * @return { Promise<T> } The data from the API
     */
    static send<T = any>(method: 'get' | 'post' | 'put' | 'patch' | 'delete', path: string, data?: object, params?: object): Promise<T>;
    /**
     * Sends the request to the API
     *
     * @async
     * @static
     * @template T
     * @param { Partial<T> } payload - DEPRECATED. Use the where method instead
     * @return { ApiResponse<T[]> } The data from the API
     */
    get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>>;
    /**
     * Sends the request to the API and resolves with the first record
     *
     * @async
     * @template T
     * @return { Promise<ApiResponse<T | null>> } The first record, or null when the list is empty
     */
    first<T>(): Promise<ApiResponse<T | null>>;
    protected batchStoringError(_err?: any): void;
    protected batchUpdatingError(_err?: any): void;
    protected batchDestroyingError(_err?: any): void;
    protected fetchingLogsError(_err?: any): void;
    /**
     * Transforms the response from the msw into a format that is expected
     *
     * @param { string } response Api response
     * @return { any } Parsed response
     */
    protected transformResponse(response: string): any;
    /**
     * Fetching runs before get method
     * @param { any } _payload Payload
     */
    protected fetching(_payload?: any): void;
    protected fetchingError(_err?: any): void;
    /**
     * Fetched runs after get method
     * @param { any } _payload Payload
     */
    protected fetched(_payload?: any): void;
    /**
     * Retrieving runs before show method
     * @param { any } _payload Payload
     */
    protected retrieving(_payload?: any): void;
    protected retrievingError(_err?: any): void;
    /**
     * Retrieved runs after show method
     * @param { any } _payload Payload
     */
    protected retrieved(_payload?: any): void;
    protected storing(_payload?: any): void;
    protected storingError(_err?: any): void;
    protected stored(_payload?: any): void;
    protected updating(_payload?: any): void;
    protected updatingError(_err?: any): void;
    protected updated(_payload?: any): void;
    protected destroying(_payload?: any): void;
    protected destroyingError(_err?: any): void;
    protected destroyed(_payload?: any): void;
}
