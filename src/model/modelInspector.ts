import Model from './Model'
import { refreshInspector } from '../devtools/devtools'
import Collection from '../collection/Collection'

export const eloquentModels: any[] = []
export const childrenNodes: any[] = []
export const childrenStates: any[] = []

export const addModelInspector = async (model: Model<any>|Collection<any>) => {
  if (!model) throw new Error('Model is not defined')

  // console.log('Inspecting ', model.constructor.name)
  const type = model instanceof Model? 'model' : 'collection'

  eloquentModels.push(model)
  childrenNodes.push({
    id: model.uuid,
    label: model.constructor.name + '-' + eloquentModels.length,
    type: type
  })
  childrenStates.push({
    id: model.uuid,
    model: model,
    type: type
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

export const stateMap = (type: string, nodeUuid: string) => {
  if (type ==='model') {
    return modelStateMap(nodeUuid)
  }
  if (type === 'collection') {
    return collectionStateMap(nodeUuid)
  }
}

function modelStateMap(nodeUuid: string) {
  const model = childrenStates.find(element => element.id === nodeUuid)

  return {
    'model': [
      { key: 'uuid', value: model.model.uuid },
      { key: 'model', value: model.model.model },
      { key: 'defaultModel', value: model.model.defaultModel },
      { key: 'relations', value: model.model.relations },
    ],
    'state': [
      { key: 'isLoading', value: model.model.state.isLoading },
      { key: 'isSuccess', value: model.model.state.isSuccess },
      { key: 'isError', value: model.model.state.isError },
    ],
    'validation': [
      { key: '$model', value: model.model.$model },
      { key: '$invalid', value: model.model.$invalid },
      { key: 'validations', value: model.model.validations },
    ]
  }
}

function collectionStateMap(nodeUuid: string) {
  const collection = childrenStates.find(element => element.id === nodeUuid)

  return {
    'data': [
      { key: 'uuid', value: collection.model.uuid },
      { key: 'data', value: collection.model.data },
      { key: 'api', value: collection.model.api },
    ],
    'state': [
      { key: 'isLoading', value: collection.model.state.isLoading },
      { key: 'isSuccess', value: collection.model.state.isSuccess },
      { key: 'isError', value: collection.model.state.isError },
    ],
    'query': [
      { key: 'filter', value: collection.model.filter },
      { key: 'relationships', value: collection.model.include },
      { key: 'attributes', value: collection.model.attributes },
      { key: 'fields', value: collection.model.fieldsSelection },
      { key: 'paging', value: collection.model.paging },
      { key: 'sorting', value: collection.model.sorting },
    ],
    'broadcast': [
      { key: 'isBroadcasting', value: collection.model.isBroadcasting },
      { key: 'channel', value: collection.model.channel },
    ],
  }
}
