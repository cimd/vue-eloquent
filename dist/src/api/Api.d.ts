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
    /**
     * Returns instance
     *
     * @async
     * @static
     * @return { this }
     */
    static instance(): this;
    static get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>>;
    /**
     * Requests a single model from the API
     *
     * @async
     * @static
     * @template T
     * @param { number } id - Model ID
     * @return { Promise<any> } The data from the API
     */
    static show<T>(id: number): Promise<ApiResponse<T>>;
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
    static store<T>(payload: Partial<T>): Promise<ApiResponse<T>>;
    /**
     * hasOne relationship methods
     *
     * @param { string } childResource - Child resource string to be passed on the endpoint
     * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
     * @return { Promise<{get, show, create, update, delete}> } Collection of Models
     */
    static hasOne(childResource: string, parentId: number): {
        get(payload: any): Promise<any[]>;
        show(payload: {
            id: number;
        }): Promise<ApiResponse<any>>;
        store(payload: any): Promise<ApiResponse<any>>;
        update(payload: any): Promise<ApiResponse<any>>;
        delete(payload: any): Promise<unknown>;
    };
    /**
     * hasMany relationship methods
     *
     * @param { string } childResource - Child resource string to be passed on the endpoint
     * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
     * @return { Promise<{get, show, create, update, delete}> } Collection of Models
     */
    static hasMany(childResource: string, parentId: number): {
        get(payload: any): Promise<any[]>;
        show(payload: {
            id: number;
        }): Promise<ApiResponse<any>>;
        store(payload: any): Promise<ApiResponse<any>>;
        update(payload: any): Promise<ApiResponse<any>>;
        delete(payload: any): Promise<unknown>;
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
     * Sends the request to the API
     *
     * @async
     * @static
     * @template T
     * @param { Partial<T> } payload - DEPRECATED. Use the where method instead
     * @return { ApiResponse<T[]> } The data from the API
     */
    get<T>(payload?: Partial<T>): Promise<ApiResponse<T[]>>;
    protected batchStoringError?(err?: any): void;
    protected batchUpdatingError?(err?: any): void;
    protected batchDestroyingError?(err?: any): void;
    protected fetchingLogsError(err?: any): void;
    /**
     * Transforms the response from the msw into a format that is expected
     *
     * @param { string } response Api response
     * @return { any } Parsed response
     */
    protected transformResponse(response: string): any;
    /**
     * Fetching runs before get method
     * @param { any } payload Payload
     */
    protected fetching(payload?: any): void;
    protected fetchingError(err?: any): void;
    /**
     * Fetched runs after get method
     * @param { any } payload Payload
     */
    protected fetched(payload?: any): void;
    /**
     * Retrieving runs before show method
     * @param { any } payload Payload
     */
    protected retrieving(payload?: any): void;
    protected retrievingError(err?: any): void;
    /**
     * Retrieved runs after show method
     * @param { any } payload Payload
     */
    protected retrieved(payload?: any): void;
    protected storing(payload?: any): void;
    protected storingError(err?: any): void;
    protected stored(payload?: any): void;
    protected updating(payload?: any): void;
    protected updatingError(err?: any): void;
    protected updated(payload?: any): void;
    protected destroying(payload?: any): void;
    protected destroyingError(err?: any): void;
    protected destroyed(payload?: any): void;
}
