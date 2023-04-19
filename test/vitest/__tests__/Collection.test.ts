import { describe, expect, it } from 'vitest'
import PostsCollection from '../../mocks/PostsCollection'

describe('collection api', () => {
  it('static get method', async () => {
    const posts = new PostsCollection()
    await posts.get()
    expect(posts.data.length).toEqual(2)
  })

  it('returns response from get method', async () => {
    const posts = await (new PostsCollection).get()
    expect(posts.length).toEqual(2)
  })

  it('where filter', async () => {
    const posts = new PostsCollection()
    const results = await posts.where({ title: 'Hello' }).where({ description: 'Chaining...' }).get()

    expect(results.length).toEqual(2)
    expect(posts.filter).toEqual({ title: 'Hello', description: 'Chaining...' })
  })

  it('updates data property', async () => {
    const posts = new PostsCollection()
    await posts.where({ title: 'Hello' }).get()

    expect(posts.data.length).toEqual(2)
  })
})
