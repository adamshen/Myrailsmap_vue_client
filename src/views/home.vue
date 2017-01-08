<template>
<div>
  <flex-select ref="flex"
               @content="setContent($refs.flex.justifyContent)"
               @direction="setDirection($refs.flex.flexDirection)">
  </flex-select>
  <layers ref="layers"></layers>
</div>
</div>
</template>

<script>
import FlexSelect from '../components/home/flex_select'
import Layers from '../components/home/layers'

export default {
  data() {
    return {}
  },
  components: {
    FlexSelect,
    Layers
  },
  methods: {
    setContent: function(value) {
      this.$refs.layers.justifyContent = value
    },
    setDirection: function(value) {
      this.$refs.layers.flexDirection = value
    }
  }
}
</script>
