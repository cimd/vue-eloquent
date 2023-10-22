import { describe, expect, it } from 'vitest'
import Post from '../../../examples/Post'

describe('model relationships', () => {
  it('loads - string', async () => {
    const post = new Post()
    await post.refresh(1)
    await post.load('comments')
    console.log(post.model.comments)

    expect(post.model.comments).toHaveLength(2)
  })

  it('loads - array', async () => {
    const post = new Post()
    await post.refresh(1)
    await post.load(['comments'])
    // console.log(post.model.comments)

    expect(post.model.comments.id).toBe(1)
  })

  //   hasMany Relationships
  it('shows comment', async () => {
    const post = new Post()
    await post.refresh(1)
    const comment = await post.comments().show({ id: 1 })
    // console.log(comment)

    expect(comment.id).toBe(1)
  })

  it('creates comment', async () => {
    const post = new Post()
    await post.refresh(1)
    const comment = await post.comments().create({ id: 1 })
    // console.log(comment)

    expect(comment.id).toBe(1)
  })

  it('updates comment', async () => {
    const post = new Post()
    await post.refresh(1)
    const comment = await post.comments().update({ id: 1 })
    // console.log(comment)

    expect(comment.id).toBe(1)
  })

  it('deletes comment', async () => {
    const post = new Post()
    await post.refresh(1)
    const comment = await post.comments().delete({ id: 1 })
    // console.log(comment)

    expect(comment.id).toBe(1)
  })
})
