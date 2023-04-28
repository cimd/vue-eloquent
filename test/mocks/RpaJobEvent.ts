import { Event } from '../../src/index'

export default class RpaJobEvent extends Event {
  constructor(eventName?: string) {
    super(eventName)
  }

  protected broadcastOn(): string
  {
    // return new Channel('RPA')
    return 'rpa-jobs'
  }

  protected broadcastAs(): string[]
  {
    return ['created', 'updated']
  }

  protected broadcastWhen(): boolean
  {
    return true
  }

}
