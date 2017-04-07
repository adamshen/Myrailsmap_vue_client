<template>
<div class="article-profile wrapper-center">
  <h3 v-text="article.title"></h3>
  <p>[Toc]</p>
  <div v-if="hasToc()">
    <template v-for="header of article.toc.children">
      <ar-header :header='header'></ar-header>
    </template>
  </div>
  <md-button class="md-primary" @click.native='readArtile'>点击阅读...</md-button>
</div>
</template>

<script>
import ArHeader from './ArHeader'

export default {
  props: ['article'],
  components: {
    ArHeader
  },
  methods: {
    readArtile() {
      this.$router.push({
        path: '/article/' + this.article.id
      })
    },
    hasToc() {
      let toc = this.article.toc
      return toc && toc.children && toc.children.length > 0
    }
  }
}
</script>

<style>
.article-profile {
  min-height: 12rem;
  width: 100%;
  padding: 2rem 0;
  border-top: 1px solid #607d8b;
}
</style>
