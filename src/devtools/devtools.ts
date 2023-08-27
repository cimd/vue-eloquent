import { setupDevtoolsPlugin } from '@vue/devtools-api'
import { App, nextTick } from 'vue'
import { useModelInspector } from '../model/modelInspector'

const inspectorId = 'vue-eloquent-devtools-plugin'
let API: any

export function setupDevtools(app: App) {
  // @ts-ignore
  setupDevtoolsPlugin({
    id: inspectorId,
    label: 'Vue Eloquent',
    packageName: 'vue-eloquent',
    homepage: 'https://vue-eloquent.netlify.app/',
    app
  },
  api => {
    API = api
    console.log('🚀 Vue Eloquent DevTools Plugin installed')

    api.addInspector({
      id: inspectorId,
      label: 'Vue Eloquent',
      icon: 'api',
    })

    api.on.getInspectorTree((payload, _context) => {
      if (payload.inspectorId === inspectorId) {
        payload.rootNodes =
            [
              {
                id: 'Models',
                label: 'Models',
                children: useModelInspector().childrenNodes
              },
              {
                id: 'Collections',
                label: 'Collections'
              }
            ]
      }
    })

    api.on.getInspectorState((payload, _context) => {
      if (payload.inspectorId === inspectorId) {
        if (payload.nodeId) {
          // console.log(payload.nodeId)
          const node = useModelInspector().childrenStates.find(el => el.id === payload.nodeId)
          // console.log(node)
          if (node === undefined) {
            payload.state = {}
            return
          }
          // console.log(node)
          payload.state = {
            'model': [
              { key: 'uuid', value: node.model.uuid },
              { key: 'model', value: node.model.model },
              { key: 'defaultModel', value: node.model.defaultModel },
              { key: 'relations', value: node.model.relations },
            ],
            'state': [
              { key: 'isLoading', value: node.model.state.isLoading },
              { key: 'isSuccess', value: node.model.state.isSuccess },
              { key: 'isError', value: node.model.state.isError },
            ],
            'validation': [
              { key: '$model', value: node.model.$model },
              { key: '$invalid', value: node.model.$invalid },
              { key: 'validations', value: node.model.validations },
            ]
          }
        }
      }
    })

    // api.on.inspectComponent((payload, context) => {
    //   payload.instanceData.state.push({
    //     type: stateType,
    //     key: '$hello',
    //     value: data.message
    //   })
    // })
  })
}

export const refreshInspector = async () => {
  setTimeout(async () => {
    await nextTick()
    API?.sendInspectorTree(inspectorId)
    API?.sendInspectorState(inspectorId)
  }, 100)
}
