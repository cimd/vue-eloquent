import { reactive } from 'vue'
import type { IQuery } from '../collection/IQuery'
import type { IQueryPage } from '../collection/IQueryPage'
import { refreshInspector } from '../devtools/devtools'

export default abstract class ApiQuery {

  /**
   * Filters used on GET request
   */
  protected filter: any = reactive({})
  /**
   * Relations used on GET request
   */
  protected include: string[] = reactive([])
  /**
   * Attributes used on GET request
   */
  protected attributes: string[] = reactive([])
  /**
   * Fields to requested through API
   */
  protected fieldsSelection: string[] = reactive([])
  /**
   * Pagination used on GET request
   */
  protected paging: IQueryPage = reactive({ })
  /**
   * Sorting used on GET request
   */
  protected sorting: string[] = reactive([])

  protected constructor()
  {
    return
  }

  public where(filter: any)
  {
    Object.assign(this.filter, filter)
    refreshInspector().then()
    return this
  }

  static where(filter: any)
  {
    const self = this.instance()
    return self.where(filter)
  }

  with(relationships: string[]): this
  {
    this.include = [...relationships]
    refreshInspector().then()
    return this
  }
  append(attributes: string[]): this
  {
    this.attributes = [...attributes]
    refreshInspector().then()
    return this
  }
  select(fields: string[]): this
  {
    this.fieldsSelection = [...fields]
    refreshInspector().then()
    return this
  }
  sort(sorting: string[]): this
  {
    this.sorting = [...sorting]
    refreshInspector().then()
    return this
  }
  page(paging: IQueryPage): this
  {
    Object.assign(this.paging, paging)
    refreshInspector().then()
    return this
  }

  protected queryString(): IQuery
  {
    const qs: IQuery = {}
    if (this.filter) {
      qs.filter = this.filter
    }
    if (this.include.length) {
      qs.include = this.include.join(',')
    }
    if (this.fieldsSelection.length) {
      qs.fields = this.fieldsSelection.join(',')
    }
    if (this.sorting.length) {
      qs.sort = this.sorting.join(',')
    }
    if (this.attributes.length) {
      qs.append = this.attributes
    }
    if (this.paging) {
      qs.page = this.paging
    }

    return qs
  }
}
