<template>
<div id="app">
  <top-nav></top-nav>
    <div class="container">
  <router-view></router-view>
</div>
</div>
</template>

<script>
import TopNav from './components/top_nav.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: { TopNav }
}
</script>

<style>
.container {
  margin: 48px 72px;
}

body {
    margin: 0;
}

#app {
}
</style>
