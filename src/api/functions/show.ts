import joinUrl from '../../helpers/strings/joinUrl'
import { http } from '../../http/http'
import ApiError from '../ApiError'
import { ApiResponse } from '../IApiResponse'
import ModelV2 from '../../model/ModelV2'

export type config = {
  resource: string,
  apiPrefix: string,
  model: ModelV2,
  transformResponse: (response: string, model: ModelV2) => Function,
}

export type callbacks = {
  retrieving?: (payload?: any) => void,
  retrieved?: (payload?: any) => void,
  retrievingError?: (err?: any) => void,
}

function show<T> (id: number, config: config, callbacks?: callbacks): Promise<ApiResponse<T>> {
  const url = joinUrl([config.apiPrefix, config.resource, id])

  if (callbacks && callbacks.retrieving) { callbacks.retrieving(id) }

  return new Promise((resolve, reject) => {
    http
      .get(url, {
        transformResponse: [(data: any) => config.transformResponse(data, config.model)],
      })
      .then((response: { data: any }) => {
        if (callbacks && callbacks.retrieved) { callbacks.retrieved(response.data) }

        resolve(response.data)
      })
      .catch((err: any) => {
        if (callbacks && callbacks.retrievingError) { callbacks.retrievingError(err) }

        reject(new ApiError('Show', err))
      })
  })
}

export default show
