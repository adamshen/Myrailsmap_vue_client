import Vue from 'vue'

const validThemes = [
  'cyan',
  'teal',
  'blue-grey'
]

export default {
  registerAll: function () {
    for (let themeColor of validThemes) {
      Vue.material.registerTheme(themeColor, {
        primary: themeColor
      })
    }
  },
  switchNext: function () {
    let themeIndex = validThemes.findIndex(function (value, index, arr) {
      return value === Vue.material.currentTheme
    })

    if (themeIndex < 0) {
      return
    }

    if (themeIndex === validThemes.length - 1) {
      Vue.material.setCurrentTheme(validThemes[0])
    } else {
      Vue.material.setCurrentTheme(validThemes[themeIndex + 1])
    }
  }
}
