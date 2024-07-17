import { describe, expect, it } from 'vitest'
import PostApiV2 from '../../../examples/PostApiV2.js'
import PostV2 from '../../../examples/PostV2.js'
import show from '@/api/functions/show'
import transformResponse from '@/api/functions/transformResponse'

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

  it('show function', async () => {
    const config = {
      resource: 'posts',
      apiPrefix: 'api',
      model: PostV2,
      transformResponse: transformResponse,
    }

    const post = await show(1, config)
    console.log(post)
  })
})
