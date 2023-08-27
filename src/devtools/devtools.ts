import { setupDevtoolsPlugin } from '@vue/devtools-api'
import { App } from 'vue'

export function setupDevtools(_app: App) {
  setupDevtoolsPlugin({
    id: 'vue-eloquent-devtools-plugin',
    label: 'Vue Eloquent Plugin',
    packageName: 'vue-eloquent',
    homepage: 'https://vue-eloquent.netlify.app/'
  }, _api => {
    console.log('🚀 Vue Eloquent Devtools Plugin installed 🚀')
  })
}
