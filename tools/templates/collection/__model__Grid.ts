import DataGrid from 'src/app/models/collection/DataGrid'
import { reactive } from 'vue'

export default class __model__sGrid extends DataGrid {
  protected api = __model__Api

  protected channel = '__model__'

  public data = reactive([] as any[])

  protected gridId = '__model__Grid'

  public filter = reactive({
  })

  constructor(__model__s?: any[]){
    super()
    this.factory(__model__s)
  }
}
