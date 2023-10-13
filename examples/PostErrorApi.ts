import { Api } from '../src/index'

export default class PostErrorApi extends Api {
  protected resource = 'errors'

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
