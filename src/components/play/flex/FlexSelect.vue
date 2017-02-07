<template>
<div class="flex-dialog">
  <div class="flex-select-box">
    <div class="flex-select">
      <md-input-container>
        <label for="flex-direction">排列方式</label>
        <md-select name="flex-direction" id="flex-direction" v-model="flexDirection" @input="changeDirection()">
          <md-option value="row">row</md-option>
          <md-option value="column">column</md-option>
        </md-select>
      </md-input-container>
    </div>

    <div class="flex-select">
      <md-input-container>
        <label for="justify-content">对齐方式</label>
        <md-select name="justify-content" id="justify-content" v-model="justifyContent" @input="changeContent()">
          <md-option value="flex-start">flex-start</md-option>
          <md-option value="flex-end">flex-end</md-option>
          <md-option value="center">center</md-option>
          <md-option value="space-between">space-between</md-option>
          <md-option value="space-around">space-around</md-option>
        </md-select>
      </md-input-container>
    </div>
  </div>
</div>
</template>

<script>
import Bus from '../../../lib/bus.js'

export default {
  data() {
    return {
      flexDirection: '',
      justifyContent: ''
    }
  },
  methods: {
    changeContent: function() {
      Bus.$emit('changeContent', this.justifyContent)
    },
    changeDirection: function() {
      Bus.$emit('changeDirection', this.flexDirection)
    }
  }
}
</script>

<style>
.flex-dialog {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  flex-direction: column;
}

.flex-select-box {
  flex: 0 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.flex-select:first-child {
  margin-right: 18px;
}
</style>
