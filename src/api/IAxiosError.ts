import type { AxiosHeaders } from 'axios'

export interface IAxiosError extends Error {
  code?: string
  config: any
  request: any
  /**
   * Not set when no response was received, e.g. network errors and timeouts
   */
  response?: {
    data?: any
    status?: number
    statusText?: string
    headers?: AxiosHeaders
    config?: any
    request?: any
  }
}

export type AxiosError = IAxiosError
