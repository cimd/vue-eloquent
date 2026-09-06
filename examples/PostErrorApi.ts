import { Api } from '../src/index'

export default class PostErrorApi extends Api {
  protected override resource = 'errors'

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
