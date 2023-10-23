import Action from '../enums/Action'

export type Permissions = {
  create?: boolean,
  read?: boolean,
  update?: boolean,
  delete?: boolean
}

export interface Policy {
  /**
   * Create a new Policy instance.
   *
   * @private
   * @params { IPermissions } permissions: CRUD
   */
  permissions: Permissions
  action: Action

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
   * @returns { boolean }
   */
  isReadOnly(): boolean

  /**
   * Puts the model in edit mode if the user has permission
   *
   * @returns { boolean }
   */
  edit(): boolean

  creating(): boolean
  reading(): boolean
  updating(): boolean
  deleting(): boolean
}
