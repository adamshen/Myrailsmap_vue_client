<template>
<div>
  <rails-banner></rails-banner>
  <div class="article-profiles wrapper-center">
    <spinner :ref="'spinner'"></spinner>
    <h2 class="article-profiles-header">文章列表</h2>
    <template v-for="article of articles">
    <ar-card :article="article"></ar-card>
  </template>
  </div>
</div>
</template>

<script>
import Api from '../lib/api'
import ArCard from '../components/article/ArCard'
import RailsBanner from '../components/article/RailsBanner'
import Spinner from '../components/shared/Spinner'

export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    ArCard,
    RailsBanner,
    Spinner
  },
  mounted() {
    this.$refs.spinner.show()

    Api.get('articles', {}, (response) => {
      this.articles = response.body || []
      this.$refs.spinner.hide()
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
