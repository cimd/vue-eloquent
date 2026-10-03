import EloquentError from '@/EloquentError'

export default class ModelError extends EloquentError {
  override name = 'ModelError'
}
