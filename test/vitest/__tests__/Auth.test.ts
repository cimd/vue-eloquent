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
    Auth.clearSession()
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

  it('should start a cookie session when the server sends no token', async () => {
    const mockResponse = { data: { data: { id: 1 } } }

    vi.spyOn(http, 'get').mockResolvedValueOnce({})
    vi.spyOn(http, 'post').mockResolvedValueOnce(mockResponse)

    const result = await auth.login({ email: 'test@example.com', password: 'password123' })

    expect(result).toEqual(mockResponse.data)
    expect(auth.token).toBeNull()
    expect(localStorage.getItem('sanctum_token')).toBeNull()
    expect(http.defaults.headers.common.Authorization).toBeUndefined()
    expect(auth.isAuthenticated()).toBe(true)
  })

  it('should drop a bearer token left from before when a cookie session starts', async () => {
    auth.token = 'old_token'
    http.defaults.headers.common.Authorization = 'Bearer old_token'

    vi.spyOn(http, 'get').mockResolvedValueOnce({})
    vi.spyOn(http, 'post').mockResolvedValueOnce({ data: { data: { id: 1 } } })

    await auth.login({ email: 'test@example.com', password: 'password123' })

    expect(auth.token).toBeNull()
    expect(http.defaults.headers.common.Authorization).toBeUndefined()
  })

  it('should not be authenticated without a token or a cookie session', () => {
    expect(auth.isAuthenticated()).toBe(false)
  })

  it('should be authenticated with a bearer token', () => {
    auth.token = 'mock_token'

    expect(auth.isAuthenticated()).toBe(true)
  })

  it('should forget the cookie session and the token on logout', async () => {
    auth.token = 'mock_token'
    localStorage.setItem('sanctum_session', '1')
    http.defaults.headers.common.Authorization = 'Bearer mock_token'
    vi.spyOn(http, 'post').mockResolvedValueOnce({ data: 'logout' })

    await auth.logout()

    expect(http.post).toHaveBeenCalledWith('/api/logout')
    expect(auth.isAuthenticated()).toBe(false)
    expect(http.defaults.headers.common.Authorization).toBeUndefined()
  })

  it('should keep the sign in when the logout fails', async () => {
    localStorage.setItem('sanctum_session', '1')
    vi.spyOn(http, 'post').mockRejectedValueOnce(new Error('network'))
    vi.spyOn(console, 'error').mockImplementation(() => undefined)

    await expect(auth.logout()).rejects.toThrow('network')

    expect(auth.isAuthenticated()).toBe(true)
  })

  it('should override configs', () => {
    const newAuth = new Auth({
      login: '/login-2',
      logout: '/logout-2',
      forgotPassword: '/forgot-password-2',
      resetPassword: '/reset-password-2',
    })
    expect((newAuth as any).urls.login).toBe('/login-2')
    expect((newAuth as any).urls.logout).toBe('/logout-2')
  })
})
