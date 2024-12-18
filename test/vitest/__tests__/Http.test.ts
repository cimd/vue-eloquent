import { describe, it } from 'vitest'
import { createHttp } from '../../../src/http/http'
import http from '../../mocks/axios-mock'

describe('http', () => {
  it('creates client', () => {
    createHttp({ httpClient: http, apiPrefix: 'v1' })
  })
})
