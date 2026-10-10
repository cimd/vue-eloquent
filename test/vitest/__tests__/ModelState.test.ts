import { afterEach, describe, expect, it, vi } from 'vitest'
import Post from 'examples/Post'
import { Auth, flushState } from '@/index'
import { http } from '@/http/http'

class DraftPost extends Post {}

describe('model state', () => {
  afterEach(() => {
    flushState()
  })

  it('is the same instance on every call', () => {
    expect(Post.getState()).toBeInstanceOf(Post)
    expect(Post.getState()).toBe(Post.getState())
  })

  it('is not the instance of a plain new', () => {
    expect(Post.getState()).not.toBe(new Post())
  })

  it('keeps what was fetched for the next time it is asked for', async () => {
    await Post.getState().find(1)

    expect(Post.getState().model).toHaveProperty('id', 1)
    expect(Post.getState().state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('shows the previous data while it fetches again', async () => {
    await Post.getState().find(1)

    const fetching = Post.getState().refresh(2)

    expect(Post.getState().state.isLoading).toBe(true)
    expect(Post.getState().model).toHaveProperty('id', 1)

    await fetching
    expect(Post.getState().model).toHaveProperty('id', 2)
  })

  it('keeps one instance per key', () => {
    expect(Post.getState('a')).toBe(Post.getState('a'))
    expect(Post.getState('a')).not.toBe(Post.getState('b'))
    expect(Post.getState('a')).not.toBe(Post.getState())
  })

  it('keeps one instance per class, also for a subclass', () => {
    expect(DraftPost.getState()).toBeInstanceOf(DraftPost)
    expect(DraftPost.getState()).not.toBe(Post.getState())
  })

  it('forgets the instance of a key', () => {
    const a = Post.getState('a')
    const b = Post.getState('b')

    Post.forgetState('a')

    expect(Post.getState('a')).not.toBe(a)
    expect(Post.getState('b')).toBe(b)
  })

  it('forgets all the instances of the class, and only of the class', () => {
    const post = Post.getState()
    const keyed = Post.getState('a')
    const draft = DraftPost.getState()

    Post.forgetState()

    expect(Post.getState()).not.toBe(post)
    expect(Post.getState('a')).not.toBe(keyed)
    expect(DraftPost.getState()).toBe(draft)
  })

  it('flushes every instance', () => {
    const post = Post.getState()
    const draft = DraftPost.getState()

    flushState()

    expect(Post.getState()).not.toBe(post)
    expect(DraftPost.getState()).not.toBe(draft)
  })

  it('flushes every instance on logout', async () => {
    const post = Post.getState()
    vi.spyOn(http, 'post').mockResolvedValue({ data: {} })

    await new Auth().logout()

    expect(Post.getState()).not.toBe(post)
  })

  it('keeps the instances when the logout fails', async () => {
    const post = Post.getState()
    vi.spyOn(http, 'post').mockRejectedValue(new Error('down'))
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    await expect(new Auth().logout()).rejects.toThrow('down')

    expect(Post.getState()).toBe(post)
  })
})
