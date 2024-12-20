import { reactive } from 'vue'
import { Collection } from '../src/index'
import type { IPost } from './PostInterface'
import PostErrorApi from './PostErrorApi'

export default class PostsCollection extends Collection {
  public data = reactive([] as IPost[])
  protected api = PostErrorApi
  // protected listener = new PostsListener('PostsEvent')
  protected channel = 'posts'

  constructor(posts?: IPost[]) {
    super()
    if (posts) super.factory(posts)
  }
}
