import { describe, expect, it } from 'vitest'
import { http, HttpResponse } from 'msw'
import { server } from 'test/mocks/server'
import PostApi from '../../../examples/PostApi'
import type { IPost } from '../../../examples/PostInterface'
import type { IComment } from '../../../examples/CommentInterface.js'
import type { ApiResponse } from '@/api/IApiResponse.js'

describe('model api', () => {
  it('get method', async () => {
    const result = await PostApi.get<IPost>()

    expect(result.data.length).toBe(2)
  })

  it('get method-error', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = PostApi.get<IPost>(123)
    await expect(result).rejects.toThrowError('Get |||')
  })

  it('first method', async () => {
    const result = await PostApi.first<IPost>()

    expect(result.data).toHaveProperty('id', 1)
  })

  it('first method returns null on an empty list', async () => {
    server.use(
      http.get('http://localhost:8000/api/posts', () => HttpResponse.json({ data: [] }, { status: 200 }))
    )
    const result = await PostApi.first<IPost>()

    expect(result.data).toBeNull()
  })

  it('first method-error', async () => {
    server.use(http.get('http://localhost:8000/api/posts', () => HttpResponse.json({}, { status: 500 })))

    await expect(PostApi.first<IPost>()).rejects.toThrowError('Get |||')
  })

  it('first instance method keeps the query builder state', async () => {
    const result = await PostApi.where({ author_id: 1 }).first<IPost>()

    expect(result.data).toHaveProperty('id', 1)
  })

  it('show method', async () => {
    const result = await PostApi.show(1)

    expect(result.data).toHaveProperty('id', 1)
  })

  it('show method-error', async () => {
    const result = PostApi.show(11)

    await expect(result).rejects.toThrowError('Show |||')
  })

  it('update method', async () => {
    const result = await PostApi.update({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })
  it('update method-error', async () => {
    const result = PostApi.update({ id: 10, text: 'test' })

    await expect(result).rejects.toThrowError('Update |||')
  })

  it('store method', async () => {
    const result = await PostApi.store({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })

  it('destroy method', async () => {
    const result = await PostApi.destroy({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })
  it('destroy method-error', async () => {
    const result = PostApi.destroy({ id: 10, text: 'test' })

    await expect(result).rejects.toThrowError('Destroy |||')
  })

  it('deleted (deprecated) method', async () => {
    const result = await PostApi.delete({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })

  it('batchStore method', async () => {
    const posts = [{ text: 'test1' }, { text: 'test2' }]
    const result = await PostApi.batchStore(posts)

    expect(result.data.length).toEqual(2)
  })

  it('batchUpdate method', async () => {
    const posts = [
      { id: 1, text: 'test1' },
      { id: 2, text: 'test2' },
    ]
    const result = await PostApi.batchUpdate(posts)

    expect(result.data.length).toEqual(2)
  })

  it('batchDestroy method', async () => {
    const posts = [
      { id: 1, text: 'test1' },
      { id: 2, text: 'test2' },
    ]
    const result = await PostApi.batchDestroy(posts)

    expect(result.data.length).toEqual(2)
  })

  it('hasOne Get', async () => {
    const comments = await PostApi.hasOne('comments', 1).get()

    expect(comments).toHaveProperty('id', 1)
  })

  it('hasOne Show', async () => {
    const comments = await PostApi.hasOne('comments', 1).show({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasOne Create', async () => {
    const comments = await PostApi.hasOne('comments', 1).store({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasOne Update', async () => {
    const comments = await PostApi.hasOne('comments', 1).update({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasOne Delete', async () => {
    const comments: ApiResponse<IComment> = await PostApi.hasOne(
      'comments',
      1,
    ).delete({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Get', async () => {
    const comments = await PostApi.hasMany('comments', 1).get()

    expect(comments.length).toEqual(2)
  })

  it('hasMany Show', async () => {
    const comments = await PostApi.hasMany('comments', 1).show({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Create', async () => {
    const comments = await PostApi.hasMany('comments', 1).store({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Update', async () => {
    const comments = await PostApi.hasMany('comments', 1).update({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Delete', async () => {
    const comments: ApiResponse<IComment[]> = await PostApi.hasMany(
      'comments',
      1,
    ).delete({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('url method - joins the apiPrefix, the resource and the path', () => {
    expect(PostApi.url('1', 'publish')).toBe('api/posts/1/publish')
    expect(PostApi.url()).toBe('api/posts')
  })

  it('send method - sends to the path as the full url', async () => {
    server.use(
      http.post('http://localhost:8000/api/posts/1/publish', async ({ request }) => {
        return HttpResponse.json(
          { data: { body: await request.json(), query: new URL(request.url).search } },
          { status: 202 },
        )
      }),
    )

    const result = await PostApi.send('post', 'api/posts/1/publish', { notify: true }, { dry: 1 })

    expect(result.data.body).toEqual({ notify: true })
    expect(result.data.query).toBe('?dry=1')
  })

  it('send method - resolves with the raw response body', async () => {
    server.use(
      http.get('http://localhost:8000/api/posts/summary', () => {
        return HttpResponse.json({ data: { created_at: '2020-06-12T18:19:32.000000Z' } })
      }),
    )

    const result = await PostApi.send<{ data: { created_at: string } }>('get', 'api/posts/summary')

    // Dates are left as sent - only the REST methods run transformResponse
    expect(result.data.created_at).toBe('2020-06-12T18:19:32.000000Z')
  })

  it('send method - does not add the apiPrefix or the resource', async () => {
    server.use(
      http.get('http://localhost:8000/custom/endpoint', () => {
        return HttpResponse.json({ data: 'custom' })
      }),
    )

    const result = await PostApi.send('get', 'custom/endpoint')

    expect(result.data).toBe('custom')
  })

  it('send method - rejects with the axios error', async () => {
    server.use(
      http.delete('http://localhost:8000/api/posts/99/cache', () => {
        return HttpResponse.json({ message: 'Nope' }, { status: 409 })
      }),
    )

    await expect(PostApi.send('delete', 'api/posts/99/cache')).rejects.toMatchObject({
      response: { status: 409 },
    })
  })
})
