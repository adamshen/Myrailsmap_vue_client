<template>
<div>
  <div class="play-nav">
    <router-link tag="md-button" to='/play/flex' class="md-raised md-primary">Flex</router-link>
  </div>
  <div class="play-main">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.play-nav {
  margin: 2rem 0 ;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.play-main {
  padding-bottom: 8rem;
}
</style>
