<template>
<div>
  <div class="login-header">
    <h2>登录</h2>
  </div>
  <div class="login-main">
    <form class="login-dialog" novalidate @submit.stop.prevent="submit">
      <md-input-container :class="validationError.email ? 'md-input-invalid' : ''">
        <label>E-mail</label></label>
        <md-input v-model="email"></md-input>

        <span v-if="validationError.email" class="md-error" v-text="validationError.email"></span>
      </md-input-container>

      <md-input-container md-has-password :class="validationError.password ? 'md-input-invalid' : ''">
        <label>密码</label>
        <md-input type="password" v-model="password"></md-input>

        <span v-if="validationError.password" class="md-error" v-text="validationError.password"></span>
      </md-input-container>

      <div class="login-submit">
        <md-button v-if="submitting" disabled>提交中...</md-button>
        <md-button v-else @click.stop="submit()">提交</md-button>
      </div>
    </form>
  </div>
  <md-dialog-alert :md-title="'提示'" :md-content="dialogErrorMessage" ref="loginAlertDialog" @close="reInitData">
  </md-dialog-alert>
</div>
</template>

<script>
import Api from '../lib/api'
import {
  validateEmail
} from '../lib/util'

export default {
  data() {
    return this.setDefaultData()
  },
  methods: {
    setDefaultData() {
      return {
        email: '',
        password: '',
        submitting: false,
        dialogErrorMessage: '发生错误!',
        validationError: {
          exist: false,
          email: '',
          password: ''
        }
      }
    },
    reInitData() {
      Object.assign(this.$data, this.setDefaultData())
    },
    submit() {
      /* validation */
      this.validationError = {
        exist: false,
        email: '',
        password: ''
      }
      if (this.password.length < 8) {
        this.validationError.password = '密码不能小于8位'
        this.validationError.exist = true
      }
      if (!validateEmail(this.email)) {
        this.validationError.email = 'email格式不正确'
        this.validationError.exist = true
      }
      if (this.validationError.exist) {
        return
      }

      /* disable when submitting */
      this.submitting = true

      /* post to server */
      Api.login(this.email, this.password, (result) => {
        if (result.success) {
          this.$router.push({
            path: '/home'
          })
        } else {
          this.dialogErrorMessage = result.error.message
          this.$nextTick(function() {
            this.$refs.loginAlertDialog.open()
          })
        }
      })
    }
  }
}
</script>

<style>
.login-header {
  text-align: center;
  padding: 2rem 0;
}

.login-main {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
}

.login-dialog {
  padding: 2rem;
  background-color: #fff;
  width: 350px;
}

.login-submit {
  text-align: center;
}
</style>
