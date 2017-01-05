// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Home from './views/home.vue'

// Route
Vue.use(VueRouter)

const routers = [{
  path: '/home',
  component: Home
}]

const router = new VueRouter({
  routes: routers
})

// UI
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
})
