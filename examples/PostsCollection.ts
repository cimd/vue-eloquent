import { reactive } from 'vue'
import { Collection } from '../src/index'
import PostApi from './PostApi'
import type { IPost } from './PostInterface'

export default class PostsCollection extends Collection {
  override data = reactive<IPost[]>([])
  override api = PostApi
  protected override channel = 'posts'

  constructor(posts?: IPost[]) {
    super()
    if (posts) super.factory(posts)
  }

  protected override async broadcastCreated(e: any): Promise<void> {
    // add new post to the collection
    const newPost = await this.api.show<IPost>(e.id)
    this.data.push(newPost.data)
  }
}
