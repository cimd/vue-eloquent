import { reactive } from 'vue'
import { Collection } from '../../src/index'
import PostApi from './PostApi'
import { IPost } from './PostInterface'

export default class PostsCollection extends Collection {
  protected api = PostApi

  public data = reactive([] as IPost[])

  constructor(posts?: IPost[]){
    super()
    this.factory(posts)
  }
}
