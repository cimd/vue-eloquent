import { describe, expect, it } from 'vitest'
import ErrorApi from '../../mocks/ErrorApi'
import { ApiError } from '../../../src/index'

describe('api error', () => {
  it('get method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.get()
      console.log(e)
    }
    catch (err: any) {
      error = err
    }
    expect(<ApiError>error.error.response.status).toBe(422)
  })
})
