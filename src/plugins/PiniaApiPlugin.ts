import { PiniaPluginContext } from 'pinia'
import StoreApi from './StoreApi'
import _join from 'lodash/join'
import { IApiResponse } from '../api/IApiResponse'
import 'pinia'
import { computed } from 'vue'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    persist?: {
      suffix?: string;
      name?: string;
      sync?: boolean;
    }
    $storeName(): void;
    $sync(sync?: boolean): void;
    $save(): Promise<IApiResponse<{ data: any, store: string }>>;
    $get(key?: string): Promise<IApiResponse<{ data: any, store: string }>>;
    $delete(key?: string): Promise<IApiResponse<{ data: any, store: string }>>;
  }
}

function storeName(context: PiniaPluginContext) {
  if (context.options.persist?.name) {
    return context.options.persist.name
  } else {
    const suffix = context.options.persist.suffix
    console.log('suffix: ', suffix)
    console.log('store: ', context.store)
    console.log('options: ', context.options)
    console.log('state: ',context.store[suffix])

    const joinArray = ['store', context.store.$id]
    context.options.persist?.suffix ? joinArray.push(context.store[suffix]) : null
    return _join(joinArray, '-')
  }
}

export default function PiniaApiPlugin(context: PiniaPluginContext) {
  if (!context.store) return

  if (!context.options?.persist) return

  console.log(context.store?.$id, context)
  // console.log(context)

  context.store._liveSync = context.options?.persist?.sync ?? false

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
    // console.log('$onAction', args)
  })
  return {
    $storeName: () => {
      context.store._storeName = storeName(context)
      console.log(context.store._storeName)
    },
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
    $get: async (key?: string): Promise<IApiResponse<{ data: any, store: string }>> => {
      console.log(context.store._storeName)
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
    },
    $delete: async (key?: string):Promise<IApiResponse<{ data: any, store: string }>> => {
      const response: IApiResponse<{ data: any, store: string }> = await StoreApi.destroy({ key: key ?? context.store._storeName })
      context.store.$sync(false)
      return response
    },
  }
}
