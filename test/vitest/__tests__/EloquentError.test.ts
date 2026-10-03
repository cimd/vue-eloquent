import { describe, expect, it } from 'vitest'
import { http, HttpResponse } from 'msw'
import { server } from 'test/mocks/server'
import PostApi from '../../../examples/PostApi'
import PostError from '../../../examples/PostError'
import { ApiError, CollectionError, EloquentError, ModelError } from '@/index'

describe('eloquent error', () => {
  it('wraps an error and keeps it', () => {
    const original = new Error('boom')
    const error = new EloquentError('Label', original)

    expect(error.message).toBe('Label ||| boom')
    expect(error.error).toBe(original)
    expect(error.cause).toBe(original)
    expect(error.name).toBe('EloquentError')
    expect(error).toBeInstanceOf(Error)
  })

  it('does not crash when nothing, or something other than an Error, was thrown', () => {
    expect(new EloquentError('Label', undefined).message).toBe('Label ||| Unknown error')
    expect(new EloquentError('Label', null).message).toBe('Label ||| Unknown error')
    expect(new EloquentError('Label', 'a string').message).toBe('Label ||| a string')
    expect(new EloquentError('Label', 'a string').error).toBeInstanceOf(Error)
  })

  it('keeps objects with a message as is', () => {
    const original = { message: 'duck typed', response: { status: 500 } }
    const error = new ApiError('Get', original)

    expect(error.error).toBe(original)
    expect(error.error.response?.status).toBe(500)
  })

  it('subclasses have their own name and are instances of the base class', () => {
    for (const [Class, name] of [
      [ApiError, 'ApiError'],
      [ModelError, 'ModelError'],
      [CollectionError, 'CollectionError'],
    ] as const) {
      const error = new Class('Label', new Error('boom'))

      expect(error.name).toBe(name)
      expect(error).toBeInstanceOf(Class)
      expect(error).toBeInstanceOf(EloquentError)
      expect(String(error)).toBe(`${name}: Label ||| boom`)
    }
  })

  it('api error has no response on network errors', async () => {
    server.use(http.get('http://localhost:8000/api/posts', () => HttpResponse.error()))

    const error = await PostApi.get().catch((e) => e)

    expect(error).toBeInstanceOf(ApiError)
    expect(error.error.response).toBeUndefined()
  })

  it('save does not wrap model errors again', async () => {
    const post = new PostError()
    post.model.title = 'test'

    const error = await post.save().catch((e) => e)

    expect(error).toBeInstanceOf(ModelError)
    expect(error.message).toMatch(/^Create \|\|\| Store \|\|\| /)
    expect(error.error).toBeInstanceOf(ApiError)
    expect(error.error.error.response.status).toBe(404)
  })

  it('save on existing model does not wrap model errors again', async () => {
    const post = new PostError({ id: 111, title: 'test' } as any)

    const error = await post.save().catch((e) => e)

    expect(error).toBeInstanceOf(ModelError)
    expect(error.message).toMatch(/^Update \|\|\| Update \|\|\| /)
    expect(error.error).toBeInstanceOf(ApiError)
  })

  it('relationship errors are labelled by the request', async () => {
    const labels: Record<string, () => Promise<unknown>> = {
      Get: () => PostApi.hasMany('comments', 999).get(),
      Show: () => PostApi.hasMany('comments', 999).show({ id: 1 }),
      Store: () => PostApi.hasMany('comments', 999).store({}),
      Update: () => PostApi.hasMany('comments', 999).update({ id: 1 }),
      Destroy: () => PostApi.hasMany('comments', 999).delete({ id: 1 }),
    }
    server.use(
      http.all('http://localhost:8000/api/posts/999/comments*', () =>
        HttpResponse.json({ message: 'Nope' }, { status: 500 }),
      ),
    )

    for (const [label, request] of Object.entries(labels)) {
      await expect(request()).rejects.toThrowError(`${label} |||`)
    }
  })
})
