<template>
<div class="article-main">
  <spinner :ref="'spinner'"></spinner>
  <div class="article-title">
    <h2 v-text="title"></h2>
  </div>
  <div id="article-content"></div>
</div>
</template>

<script>
import Markdown from '../../lib/markdown'
import Api from '../../lib/api'
import Bus from '../../lib/bus'
import Spinner from '../../components/shared/Spinner'

export default {
  components: {
    Spinner
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  created() {
    Bus.$emit('hide-footer')
  },
  mounted() {
    this.$refs.spinner.show()

    Api.get('articles/' + this.$route.params.id, {}, (response) => {
      let article = response.body || {}

      this.title = article.title
      Markdown.parseMarkdownToDiv('article-content', article.content)

      this.$refs.spinner.hide()
      Bus.$emit('show-footer')
    })
  }
}
</script>

<style>
.article-main {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  flex-flow: column;
  width: 800px;
  margin: auto;
  padding-bottom: 4rem;
}

.article-title {
  padding: 1.5rem 0;
}

#article-content {
  width: 100%;
}
</style>
