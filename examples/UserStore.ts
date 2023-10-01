import { Store } from '../src/index'
import { reactive } from 'vue'

export default class UserStore extends Store {
  protected prefix = 1
  protected liveSync = true

  state = reactive({
    id: 0,
    user: {
      id: 0,
      name: '',
      age: 0
    }
  })

  constructor() {
    super()
    super.init()
  }
}
