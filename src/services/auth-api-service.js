import configuration from '../configuration.js'
import TokenService from './token-service'

const AuthApiService = {
  
  postLogin({ username, password }) {
    return fetch(`${configuration.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postUser(user) {
    return fetch(`${configuration.API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(res =>
        (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
    )
  },
}

export default AuthApiService