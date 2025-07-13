import { default as Action } from '../enums/Action';
import { default as Actioned } from '../enums/Actioned';
import { default as Validator } from './Validator';
import { ModelState } from './IModelState';
import { ApiResponse } from '../api/IApiResponse';
import { default as Api } from '../api/Api';
import { ModelParams } from './IModelParams';
export default abstract class Model<T extends ModelParams> extends Validator {
    /**
     * Model values
     * Should be a reactive object
     */
    model: T;
    /**
     * Model relationships
     */
    relations: undefined | any[];
    /**
     * Loading, success and error messages from API requests
     */
    state: ModelState;
    /**
     * Added for devtools support
     */
    uuid: string;
    /**
     * Laravel Precognition's error messages
     */
    errors: any[];
    isValid: boolean;
    isInvalid: boolean;
    /**
     * API class related to the model
     */
    api: typeof Api;
    /**
     * To check if model is dirty / has been modified
     */
    protected originalModel: T;
    /**
     * Default values for model paramters
     */
    protected parameters: undefined | Partial<T>;
    protected protected: string[];
    /**
     * To return the model to fresh/initial state
     */
    private defaultModel;
    /**
     * @constructor
     */
    protected constructor();
    /**
     * Creates instance of the model from API
     *
     * @async
     * @static
     * @param { Number } id - Model ID
     * @return { Promise<this> } An instance of the model
     */
    static find<T>(id: number): Promise<Model<T>>;
    protected static instance<U extends ModelParams>(): Model<U>;
    /**
     * Creates instance of the model from API
     *
     * @async
     * @param { Number } id - Model ID
     */
    find<T>(id: number): Promise<void>;
    /**
     * Saves the model to database
     * If model has no id, it will be created (POST)
     * Otherwise it will be updated (PATCH)
     *
     * @async
     * @static
     * @param { Action } action - Action from enum
     * @return { Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }> } Actioned enum and Model
     */
    save(action?: Action): Promise<{
        model: T;
        actioned: Actioned.CREATED | Actioned.UPDATED;
    }>;
    /**
     * Create a new model on the API
     *
     * @async
     * @template T
     * @return { Promise<T> } Model
     */
    create<T>(): Promise<T>;
    /**
     * Updates the model
     *
     * @async
     * @template T
     * @return { Promise<T> } Model
     */
    update<T>(): Promise<T>;
    /**
     * Deletes the model
     *
     * @async
     * @template T
     * @return { Promise<T> } Model
     */
    delete(): Promise<T>;
    /**
     * Get model change logs
     * @async
     */
    logs(): Promise<ApiResponse<any[]>>;
    /**
     * Creates new instance of the model with default values
     *
     * @return { void }
     */
    fresh(): void;
    /**
     * Refresh model from API
     *
     * @async
     * @param { number? } id - Model id
     * @return { Promise<void> }
     */
    refresh(id?: number): Promise<void>;
    getOriginal(): T;
    /**
     * Loads the model relationships
     *
     * @param { String | String[] } args - Relationships to load
     * @return { Promise<any> } Model or Models
     */
    load(args?: string | string[]): Promise<any>;
    /**
     * HasOne relationship
     *
     * @async
     * @param { any } api Api class to the relationship
     * @param { string } primaryKey of the relationship
     * @return { Promise<any> } Model
     */
    hasOne(api: Api, primaryKey: number): Promise<any>;
    /**
     * HasMany relationship
     *
     * @async
     * @param { Api } api Api class to the relationship
     * @param { number } primaryKey of the relationship
     * @return { Promise<{get, show, create, update, delete}> } Collection of Models
     */
    hasMany(api: Api, primaryKey: number): any[];
    setRulesFromServer(rules: any): void;
    protected getDefault(param: string): any;
    /**
     * Creates a new instance of the model based on existing Object
     *
     * @param { any } model Model object
     * @protected
     */
    protected factory(model?: T): void;
    /**
     * Updates the model property with new data
     *
     * @protected
     * @param { any } data - new model data
     * @return { VoidFunction }
     */
    protected setModel(data: T): void;
    /**
     * Creates a copy of the original model instance for refreshing if needed
     *
     * @return { VoidFunction }
     */
    protected setOriginal(): void;
    protected retrieving(): void;
    /**
     * Retrieved runs after show method
     */
    protected retrieved(payload: any): void;
    protected retrievingError(err?: any): void;
    /**
     * Runs before model is created
     */
    protected creating(): void;
    /**
     * Runs after model is created
     */
    protected created(payload: any): void;
    /**
     * Runs before model is updated
     */
    protected updating(): void;
    /**
     * Runs after model is updated
     */
    protected updated(payload: any): void;
    /**
     * Runs before model is saved
     */
    protected saving(): void;
    /**
     * Runs after model is saved
     */
    protected saved(payload: any): void;
    /**
     * Runs before model is deleted
     */
    protected deleting(): void;
    /**
     * Runs after model is created
     */
    protected deleted(payload: any): void;
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
}
