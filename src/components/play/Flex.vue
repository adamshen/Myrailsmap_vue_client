<template>
<div>
  <flex-dialog></flex-dialog>
  <flex-container></flex-container>
</div>
</template>

<script>
import FlexContainer from './flex/FlexContainer.vue'
import FlexDialog from './flex/FlexDialog.vue'

export default {
  components: {
    FlexContainer,
    FlexDialog
  }
}
</script>
