// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource'
import 'vue-material/dist/vue-material.css'

import Theme from './lib/theme.js'

import Home from './views/home.vue'
import Play from './views/play.vue'
import Flex from './views/play/flex.vue'
import Article from './views/article.vue'
import Login from './views/login.vue'

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
}, {
  path: '/article',
  component: Article
}, {
  path: '/login',
  component: Login
}]

const router = new VueRouter({
  routes: routers
})

// Resources
Vue.use(VueResource)
if (process.env.NODE_ENV === 'development') {
  Vue.http.options.root = 'http://127.0.0.1:3000/api'
} else {
  Vue.http.options.root = 'http://myrailsmap.herokuapp.com/api'
}

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
