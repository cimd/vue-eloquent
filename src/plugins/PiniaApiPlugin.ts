import { PiniaPluginContext } from 'pinia'
import StoreApi from '../states/StoreApi'
import _join from 'lodash/join'
import { IApiResponse } from '../api/IApiResponse'
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    persist?: {
      suffix?: string;
      name?: string;
      sync?: boolean;
    }
    $sync(): void;
    $save(): void;
    $get(): Promise<IApiResponse<{ data: any, store: string }>>;
  }
}

export default function PiniaApiPlugin(context: PiniaPluginContext) {
  console.log(context)

  context.store._liveSync = context.options.persist?.sync ?? false

  if (context.options.persist?.name) {
    context.store._storeName = context.options.persist.name
  } else {
    const joinArray = ['store', context.store.$id]
    context.options.persist?.suffix ? joinArray.push(context.options.persist.suffix) : null
    context.store._storeName = _join(joinArray, '-')
  }
  console.log('Store Name :', context.store._storeName)

  context.store.$subscribe((mutation, state) => {
    console.log('mutation', mutation)
    console.log('state', state)
    if (context.store._liveSync) {
      context.store.$save()
    }
  })
  context.store.$onAction((args) => {
    console.log('$onAction', args)
  })
  return {
    $sync: (sync: boolean = true) => {
      // console.log('sync: ', sync)
      context.store._liveSync = sync
    },
    $save: () => {
      // console.log('Pushing to API', {
      //   key: context.store._storeName,
      //   value: context.store.$state
      // })
      StoreApi.store({ key: context.store._storeName, value: context.store.$state }).then()
    },
    $get: (key: string): Promise<IApiResponse<{ data: any, store: string }>> => {
      StoreApi.get({ key: key ?? context.store._storeName }).then((response: IApiResponse<{ data: any, store: string }>) => {
        context.store.$sync(false)
        context.store.$state = response.data
        context.store.$sync(context.store._liveSync)
        resolve(response.data)
      })
    }
  }
}