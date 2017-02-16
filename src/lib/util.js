export function validateEmail(email) {
  /* eslint-disable */
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
  /* eslint-enable */
}

export function hasFalseAttr(object) {
  let result = false

  for (let attr in object) {
    if (attr === false) {
      result = true
      return
    }
  }

  return result
}
