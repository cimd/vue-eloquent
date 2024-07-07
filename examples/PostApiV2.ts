import { ApiV2 } from '../src/index'
import PostV2 from './PostV2'

export default class PostApiV2 extends ApiV2 {
  constructor() {
    super()
  }

  resource(){
    return 'posts'
  }

  protected model() {
    return PostV2
  }
}
