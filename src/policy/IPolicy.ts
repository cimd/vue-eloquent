import Action from '../enums/Action'

export type Permissions = {
  create?: boolean,
  read?: boolean,
  update?: boolean,
  delete?: boolean
}

export declare class Policy {
  /**
   * Create a new Policy instance.
   *
   * @private
   * @params { IPermissions } permissions: CRUD
   */
  permissions: Permissions
  action: Action

  constructor(args?: Permissions)
  /**
   * Sets the user permissions
   *
   * @param { Permissions } args
   */
  set(args: Permissions): void

  /**
   * Returns true if the user can perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  can(action: Action): boolean

  /**
   * Returns true if the user cannot perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  cannot(action: Action): boolean

  /**
   * Returns true if the model is in read-only mode
   *
   * @deprecated Use isReading() instead
   * @returns { boolean }
   */
  isReadOnly(): boolean

  /**
   * Puts the model in edit mode if the user has permission
   * @deprecated Use updating() instead
   * @returns { boolean }
   */
  edit(): boolean

  /**
   * Puts the model in create mode if the user has permission
   *
   * @returns { boolean }
   */
  creating(): boolean
  /**
   * Puts the model in read mode if the user has permission
   *
   * @returns { boolean }
   */
  reading(): boolean
  /**
   * Puts the model in update mode if the user has permission
   *
   * @returns { boolean }
   */
  updating(): boolean

  /**
   * Puts the model in delete mode if the user has permission
   *
   * @returns { boolean }
   */
  deleting(): boolean

  /**
   * Returns true if the model is in read state
   */
  isReading(): boolean

  /**
   * Returns true if the model is in update state
   */
  isUpdating(): boolean

  /**
   * Returns true if the model is in delete state
   */
  isDeleting(): boolean

  /**
   * Returns true if the model is in create state
   */
  isCreating(): boolean
}
