import { describe, expect, it } from 'vitest'
import PostApi from '../../../examples/PostApi'
import { IPost } from '../../../examples/PostInterface'

describe('model api', () => {
  it('get method', async () => {
    const result = await PostApi.get<IPost>()

    expect(result.data.length).toBe(2)
  })

  it('get method-error', async () => {
    const result = PostApi.get<IPost>(123)
    expect(result).rejects.toThrowError('Get |||')
  })

  it('show method', async () => {
    const result = await PostApi.show(1)

    expect(result.data).toHaveProperty('id', 1)
  })

  it('show method-error', async () => {
    const result = PostApi.show(11)

    expect(result).rejects.toThrowError('Show |||')
  })

  it('update method', async () => {
    const result = await PostApi.update({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })
  it('update method-error', async () => {
    const result = PostApi.update({ id: 10, text: 'test' })

    expect(result).rejects.toThrowError('Update |||')
  })

  it('store method', async () => {
    const result = await PostApi.store({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })

  it('destroy method', async () => {
    const result = await PostApi.destroy({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
  })
  it('destroy method-error', async () => {
    const result = PostApi.destroy({ id: 10, text: 'test' })

    expect(result).rejects.toThrowError('Destroy |||')
  })

  it('deleted (deprecated) method', async () => {
    const result = await PostApi.delete({ id: 1, text: 'test' })

    expect(result.data).toHaveProperty('id', 1)
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

  it('hasOne Get', async () => {
    const comments = await PostApi.hasOne('comments', 1).get()

    expect(comments).toHaveProperty('id', 1)
  })

  it('hasOne Show', async () => {
    const comments = await PostApi.hasOne('comments', 1).show({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasOne Create', async () => {
    const comments = await PostApi.hasOne('comments', 1).store({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasOne Update', async () => {
    const comments = await PostApi.hasOne('comments', 1).update({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasOne Delete', async () => {
    const comments = await PostApi.hasOne('comments', 1).delete({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Get', async () => {
    const comments = await PostApi.hasMany('comments', 1).get()

    expect(comments.length).toEqual(2)
  })

  it('hasMany Show', async () => {
    const comments = await PostApi.hasMany('comments', 1).show({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Create', async () => {
    const comments = await PostApi.hasMany('comments', 1).store({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Update', async () => {
    const comments = await PostApi.hasMany('comments', 1).update({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })

  it('hasMany Delete', async () => {
    const comments = await PostApi.hasMany('comments', 1).delete({ id: 1 })

    expect(comments.data).toHaveProperty('id', 1)
  })
})
