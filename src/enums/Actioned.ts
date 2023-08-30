/**
 * Enum for responses to CRUD actions
 * @readonly
 * @enum { string }
 */
enum Actioned {
    CREATED = 'created',
    READ = 'read',
    UPDATED = 'updated',
    DELETED = 'deleted'
}

export default Actioned
