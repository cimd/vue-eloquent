import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'
import { IPost } from '../../../examples/PostInterface'

describe('transform response', () => {
  it('with model', async () => {
    const result = await PostApi.get<IPost>()

    expect(result.data.length).toBe(2)
  })

})
