export interface IApiResponse<T> {
    data: T,
    count?: number,
    message?: string | string[]
}

export interface ApiResponse<T> {
    data: T,
    count?: number,
    message?: string | string[]
}
