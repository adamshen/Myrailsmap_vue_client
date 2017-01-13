<template>
<div id="app">
  <top-nav></top-nav>
  <router-view></router-view>
</div>
</div>
</template>

<script>
import TopNav from './components/layout/top_nav.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: { TopNav }
}
</script>

<style>
body {
    margin: 0;
}

#app {
}
</style>
