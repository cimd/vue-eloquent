import { reactive, ref } from 'vue'
import Action from '../enums/Action'
import type { Permissions } from './IPolicy'

export default class Policy {
  /**
   * Create a new Policy instance.
   *
   * @private
   * @params { Permissions } permissions: CRUD
   */
  private permissions: Permissions = reactive({
    create: true,
    read: true,
    update: true,
    delete: true
  })

  constructor(args?: Permissions) {
    if (args) this.set(args)
  }

  /**
   * Action being performed on the model (CRUD): CREATE, READ, UPDATE, DELETE
   * @param { Ref(Action) } action
   */
  private _action = ref(Action.CREATE)

  get action(): Action
  {
    return this._action.value
  }

  set action(mode: Action)
  {
    this._action.value = mode
  }

  /**
   * Sets the user permissions
   *
   * @param { Permissions } args
   */
  set(args: Permissions)
  {
    (typeof args.create !== 'undefined') ? this.permissions.create = args.create : this.permissions.create = false;
    (typeof args.read !== 'undefined') ? this.permissions.read = args.read : this.permissions.read = false;
    (typeof args.update!== 'undefined') ? this.permissions.update = args.update : this.permissions.update = false;
    (typeof args.delete!== 'undefined') ? this.permissions.delete = args.delete : this.permissions.delete = false
  }

  /**
   * Returns true if the user can perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  can(action: Action): boolean
  {
    return this.permissions[ action ]
  }

  /**
   * Returns true if the user cannot perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  cannot(action: Action): boolean
  {
    return !this.permissions[ action ]
  }

  /**
   * Returns true if the model is in read-only mode
   * @deprecated Use isReading() instead
   * @returns { boolean }
   */
  isReadOnly(): boolean
  {
    return this.permissions.update && (this._action.value === Action.READ)
  }

  /**
   * Puts the model in edit mode if the user has permission
   * @deprecated Use updating() instead
   * @returns { boolean }
   */
  edit(): boolean
  {
    return this.updating()
  }


  /**
   * Sets the model and Creating mode
   *
   * @returns { boolean }
   */
  creating(): boolean
  {
    if (!this.permissions.create) return false

    this._action.value = Action.CREATE
    return true
  }

  /**
   * Sets the model and Reading mode
   *
   * @returns { boolean }
   */
  reading(): boolean
  {
    if (!this.permissions.read) return false

    this._action.value = Action.READ
    return true
  }

  /**
   * Sets the model and Updating mode
   *
   * @returns { boolean }
   */
  updating(): boolean
  {
    if (!this.permissions.update) return false

    this._action.value = Action.UPDATE
    return true
  }

  /**
   * Sets the model and Deleting mode
   *
   * @returns { boolean }
   */
  deleting(): boolean
  {
    if (!this.permissions.delete) return false

    this._action.value = Action.DELETE
    return true
  }

  /**
   * Returns true if the model is in reading mode
   *
   * @returns { boolean }
   */
  isReading(): boolean
  {
    return this._action.value === Action.READ
  }
  /**
   * Returns true if the model is in updating mode
   *
   * @returns { boolean }
   */
  isUpdating(): boolean
  {
    return this._action.value === Action.UPDATE
  }
  /**
   * Returns true if the model is in deleting mode
   *
   * @returns { boolean }
   */
  isDeleting(): boolean
  {
    return this._action.value === Action.DELETE
  }
  /**
   * Returns true if the model is in creating mode
   *
   * @returns { boolean }
   */
  isCreating(): boolean
  {
    return this._action.value === Action.CREATE
  }
}
