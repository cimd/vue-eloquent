import { describe, expect, it } from 'vitest'
import { createBroadcast } from '../../../src/broadcast/broadcast'


describe('broadcast', () => {
  it('return error without client', () => {
    try {
      // @ts-ignore
      createBroadcast()
    } catch (e: any) {
      console.log(e)
      expect(e.message).toEqual('Client is required when creating Broadcast')
    }
  })
})
