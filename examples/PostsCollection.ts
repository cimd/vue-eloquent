import { reactive } from 'vue'
import { Collection } from '../src/index'
import PostApi from './PostApi'
import { IPost } from './PostInterface'

export default class PostsCollection extends Collection {
  protected api = PostApi
  // protected listener = new PostsListener('PostsEvent')
  protected channel = 'posts'

  public data = reactive([] as IPost[])

  constructor(posts?: IPost[]){
    super()
    this.factory(posts)
  }

  protected async broadcastCreated(e: any): Promise<{ data: IPost }>
  {
    // add new post to the collection
    const newPost = await this.api.show(e.id)
    this.data.push(newPost)
  }
}
