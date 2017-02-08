<template>
<div class="flex-container" :style="ContainerStyle">
  <div class="flex-box" :style="flexBoxStyle" v-for="n in boxNumber">
    <h2>Box {{ n }}</h2>
  </div>
</div>
</template>

<script>
import Bus from '../../../lib/bus.js'

export default {
  data() {
    return {
      flexDirection: 'row',
      justifyContent: 'center',
      boxNumber: 3,
      boxWidth: 250,
      boxHeight: 250
    }
  },
  computed: {
    ContainerStyle() {
      let containerStyle = {
        display: 'flex',
        'justify-content': this.justifyContent,
        'flex-direction': this.flexDirection,
        'flex-wrap': 'wrap'
      }

      if (this.flexDirection === 'row') {
        containerStyle.width = '100%'
      }

      return containerStyle
    },
    flexBoxStyle() {
      return {
        width: this.boxWidth + 'px',
        height: this.boxHeight + 'px'
      }
    }
  },
  mounted() {
    Bus.$on('changeContent', (content) => {
      this.justifyContent = content
    })

    Bus.$on('changeDirection', (direction) => {
      this.flexDirection = direction
    })
  }
}
</script>

<style>
.flex-container {
  max-width: 1020px;
  height: 1020px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid;
}

.flex-box {
  background: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
}
</style>
