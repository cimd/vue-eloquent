import { describe, expect, it } from 'vitest'
import PostError from '../../../examples/PostError'

const postExample = { id: 1, title: 'test', text:'text', author_id: 1, author: { id: 1, name: 'John Doe' }, readers: [{ id: 1, name: 'Jane Doe' }] }

describe('model errors', () => {
  it('error state', async () => {
    const post = new PostError()
    try {
      await post.find(1)
    } catch (e) {
      console.log(e)
    }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('refresh error', async () => {
    const post = new PostError(postExample)
    try {
      await post.refresh(2 )
    } catch (e) {
      console.log(e)
    }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('update error', async () => {
    const post = new PostError()
    try {
      await post.update()
    } catch (e) {
      console.log(e)
    }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('create error', async () => {
    const post = new PostError()
    try {
      await post.create()
    } catch (e) {
      console.log(e)
    }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('delete method', async () => {
    const post = new PostError(postExample)
    try {
      await post.delete()
    } catch (e) {
      console.log(e)
    }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('save method on existing model', async () => {
    const post = new PostError(postExample)
    try {
      await post.save()
    } catch (e) {
      console.log(e)
    }

    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })

  it('save method on new model', async () => {
    const post = new PostError()
    post.model.title = 'test'

    try {
      await post.save()
    } catch (e) {
      console.log(e)
    }
    expect(post.state).toEqual({ isLoading: false, isSuccess: false, isError: true })
  })
})
