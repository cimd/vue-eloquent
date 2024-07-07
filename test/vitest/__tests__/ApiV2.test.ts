import { describe, expect, it } from 'vitest'
import PostApiV2 from '../../../examples/PostApiV2.js'
import PostV2 from '../../../examples/PostV2.js'

describe('model api', () => {
  it('get', async () => {
    const post = await PostApiV2.get()
    console.log(post)

    expect(post.data[ 0 ]).toBeInstanceOf(PostV2)
  })

  it('show', async () => {
    const post = await PostApiV2.show(1)

    expect(post.data).toBeInstanceOf(PostV2)
  })
})
