import { describe, expect, it } from 'vitest'
import PostApi from '../../mocks/PostApi'

describe('model api', () => {
  it('get method', async () => {
    const result = await PostApi.get()

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

  it('delete method', async () => {
    const result = await PostApi.delete({ id: 1, text: 'test' })

    expect(result.data).toContain({ id: 1 })
  })
})
