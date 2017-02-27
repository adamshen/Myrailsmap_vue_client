import marked from 'marked'

// bower based
// ensule highlight.js is loaded
export default {
  parseMarkdownToDiv: function (domId, markdownText) {
    let targetDiv = document.getElementById(domId)
    targetDiv.innerHTML = marked(markdownText)

    let blocks = targetDiv.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, window.hljs.highlightBlock)
  }
}
