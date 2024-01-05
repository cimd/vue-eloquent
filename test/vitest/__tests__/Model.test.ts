import { describe, expect, it } from 'vitest'
import Post from '../../../examples/Post'

describe('model', () => {
  it('find method', async () => {
    const post = new Post()
    await post.find(1)

    expect(post.model).toContain({ id: 1 })
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('static find method', async () => {
    const post = await Post.find(1)

    expect(post).toBeInstanceOf(Post)
    expect(post.model).toContain({ id: 1 })
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('refresh method', async () => {
    const post = new Post()

    await post.refresh(2)
    expect(post.model).toContain({ id: 2 })

    await post.refresh(1)
    expect(post.model).toContain({ id: 1 })
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('creates fresh new model', async () => {
    const post = new Post()
    await post.refresh(1)
    expect(post.model).toContain({ id: 1 })

    post.fresh()
    expect(post.model.id).toBeUndefined()
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('update method', async () => {
    const post = new Post()
    await post.refresh(1)
    post.model.title = 'test'

    const result = await post.update()

    expect(result).toContain({ id: 1 })
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('create method', async () => {
    const post = new Post()
    post.model.title = 'test'

    const result = await post.create()

    expect(result).toContain({ id: 1 })
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('delete method', async () => {
    const post = new Post()
    await post.refresh(1)

    const result = await post.delete()

    expect(result).toContain({ id: 1 })
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('save method on existing model', async () => {
    const post = new Post()
    await post.refresh(1)
    post.model.title = 'test'

    const { actioned, model } = await post.save()

    expect(model).toContain({ id: 1 })
    expect(actioned).toBe('updated')
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('save method on new model', async () => {
    const post = new Post()
    post.model.title = 'test'

    const { actioned, model } = await post.save()

    expect(model).toContain({ id: 1 })
    expect(actioned).toBe('created')
    expect(post.state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('validates model', async () => {
    const post = new Post()
    post.model.title = 'test'
    const isValid = post.$validate()

    expect(post.$invalid).toBe(true)
    expect(isValid).toBe(false)
  })

  it('resets validation error', async () => {
    const post = new Post()
    post.model.title = 'test'
    const isValid = post.$validate()
    expect(isValid).toBe(false)

    post.$reset()
    expect(post.v$.value.$errors.length).toBe(0)
  })

  it('fetches hasOne', async () => {
    const post = new Post()
    await post.refresh(1)
    const comments = await post.comments().show()
    console.log(comments)

    expect(comments).toContain({ id: 1 })
  })

  it('fetches hasMany', async () => {
    const post = new Post()
    await post.refresh(1)
    const readers = await post.readers()

    expect(readers.length).toBe(2)
  })

  it('lazy loads single relationship', async () => {
    const post = new Post()
    await post.refresh(1)
    await post.load('readers')

    expect(post.model.readers.length).toBe(2)
  })
  it('lazy loads multiple relationships', async () => {
    const post = new Post()
    await post.refresh(1)
    await post.load(['readers'])

    expect(post.model.readers.length).toBe(2)
  })
})
