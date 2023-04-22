import { describe, expect, it } from 'vitest'
import PostsCollection from '../../../examples/PostsCollection'

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

  it('include relation', async () => {
    const posts = new PostsCollection()
    const results = await posts.with(['author', 'comments']).get()
    // console.log(results)
    expect(results.length).toEqual(2)
  })

  it('filter + relation', async () => {
    const posts = new PostsCollection()
    const results = await posts
      .where({ title: 'Hello' })
      .where({ description: 'Chaining...' })
      .with(['author', 'comments'])
      .get()

    expect(results.length).toEqual(2)
    expect(posts.filter).toEqual({ title: 'Hello', description: 'Chaining...' })
  })

  it('updates models data property', async () => {
    const posts = new PostsCollection()
    await posts.where({ title: 'Hello' }).get()

    expect(posts.data.length).toEqual(2)
  })
})
