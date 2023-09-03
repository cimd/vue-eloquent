import { reactive } from 'vue'
import { Collection } from '../../src/index'
import { IPost } from '../../examples/PostInterface'
import PostQueryApi from './PostQueryApi'

export default class PostsQueryCollection extends Collection {
  protected api = PostQueryApi
  // protected listener = new PostsListener('PostsEvent')
  protected channel = 'posts-query'

  public data = reactive([] as IPost[])

  constructor(posts?: IPost[]){
    super()
    super.factory(posts)
  }
}
