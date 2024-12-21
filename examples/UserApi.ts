import Api from '@/api/Api'

export default class UserApi extends Api {
  protected resource = 'users'

  constructor() {
    super()
  }
}
