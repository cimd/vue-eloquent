import { ModelState } from '../model/IModelState';
import { default as ApiQuery } from '../api/ApiQuery';
import { default as Api } from '../api/Api';
export default abstract class Collection extends ApiQuery {
    /**
     * Collection data source
     */
    data: any[];
    /**
     * Added for devtools support
     */
    uuid: string;
    /**
     * Loading, success and error messages from API requests
     */
    state: ModelState;
    /**
     * API class related to the model
     */
    api: Api;
    protected isBroadcasting: boolean;
    /**
     * Broadcast channel name
     */
    protected channel?: string;
    protected constructor();
    /**
     * Creates instance of the model from API
     *
     * @template T
     * @param { any? } filter - DEPRECATED Use where method instead
     * @return { Promise<T[]> } The data from the API
     */
    get<T>(filter?: any): Promise<T[]>;
    /**
     * Joins the broadcast channel
     * @param { string } channel Will join the default channel if null
     */
    joinChannel(channel?: string): void;
    /**
     * Leaves the broadcast channel
     */
    leaveChannel(): void;
    /**
     * Creates an instance of the collection from a given array
     *
     * @template T
     * @param { T[]? } collection - Use the where method instead
     */
    protected factory<T>(collection: T[]): void;
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
    protected fetched(payload: any): void;
    /**
     * Broadcast created event
     * @param { any } e Broadcast event
     */
    protected abstract broadcastCreated(e: any): void;
    /**
     * Broadcast updated event
     * @param { any } e Broadcast event
     */
    protected abstract broadcastUpdated(e: any): void;
    /**
     * Broadcast deleted event
     * @param { any } e Broadcast event
     */
    protected abstract broadcastDeleted(e: any): void;
    /**
     * API starts loading state
     */
    protected setStateLoading(): void;
    /**
     * API returned success response
     */
    protected setStateSuccess(): void;
    /**
     * API return error response
     */
    protected setStateError(): void;
    protected updateDataSource<T>(data: T[]): void;
}
