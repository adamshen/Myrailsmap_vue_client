<template>
<div class="phone-viewport">
  <md-toolbar>
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">MyRailsMap</h2>

    <md-button class="md-icon-button" @click='switchTheme'>
      <md-icon>highlight</md-icon>
    </md-button>
  </md-toolbar>

  <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <div>
          <h3 class="md-title">SideBar</h3>
        </div>
      </div>
    </md-toolbar>

    <div class="phone-viewport">
      <md-list>
        <md-list-item>
          <md-icon>home</md-icon> <span>Home</span>
        </md-list-item>

        <md-list-item>
          <md-icon>library_books</md-icon> <span>Aticle</span>
        </md-list-item>

        <md-list-item>
          <md-icon>border_color</md-icon> <span>Note</span>
        </md-list-item>

        <md-list-item>
          <md-icon>face</md-icon> <span>About</span>
          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <div class="sidebar-switch">
          <md-switch v-model="topics_switch_checked" id="topics_switch" name="topics_switch" class="md-primary">
            Topics
          </md-switch>
        </div>
      </md-list>
    </div>

  </md-sidenav>
</div>
</template>

<script>
import Theme from '../helper/theme.js'

export default {
  name: 'top_nav',
  data: function() {
    return {
      topics_switch_checked: false
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    switchTheme() {
      Theme.switchNext()
    }
  }
}
</script>

<style>
.sidebar-switch {
  padding: 0 16px;
}

.md-toolbar.md-large {
  min-height: 64px !important;
}
</style>
