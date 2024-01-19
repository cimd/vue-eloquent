import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'
import { IPost } from '../../../examples/PostInterface'

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
  it('paginate method', async () => {
    const result = await PostApi.paginate({ page: 1, pageSize: 5 }).get<IPost>()

    expect(result.data.length).toBe(2)
  })
})
