row | row-reverse | column | column-reverse
<template>
<div class="flex-select-group">
  <div class="flex-selector">
    <md-input-container>
      <label for="flex-direction">Flex Direction</label>
      <md-select name="flex-direction" id="flex-direction" v-model="flexDirection">
        <md-option value="row">row</md-option>
        <md-option value="row-reverse">row-reverse</md-option>
        <md-option value="column">column</md-option>
        <md-option value="column-reverse">row-reverse</md-option>
      </md-select>
    </md-input-container>
  </div>

  <div class="flex-selector">
    <md-input-container>
      <label for="justify-content">Justify Content</label>
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
</template>

<script>
export default {
  data() {
    return {
      flexDirection: '',
      justifyContent: ''
    }
  }
}
</script>

<style>
.flex-selector {
  flex: auto;
  padding-left: 18px;
}

.flex-select-group {
  display: flex;
  display: -webkit-flex;
}
</style>
