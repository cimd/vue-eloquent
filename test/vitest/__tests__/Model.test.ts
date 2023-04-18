import { describe, expect, it } from 'vitest'
import Post from '../../mocks/Post'

describe('model api', () => {
  it('find method', async () => {
    const post = await Post.find(1)

    expect(post.model).toContain({ id: 1 })
  })

  it('refresh method', async () => {
    const post = new Post()
    await post.refresh(1)

    expect(post.model).toContain({ id: 1 })
  })

  it('update method', async () => {
    const post = new Post()
    await post.refresh(1)
    post.model.title = 'test'

    const result = await post.update()

    expect(result).toContain({ id: 1 })
  })

  it('create method', async () => {
    const post = new Post()
    post.model.title = 'test'

    const result = await post.create()

    expect(result).toContain({ id: 1 })
  })

  it('delete method', async () => {
    const post = new Post()
    await post.refresh(1)

    const result = await post.delete()

    expect(result).toContain({ id: 1 })
  })

  it('save method on existing model', async () => {
    const post = new Post()
    await post.refresh(1)
    post.model.title = 'test'

    const { actioned, data } = await post.save()

    expect(data).toContain({ id: 1 })
    expect(actioned).toBe('updated')
  })

  it('save method on new model', async () => {
    const post = new Post()
    post.model.title = 'test'

    const { actioned, data } = await post.save()

    expect(data).toContain({ id: 1 })
    expect(actioned).toBe('created')
  })

  it('validates model', async () => {
    const post = new Post()
    post.model.title = 'test'
    post.$validate()

    expect(post.$invalid).toBe(true)
  })
})
