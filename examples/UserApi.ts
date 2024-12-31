import Api from '../src/api/Api'

export default class UserApi extends Api {
  protected override resource = 'users'

  constructor() {
    super()
  }
}
