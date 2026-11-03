import { ModelState } from '../model/IModelState';
import { default as ApiQuery } from '../api/ApiQuery';
import { default as Api } from '../api/Api';
import { InstanceOf } from '../helpers/InstanceOf';
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
    api: typeof Api;
    protected isBroadcasting: boolean;
    /**
     * Broadcast channel name
     */
    protected channel?: string;
    protected constructor();
    /**
     * The instance of the collection that lives for the whole session, created the first time it is asked for
     *
     * Because it outlives the components that use it, a page opened again finds the rows (and `state`) as they were
     * left while it fetches fresh ones. It is created without arguments. The query builder state (`where`, `sort`...)
     * stays too, so set it again on every visit. A channel joined with `joinChannel()` stays joined, as it is not
     * tied to a component: call `leaveChannel()` when the page is left, or let `forgetState()` and `flushState()`
     * do it.
     *
     * @static
     * @param { string } key - To keep more than one, for instance per account. Defaults to the only one
     * @return { InstanceOf<S> } The same instance on every call for a class and key
     */
    static getState<S extends typeof Collection>(this: S, key?: string): InstanceOf<S>;
    /**
     * Clears the state of the collection, leaving its channel, so the next `getState()` creates a new instance
     *
     * @static
     * @param { string? } key - The one to clear. Without it, all the states of this class
     */
    static forgetState<S extends typeof Collection>(this: S, key?: string): void;
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
    factory<T>(collection: T[]): void;
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
    protected fetched(_payload: any): void;
    /**
     * Broadcast created event
     * @param { any } _e Broadcast event
     */
    protected broadcastCreated(_e: any): void;
    /**
     * Broadcast updated event
     * @param { any } _e Broadcast event
     */
    protected broadcastUpdated(_e: any): void;
    /**
     * Broadcast deleted event
     * @param { any } _e Broadcast event
     */
    protected broadcastDeleted(_e: any): void;
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
    updateDataSource<T>(data: T[]): void;
}
