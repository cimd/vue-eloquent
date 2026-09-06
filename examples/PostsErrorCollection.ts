import { reactive } from 'vue'
import { Collection } from '../src/index'
import type { IPost } from './PostInterface'
import PostErrorApi from './PostErrorApi'

export default class PostsErrorCollection extends Collection {
  override data = reactive<IPost[]>([])
  override api = PostErrorApi
  // protected listener = new PostsListener('PostsEvent')
  protected override channel = 'posts'

  constructor(posts?: IPost[]) {
    super()
    if (posts) super.factory(posts)
  }
}
