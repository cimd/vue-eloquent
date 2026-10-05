import { reactive } from 'vue'
import type { Query } from '@/collection/IQuery'
import type { QueryPage } from '@/collection/IQueryPage'
import { refreshInspector } from '@/devtools/devtools'
import type { InstanceOf } from '@/helpers/InstanceOf'

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
  protected paging: QueryPage = reactive({})
  /**
   * Sorting used on GET request
   */
  protected sorting: string[] = reactive([])

  protected constructor() {
    return
  }

  /**
   * Returns instance
   *
   * @static
   * @return { InstanceOf<this> }
   */
  static instance<T extends typeof ApiQuery>(this: T): InstanceOf<T> {
    const Ctor = this as unknown as new () => InstanceOf<T>
    return new Ctor()
  }

  /**
   * Add a where clause to the query
   *
   * @param {object} filter - The filter to apply to the query
   * @return { this }
   */
  static where<T extends typeof ApiQuery>(this: T, filter: any): InstanceOf<T> {
    const self = this.instance()
    return self.where(filter)
  }

  /**
   * Add relationships to the query
   *
   * @param {string[]} relationships - The relationships to include in the query
   * @returns {this} The query instance
   */
  static with<T extends typeof ApiQuery>(this: T, relationships: string[]): InstanceOf<T> {
    const self = this.instance()
    return self.with(relationships)
  }

  /**
   * Add attributes to the query
   *
   * @param {string[]} attributes - The attributes to append to the query
   * @returns {this} The query instance
   */
  static append<T extends typeof ApiQuery>(this: T, attributes: string[]): InstanceOf<T> {
    const self = this.instance()
    return self.append(attributes)
  }

  /**
   * Select specific fields to be returned by the query
   *
   * @param {string[]} fields - The fields to select
   * @returns {this} The query instance
   */
  static select<T extends typeof ApiQuery>(this: T, fields: string[]): InstanceOf<T> {
    const self = this.instance()
    return self.select(fields)
  }

  /**
   * Sort the results of the query
   *
   * @param {string[]} sorting - The sorting criteria
   * @returns {this} The query instance
   */
  static sort<T extends typeof ApiQuery>(this: T, sorting: string[]): InstanceOf<T> {
    const self = this.instance()
    return self.sort(sorting)
  }

  /**
   * Sort the a given date column in descending order
   *
   * @param {string} column - The date column to be sorted desc by
   * @returns {this} The query instance
   */
  static latest<T extends typeof ApiQuery>(this: T, column: string): InstanceOf<T> {
    const self = this.instance()
    return self.latest(column)
  }

  /**
   * Set the pagination options for the query
   *
   * @param {object} paging - The pagination options
   * @returns {this} The query instance
   */
  static paginate<T extends typeof ApiQuery>(this: T, paging: QueryPage): InstanceOf<T> {
    const self = this.instance()
    return self.paginate(paging)
  }

  /**
   * Add a where clause to the query
   *
   * @param {object} filter - The filter to apply to the query
   * @returns {this} The query instance
   */
  where(filter: any): this {
    Object.assign(this.filter, filter)
    refreshInspector().then()
    return this
  }

  /**
   * Add relationships to the query
   *
   * @param {string[]} relationships - The relationships to include in the query
   * @returns {this} The query instance
   */
  with(relationships: string[]): this {
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
  append(attributes: string[]): this {
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
  select(fields: string[]): this {
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
  sort(sorting: string[]): this {
    this.sorting = [...sorting]
    refreshInspector().then()
    return this
  }

  /**
   * Sort the a given date column in descending order
   *
   * @param {string} column - The date column to be sorted desc by
   * @returns {this} The query instance
   */
  latest(column: string): this {
    this.sorting = [...this.sorting, `-${column}`]
    refreshInspector().then()
    return this
  }

  /**
   * Set the pagination options for the query
   *
   * @param {object} paging - The pagination options
   * @returns {this} The query instance
   */
  paginate(paging: QueryPage): this {
    Object.assign(this.paging, paging)
    refreshInspector().then()
    return this
  }

  /**
   * Get the query parameters as a query string
   *
   * @returns {object} The query parameters
   */
  protected queryString(): Query {
    const qs: Query = {}
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
      qs.paginate = this.paging
    }

    return qs
  }
}
