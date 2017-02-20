<template>
<div class="dc-card">
  <md-list>
    <md-subheader v-text="checkCard.title"></md-subheader>
    <md-list-item v-for="item of checkCard.check_items">
      <md-checkbox class="md-primary" v-bind="itemAttr(item)" v-model="itemChecked[item.name]">{{item.label}}</md-checkbox>
    </md-list-item>

    <md-button class="md-primary" v-if="checkCard.record_in_period" disabled>已提交今日打卡</md-button>
    <md-button v-else class="md-primary" @click="submitCheck()">
      打卡提交
      <md-icon>check</md-icon>
    </md-button>
  </md-list>
</div>
</template>

<script>
import Api from '../../lib/api'
import Bus from '../../lib/bus'

export default {
  props: ['checkCard'],
  data() {
    let itemNames = this.checkCard.check_items.map((item) => item.name)
    let itemChecdedObject = {}
    for (let itemName of itemNames) {
      itemChecdedObject[itemName] = false
    }
    return {
      itemChecked: itemChecdedObject
    }
  },
  methods: {
    submitCheck() {
      Api.post('check_records', {
        check_card_id: this.checkCard.id,
        check_result: this.itemChecked,
        check_time: new Date().toJSON()
      }, (response) => {
        Bus.$emit('updateCheckCards', response.body)
      })
    },
    itemAttr(item) {
      let result = {}
      let record = this.checkCard.record_in_period

      if (record) {
        result.disabled = 'disabled'

        if (record.content[item.name]) {
          this.itemChecked[item.name] = true
          result.style = {
            'text-decoration': 'line-through'
          }
        } else {
          result.style = {
            'color': 'red'
          }
        }
        return result
      }
    }
  }
}
</script>

<style>
.dc-card {
  margin-left: 32px;
  min-width: 300px;
}
</style>
