import { setupDevtoolsPlugin } from '@vue/devtools-api'
import { App } from 'vue'
import { useModelInspector } from '../model/modelInspector'

const inspectorId = 'vue-eloquent-devtools-plugin'

export function setupDevtools(app: App) {
  setupDevtoolsPlugin({
    id: inspectorId,
    label: 'Vue Eloquent',
    packageName: 'vue-eloquent',
    homepage: 'https://vue-eloquent.netlify.app/',
    app
  },
  api => {
    console.log('🚀 Vue Eloquent DevTools Plugin installed')

    api.addInspector({
      id: inspectorId,
      label: 'Vue Eloquent',
      icon: 'api',
    })

    api.on.getInspectorTree((payload, context) => {
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

    api.on.getInspectorState((payload, context) => {
      if (payload.inspectorId === inspectorId) {
        if (payload.nodeId) {
          const node = useModelInspector().childrenStates.find(el => el.id === payload.nodeId)
          // console.log(node)
          payload.state = {
            'model': [
              { key: 'uuid', value: node.state.uuid },
              { key: 'model', value: node.state.model },
              { key: 'defaultModel', value: node.state.defaultModel },
            ],
            'state': [
              { key: 'isLoading', value: node.state.state.isLoading },
              { key: 'isSuccess', value: node.state.state.isSuccess },
              { key: 'isError', value: node.state.state.isError },
            ],
            'validation': [
              { key: '$model', value: node.state.$model },
              { key: '$invalid', value: node.state.$invalid },
              { key: 'validations', value: node.state.validations },
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
