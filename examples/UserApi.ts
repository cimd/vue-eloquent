import { Api } from '../src/index'

export default class UserApi extends Api {
  protected resource = 'users'

  constructor() {
    super()
  }
}
