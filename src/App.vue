<template>
<div id="app">
  <top-nav></top-nav>
  <router-view></router-view>
</div>
</div>
</template>

<script>
import TopNav from './components/layout/TopNav'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    TopNav
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
