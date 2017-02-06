<template>
<div id="app">
  <top-nav></top-nav>
  <router-view></router-view>
  <bottom-footer></bottom-footer>
</div>
</div>
</template>

<script>
import TopNav from './components/layout/TopNav'
import BottomFooter from './components/layout/BottomFooter'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    TopNav,
    BottomFooter
  }
}
</script>

<style>
body {
  margin: 0;
  background: #f4f4f4 !important;
}

#app {}
</style>
