import { PiniaPluginContext } from 'pinia'

export default function piniaPlugin(context: PiniaPluginContext) {
  console.log(context)
  context.store.test = 'test'
  context.store.$subscribe((args) => {
    console.log('$subscribe', args)
  })
  context.store.$onAction((args) => {
    console.log('$onAction', args)
  })
  return { secret: 'the cake is a lie' }
}
