import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'

describe('model api', () => {
  it('get method', async () => {
    // console.log(apiPrefix)
    const result = await PostApi.get()

    new PostApi()
    // console.log(test)

    expect(result.data.length).toBe(2)
  })

  it('show method', async () => {
    const result = await PostApi.show(1)

    expect(result.data).toContain({ id: 1 })
  })

  it('update method', async () => {
    const result = await PostApi.update({ id: 1, text: 'test' })

    expect(result.data).toContain({ id: 1 })
  })

  it('store method', async () => {
    const result = await PostApi.store({ id: 1, text: 'test' })

    expect(result.data).toContain({ id: 1 })
  })

  it('destroy method', async () => {
    const result = await PostApi.destroy({ id: 1, text: 'test' })

    expect(result.data).toContain({ id: 1 })
  })

  it('batchStore method', async () => {
    const posts = [
      { text: 'test1' },
      { text: 'test2' },
    ]
    const result = await PostApi.batchStore(posts)

    expect(result.data.length).toEqual(2)
  })

  it('batchUpdate method', async () => {
    const posts = [
      { id: 1, text: 'test1' },
      { id: 2, text: 'test2' },
    ]
    const result = await PostApi.batchUpdate(posts)
    console.log('batchUpdate Test: ', result)

    expect(result.data.length).toEqual(2)
  })

  it('batchDestroy method', async () => {
    const posts = [
      { id: 1, text: 'test1' },
      { id: 2, text: 'test2' },
    ]
    const result = await PostApi.batchDestroy(posts)

    expect(result.data.length).toEqual(2)
  })
})
