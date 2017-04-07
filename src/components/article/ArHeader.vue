<template>
<div :class='"ar-header level-" + header.level'>
  {{ header.raw_text }}
  <template v-if='header.children && header.children.length > 0'>
    <template v-for='subHeader of header.children'>
      <ar-header :header='subHeader'></ar-header>
    </template>
  </template>
</div>
</template>

<script>
export default {
  props: ['header'],
  name: 'ar-header'
}
</script>

<style>
.ar-header {
 line-height: 1.75;
}

.level-2 {
  font-size: 18px;
}

.level-3 {
  padding-left: 32px;
  font-size: 14px;
}
</style>
