import Model from '@/model/Model'

export const serializeModel = (response: any[], model: Model) => {
  console.log('serializeModel: ', response, model)
  /**
   * If no response, return undefined
   */
  if (typeof response === 'undefined') {
    console.log('No response')
    return response
  }

  /**
   * If response is not an array, serialize the model
   */
  if (typeof response.length === 'undefined') {
    console.log('Serializing model')
    return new model(response)
  }

  /**
   * If response is an array, serialize each model
   */
  return response.map(el => {
    console.log('Serializing array')
    return new model(el)
  })
}
