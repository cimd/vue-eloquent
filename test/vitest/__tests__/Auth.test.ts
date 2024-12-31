import { beforeEach, describe, expect, it, vi } from 'vitest'
import Auth from '@/auth/Auth'
import { http } from '@/http/http'

vi.mock('@/http/http', () => ({
  http: {
    get: vi.fn(),
    post: vi.fn(),
    defaults: {
      headers: {
        common: {},
      },
    },
  },
  apiPrefix: '/api',
}))

describe('Auth', () => {
  let auth: Auth

  beforeEach(() => {
    auth = new Auth()
    vi.clearAllMocks()
  })
  it('should successfully log in a user with valid credentials', async () => {
    const mockToken = 'mock_token'
    const mockResponse = { data: { token: mockToken }}

    vi.spyOn(http, 'get').mockResolvedValueOnce({})
    vi.spyOn(http, 'post').mockResolvedValueOnce(mockResponse)

    const payload = { email: 'test@example.com', password: 'password123' }
    const result = await auth.login(payload)

    expect(http.get).toHaveBeenCalledWith('/api/csrf-cookie')
    expect(http.post).toHaveBeenCalledWith('/api/login', payload)
    expect(auth.token).toBe(mockToken)
    expect(http.defaults.headers.common.Authorization).toBe(
      `Bearer ${mockToken}`,
    )
    expect(result).toEqual(mockResponse.data)
  })
  it('should set the Authorization header after successful login', async () => {
    const mockToken = 'mock_token'
    const mockResponse = { data: { token: mockToken }}

    vi.spyOn(http, 'get').mockResolvedValueOnce({})
    vi.spyOn(http, 'post').mockResolvedValueOnce(mockResponse)

    const payload = { email: 'test@example.com', password: 'password123' }
    await auth.login(payload)

    expect(http.defaults.headers.common.Authorization).toBe(
      `Bearer ${mockToken}`,
    )
  })

  it('should override configs', () => {
    const newAuth = new Auth({
      login: '/login-2',
      logout: '/logout-2',
      forgotPassword: '/forgot-password-2',
      resetPassword: '/reset-password-2',
    })
    expect(newAuth.urls.login).toBe('/login-2')
    expect(newAuth.urls.logout).toBe('/logout-2')
  })
})
