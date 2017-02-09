<template>
<div class="footer-wrapper">
  <div class="footer">
    <img class="ft-vue-logo" src="../../assets/logo.png">
    <p class="site-info"> Simple vue blog by @adam 2017 </p>
    <p class="backend-info"> Rails-api only model in backend</p>
    <div class="ft-avatar">
      <a href="https://github.com/adamshen/Myrailsmap_vue_client"><i class="fa fa-github" aria-hidden="true"></i></a>
      <i class="fa fa-weixin" aria-hidden="true" @click="openDialog('wechat')"></i>
      <a href="mailto:adam_ruby@126.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
    </div>
  </div>

  <md-dialog md-open-from="#wechat" md-close-to="#wechat" ref="wechat">
    <md-dialog-title>二维码</md-dialog-title>

    <md-dialog-content>
      <img src="../../assets/wechat.jpg">
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="closeDialog('wechat')">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</div>
</template>

<script>
export default {
  methods: {
    openDialog(ref) {
      this.$refs[ref].open()
    },
    closeDialog(ref) {
      this.$refs[ref].close()
    }
  }
}
</script>

<style>
.footer-wrapper {
  background: #fff;
}

.footer {
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  align-items: center;
  margin: 0 2rem;
  padding: 2rem 0;
  border-top: 1px solid;
  color: rgba(0, 0, 0, 0.55);
}

.footer p {
  margin: 0;
  line-height: 1.5
}

.ft-vue-logo {
  height: 50px;
  width: 50px;
}

.site-info {
  font-size: 1.75rem;
}

.backend-info {
  font-size: 1.25rem;
}

.ft-avatar {
  padding-top: 1rem;
  font-size: 3rem;
  color: rgba(0, 0, 0, .75);
}

.ft-avatar a {
  /* overwrite default setting in md */
  color: rgba(0, 0, 0, .75) !important;
}

.fa-weixin {
  cursor: pointer;
}
</style>
