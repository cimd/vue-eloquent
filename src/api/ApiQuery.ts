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

  /**
   * Add a where clause to the query
   *
   * @param {object} filter - The filter to apply to the query
   * @returns {this} The query instance
   */
  where(filter: any): this
  {
    Object.assign(this.filter, filter)
    refreshInspector().then()
    return this
  }

  /**
   * Add a where clause to the query
   *
   * @param {object} filter - The filter to apply to the query
   */
  static where(filter: any)
  {
    const self = this.instance()
    return self.where(filter)
  }

  /**
   * Add relationships to the query
   *
   * @param {string[]} relationships - The relationships to include in the query
   * @returns {this} The query instance
   */
  with(relationships: string[]): this
  {
    this.include = [...relationships]
    refreshInspector().then()
    return this
  }

  /**
   * Add attributes to the query
   *
   * @param {string[]} attributes - The attributes to append to the query
   * @returns {this} The query instance
   */
  append(attributes: string[]): this
  {
    this.attributes = [...attributes]
    refreshInspector().then()
    return this
  }

  /**
   * Select specific fields to be returned by the query
   *
   * @param {string[]} fields - The fields to select
   * @returns {this} The query instance
   */
  select(fields: string[]): this
  {
    this.fieldsSelection = [...fields]
    refreshInspector().then()
    return this
  }

  /**
   * Sort the results of the query
   *
   * @param {string[]} sorting - The sorting criteria
   * @returns {this} The query instance
   */
  sort(sorting: string[]): this
  {
    this.sorting = [...sorting]
    refreshInspector().then()
    return this
  }

  /**
   * Set the pagination options for the query
   *
   * @param {object} paging - The pagination options
   * @returns {this} The query instance
   */
  page(paging: IQueryPage): this
  {
    Object.assign(this.paging, paging)
    refreshInspector().then()
    return this
  }

  /**
   * Get the query parameters as a query string
   *
   * @returns {object} The query parameters
   */
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
