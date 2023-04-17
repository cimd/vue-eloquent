import { formatObject } from '../formatObject'
import { describe, expect, it } from 'vitest'

const targetObject: any = {
  id: 1,
  string_date: '2022-06-30T06:01:43.000000Z',
  created_at: '2022-06-30T06:01:43.000000Z',
  due_date: '2022-07-30T06:01:43.000000Z'
}
const targetArray: any = [
  {
    id: 1,
    string_date: '2022-06-30T06:01:43.000000Z',
    created_at: '2022-06-30T06:01:43.000000Z',
    due_date: '2022-07-30T06:01:43.000000Z'
  },
  {
    id: 2,
    string_date: '2022-01-30T06:01:43.000000Z',
    created_at: '2022-02-30T06:01:43.000000Z',
    due_date: '2022-03-30T06:01:43.000000Z'
  }
]
const elementsArray = [
  'created_at',
  'due_date'
]

describe('Format Object', async () => {
  it('format object dates', async () => {
    const result = formatObject(targetObject, elementsArray)
    expect(typeof result.id).toBe('number')
    expect(typeof result.string_date).toBe('string')
    expect(typeof result.created_at).toBe('object')
    expect(typeof result.due_date).toBe('object')
  })

  it('format array dates', async () => {
    const result = formatObject(targetArray, elementsArray)
    expect(typeof result[ 0 ].id).toBe('number')
    expect(typeof result[ 0 ].string_date).toBe('string')
    expect(typeof result[ 0 ].created_at).toBe('object')
    expect(typeof result[ 0 ].due_date).toBe('object')
  })
})
