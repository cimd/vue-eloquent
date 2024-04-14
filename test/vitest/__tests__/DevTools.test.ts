import { beforeAll, describe, expect, it } from 'vitest'
import { VueEloquentPlugin } from '../../../src'
import { createApp } from 'vue'
import Post from '../../../examples/Post'

const app = createApp({})
beforeAll(async () => {
  app.use(VueEloquentPlugin)
})

describe('DevTools', () => {
  it('installs plugin', async () => {
    const post = new Post()
    await post.find(1)

    expect(post.model).toHaveProperty('id', 1)
  })
})
