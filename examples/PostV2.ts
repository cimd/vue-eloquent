import { IPost } from './PostInterface'
import myCast from './MyCast'
import { ModelV2 } from '../src/index.js'

export default class PostV2 extends ModelV2<IPost> {
  id!: number
  title!: string
  text!: string
  author_id!: number
  author!: string
  created_at!: string
  updated_at!: string

  constructor(post: IPost)
  {
    super()
    super.factory(post)
  }

  protected casts() {
    return {
      id: 'number',
      author: myCast,
      created_at: 'date',
      updated_at: 'date',
      deleted_at: 'date',
    }
  }
}
