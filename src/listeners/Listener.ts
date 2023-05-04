import { Subject } from 'rxjs'
import ListenerError from './ListenerError'
import { BroadcastMessage } from '../events/EventTypes'

export default abstract class Listener {

  private event: Subject<any>

  protected constructor(e: Subject<any>)
  {
    if (!e) throw new ListenerError('Constructor', new Error('Event is not defined'))

    this.event = e
    this.subscribe()
  }

  protected subscribe(): void
  {
    this.event.subscribe({
      next: (message: BroadcastMessage) => {
        // console.log(message)
        this.handle(message)
      },
      error: (error) => {
        console.log(error)
        this.onError(error)
        throw new ListenerError('Listener', error)
      },
      complete: () => {
        console.log('Complete')
        this.onComplete()
      }
    })
  }

  protected unsubscribe(): void
  {
    console.log('unsubscribe')
    this.event.unsubscribe()
  }

  public handle(message: any): void | any
  {
    return message
  }

  protected onError(error: any): void
  {
    console.log(error)
  }

  protected onComplete(): void
  {
    console.log('Completed')
  }
}
