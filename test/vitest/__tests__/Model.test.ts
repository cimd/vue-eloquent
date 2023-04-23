import { describe, expect, it } from 'vitest'
import Post from '../../../examples/Post'

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

  it('refresh by changing id', async () => {
    const post = new Post()
    await post.refresh(1)

    expect(post.model).toContain({ id: 1 })

    await post.refresh(2)

    expect(post.model).toContain({ id: 2 })
  })

  it('creates fresh new model', async () => {
    const post = new Post()
    await post.refresh(1)
    expect(post.model).toContain({ id: 1 })

    post.fresh()
    expect(post.model.id).toBeUndefined()
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

    const { actioned, model } = await post.save()

    expect(model).toContain({ id: 1 })
    expect(actioned).toBe('updated')
  })

  it('save method on new model', async () => {
    const post = new Post()
    post.model.title = 'test'

    const { actioned, model } = await post.save()

    expect(model).toContain({ id: 1 })
    expect(actioned).toBe('created')
  })

  it('validates model', async () => {
    const post = new Post()
    post.model.title = 'test'
    post.$validate()

    expect(post.$invalid).toBe(true)
  })

  it('fetches hasOne', async () => {
    const post = new Post()
    await post.refresh(1)
    // console.log(post.model)
    const author = await post.author()
    // console.log(author)

    expect(author).toContain({ id: 1 })
  })

  it('fetches hasMany', async () => {
    const post = new Post()
    await post.refresh(1)
    // console.log(post.model)
    const readers = await post.readers()
    // console.log(readers)

    expect(readers.length).toBe(2)
  })

  it('lazy loads relationship', async () => {
    const post = new Post()
    await post.refresh(1)

    await post.load('readers')

    expect(post.model.readers.length).toBe(2)
  })
})
