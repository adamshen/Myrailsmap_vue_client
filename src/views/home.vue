<template>
<div>
  <div class="home-banner">
    <div class="banner-context" :style="shrinkStyle()">
      <div class="banner-text">
        <i class="material-icons">account_balance</i>
      </div>
      <div class="banner-text">KEEP</div>
      <div class="banner-text">CALM</div>
      <div class="banner-text">AND</div>
      <div class="banner-text">LEARN</div>
      <div class="banner-text">RAILS</div>
    </div>
    <div class="banner-shrink" @click="toggleBannerShrink()">
      <i class="material-icons">{{ bannerShrinkIcon() }}</i>
    </div>
  </div>
  <div class="container">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      bannerShrink: true
    }
  },
  components: {},
  methods: {
    shrinkStyle() {
      let flexFlow = this.bannerShrink ? 'column' : 'row'
      return {
        'flex-flow': flexFlow
      }
    },
    toggleBannerShrink() {
      this.bannerShrink = !this.bannerShrink
    },
    bannerShrinkIcon() {
      return this.bannerShrink ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
    }
  }
}
</script>

<style>
.container {
  padding: 48px 72px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
}

.home-banner {
  padding: 30px;
}

.banner-context {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

.banner-text {
  padding: 0 0.5rem;
  line-height: 1.2;
  font-size: 3.0rem;
  color: rgba(0, 0, 0, 0.55);
}

.banner-text i {
  font-size: 4.25rem;
}

.banner-text:nth-child(2) {
  font-size: 1.75rem;
}

.banner-text:nth-child(4) {
  font-size: 1.5rem;
}

.banner-text:last-child {
  font-size: 2.0rem;
}

.banner-shrink {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  cursor: pointer;
}

.banner-shrink i {
  font-size: 2.5rem;
}

.md-theme-blue-grey .home-banner {
  background: rgba(96, 125, 139, 0.52);
}

.md-theme-cyan .home-banner {
  background: rgba(0, 188, 212, 0.3);
}

.md-theme-teal .home-banner {
  background: rgba(0, 150, 136, 0.35);
}
</style>
