import { describe, expect, it } from 'vitest'
import PostApiV2 from '../../../examples/PostApiV2.js'
import PostV2 from '../../../examples/PostV2.js'
import show from '@/api/functions/show'
import transformResponse from '../../../src/api/functions/transformResponse.ts'
import { BaseApiV2 } from '../../../src/index.js'

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

  it('creates BaseApiV2', async () => {
    const api = BaseApiV2
    api.$resource = 'posts'
    console.log(api)
    const show = await api.show(1)
    console.log(show)
  })
})
