import EloquentError from '@/EloquentError'
import type { IAxiosError } from '@/api/IAxiosError'

export default class ApiError extends EloquentError {
  override name: string
  constructor(message: string, public override error: IAxiosError) {
    super(message, error)
    this.name = this.constructor.name
  }
}
