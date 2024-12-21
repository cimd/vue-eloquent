import { Api } from '../src/index'

export default class CommentApi extends Api {
  protected override resource = 'comments'
  protected override dates = ['created_at', 'updated_at', 'deleted_at']

  constructor() {
    super()
  }
}
