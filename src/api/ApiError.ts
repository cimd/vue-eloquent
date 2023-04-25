import EloquentError from '../EloquentError'
import type { IAxiosError } from '../index'

export default class ApiError extends EloquentError {
  name: string
  constructor(message: string, err: IAxiosError) {
    super(message, err)
    this.name = this.constructor.name
    // console.log(this.name)

    // console.log('ApiError Message:', message)
    // console.error('ApiError Error:', err)
  }
}
