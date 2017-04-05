<template>
<div class="spinner" v-if="showSpinner">
  <md-spinner :md-size='100' md-indeterminate></md-spinner>
  loading from heruko...
</div>
</template>

<script>
export default {
  data() {
    return {
      showSpinner: false
    }
  },
  methods: {
    show() {
      this.showSpinner = true
    },
    hide() {
      setTimeout(() => {
        this.showSpinner = false
      }, 1000)
    }
  }
}
</script>

<style>
.spinner{
  margin: 2rem 0;
}
</style>
