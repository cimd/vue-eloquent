import { Listener } from '../../src/index'
import { Subject } from 'rxjs'
import Event from '../../src/events/Event'

export default class PostsListener extends Listener {
  message = {}
  constructor(eventClass: Event)
  {
    // const eventClass = inject(eventName) as any
    // console.log(eventClass)
    super(<Subject<number>>eventClass.event)
  }

  handle(message: any): any
  {
    console.log('listened:', message)
    this.message = message
    return message
  }
}
