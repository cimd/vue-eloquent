import { setupDevtoolsPlugin } from '@vue/devtools-api'
import { App, nextTick } from 'vue'
import { stateMap, useModelInspector } from '../model/modelInspector'

const inspectorId = 'vue-eloquent'
const timelineLayerId = 'vue-eloquent'
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

    api.addTimelineLayer({
      id: timelineLayerId,
      color: 0xff984f,
      label: 'Vue Eloquent',
    })

    api.on.getInspectorTree((payload, _context) => {
      if (payload.inspectorId === inspectorId) {
        payload.rootNodes =
            [
              {
                id: 'Models',
                label: 'Models',
                children: useModelInspector().childrenNodes.filter(node => node.type === 'model')
              },
              {
                id: 'Collections',
                label: 'Collections',
                children: useModelInspector().childrenNodes.filter(node => node.type === 'collection')
              }
            ]
      }
    })

    api.on.getInspectorState((payload, _context) => {
      if (payload.inspectorId === inspectorId) {
        if (payload.nodeId) {
          const node = useModelInspector().childrenStates.find(el => el.id === payload.nodeId)
          if (node === undefined) {
            payload.state = {}
            return
          }

          payload.state = stateMap(node.type, node.id)
        }
      }
    })

  })
}

/**
* Refresh devtools inspector
*
* Tree + State
*/
export const refreshInspector = async () => {
  if (!API) return

  setTimeout(async () => {
    await nextTick()
    API?.sendInspectorTree(inspectorId)
    API?.sendInspectorState(inspectorId)
  }, 100)
}


/**
* Add timeline event
*/
export const addTimelineEvent = ({ data, title = 'Event' }) => {
  if (!API) return

  API.addTimelineEvent({
    layerId: timelineLayerId,
    event: {
      time: API.now(),
      data: data,
      title: title
    }
  })
}
