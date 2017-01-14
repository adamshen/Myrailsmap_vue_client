<template>
<div>
  <div class="home-banner">
    <flex-select></flex-select>
  </div>
  <div class="container">
    <layers></layers>
  </div>
</div>
</div>
</template>

<script>
import FlexSelect from '../components/home/FlexSelect'
import Layers from '../components/home/layers'

export default {
  data() {
    return {}
  },
  components: {
    FlexSelect,
    Layers
  },
  methods: {}
}
</script>

<style>
.container {
  padding: 48px 72px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.home-banner {
  padding: 30px;
}

.md-theme-blue-grey .home-banner {
  background: rgba(96, 125, 139, 0.52);
}

.md-theme-cyan .home-banner {
  background: rgba(0, 188, 212, 0.3);
}

.md-theme-teal .home-banner {
  background: rgba(0, 150, 136, 0.35);
}
</style>
