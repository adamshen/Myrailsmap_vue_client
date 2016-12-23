// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
}).$mount('#app')
