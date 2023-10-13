import { reactive } from 'vue'
import { Model } from '../src/index'
import { IPost } from './PostInterface'
import { IUser } from './UserInterface'
import PostErrorApi from './PostErrorApi'

export default class Post extends Model {
  protected api = PostErrorApi

  public model = reactive({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    author_id: undefined,
    title: undefined,
    text: undefined,
    author: undefined as IUser,
    readers: undefined as IUser[],
  } as IPost)

  protected parameters = {
    title: 'New Post',
  }

  constructor(post?: IPost) {
    super()
    super.factory(post)
  }
}
