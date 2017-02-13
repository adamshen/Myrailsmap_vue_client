<template>
<div>
  <div class="flex-dialog">
    <div class="flex-select-container">
      <div class="flex-select">
        <md-input-container>
          <label for="flex-direction">排列方式</label>
          <md-select name="flex-direction" id="flex-direction" v-model="flexDirection">
            <md-option value="row">row</md-option>
            <md-option value="column">column</md-option>
          </md-select>
        </md-input-container>
      </div>

      <div class="flex-select">
        <md-input-container>
          <label for="justify-content">对齐方式</label>
          <md-select name="justify-content" id="justify-content" v-model="justifyContent">
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
  <div class="flex-container" :style="ContainerStyle">
    <div class="flex-box" :style="flexBoxStyle" v-for="n in boxNumber">
      <h2>Box {{ n }}</h2>
    </div>
  </div>
</div>
</template>

<script>
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
        'flex-direction': this.flexDirection,
        'justify-content': this.justifyContent
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

.flex-select-container {
  flex: 0 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.flex-select:first-child {
  margin-right: 18px;
}

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
