import { Listener } from '../../src/index'
import { Subject } from 'rxjs'
import Broadcast from '@/events/Broadcast'
import { BroadcastType } from '../../src/events/EventTypes'
import PostsCollection from '../../examples/PostsCollection'

export default class PostsListener extends Listener {
  message: any
  posts: PostsCollection
  constructor(eventClass: Broadcast, posts: PostsCollection)
  {
    // const eventClass = inject(eventName) as any
    // console.log(eventClass)
    super(<Subject<number>>eventClass.event)
    this.posts = posts
  }

  handle(event: BroadcastType): BroadcastType
  {
    // console.log('listened:', event)
    // this.posts.data.push(event.message)
    this.message = event
    return event
  }
}
