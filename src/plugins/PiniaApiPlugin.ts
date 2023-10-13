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
    // console.log('mutation', _mutation)
    // console.log('state', _state)
    // console.log('$subscribe', {
    //   _liveSync: context.store._liveSync
    // })
    if (context.store._liveSync) {
      context.store.$save()
    }
  })
  context.store.$onAction((args) => {
    console.log('$onAction', args)
  })
  return {
    $sync: (sync: boolean = true) => {
      // console.log('$sync', sync)
      context.store._liveSync = sync
    },
    $save: async (): Promise<IApiResponse<{ data: any, store: string }>> => {
      // console.log('$save', {
      //   _liveSync: context.store._liveSync
      // })
      const response: IApiResponse<{ data: any, store: string }> = await StoreApi.store({ key: context.store._storeName, value: context.store.$state })
      // console.log(response)
      return response
    },
    $get: async (key: string): Promise<IApiResponse<{ data: any, store: string }>> => {
      const response: IApiResponse<{ data: any, store: string }> = await StoreApi.get({ key: key ?? context.store._storeName })
      context.store.$sync(false)
      context.store.$state = response.data
      context.store.$sync(context.options.persist?.sync)

      // console.log('$get', {
      //   options: context.options.persist,
      //   _liveSync: context.store._liveSync
      // })
      // console.log(response)
      return response
    }
  }
}
