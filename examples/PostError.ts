import { reactive } from 'vue'
import { Model } from '../src/index'
import type { IPost } from './PostInterface'
import type { IUser } from './UserInterface'
import PostErrorApi from './PostErrorApi'

export default class Post extends Model<IPost> {
  protected api = PostErrorApi

  model = reactive<IPost>({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    author_id: undefined,
    title: undefined,
    text: undefined,
    author: undefined as IUser,
    readers: undefined as IUser[]
  })

  protected parameters = {
    title: 'New Post'
  }

  constructor(post?: IPost) {
    super()
    super.factory(post)
  }
}
