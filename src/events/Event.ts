import { Subject } from 'rxjs'
import EventError from './EventError'
import { BroadcastMessage } from './EventTypes'
import { onBeforeUnmount } from 'vue'

function onDispatch(dispatch: any, _context: any) {
  console.log(dispatch, _context)
  console.log('INSIDE DECORATOR')

  function decoratedDispatch(this: any, ...args: any[]) {
    console.log('LOG: Entering method.')
    const result = dispatch.call(this, ...args)
    console.log('LOG: Exiting method.')
    return result
  }

  return decoratedDispatch
}

const MyDecorator = (
  originalMethod: Function,
  _context: ClassMethodDecoratorContext
) => {
  function ReplacementMethod(this: any, ...args: any[]) {
    console.log(this)
    const result = originalMethod.call(this, ...args)
    return result
  }
  return ReplacementMethod
}

let event: Subject<any>
export default abstract class Event {

  event: Subject<any>

  protected constructor() {
    this.event = this.initObservable()

    onBeforeUnmount(() => {
      this.disconnect()
    })
  }
  
  @MyDecorator
  dispatch()
  {
    console.log('dispatching')
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

  protected disconnect(): void
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

  private initObservable(): Subject<any>
  {
    event = new Subject()
    return event
  }
}
