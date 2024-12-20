/**
 * Enum for CRUD actions
 * @readonly
 * @enum { string }
 */
enum Action {
  CREATE = 'create',
  /**
   * @deprecated use Action.READ instead
   */
  VIEW = 'view',
  READ = 'read',
  /**
   * @deprecated use Action.UPDATE instead
   */
  EDIT = 'edit',
  UPDATE = 'update',
  DELETE = 'delete'
}

export default Action
