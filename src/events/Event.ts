import { Subject } from 'rxjs'
import EventError from './EventError'
import { BroadcastMessage } from './EventTypes'
import { onBeforeUnmount } from 'vue'

export default abstract class Event {
  event: Subject<any>

  protected constructor() {
    this.event = this.initObservable()

    onBeforeUnmount(() => {
      this.unsubscribe()
    })
  }

  private initObservable(): Subject<any>
  {
    return new Subject()
  }

  protected unsubscribe(): void
  {
    // console.log('disconnect')
    this.disconnecting()
  }

  protected disconnecting(): void
  {
    // sends message to disconnect subscribers
    return
  }

  protected onError(error: any): void
  {
    // console.error(error)
    throw new EventError('Event', error)
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
