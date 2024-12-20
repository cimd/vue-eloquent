import { describe, expect, it } from 'vitest'
import ErrorApi from '../../mocks/ErrorApi'
import type { ApiError } from '../../../src/index'

describe('api error', () => {
  it('get method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.get()
      console.log(e)
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(422)
  })
  it('show method', async () => {
    let error: ApiError | undefined
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      await ErrorApi.show()
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(422)
  })
  it('update method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.update({ id: 111 })
      console.log(e)
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
  it('store method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.store({ id: 111 })
      console.log(e)
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
  it('destroy method on object', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.destroy({ id: 111 })
      console.log(e)
    } catch (err: any) {
      error = err
      console.log(error)
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
  it('destroy method on number', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.destroy(111)
      console.log(e)
    } catch (err: any) {
      error = err
      console.log(error)
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
  it('batchStore method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.batchStore([{ id: 111 }])
      console.log(e)
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
  it('batchUpdate method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.batchUpdate([{ id: 111 }])
      console.log(e)
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
  it('batchDestroy method', async () => {
    let error: ApiError | undefined
    try {
      const e = await ErrorApi.batchDestroy([{ id: 111 }])
      console.log(e)
    } catch (err: any) {
      error = err
    }
    expect(error?.error.response.status as ApiError).toBe(404)
  })
})
