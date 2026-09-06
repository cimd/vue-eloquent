import { Api } from '../src/index'

export default class PostApi extends Api {
  protected override resource = 'posts'

  protected override dates = [
    'created_at',
    'updated_at',
    'deleted_at'
    // 'author.created_at'
  ]

  constructor() {
    super()
  }
}
