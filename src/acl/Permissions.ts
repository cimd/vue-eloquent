import { reactive, ref } from 'vue'
import Action from '../enums/Action'

export type IPermissions = {
  create?: boolean,
  read?: boolean,
  update?: boolean,
  delete?: boolean
}

export default class Permissions {
  private permissions = reactive({
    create: false,
    read: false,
    update: false,
    delete: false
  } as IPermissions)

  constructor(args?: IPermissions) {
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

  set(args: IPermissions)
  {
    (typeof args.create !== 'undefined') ? this.permissions.create = args.create : this.permissions.create = false;
    (typeof args.read !== 'undefined') ? this.permissions.read = args.read : this.permissions.read = false;
    (typeof args.update!== 'undefined') ? this.permissions.update = args.update : this.permissions.update = false;
    (typeof args.delete!== 'undefined') ? this.permissions.delete = args.delete : this.permissions.delete = false
    // console.log(this.permissions)
  }

  can(action: Action): boolean
  {
    // console.log(action)
    return this.permissions[ action ]
  }

  isReadOnly(): boolean
  {
    return this.permissions.update && (this._action.value === Action.READ)
  }

  edit()
  {
    this._action.value = Action.EDIT
  }

  creating()
  {
    this._action.value = Action.CREATE
  }
  reading()
  {
    this._action.value = Action.READ
  }
  updating()
  {
    this._action.value = Action.UPDATE
  }
  deleting()
  {
    this._action.value = Action.DELETE
  }
}
