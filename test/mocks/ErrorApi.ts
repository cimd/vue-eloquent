import { Api } from '@/index'

export default class ErrorApi extends Api {
  protected resource = 'errors'

  constructor() {
    super()
  }
}
