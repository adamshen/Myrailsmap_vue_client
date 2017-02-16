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
  login(email, password, callback) {
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
      callback({
        success: true
      })
    }, response => {
      let result = {
        success: false,
        error: {
          message: '登录失败!'
        }
      }

      if (response.status === 401) {
        result.error.message = '登录失败，请检查email或者密码是否正确!'
      }
      callback(result)
    })
  },
  post(url, params) {
    if (bearerTokenIn(Vue.http.headers.common)) {
      return postWithToken(url, params)
    } else if (bearerTokenIn(localBearerInfo())) {
      Object.assign(Vue.http.headers.common, localBearerInfo())
      return postWithToken(url, params)
    } else {
      throw new Error('尚未登录')
    }
  },
  get(url, params, successCallback) {
    Vue.http.get(url, {
      params: params
    }).then(response => {
      successCallback(response)
    }, response => {
      return null
    })
  }
}
