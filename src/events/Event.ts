import { broadcast } from '../index'
import { Subject } from 'rxjs'
import EventError from './EventError'
import Channel from '../events/Channel'
import PresenceChannel from '../events/PresenceChannel'
// import { provide } from 'vue'

export default abstract class Event {

  protected $broadcast: any
  public event: Subject<any>
  protected channel: string

  protected constructor() {
    this.$broadcast = broadcast
    this.initBroadcast()
    this.event = this.initObservable()
    console.log(this.broadcastOn())
  }

  private initBroadcast(): void
  {
    this.channel = this.broadcastOn().channel
    console.log(this.channel)
    const events = this.broadcastAs()

    console.log(this.$broadcast)
    const bc = this.$broadcast
      .channel(this.channel)
      .error((error: any) => {
        this.onError(error)
        throw new EventError('Event', error)
      })

    if (events.length === 1){
      bc.listen('.' + events[ 0 ], (e: any) => {
        this.onMessage(e)
      })
    }
    else {
      // If multiple events are listened to, add an event name to the message
      events.forEach((event: string) => {
        bc.listen('.' + event, (e: any) => {
          this.onMessage({ event, message: e })
        })
      })
    }

    // console.log(this.$broadcast)

    // this.$broadcast
    //   .channel(this.broadcastOn())
    //   .error((error: any) => {
    //     this.onError(error)
    //     throw new EventError('Event', error)
    //   })
    //   .listen('.created', (e: any) => {
    //     this.onMessage(e)
    //   })
    //   .listen('.updated', (e: any) => {
    //     this.onMessage(e)
    //   })
    // console.log(this.$broadcast)
  }

  private initObservable(): Subject<any>
  {
    return new Subject()
  }

  protected disconnect(): void
  {
    console.log('disconnect')
    this.disconnecting()
    this.$broadcast.leaveChannel(this.channel)
  }

  protected disconnecting(): void
  {
    // sends message to disconnect subscribers
    return
  }

  protected abstract broadcastOn(): Channel | PresenceChannel

  protected abstract broadcastAs(): string[]

  protected broadcastWhen(): boolean
  {
    return true
  }

  protected onError(error: any): void
  {
    console.error(error)
  }

  protected onMessage(message: any): void
  {
    // console.log(message)
    this.event.next(message)
  }

  public onMockMessage(message: any): void
  {
    const m = {
      event: 'created',
      message: message
    }
    // console.log(message)
    this.event.next(m)
  }
}
