import Model from './Model'

export const eloquentModels: any[] = []
export const childrenNodes: any[] = []
export const childrenStates: any[] = []

export const addModelInspector = (model: Model) => {
  if (!model) throw new Error('Model is not defined')

  console.log('Inspecting ', model.constructor.name)
  eloquentModels.push(model)
  childrenNodes.push({
    id: model.constructor.name + '-' + eloquentModels.length,
    label: model.constructor.name + '-' + eloquentModels.length,
  })
  childrenStates.push({
    id: model.constructor.name + '-' + eloquentModels.length,
    state: model
  })
  console.log(childrenNodes)
}

export const useModelInspector = () => {
  return { eloquentModels, childrenNodes, childrenStates }
}