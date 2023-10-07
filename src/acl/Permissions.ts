import { reactive, ref } from 'vue'
import Action from '../enums/Action'

export type IPermissions = {
  create?: boolean,
  read?: boolean,
  update?: boolean,
  delete?: boolean
}

export default class Permissions {
  /**
   * Create a new Permissions instance.
   *
   * @private
   * @params { IPermissions } permissions: CRUD
   */
  private permissions = reactive({
    create: false,
    read: false,
    update: false,
    delete: false
  } as IPermissions)
  /**
   * Action being performed on the model (CRUD): CREATE, READ, UPDATE, DELETE
   * @param { Ref(Action) } action
   */
  private _action = ref(Action.CREATE)
  constructor(args?: IPermissions) {
    if (args) this.set(args)
  }
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
   * @param { IPermissions } args
   */
  set(args: IPermissions)
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
   * Returns true if the model is in read-only mode
   *
   * @returns { boolean }
   */
  isReadOnly(): boolean
  {
    return this.permissions.update && (this._action.value === Action.READ)
  }

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
