import EloquentError from '../EloquentError'

export default class ModelError extends EloquentError {
  name: string
  constructor(message: string, err: Error) {
    super(message, err)
    this.name = this.constructor.name
  }
}
