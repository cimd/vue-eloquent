import EloquentError from '@/EloquentError'
import type { IEloquentError } from '@/IEloquentError'
import type { IAxiosError } from './IAxiosError'

export default class ApiError extends EloquentError {
  name: string
  constructor(message: string, err: IEloquentError | IAxiosError) {
    super(message, err)
    this.name = this.constructor.name
  }
}
