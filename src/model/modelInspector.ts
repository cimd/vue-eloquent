import Model from './Model'
import { refreshInspector } from '../devtools/devtools'

export const eloquentModels: any[] = []
export const childrenNodes: any[] = []
export const childrenStates: any[] = []

export const addModelInspector = async (model: Model) => {
  if (!model) throw new Error('Model is not defined')

  console.log('Inspecting ', model.constructor.name)
  eloquentModels.push(model)
  childrenNodes.push({
    id: model.uuid,
    label: model.constructor.name + '-' + eloquentModels.length,
  })
  childrenStates.push({
    id: model.uuid,
    model: model
  })
  // console.log(childrenNodes)
  await refreshInspector()
}

export const useModelInspector = () => {
  return { eloquentModels, childrenNodes, childrenStates }
}
