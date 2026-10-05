import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'
import type { IPost } from '../../../examples/PostInterface'

describe('model api', () => {
  it('where method', async () => {
    const result = await PostApi.where({ name: 'John' }).get<IPost>()

    expect(result.data.length).toBe(2)
  })
  it('with method', async () => {
    const result = await PostApi.with(['author']).get<IPost>()

    expect(result.data.length).toBe(2)
  })
  it('append method', async () => {
    const result = await PostApi.append(['author']).get<IPost>()

    expect(result.data.length).toBe(2)
  })
  it('select method', async () => {
    const result = await PostApi.select(['author']).get<IPost>()

    expect(result.data.length).toBe(2)
  })
  it('sort method', async () => {
    const result = await PostApi.sort(['author']).get<IPost>()

    expect(result.data.length).toBe(2)
  })
  it('latest method', async () => {
    const api = new PostApi().latest('created_at')

    expect((api as any).sorting).toEqual(['-created_at'])
    expect((await api.get<IPost>()).data.length).toBe(2)
  })
  it('static latest method', async () => {
    const api = PostApi.latest('created_at')

    expect((api as any).sorting).toEqual(['-created_at'])
    expect((await api.get<IPost>()).data.length).toBe(2)
  })
  it('latest method appends to existing sorting and is chainable', () => {
    const api = new PostApi().sort(['title'])

    expect(api.latest('created_at')).toBe(api)
    expect(api.latest('updated_at')).toBe(api)
    expect((api as any).sorting).toEqual(['title', '-created_at', '-updated_at'])
  })
  it('sort method replaces sorting added by latest', () => {
    const api = new PostApi().latest('created_at').sort(['title'])

    expect((api as any).sorting).toEqual(['title'])
  })
  it('limit method', async () => {
    const api = new PostApi().limit(5)

    expect((api as any).limiting).toBe(5)
    expect((api as any).queryString()).toHaveProperty('limit', 5)
    expect((await api.get<IPost>()).data.length).toBe(2)
  })
  it('static limit method', () => {
    const api = PostApi.limit(3)

    expect((api as any).queryString()).toHaveProperty('limit', 3)
  })
  it('query string has no limit by default', () => {
    expect((new PostApi() as any).queryString()).not.toHaveProperty('limit')
  })
  it('paginate method', async () => {
    const result = await PostApi.paginate({ page: 1, pageSize: 5 }).get<IPost>()

    expect(result.data.length).toBe(2)
  })
})
