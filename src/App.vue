<template>
<div id="app">
  <top-nav></top-nav>
    <div class="container">
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
.container {
  padding: 48px 72px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

body {
    margin: 0;
}

#app {
}
</style>
