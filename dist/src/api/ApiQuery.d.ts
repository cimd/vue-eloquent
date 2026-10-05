import { Query } from '../collection/IQuery';
import { QueryPage } from '../collection/IQueryPage';
import { InstanceOf } from '../helpers/InstanceOf';
export default abstract class ApiQuery {
    /**
     * Filters used on GET request
     */
    protected filter: any;
    /**
     * Relations used on GET request
     */
    protected include: string[];
    /**
     * Attributes used on GET request
     */
    protected attributes: string[];
    /**
     * Fields to requested through API
     */
    protected fieldsSelection: string[];
    /**
     * Pagination used on GET request
     */
    protected paging: QueryPage;
    /**
     * Sorting used on GET request
     */
    protected sorting: string[];
    protected constructor();
    /**
     * Returns instance
     *
     * @static
     * @return { InstanceOf<this> }
     */
    static instance<T extends typeof ApiQuery>(this: T): InstanceOf<T>;
    /**
     * Add a where clause to the query
     *
     * @param {object} filter - The filter to apply to the query
     * @return { this }
     */
    static where<T extends typeof ApiQuery>(this: T, filter: any): InstanceOf<T>;
    /**
     * Add relationships to the query
     *
     * @param {string[]} relationships - The relationships to include in the query
     * @returns {this} The query instance
     */
    static with<T extends typeof ApiQuery>(this: T, relationships: string[]): InstanceOf<T>;
    /**
     * Add attributes to the query
     *
     * @param {string[]} attributes - The attributes to append to the query
     * @returns {this} The query instance
     */
    static append<T extends typeof ApiQuery>(this: T, attributes: string[]): InstanceOf<T>;
    /**
     * Select specific fields to be returned by the query
     *
     * @param {string[]} fields - The fields to select
     * @returns {this} The query instance
     */
    static select<T extends typeof ApiQuery>(this: T, fields: string[]): InstanceOf<T>;
    /**
     * Sort the results of the query
     *
     * @param {string[]} sorting - The sorting criteria
     * @returns {this} The query instance
     */
    static sort<T extends typeof ApiQuery>(this: T, sorting: string[]): InstanceOf<T>;
    /**
     * Sort the a given date column in descending order
     *
     * @param {string} column - The date column to be sorted desc by
     * @returns {this} The query instance
     */
    static latest<T extends typeof ApiQuery>(this: T, column: string): InstanceOf<T>;
    /**
     * Set the pagination options for the query
     *
     * @param {object} paging - The pagination options
     * @returns {this} The query instance
     */
    static paginate<T extends typeof ApiQuery>(this: T, paging: QueryPage): InstanceOf<T>;
    /**
     * Add a where clause to the query
     *
     * @param {object} filter - The filter to apply to the query
     * @returns {this} The query instance
     */
    where(filter: any): this;
    /**
     * Add relationships to the query
     *
     * @param {string[]} relationships - The relationships to include in the query
     * @returns {this} The query instance
     */
    with(relationships: string[]): this;
    /**
     * Add attributes to the query
     *
     * @param {string[]} attributes - The attributes to append to the query
     * @returns {this} The query instance
     */
    append(attributes: string[]): this;
    /**
     * Select specific fields to be returned by the query
     *
     * @param {string[]} fields - The fields to select
     * @returns {this} The query instance
     */
    select(fields: string[]): this;
    /**
     * Sort the results of the query
     *
     * @param {string[]} sorting - The sorting criteria
     * @returns {this} The query instance
     */
    sort(sorting: string[]): this;
    /**
     * Sort the a given date column in descending order
     *
     * @param {string} column - The date column to be sorted desc by
     * @returns {this} The query instance
     */
    latest(column: string): this;
    /**
     * Set the pagination options for the query
     *
     * @param {object} paging - The pagination options
     * @returns {this} The query instance
     */
    paginate(paging: QueryPage): this;
    /**
     * Get the query parameters as a query string
     *
     * @returns {object} The query parameters
     */
    protected queryString(): Query;
}
