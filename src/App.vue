<template>
<div id="app">
  <top-nav></top-nav>
  <router-view></router-view>
  <alert-dialog></alert-dialog>
  <bottom-footer></bottom-footer>
</div>
</div>
</template>

<script>
import TopNav from './components/shared/TopNav'
import BottomFooter from './components/shared/BottomFooter'
import AlertDialog from './components/shared/AlertDialog'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    TopNav,
    BottomFooter,
    AlertDialog
  }
}
</script>

<style>
body {
  min-width: 1100px;
  margin: 0;
  /* overwrite the default set in md */
  background: #f4f4f4 !important;
  color: rgba(0, 0, 0, 0.66) !important;
}

.wrapper-center {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

#app {}
</style>
