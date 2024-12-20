import type { AxiosHeaders } from 'axios'

export interface IAxiosError {
  code: string
  config: any
  request: any
  response: {
    data?: any
    status?: number
    statusText?: string
    headers?: AxiosHeaders
    config?: any
    request?: any
  }
}

export interface AxiosError extends Error {
  code: string
  config: any
  request: any
  response: {
    data?: any
    status?: number
    statusText?: string
    headers?: AxiosHeaders
    config?: any
    request?: any
  }
}
