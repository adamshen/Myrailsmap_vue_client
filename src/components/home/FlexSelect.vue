<template>
<div class="flex-select-group">
  <div class="flex-selector">
    <md-input-container>
      <label for="flex-direction">Flex Direction</label>
      <md-select name="flex-direction" id="flex-direction" v-model="flexDirection" @input="changeDirection()">
        <md-option value="row">row</md-option>
        <md-option value="column">column</md-option>
      </md-select>
    </md-input-container>
  </div>

  <div class="flex-selector">
    <md-input-container>
      <label for="justify-content">Justify Content</label>
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
</template>

<script>
import Bus from '../../helper/bus.js'

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
.flex-selector {
  padding-left: 18px;
}

.flex-select-group {
  flex: 0 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}
</style>
