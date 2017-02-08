<template>
<div>
  <flex-select></flex-select>
  <flex-box></flex-box>
</div>
</template>

<script>
import FlexBox from './flex/FlexBox.vue'
import FlexSelect from './flex/FlexSelect.vue'

export default {
  components: {
    FlexBox,
    FlexSelect
  }
}
</script>
