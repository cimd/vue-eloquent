import { broadcast } from '../index'
import { Subject } from 'rxjs'
import EventError from './EventError'
import Channel from '../events/Channel'
import PresenceChannel from '../events/PresenceChannel'
import { BroadcastMessage } from './EventTypes'
import { onBeforeUnmount } from 'vue'
import PrivateChannel from '../events/PrivateChannel'

export default abstract class Event {

  protected $broadcast: any
  public event: Subject<any>
  protected channel: string

  protected constructor() {
    this.$broadcast = broadcast
    this.initBroadcast()
    this.event = this.initObservable()

    onBeforeUnmount(() => {
      this.disconnect()
    })
  }

  private initBroadcast(): void
  {
    this.channel = this.broadcastOn().channel
    // console.log(this.channel)
    const events = this.broadcastAs()

    // console.log(this.$broadcast)
    const bc = this.$broadcast
      .channel(this.channel)
      .error((error: any) => {
        this.onError(error)
        throw new EventError('Event', error)
      })

    if (events.length === 1){
      // console.log(events)
      bc.listen('.' + events[ 0 ], (e: any) => {
        if(this.broadcastWhen()) {
          this.onMessage(events[ 0 ], e)
        }
      })
    }
    else {
      // If multiple events are listened to, add an event name to the message
      events.forEach((event: string) => {
        // console.log(event)
        bc.listen('.' + event, (e: any) => {
          if(this.broadcastWhen()) {
            this.onMessage(event, e)
          }
        })
      })
    }
  }

  private initObservable(): Subject<any>
  {
    return new Subject()
  }

  protected disconnect(): void
  {
    // console.log('disconnect')
    this.disconnecting()
    this.$broadcast.leaveChannel(this.channel)
  }

  protected disconnecting(): void
  {
    // sends message to disconnect subscribers
    return
  }

  protected abstract broadcastOn(): Channel | PresenceChannel | PrivateChannel

  protected abstract broadcastAs(): string[]

  protected broadcastWhen(): boolean
  {
    return true
  }

  protected onError(error: any): void
  {
    // console.error(error)
    throw new EventError('Event Message', error)
  }

  protected onMessage(event: string, message: any): void
  {
    const m: BroadcastMessage = {
      event,
      message
    }
    // console.log(m)
    this.event.next(m)
  }

  onMockMessage(event: string, message: any): void
  {
    const m: BroadcastMessage = {
      event,
      message
    }
    // console.log(m)
    this.event.next(m)
  }
}
