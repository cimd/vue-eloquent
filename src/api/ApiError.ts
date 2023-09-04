import EloquentError from '../EloquentError'
import { IEloquentError } from '../IEloquentError'

export default class ApiError extends EloquentError {
  name: string
  constructor(message: string, err: IEloquentError) {
    super(message, err)
    this.name = this.constructor.name
  }
}
