export interface IApi {
    resource: string
    apiPrefix: string
    dates: string[]

    get(payload?: any): Promise<any>
    show(id: number): Promise<any>
    store<T>(payload: T): Promise<{ data: T }>
    batchStore(payload: any[]): Promise<any>
    update(payload: any): Promise<any>
    batchUpdate(payload: any[]): Promise<any>
    delete(payload: any): Promise<any>
    destroy(payload: any | number): Promise<any>
    destroyBatch(payload: any[]): Promise<any>
    logs(id: number): Promise<any>

    transformResponse(response: string): any
    fetching(payload: any): void
    fetchingError(err: any): void
    fetched(payload: any): void
    retrieving(payload: any): void
    retrievingError(err: any): void
    retrieved(payload: any): void
    storing(payload: any): void
    storingError(err: any): void
    stored(payload: any): void
    updating(payload: any): void
    updatingError(err: any): void
    updated(payload: any): void
    destroying(payload: any): void
    destroyingError(err: any): void
    destroyed(payload: any): void
}
