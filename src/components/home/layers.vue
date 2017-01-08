<template>
<div class="layers" :style="layersBoxStyle">
  <div class="layer">
    <md-list class="custom-list md-triple-line">
      <md-subheader class="md-inset">前端</md-subheader>
      <md-divider class="md-inset"></md-divider>
      <md-list-item>
        <md-avatar>
          <md-icon>folder</md-icon>
        </md-avatar>

        <div class="md-list-text-container">
          <span>ECMAScript 6</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

      </md-list-item>

      <md-list-item>
        <md-avatar>
          <md-icon>folder</md-icon>
        </md-avatar>

        <div class="md-list-text-container">
          <span>Css 3</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

      </md-list-item>

      <md-list-item>
        <md-avatar>
          <md-icon>folder</md-icon>
        </md-avatar>

        <div class="md-list-text-container">
          <span>Vue</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

      </md-list-item>
    </md-list>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  },
  computed: {
    layersBoxStyle: function() {
      return {
        display: 'flex',
        'justify-content': this.justifyContent,
        'flex-direction': this.flexDirection,
        'flex-wrap': 'wrap'
      }
    }
  }
}
</script>
