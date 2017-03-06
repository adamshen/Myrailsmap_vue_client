<template>
<div>
  <div class="add-button">
    <md-button class="md-fab md-mini" @click="$router.push({path: '/article/new'})">
      <md-icon>add</md-icon>
    </md-button>
    <template v-if="currentArticle">
      <md-button class="md-fab md-mini" @click="$router.push({path: '/article/edit', query: { id: currentArticle.id }})">
        <md-icon>edit</md-icon>
      </md-button>
      <md-button class="md-fab md-mini" @click="confirmDelete">
        <md-icon>delete</md-icon>
      </md-button>
    </template>
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
  <md-dialog-confirm :md-title="'Are you sure?'" :md-content-html="'是否确认删除这篇文章？'" :md-ok-text="'确定'" :md-cancel-text="'取消'" @close='handleDelete' ref="confirmDelete">
  </md-dialog-confirm>
</div>
</template>

<script>
import Api from '../lib/api'
import Markdown from '../lib/markdown'

export default {
  data() {
    return {
      articles: [],
      currentArticle: null
    }
  },
  components: {},
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
    },
    confirmDelete() {
      this.$refs.confirmDelete.open()
    },
    handleDelete(confirm) {
      if (confirm === 'ok') {
        Api.delete('articles/' + this.currentArticle.id, {}, (response) => {
          if (response.body.success) {
            let id = this.currentArticle.id
            this.currentArticle = null
            document.getElementById('article-doc').innerHTML = ''

            let index = this.articles.findIndex((element) => element.id === id)
            this.articles.splice(index, 1)
          }
        })
      }
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
