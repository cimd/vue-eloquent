import { describe, expect, it } from 'vitest'
import PostError from '../../../examples/PostError'

describe('model errors', () => {
  it('error state', async () => {
    const post = new PostError()
    try {
      await post.find(1)
    } catch (e) { /* empty */ }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('refresh error', async () => {
    const post = new PostError({ id: 1 })
    try {
      await post.refresh({ id: 2 })
    } catch (e) { /* empty */ }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('update error', async () => {
    const post = new PostError()
    try {
      await post.update({ id: 1 })
    } catch (e) { /* empty */ }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('create error', async () => {
    const post = new PostError()
    try {
      await post.create({ id: 1 })
    } catch (e) { /* empty */ }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('delete method', async () => {
    const post = new PostError({ id: 1 })
    try {
      await post.delete()
    } catch (e) { /* empty */ }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('save method on existing model', async () => {
    const post = new PostError({ id: 1 })
    try {
      await post.save()
    } catch (e) { /* empty */ }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('save method on new model', async () => {
    const post = new PostError()
    post.model.title = 'test'

    try {
      await post.save()
    } catch (e) { /* empty */ }
    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })
})
