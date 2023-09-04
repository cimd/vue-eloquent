import { Api } from '../src/index'

export default class PostApi extends Api {
  protected resource = 'posts'

  protected dates = [
    'created_at',
    'updated_at',
    'deleted_at',
    // 'author.created_at'
  ]

  constructor() {
    super()
  }
}
