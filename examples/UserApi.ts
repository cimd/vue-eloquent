<<<<<<< Updated upstream
import { Api } from '../src/index'
=======
import Api from '../src/api/Api'
>>>>>>> Stashed changes

export default class UserApi extends Api {
  protected override resource = 'users'

  constructor() {
    super()
  }
}
