import { describe, expect, it } from 'vitest'
import PostsCollection from '../../../examples/PostsCollection'
import PostsErrorCollection from '../../../examples/PostsErrorCollection'
import { posts } from '../../mocks/http-handlers/post-handlers'
import { createBroadcast } from '../../../src/broadcast/broadcast'
import broadcast from '../../mocks/pusher-mock'

describe('collection api', () => {
  it('creates instance from factory', async () => {
    const collection = new PostsCollection(posts)
    expect(collection.data.length).toEqual(2)
  })

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

  it('sets error state', async () => {
    const posts = new PostsErrorCollection()
    try {
      await posts.get()
    }
    catch (err) {
      // console.log(err)
    }
    expect(posts.state).toEqual({
      isLoading: false,
      isSuccess: false,
      isError: true,
    })
  })

  it('channel sub', async () => {
    createBroadcast(broadcast)

    const posts = new PostsCollection()
    posts.joinChannel()
    posts.leaveChannel()
    expect(posts.data).toBeTruthy()
  })

  // Query Params
  // it('has query filters', async () => {
  //   const posts = new PostsQueryCollection()
  //   const result = await posts.where({ title: 'Hello' }).get()
  //   console.log(result)
  //   expect(posts.data.length).toEqual(2)
  // })
})
