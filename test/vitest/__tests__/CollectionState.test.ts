import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import PostsCollection from 'examples/PostsCollection'
import { createBroadcast } from '@/broadcast/broadcast'
import { flushState } from '@/index'
import broadcast from '../../mocks/pusher-mock'

class DraftPosts extends PostsCollection {}

describe('collection state', () => {
  afterEach(() => {
    flushState()
    vi.restoreAllMocks()
  })

  it('is the same instance on every call', () => {
    expect(PostsCollection.getState()).toBeInstanceOf(PostsCollection)
    expect(PostsCollection.getState()).toBe(PostsCollection.getState())
    expect(PostsCollection.getState()).not.toBe(new PostsCollection())
  })

  it('keeps the rows fetched for the next time it is asked for', async () => {
    await PostsCollection.getState().get()

    expect(PostsCollection.getState().data.length).toEqual(2)
    expect(PostsCollection.getState().state).toEqual({ isLoading: false, isSuccess: true, isError: false })
  })

  it('shows the previous rows while it fetches again', async () => {
    await PostsCollection.getState().get()

    const fetching = PostsCollection.getState().get()

    expect(PostsCollection.getState().state.isLoading).toBe(true)
    expect(PostsCollection.getState().data.length).toEqual(2)

    await fetching
  })

  it('keeps one instance per key and per class', () => {
    expect(PostsCollection.getState('a')).toBe(PostsCollection.getState('a'))
    expect(PostsCollection.getState('a')).not.toBe(PostsCollection.getState('b'))
    expect(DraftPosts.getState()).not.toBe(PostsCollection.getState())
  })

  it('forgets the instance of a key, or all of the class', () => {
    const a = PostsCollection.getState('a')
    const b = PostsCollection.getState('b')
    const draft = DraftPosts.getState()

    PostsCollection.forgetState('a')
    expect(PostsCollection.getState('a')).not.toBe(a)
    expect(PostsCollection.getState('b')).toBe(b)

    PostsCollection.forgetState()
    expect(PostsCollection.getState('b')).not.toBe(b)
    expect(DraftPosts.getState()).toBe(draft)
  })

  it('does not leave its channel when the component that created it unmounts', () => {
    const leave = vi.spyOn(PostsCollection.prototype, 'leaveChannel')
    const Page = defineComponent({
      setup() {
        PostsCollection.getState()

        return () => h('div')
      }
    })

    mount(Page).unmount()

    expect(leave).not.toHaveBeenCalled()
  })

  it('still leaves the channel of a collection that has no state when the component unmounts', () => {
    const leave = vi.spyOn(PostsCollection.prototype, 'leaveChannel')
    const Page = defineComponent({
      setup() {
        new PostsCollection()

        return () => h('div')
      }
    })

    mount(Page).unmount()

    expect(leave).toHaveBeenCalledTimes(1)
  })

  it('leaves its channel when it is forgotten or flushed', () => {
    createBroadcast(broadcast)
    const leave = vi.spyOn(PostsCollection.prototype, 'leaveChannel')
    PostsCollection.getState('a').joinChannel()
    PostsCollection.getState('b').joinChannel()

    PostsCollection.forgetState('a')
    expect(leave).toHaveBeenCalledTimes(1)

    flushState()
    expect(leave).toHaveBeenCalledTimes(2)
  })
})
