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
    $sync(sync: boolean): void;
    $save(): void;
    $get(key: string): Promise<IApiResponse<{ data: any, store: string }>>;
  }
}

export default function PiniaApiPlugin(context: PiniaPluginContext) {
  // console.log(context)

  context.store._liveSync = context.options.persist?.sync ?? false

  if (context.options.persist?.name) {
    context.store._storeName = context.options.persist.name
  } else {
    const joinArray = ['store', context.store.$id]
    context.options.persist?.suffix ? joinArray.push(context.options.persist.suffix) : null
    context.store._storeName = _join(joinArray, '-')
  }
  // console.log('Store Name :', context.store._storeName)

  context.store.$subscribe((_mutation, _state) => {
    // console.log('mutation', mutation)
    // console.log('state', state)
    if (context.store._liveSync) {
      context.store.$save()
    }
  })
  context.store.$onAction((args) => {
    console.log('$onAction', args)
  })
  return {
    $sync: (sync: boolean = true) => {
      context.store._liveSync = sync
    },
    $save: () => {
      StoreApi.store({ key: context.store._storeName, value: context.store.$state }).then()
    },
    $get: async (key: string): Promise<IApiResponse<{ data: any, store: string }>> => {
      const response: IApiResponse<{ data: any, store: string }> = await StoreApi.get({ key: key ?? context.store._storeName })
      context.store.$sync(false)
      context.store.$state = response.data
      context.store.$sync(context.store._liveSync)

      return response.data
    }
  }
}
