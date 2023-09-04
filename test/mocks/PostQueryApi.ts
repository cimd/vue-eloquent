import { Api } from '../../src/index'

export default class PostQueryApi extends Api {
  protected resource = 'posts-query'

  constructor() {
    super()
  }
}
