import EloquentError from '../EloquentError'
import { IEloquentError } from '../IEloquentError'
import { IAxiosError } from '@/api/IAxiosError'

export default class ApiError extends EloquentError {
  name: string
  constructor(message: string, err: IEloquentError|IAxiosError) {
    super(message, err)
    this.name = this.constructor.name
  }
}
