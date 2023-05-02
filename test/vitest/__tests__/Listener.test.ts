import { beforeAll, describe, expect, it } from 'vitest'
import PostsListener from '../../mocks/PostsListener'
import broadcast from '../../mocks/pusher-mock'
import { createBroadcast } from '../../../src/broadcast/broadcast'
import PostsEvent from '../../mocks/PostsEvent'

let event: PostsEvent

beforeAll(async () => {
  createBroadcast(broadcast)
  event = new PostsEvent()
})

describe('events', () => {
  it('intantiates new event', async () => {
    const listener = new PostsListener(event)
    // console.log(listener)

    const mock = { test: 1 }
    event.onMockMessage(mock)

    // console.log(listener)

    expect(listener.message).toEqual({ event: 'created', message: { test: 1 }})
  })
})
