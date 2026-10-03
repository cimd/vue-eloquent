import type { IEloquentError } from '@/IEloquentError'

/**
 * Makes sure we always have an Error to wrap, even if something other than an Error was thrown or rejected.
 * Objects with a message (e.g. an Axios error from a custom http client) are kept as is.
 */
const toError = (err: unknown): Error => {
  if (err instanceof Error) return err
  if (typeof err === 'object' && err !== null && 'message' in err) return err as Error

  return new Error(err === undefined || err === null ? 'Unknown error' : String(err))
}

export default class EloquentError extends Error implements IEloquentError {
  declare message: string
  override name = 'EloquentError'
  /**
   * The original error
   */
  error: Error

  constructor(message: string, err: unknown) {
    const original = toError(err)
    super(message + ' ||| ' + original.message, { cause: original })
    this.error = original
  }
}
