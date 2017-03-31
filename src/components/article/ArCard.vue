<template>
<div class="article-profile wrapper-center">
  <h3 v-text="article.title"></h3>
  <md-button class="md-primary" @click.native='readArtile'>点击阅读...</md-button>
</div>
</template>

<script>
export default {
  props: ['article'],
  methods: {
    readArtile() {
      this.$router.push({
        path: '/article/' + this.article.id
      })
    }
  }
}
</script>

<style>
.article-profile {
  min-height: 12rem;
}
</style>
