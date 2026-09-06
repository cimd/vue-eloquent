import { reactive } from 'vue'
import { Model } from '../src/index'
import type { IPost } from './PostInterface'
import PostErrorApi from './PostErrorApi'

export default class Post extends Model<IPost> {
  override api = PostErrorApi

  override model = reactive({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    author_id: undefined,
    title: undefined,
    text: undefined,
    author: undefined,
    readers: undefined
  }) as unknown as IPost

  protected override parameters = {
    title: 'New Post'
  }

  constructor(post?: IPost) {
    super()
    super.factory(post)
  }
}
