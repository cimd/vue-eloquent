import { Subject } from 'rxjs'
import ListenerError from './ListenerError'

export default abstract class Listener {

  private event: Subject<number>
  protected constructor(e: Subject<number>)
  {
    if (!e) throw new ListenerError('Constructor', new Error('Event is not defined'))
    
    this.event = e
    this.subscribe()

    // console.log('Providing Listener: ', this.constructor.name)
    // provide(this.constructor.name, this)

    // onBeforeUnmount(() => {
    //   this.unsubscribe()
    // })
  }

  protected subscribe(): void
  {
    this.event.subscribe({
      next: (message) => {
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

  public handle(event: any): void | any
  {
    return event
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
