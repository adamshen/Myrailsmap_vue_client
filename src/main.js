// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Theme from './lib/theme.js'

import Home from './views/home.vue'
import Play from './views/play.vue'
import Flex from './components/play/Flex.vue'

// Route
Vue.use(VueRouter)

const routers = [{
  path: '/home',
  component: Home
}, {
  path: '/',
  redirect: 'home'
}, {
  path: '/play',
  component: Play,
  children: [{
    path: 'flex',
    component: Flex
  }]
}]

const router = new VueRouter({
  routes: routers
})

// UI
Vue.use(VueMaterial)
Theme.registerAll()
Vue.material.setCurrentTheme('blue-grey')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
})
