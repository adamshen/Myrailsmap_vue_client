import Vue from 'vue'
import Bus from './bus'

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

function alertError(responseBody) {
  let errorMessage = {
    title: '错误',
    content: '发生了错误'
  }

  if (responseBody.error) {
    errorMessage.title = responseBody.error

    if (responseBody.error.message) {
      errorMessage.content = responseBody.message
    }
  } else if (responseBody.errors) {
    errorMessage.content = responseBody.errors.join('')
  }

  Bus.$emit('alertDialog', errorMessage)
}

function postWithToken(url, params, successCallback) {
  Vue.http.post(url, params).then(response => {
    successCallback(response)
  }, response => {
    alertError(response.body)
  })
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
      alertError(response.body)
      callback({
        success: false
      })
    })
  },
  post(url, params, successCallback) {
    if (bearerTokenIn(Vue.http.headers.common)) {
      return postWithToken(url, params, successCallback)
    } else if (bearerTokenIn(localBearerInfo())) {
      Object.assign(Vue.http.headers.common, localBearerInfo())
      return postWithToken(url, params, successCallback)
    } else {
      alertError({
        error: '尚未登录',
        message: '未在本地检测到已存储的Token'
      })
    }
  },
  get(url, params, successCallback) {
    Vue.http.get(url, {
      params: params
    }).then(response => {
      successCallback(response)
    }, response => {
      alertError(response.body)
    })
  }
}
