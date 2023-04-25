import { describe, expect, it } from 'vitest'
import ErrorApi from '../../mocks/ErrorApi'
import { ApiError } from '../../../src/index'

describe('api error', () => {
  it.fails('get method', async () => {
    let error: ApiError | undefined
    try {
      await ErrorApi.get()
    }
    catch (err) {
      error = err
    }
    expect(<ApiError>error.error.response.status).toBe(422)
  })
})
