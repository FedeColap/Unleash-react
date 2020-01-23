import configuration from '../configuration'

const TokenService = {

    makeBasicAuthToken(username, password) {
        console.log(username)
        console.log(password)
      return window.btoa(`${username}:${password}`)
    },

  saveAuthToken(token) {
    window.localStorage.setItem(configuration.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(configuration.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(configuration.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  }
}

export default TokenService