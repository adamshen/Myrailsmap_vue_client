<template>
<div class="editor-main">
  <h2>新建markdown文章</h2>
  <div class="editor-buttons">
    <md-button-toggle md-single>
      <md-button class="md-toggle" @click="switchTo('editor')">编辑</md-button>
      <md-button @click="switchTo('preview')">预览</md-button>
    </md-button-toggle>

    <span style="flex: 1"></span>
    <md-button class="md-raised md-primary">提交</md-button>
  </div>
  <div class="editor-title-input">
    <div class="topic-selector">
      <md-input-container>
        <label for="article-topic">选择分类</label>
        <md-select name="article-topic" id="article-topic" v-model="articleTopic">
          <md-option value="font-end">前端</md-option>
          <md-option value="back-end">后端</md-option>
          <md-option value="coding">编程</md-option>
          <md-option value="tools">工具控</md-option>
        </md-select>
      </md-input-container>
    </div>
    <md-input-container md-inline>
      <label>标题</label>
      <md-input v-model="articleTitle"></md-input>
    </md-input-container>
  </div>
  <textarea class="editor-input" v-model="articleContent" v-if="currentAction === 'editor'"></textarea>
  <div id="editor-preview" v-show="currentAction === 'preview'"></div>
</div>
</template>

<script>
import marked from 'marked'

export default {
  data() {
    return {
      currentAction: 'editor',
      articleTitle: '',
      articleContent: '',
      articleTopic: ''
    }
  },
  methods: {
    switchTo(action) {
      this.currentAction = action

      if (action === 'preview') {
        document.getElementById('editor-preview').innerHTML = marked(this.articleContent)

        let blocks = this.$el.querySelectorAll('pre code')
        Array.prototype.forEach.call(blocks, window.hljs.highlightBlock)
      }
    }
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
