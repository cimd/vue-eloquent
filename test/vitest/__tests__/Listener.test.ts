import { beforeAll, describe, expect, it } from 'vitest'
import PostsListener from '../../mocks/PostsListener'
import broadcast from '../../mocks/pusher-mock'
import { createBroadcast } from '../../../src/broadcast/broadcast'
import PostsBroadcast from '../../mocks/PostsBroadcast'
import PostsCollection from '../../../examples/PostsCollection'

let event: PostsBroadcast

beforeAll(async () => {
  createBroadcast(broadcast)
  event = new PostsBroadcast()
})

describe('events', () => {
  it('intantiates new event', async () => {
    const posts = new PostsCollection()
    const listener = new PostsListener(event, posts)
    // console.log(listener)

    const mock = { test: 1 }
    event.onMockMessage('created', mock)

    // console.log(listener)

    expect(listener.message).toEqual({ event: 'created', message: { test: 1 }})
  })
})
