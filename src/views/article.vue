<template>
<div class="article-profiles wrapper-center">
  <h2 class="article-profiles-header">文章列表</h2>
  <template v-for="article of articles">
    <ar-card :article="article"></ar-card>
  </template>
</div>
</template>

<script>
import Api from '../lib/api'
import ArCard from '../components/article/ArCard'

export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    ArCard
  },
  mounted() {
    Api.get('articles', {}, (response) => {
      this.articles = response.body || []
    })
  }
}
</script>

<style>
.article-profiles {
  margin: auto;
  width: 800px;
}

.article-profiles-header {
  padding: 2rem 0;
}
</style>
