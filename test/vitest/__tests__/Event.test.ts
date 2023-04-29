import { beforeAll, describe, expect, it } from 'vitest'
import PostsEvent from '../../mocks/PostsEvent'
import broadcast from '../../mocks/pusher'
import { createBroadcast } from '../../../src/broadcast/broadcast'

beforeAll(async () => {
  createBroadcast(broadcast)
})

describe('events', () => {
  it('intantiates new event', async () => {
    const event = new PostsEvent()
    console.log(event)

    expect(event).toBeTruthy()
  })
})
