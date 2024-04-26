import { describe, expect, it } from 'vitest'
import ModelApi from '../../../src/api/ModelApi.js'

describe('ModeApi', () => {
  it('get method', async () => {
    const result = await ModelApi.get()

    expect(result.data.length).toBe(2)
  })

})
