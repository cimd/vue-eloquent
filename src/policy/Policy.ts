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
    create: false,
    read: false,
    update: false,
    delete: false
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
    // this.crud.isReadOnly = (mode === Action.READ)
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
    // console.log(this.permissions)
  }

  /**
   * Returns true if the user can perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  can(action: Action): boolean
  {
    // console.log(action)
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
    // console.log(action)
    return !this.permissions[ action ]
  }

  /**
   * Returns true if the model is in read-only mode
   *
   * @returns { boolean }
   */
  isReadOnly(): boolean
  {
    return this.permissions.update && (this._action.value === Action.READ)
  }

  /**
   * Puts the model in edit mode if the user has permission
   *
   * @returns { boolean }
   */
  edit(): boolean
  {
    if (!this.permissions.update) return false

    this._action.value = Action.UPDATE
    return true
  }

  creating(): boolean
  {
    if (!this.permissions.create) return false

    this._action.value = Action.CREATE
    return true
  }
  reading(): boolean
  {
    if (!this.permissions.read) return false

    this._action.value = Action.READ
    return true
  }
  updating(): boolean
  {
    if (!this.permissions.update) return false

    this._action.value = Action.UPDATE
    return true
  }
  deleting(): boolean
  {
    if (!this.permissions.delete) return false

    this._action.value = Action.DELETE
    return true
  }
}
