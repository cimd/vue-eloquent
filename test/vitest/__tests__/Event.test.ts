import { beforeAll, describe, expect, it } from 'vitest'
import PostsBroadcast from '../../mocks/PostsBroadcast'
import broadcast from '../../mocks/pusher-mock'
import { createBroadcast } from '../../../src/broadcast/broadcast'
import EventError from '../../../src/events/EventError'

beforeAll(async () => {
  createBroadcast(broadcast)
})

describe('events', () => {
  it('intantiates new event', async () => {
    const event = new PostsBroadcast()
    // console.log(event)

    broadcast
      .channel('test')
      .error((error: any) => {
        throw new EventError('Event', error)
      })
      .listen('.created', (_e: any) => {
      })

    expect(event).toBeTruthy()
  })
})
