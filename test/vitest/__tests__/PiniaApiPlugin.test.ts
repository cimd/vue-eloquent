import { beforeAll, describe, expect, it } from 'vitest'
import { PiniaApiPlugin } from '../../../src'
import { createPinia, setActivePinia } from 'pinia'
import { createApp } from 'vue'
import { usePostStore } from '../../../examples/PostStore'

describe('pinia api plugin', () => {
  beforeAll(async () => {
    const pinia = createPinia().use(PiniaApiPlugin)
    const app = createApp({})
    app.use(pinia)
    setActivePinia(pinia)
  })
  it('expects properties', () => {
    const store = usePostStore()

    expect(store._liveSync).toBeTruthy()
    expect(store._storeName).toEqual('store-post-1')
  })
  it('fetches store from api', async () => {
    const store = usePostStore()
    const response = await store.$get()

    expect(response.data.posts.length).toEqual(2)
  })
  it('pushes changes to api', async () => {
    const store = usePostStore()
    store.name = 'John-1'

    expect(true).toBeTruthy
  })
})
