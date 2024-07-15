import ApiV2 from './ApiV2'


export default class BaseApiV2 extends ApiV2 {

  constructor(resource: string) {
    console.log(resource)
    super({ resource: resource })
  }
}
