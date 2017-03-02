<template>
<div>
  <div class="add-button">
    <md-button class="md-fab md-mini" @click="$router.push({path: '/article/new'})">
      <md-icon>add</md-icon>
    </md-button>
    <md-button class="md-fab md-mini" v-if="currentArticle" @click="$router.push({path: '/article/edit', query: { id: currentArticle.id }})">
      <md-icon>create</md-icon>
    </md-button>
  </div>
  <div class="article-index">
    <div class="article-list">
      <md-card>
        <md-card-header>
          <div class="md-title">Articles</div>
          <div class="md-subhead">文章列表</div>
        </md-card-header>

        <md-list>
          <md-list-item v-for="article of articles" @click="showArticle(article.id)">
            <span v-text="article.title"></span>
          </md-list-item>
        </md-list>
      </md-card>

    </div>
    <div id="article-doc">
    </div>
  </div>
</div>
</template>

<script>
import Api from '../lib/api'
import Markdown from '../lib/markdown'

import ArticleProfile from '../components/article/ArticleProfile'

export default {
  data() {
    return {
      articles: [],
      currentArticle: null
    }
  },
  components: {
    ArticleProfile
  },
  mounted() {
    Api.get('articles', {}, (response) => {
      this.articles = response.body || []
    })
  },
  methods: {
    showArticle(id) {
      Api.get('articles/' + id, {}, (response) => {
        this.currentArticle = response.body || {}
        Markdown.parseMarkdownToDiv('article-doc', this.currentArticle.content)
      })
    }
  }
}
</script>

<style>
.add-button {
  position: absolute;
  top: 108px;
  right: 200px;
  z-index: 999;
}

.article-index {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  padding: 6rem 4rem;
  margin: auto;
}

.article-list {
  width: 350px;
}

#article-doc {
  flex: 1 0;
  padding-left: 4rem;
}
</style>
