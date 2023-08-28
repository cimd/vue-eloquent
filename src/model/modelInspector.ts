import Model from './Model'
import { refreshInspector } from '../devtools/devtools'

export const eloquentModels: any[] = []
export const childrenNodes: any[] = []
export const childrenStates: any[] = []

export const addModelInspector = async (model: Model) => {
  if (!model) throw new Error('Model is not defined')

  // console.log('Inspecting ', model.constructor.name)
  eloquentModels.push(model)
  childrenNodes.push({
    id: model.uuid,
    label: model.constructor.name + '-' + eloquentModels.length,
  })
  childrenStates.push({
    id: model.uuid,
    model: model
  })

  // TODO: Should the model be removed from the inspector?
  //  It doesn't help debugging...
  // onBeforeUnmount(async () => {
  //   console.log('Removing model from inspector: ', model.uuid)
  //   eloquentModels = eloquentModels.filter(element => element.uuid !== model.uuid)
  //   childrenNodes = childrenNodes.filter(element => element.id !== model.uuid)
  //   childrenStates = childrenStates.filter(element => element.id !== model.uuid)
  //   await refreshInspector()
  // })

  await refreshInspector()
}

export const useModelInspector = () => {
  return { eloquentModels, childrenNodes, childrenStates }
}
