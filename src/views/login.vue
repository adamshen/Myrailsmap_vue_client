<template>
<div>
  <div class="login-header">
    <h2>登录</h2>
  </div>
  <div class="login-main">
    <form class="login-dialog" novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>E-mail</label></label>
        <md-input v-model="initialValue"></md-input>
      </md-input-container>

      <md-input-container md-has-password>
        <label>密码</label>
        <md-input type="password"></md-input>
      </md-input-container>

      <div class="login-sumbit">
        <md-button>提交</md-button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
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

.login-sumbit {
  text-align: center;
}
</style>
