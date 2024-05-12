import { apiPrefix, http } from '../http/http.js'

export default class Auth {
  protected urls = {
    login: 'login',
    logout: 'logout',
    forgotPassword: 'users/forgot-password',
    resetPassword: 'users/reset-password',
  }

  /**
   * @param config
   */
  constructor(config?: { login?: string, logout?: string, forgotPassword?: string, resetPassword?: string }) {
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
              this.token = resp.data.token
              http.defaults.headers.common.Authorization = `Bearer ${this.token}`
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

  loggedIn(_payload: any) {
    return
  }
  loginError(_er: any) {
    return
  }

  isAuthenticated(): boolean
  {
    return localStorage.getItem('sanctum_token') !== null
  }

  logout()
  {
    const logoutUrl = `${apiPrefix}/${this.urls.logout}`
    return new Promise((resolve, reject) => {
      http
        .post(logoutUrl)
        .then((response: any) => {
          localStorage.removeItem('sanctum_token')
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
          this.token = response.data.token
          http.defaults.headers.common.Authorization = `Bearer ${this.token}`
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
