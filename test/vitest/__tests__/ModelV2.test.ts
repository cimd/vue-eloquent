import { describe, expect, it } from 'vitest'
import PostV2 from '../../../examples/PostV2.js'
import { ModelV2 } from '../../../src/index.js'

const model = {
  id: '1',
  title: 'My First Post',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  author_id: 1,
  author: 'John',
  created_at: '2021-08-25',
  updated_at: '2021-08-25'
}
describe('model', () => {
  it('creates', async () => {
    const post = new PostV2(model)
    // console.log(post)

    expect(post).toHaveProperty('id', 1)
    expect(post).toBeInstanceOf(PostV2)
    expect(post).toBeInstanceOf(ModelV2)
  })

  it('casts', async () => {
    const post = new PostV2(model)
    // console.log('post:', post)

    expect(post.created_at).toBeInstanceOf(Date)
    expect(post.updated_at).toBeInstanceOf(Date)
    expect(post.author).toEqual('John Doe')
  })

  it('creates v2', async () => {
    const post = new PostV2()
    console.log('post1:', post)
    await post.refresh(1)
    console.log('post2:', post)
  })
})
