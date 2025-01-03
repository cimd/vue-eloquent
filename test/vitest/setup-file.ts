// This file will be run before each test file
import { afterAll, afterEach, beforeAll } from 'vitest'
import { createHttp } from '@/http/http'
import http from 'test/mocks/axios-mock'
import { server } from 'test/mocks/server'

beforeAll(() => {
  createHttp({ httpClient: http })
  server.listen()
})

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers()
})
// Clean up after the tests are finished.
afterAll(() => {
  server.close()
})
