import { broadcast } from '../index'
import { Subject } from 'rxjs'
import { provide } from 'vue'
import EventError from './EventError'

export default abstract class Event {

  protected $broadcast = broadcast
  public event: Subject<number>

  protected constructor(eventName?: string) {
    this.initBroadcast()
    this.event = this.initObservable()

    const name = eventName ?? this.constructor.name
    // console.log('Event Name: ', name)
    provide(name, this)

    // onBeforeUnmount(() => {
    //   this.disconnect()
    // })
  }

  private initBroadcast(): void {
    this.$broadcast
      .channel(<string>this.broadcastOn())
      .error((error: any) => {
        this.onError(error)
        throw new EventError('Event', error)
      })
      .listen('.' + this.broadcastAs(), (e: any) => {
        this.onMessage(e)
      })
  }

  private initObservable(): Subject<number>
  {
    return new Subject<number>()
  }

  protected disconnect(): void
  {
    console.log('disconnect')
    this.disconnecting()
    this.$broadcast.leaveChannel(<string>this.broadcastOn())
  }

  protected disconnecting(): void
  {
    // sends message to disconnect subscribers
    return
  }
  protected broadcastOn(): string
  // Channel | PresenceChannel | PrivateChannel
  {
    // return new Channel('')
    return ''
  }

  protected broadcastAs(): string
  {
    return ''
  }

  protected broadcastWhen(): boolean
  {
    return true
  }

  protected onError(error: any)
  {
    console.error(error)
  }

  protected onMessage(message: any)
  {
    // console.log(message)
    this.event.next(message)
  }
}
