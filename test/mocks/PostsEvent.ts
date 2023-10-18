import { Event } from '../../src/index'
import Channel from '../../src/events/Channel'
// import PresenceChannel from '../../src/events/PresenceChannel'

export default class PostsEvent extends Event {
  constructor() {
    super()
  }

  protected broadcastOn()
  {
    // return new PresenceChannel('rpa-jobs')
    return new Channel('rpa-jobs')
  }

  protected broadcastAs()
  {
    return ['created', 'updated']
  }

  protected broadcastWhen()
  {
    return true
  }
}
