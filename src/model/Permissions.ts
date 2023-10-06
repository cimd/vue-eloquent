import { reactive } from 'vue'
import Action from '../enums/Action'

export default class Permissions {
  /**
   * Action being performed on the model (CRUD): CREATE, READ, UPDATE, DELETE
   * @param { Action } action
   */
  crud = reactive({
    action: Action.CREATE,
    isReadOnly: false
  })

  permissions = reactive({
    create: false,
    read: false,
    update: false,
    delete: false
  })

  /**
   * @constructor
   */
  constructor() {
  }

  can(action: Action): boolean
  {
    return this.permissions[ action ]
  }

  get action(): Action
  {
    return this.crud.action
  }
  set action(mode: Action)
  {
    this.crud.action = mode
    this.crud.isReadOnly = (mode === Action.READ)
  }
}
