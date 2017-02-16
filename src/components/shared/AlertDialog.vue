<template>
<div class="alert-dialog">
  <md-dialog-alert :md-title="title" :md-content="content" ref="dialog">
  </md-dialog-alert>
</div>
</template>

<script>
import Bus from '../../lib/bus'

export default {
  data() {
    return {
      title: '提示',
      content: ' '
    }
  },
  mounted() {
    Bus.$on('alertDialog', option => {
      this.title = option.title
      this.content = option.content

      this.$nextTick(function() {
        this.$refs.dialog.open()
      })
    })
  }
}
</script>
