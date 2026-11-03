import { describe, expect, it } from 'vitest'
import { createHttp } from '../../../src/http/http'
import http from '../../mocks/axios-mock'

describe('http', () => {
  it('sends credentials and the XSRF header to an API on another origin', () => {
    const client = createHttp({ baseURL: 'https://api.example.test' })

    expect(client.defaults.withCredentials).toBe(true)
    expect(client.defaults.withXSRFToken).toBe(true)
  })

  it('creates client', () => {
    createHttp({ httpClient: http, apiPrefix: 'v1' })
  })
})
