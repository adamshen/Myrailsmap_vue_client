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

function tokenExist() {
  if (bearerTokenIn(Vue.http.headers.common)) {
    return true
  } else if (bearerTokenIn(localBearerInfo())) {
    Object.assign(Vue.http.headers.common, localBearerInfo())
    return true
  } else {
    alertError({
      error: '尚未登录',
      message: '未在本地检测到已存储的Token'
    })

    return false
  }
}

function alertError(responseBody) {
  let errorMessage = {
    title: '错误',
    content: '发生了错误'
  }

  if (responseBody.error) {
    errorMessage.title = responseBody.error

    if (responseBody.message) {
      errorMessage.content = responseBody.message
    }
  } else if (responseBody.errors) {
    errorMessage.content = responseBody.errors.join('')
  }

  Bus.$emit('alertDialog', errorMessage)
}

function requestWithJsonBody(verb, url, jsonBody, successCallback) {
  if (!tokenExist()) {
    return
  }

  Vue.http[verb](url, jsonBody).then(response => {
    successCallback(response)
  }, response => {
    alertError(response.body)
  })
}

function request(verb, url, params, successCallback) {
  if (verb !== 'get') {
    if (!tokenExist()) {
      return
    }
  }

  Vue.http[verb](url, {
    params: params
  }).then(response => {
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
  post(url, jsonBody, successCallback) {
    requestWithJsonBody('post', url, jsonBody, successCallback)
  },
  patch(url, jsonBody, successCallback) {
    requestWithJsonBody('patch', url, jsonBody, successCallback)
  },
  get(url, params, successCallback) {
    request('get', url, params, successCallback)
  },
  delete(url, params, successCallback) {
    request('delete', url, params, successCallback)
  }
}
