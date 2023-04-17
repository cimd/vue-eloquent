import { formatDates } from '../formatDates'
import { describe, expect, it } from 'vitest'

const target = {
  id: 1,
  string_date: '2022-06-30T06:01:43.000000Z',
  created_at: '2022-06-30T06:01:43.000000Z',
  due_date: '2022-07-30T06:01:43.000000Z'
}
const elementsArray = [
  'created_at',
  'due_date'
]

describe('Format Dates string to Object', async () => {
  it('format dates', async () => {
    const result = formatDates(target, elementsArray)
    expect(typeof result.id).toBe('number')
    expect(typeof result.string_date).toBe('string')
    expect(typeof result.created_at).toBe('object')
    expect(typeof result.due_date).toBe('object')
  })
})
