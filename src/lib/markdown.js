import marked from 'marked'

// browser based
// ensure highlight.js is loaded
export default {
  parseMarkdownToDiv: function (domId, markdownText) {
    let targetDiv = document.getElementById(domId)
    targetDiv.innerHTML = marked(markdownText)

    let blocks = targetDiv.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, window.hljs.highlightBlock)
  }
}
