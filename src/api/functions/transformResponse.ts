import { serializeModel } from '../../helpers/objects/SerializeModel'
import ModelV2 from '../../model/ModelV2'

function transformResponse(response: string, model: ModelV2): any {
  const responseObj = JSON.parse(response)
  if (model) {
    responseObj.data = serializeModel(responseObj.data, model)
  }

  return responseObj
}

export default transformResponse
