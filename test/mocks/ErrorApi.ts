import { Api } from '@/index'

export default class ErrorApi extends Api {
  protected override resource = 'errors'

  constructor() {
    super()
  }
}
