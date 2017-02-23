<template>
<div>
  <div class="add-button">
    <md-button class="md-fab md-mini" @click="$router.push({path: '/article/new'})">
      <md-icon>create</md-icon>
    </md-button>
  </div>
  <md-tabs md-centered>
    <md-tab md-label="前端" md-icon="web">
    </md-tab>

    <md-tab md-label="后端" md-icon="storage">
    </md-tab>

    <md-tab md-label="编程" md-icon="code">
    </md-tab>

    <md-tab md-label="工具控" md-icon="build">
    </md-tab>
  </md-tabs>
</div>
</template>

<script>
export default {}
</script>

<style>
.add-button {
  position: absolute;
  top: 108px;
  right: 200px;
  z-index: 999;
}
</style>
