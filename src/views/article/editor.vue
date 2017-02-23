<template>
<div class="editor-main">
  <div class="">
    <md-button :class="activeWhen('editor')" @click="switchTo('editor')">编辑</md-button>
    <md-button :class="activeWhen('preview')" @click="switchTo('preview')">预览</md-button>
  </div>
  <textarea class="editor-input" v-model="article" v-if="currentAction === 'editor'"></textarea>
  <div id="editor-preview" v-show="currentAction === 'preview'"></div>
</div>
</template>

<script>
import marked from 'marked'

export default {
  data() {
    return {
      currentAction: 'editor',
      article: ''
    }
  },
  methods: {
    activeWhen(action) {
      return action === this.currentAction ? 'md-primary' : ''
    },
    switchTo(action) {
      this.currentAction = action

      if (action === 'preview') {
        document.getElementById('editor-preview').innerHTML = marked(this.article)

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
  margin-top: 4rem;
}

.editor-input {
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 750px;
  width: 800px;
}

#editor-preview {
  width: 800px;
}
</style>
