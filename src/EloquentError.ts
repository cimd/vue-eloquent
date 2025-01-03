export default class EloquentError extends Error {
  declare message: string
  name = ''
  error: Error
  declare stack: any
  constructor(message: string, err: Error) {
    super(message)
    this.message = message + ' ||| ' + err.message
    this.error = err
    // console.log('EloquentError Message: ', message)
    // console.error('EloquentError Error: ', err)
    // console.log('Stack: ', err.stack)
    // this.name = this.constructor.name
    this.stack = err.stack
  }
}
