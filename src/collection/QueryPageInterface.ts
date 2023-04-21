export interface IQueryPage {
    /*
    * The page number that the client is requesting
    */
    number?: number,

    /*
    * A limit on the number of resources to be returned
    */
    limit?: number
}
