import Vue from 'vue'

function bearerTokenIn(object) {
  if (object == null) {
    return false
  }
  return 'access-token' in object && 'client' in object && 'uid' in object
}

function localBearerInfo() {
  let bearerInfo = localStorage.getItem('bearerInfo')
  return JSON.parse(bearerInfo)
}

function postWithToken(url, params) {
  let result = null

  Vue.http.post(url, params).then(response => {
    result = response
  }, response => {
      // Todo: throw auth error if token is invalid
  })

  return result
}

export default {
  login(email, password) {
    // Todo: return result
    Vue.http.post('auth/sign_in', {
      email: email,
      password: password
    }).then(response => {
      let bearerInfo = {
        'client': response.headers.get('client'),
        'access-token': response.headers.get('access-token'),
        'uid': response.headers.get('uid')
      }

      localStorage.setItem('bearerInfo', JSON.stringify(bearerInfo))
      Object.assign(Vue.http.headers.common, bearerInfo)
    }, response => {
      // Todo: return reason
    })
  },
  post(url, params) {
    if (bearerTokenIn(Vue.http.headers.common)) {
      return postWithToken(url, params)
    } else if (bearerTokenIn(localBearerInfo())) {
      Object.assign(Vue.http.headers.common, localBearerInfo())
      return postWithToken(url, params)
    } else {
      throw new Error('auth error')
    }
  }
}
