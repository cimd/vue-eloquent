import diff from '../diff'
import { describe, expect, it } from 'vitest'

const modifiedObj = {
  id: 1,
  name: 'Heitor',
  description: null,
  tags: {
    id: 1,
    name: 'test'
  },
  string_date: '2022-06-30T06:01:43.000000Z',
  created_at: '2022-06-30T06:01:43.000000Z',
  due_date: '2022-07-30T06:01:43.000000Z'
}

describe('get params changes between objects', async () => {
  it('runs', async () => {
    const result = diff(originalObj, modifiedObj)
    console.log(result)

    expect(typeof result.id).toBe('undefined')
    expect(typeof result.name).toBe(modifiedObj.name)
  })
})
