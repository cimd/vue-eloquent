import { serializeModel } from 'src/helpers/objects/SerializeModel'
import ModelV2 from 'src/model/ModelV2'

function transformResponse(response: string, model: ModelV2): any {
  const responseObj = JSON.parse(response)
  responseObj.data = serializeModel(responseObj.data, model)

  return responseObj
}

export default transformResponse
