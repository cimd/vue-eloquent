import EloquentError from '@/EloquentError'
import type { IAxiosError } from '@/api/IAxiosError'

export default class ApiError extends EloquentError {
  override name = 'ApiError'
  declare error: IAxiosError

  constructor(message: string, err: unknown) {
    super(message, err)
  }
}
