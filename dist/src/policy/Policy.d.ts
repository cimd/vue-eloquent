import { default as Action } from '../enums/Action';
import { Permissions } from './IPermissions';
export default class Policy {
    /**
     * Create a new Policy instance.
     *
     * @private
     * @params { Permissions } permissions: CRUD
     */
    private permissions;
    constructor(args?: Permissions);
    /**
     * Action being performed on the model (CRUD): CREATE, READ, UPDATE, DELETE
     * @param { Ref(Action) } action
     */
    private _action;
    get action(): Action;
    set action(mode: Action);
    /**
     * Sets the user permissions
     *
     * @param { Permissions } args
     */
    set(args: Permissions): void;
    /**
     * Returns true if the user can perform the given action on the model
     *
     * @param { Action } action
     * @returns { boolean }
     */
    can(action: Action): boolean;
    /**
     * Returns true if the user cannot perform the given action on the model
     *
     * @param { Action } action
     * @returns { boolean }
     */
    cannot(action: Action): boolean;
    /**
     * Returns true if the model is in read-only mode
     * @deprecated Use isReading() instead
     * @returns { boolean }
     */
    isReadOnly(): boolean;
    /**
     * Puts the model in edit mode if the user has permission
     * @deprecated Use updating() instead
     * @returns { boolean }
     */
    edit(): boolean;
    /**
     * Sets the model and Creating mode
     *
     * @returns { boolean }
     */
    creating(): boolean;
    /**
     * Sets the model and Reading mode
     *
     * @returns { boolean }
     */
    reading(): boolean;
    /**
     * Sets the model and Updating mode
     *
     * @returns { boolean }
     */
    updating(): boolean;
    /**
     * Sets the model and Deleting mode
     *
     * @returns { boolean }
     */
    deleting(): boolean;
    /**
     * Returns true if the model is in reading mode
     *
     * @returns { boolean }
     */
    isReading(): boolean;
    /**
     * Returns true if the model is in updating mode
     *
     * @returns { boolean }
     */
    isUpdating(): boolean;
    /**
     * Returns true if the model is in deleting mode
     *
     * @returns { boolean }
     */
    isDeleting(): boolean;
    /**
     * Returns true if the model is in creating mode
     *
     * @returns { boolean }
     */
    isCreating(): boolean;
}
