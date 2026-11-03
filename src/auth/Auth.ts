import { apiPrefix, http } from '@/http/http'
import { flushState } from '@/helpers/states'

export default class Auth {
  protected urls = {
    login: 'login',
    logout: 'logout',
    forgotPassword: 'users/forgot-password',
    resetPassword: 'users/reset-password'
  }

  /**
   * @param config
   */
  constructor(config?: {
    login?: string
    logout?: string
    forgotPassword?: string
    resetPassword?: string
  }) {
    if (config?.login) {
      this.urls.login = config.login
    }
    if (config?.logout) {
      this.urls.logout = config.logout
    }
    if (config?.forgotPassword) {
      this.urls.forgotPassword = config.forgotPassword
    }
    if (config?.resetPassword) {
      this.urls.resetPassword = config.resetPassword
    }
  }

  get token(): string | null {
    return localStorage.getItem('sanctum_token')
  }
  set token(token: string) {
    localStorage.setItem('sanctum_token', token)
  }

  /**
   * Forgets the sign in kept in the browser: the bearer token and the flag of a
   * cookie session. The session cookie itself is HttpOnly, so only the server
   * can end it.
   */
  static clearSession(): void {
    localStorage.removeItem('sanctum_token')
    localStorage.removeItem('sanctum_session')
    delete http.defaults.headers.common.Authorization
  }

  /**
   * Logs in the user
   *
   * @async
   * @param { any } payload
   * @return { Promise<any> }
   */
  login(payload: any) {
    return new Promise((resolve, reject) => {
      http
        .get('/api/csrf-cookie')
        .then(() => {
          const loginUrl = `${apiPrefix}/${this.urls.login}`
          http
            .post(loginUrl, payload)
            .then((resp: any) => {
              this.startSession(resp.data)
              this.loggedIn(resp.data)

              resolve(resp.data)
            })
            .catch((e: any) => {
              console.error(e)
              reject(e)
            })
        })
        .catch((er: any) => {
          console.error(er)
          this.loginError(er)
          reject(er)
        })
    })
  }

  /**
   * Keeps the sign in of a response: a bearer token when the server sends
   * one, otherwise the server has started a cookie session.
   */
  protected startSession(payload: any): void {
    Auth.clearSession()

    if (payload?.token) {
      this.token = payload.token
      http.defaults.headers.common.Authorization = `Bearer ${payload.token}`
    } else {
      localStorage.setItem('sanctum_session', '1')
    }
  }

  loggedIn(_payload: any) {
    return
  }
  loginError(_er: any) {
    return
  }

  /**
   * Whether the browser holds a sign in. With cookie sessions this is a flag
   * only: the session may have expired on the server, which answers 401.
   */
  isAuthenticated(): boolean {
    return (
      localStorage.getItem('sanctum_token') !== null ||
      localStorage.getItem('sanctum_session') !== null
    )
  }

  logout() {
    const logoutUrl = `${apiPrefix}/${this.urls.logout}`
    return new Promise((resolve, reject) => {
      http
        .post(logoutUrl)
        .then((response: any) => {
          Auth.clearSession()
          // What was fetched for this user must not be there for the next one
          flushState()
          this.loggedOut(response.data)

          resolve(response.data)
        })
        .catch((er: any) => {
          console.error(er)
          this.logoutError(er)

          reject(er)
        })
    })
  }
  loggedOut(_payload: any) {
    return
  }
  logoutError(_er: any) {
    return
  }

  forgotPassword(email: string) {
    const forgotPasswordUrl = `${apiPrefix}/${this.urls.forgotPassword}`
    return new Promise((resolve, reject) => {
      http
        .post(forgotPasswordUrl, { email })
        .then((response: any) => {
          resolve(response.data)
        })
        .catch((err: any) => {
          console.error(err)
          reject(err)
        })
    })
  }

  resetPassword(payload: any) {
    const resetPasswordUrl = `${apiPrefix}/${this.urls.resetPassword}`
    return new Promise((resolve, reject) => {
      http
        .post(resetPasswordUrl, payload)
        .then((response: any) => {
          this.startSession(response.data)
          this.loggedIn(response.data)

          resolve(response.data)
        })
        .catch((err: any) => {
          console.error(err)
          reject(err)
        })
    })
  }
}
