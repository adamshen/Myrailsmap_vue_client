<template>
<div>
  <md-toolbar>
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">MyRailsMap</h2>

    <md-button class="md-icon-button" @click.native='switchTheme'>
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

    <div>
      <md-list>
        <md-list-item @click.native="navTo('/article')">
          <md-icon>library_books</md-icon> <span>Aticle</span>
        </md-list-item>


        <md-list-item>
          <md-icon>videogame_asset</md-icon>
          <span>Play</span>
          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset" @click.native="navTo('/play/flex')">Flex</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>

        <md-list-item @click.native="navTo('/home')">
          <md-icon>person</md-icon> <span>about</span>
        </md-list-item>
      </md-list>
    </div>

  </md-sidenav>
</div>
</template>

<script>
import Theme from '../../lib/theme.js'

export default {
  name: 'top_nav',
  data: function() {
    return {}
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    switchTheme() {
      Theme.switchNext()
    },
    navTo(url) {
      this.$router.push({
        path: url
      })
      this.toggleLeftSidenav()
    }
  }
}
</script>

<style>
.md-toolbar.md-large {
  min-height: 64px !important;
}
</style>
