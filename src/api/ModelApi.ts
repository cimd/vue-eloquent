import Api from '@/api/Api'

// TODO: Testing generic api
export default class ModelApi extends Api {
  override resource = 'eloquent-api/models'

  constructor() {
    super()
  }
}
