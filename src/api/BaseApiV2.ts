import { ApiV2 } from '../index'


export default class BaseApiV2 extends ApiV2 {

  $resource: string

  protected constructor(resource: string) {
    super()

    this.$resource = resource
  }
}
