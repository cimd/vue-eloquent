import { IError } from './IEloquentError'

export default class EloquentError extends Error implements IError{
  message: string
  name: string = ''
  error: Error
  // stack: any
  constructor(message: string, err: Error) {
    super(message)
    this.message = message
    this.error = err
    // console.log('EloquentError Message: ', message)
    // console.error('EloquentError Error: ', err)
    // console.log('Stack: ', err.stack)
    // this.name = this.constructor.name
    // this.stack = <call stack>
  }
}
