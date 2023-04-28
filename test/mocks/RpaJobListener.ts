import { Listener } from '../../src/index'
import { Subject } from 'rxjs'
import { inject } from 'vue'

export default class RpaJobListener extends Listener {
  constructor(eventName: string)
  {
    const eventClass = inject(eventName) as any
    // console.log(eventClass)
    super(<Subject<number>>eventClass.event)
  }

  handle(message: any): any
  {
    console.log(message)
    return message
  }
}
