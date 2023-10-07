import Api from '../api/Api'

// TODO: Testing generic api
export default class StoreApi extends Api {
  protected resource = 'v1/eloquent-api/stores'

  constructor() {
    super()
  }
}
