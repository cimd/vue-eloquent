import { reactive } from 'vue'
import type { IQuery } from '../collection/IQuery'
import type { IQueryPage } from '../collection/IQueryPage'

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

  static where(filter: any)
  {
    const self = this.instance()
    Object.assign(self.filter, filter)
    return self
  }

  public with(relationships: string[]): this
  {
    this.include = [...relationships]
    return this
  }
  public select(fields: string[]): this
  {
    this.fieldsSelection = [...fields]
    return this
  }
  public sort(sorting: string[]): this
  {
    this.sorting = [...sorting]
    return this
  }
  public page(paging: IQueryPage): this
  {
    Object.assign(this.paging, paging)
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
    if (this.paging) {
      qs.page = this.paging
    }

    return qs
  }
}
