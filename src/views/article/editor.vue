<template>
<div class="editor-main">
  <h2 v-text="isNewArticle ? '编辑Markdown文章' : '新建Markdown文章'"></h2>
  <div class="editor-buttons">
    <md-button-toggle md-single>
      <md-button class="md-toggle" @click="switchTo('editor')">编辑</md-button>
      <md-button @click="switchTo('preview')">预览</md-button>
    </md-button-toggle>

    <span style="flex: 1"></span>
    <md-button class="md-raised md-primary" disabled v-if="isSubmitting">提交中...</md-button>
    <md-button class="md-raised md-primary" @click="submitArticle" v-else>提交</md-button>
  </div>
  <div class="editor-title-input">
    <div class="topic-selector">
      <md-input-container>
        <label for="article-topic">选择分类</label>
        <md-select name="article-topic" id="article-topic" v-model="article.article_topic_id">
          <md-option v-for="topic of topics" :value="topic.id">{{ topic.name }}</md-option>
        </md-select>
      </md-input-container>
    </div>
    <md-input-container md-inline>
      <label>标题</label>
      <md-input v-model="article.title"></md-input>
    </md-input-container>
  </div>
  <textarea class="editor-input" v-model="article.content" v-if="currentAction === 'editor'"></textarea>
  <div id="editor-preview" v-show="currentAction === 'preview'"></div>
</div>
</template>

<script>
import Markdown from '../../lib/markdown'
import Api from '../../lib/api'

export default {
  data() {
    return {
      currentAction: 'editor',
      topics: [],
      article: {
        title: '',
        content: '',
        article_topic_id: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    switchTo(action) {
      this.currentAction = action

      if (action === 'preview') {
        Markdown.parseMarkdownToDiv('editor-preview', this.article.content)
      }
    },
    submitArticle() {
      this.isSubmitting = true
      setTimeout(() => {
        this.isSubmitting = false
      }, 2000)

      if (this.isNewArticle()) {
        Api.post('articles', this.article, (response) => {
          this.$router.push({
            path: '/article/' + response.body.id
          })
        })
      } else {
        Api.patch('articles/' + this.article.id, this.article, (response) => {
          this.$router.push({
            path: '/article/' + response.body.id
          })
        })
      }
    },
    isNewArticle() {
      return this.$route.path === '/article/new'
    }
  },
  created() {
    let id = this.$route.query.id

    if (!this.isNewArticle() && id) {
      Api.get('articles/' + id, {}, (response) => {
        this.article = response.body
      })
    }
  },
  mounted() {
    Api.get('article_topics', {}, (response) => {
      this.topics = response.body
    })
  }
}
</script>

<style>
.editor-main {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  flex-flow: column;
  padding: 4rem 0;
  width: 800px;
  margin: auto
}

.editor-buttons {
  display: flex;
  display: -webkit-flex;
  width: 100%;
}

.editor-title-input {
  display: flex;
  display: -webkit-flex;
  width: 100%;
}

.topic-selector {
  padding-right: 18px;
  width: 150px;
}

.editor-input {
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 750px;
  width: 100%;
}

#editor-preview {
  width: 100%;
}
</style>
