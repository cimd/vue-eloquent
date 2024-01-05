import { Api } from '../src/index'

export default class CommentApi extends Api {
  protected resource = 'comments'

  protected dates = [
    'created_at',
    'updated_at',
    'deleted_at',
  ]

  constructor() {
    super()
  }
}
