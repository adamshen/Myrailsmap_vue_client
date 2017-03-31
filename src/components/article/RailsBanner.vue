<template>
<div class="rails-banner">
  <div class="banner-context" :style="bannerFlow()">
    <div class="banner-text">
      <i class="material-icons">account_balance</i>
    </div>
    <div class="banner-text">KEEP</div>
    <div class="banner-text">CALM</div>
    <div class="banner-text">AND</div>
    <div class="banner-text">LEARN</div>
    <div class="banner-text">RAILS</div>
  </div>
  <div class="banner-narrow">
    <i class="material-icons" @click="toggleBannerExpand()">{{ bannerNarrowIcon() }}</i>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      bannerExpand: true
    }
  },
  methods: {
    bannerFlow() {
      return {
        'flex-flow': this.bannerExpand ? 'column' : 'row'
      }
    },
    toggleBannerExpand() {
      this.bannerExpand = !this.bannerExpand
    },
    bannerNarrowIcon() {
      return this.bannerExpand ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
    }
  }
}
</script>

<style>
.rails-banner {
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

.banner-narrow {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
}

.banner-narrow i {
  font-size: 2.5rem;
  cursor: pointer;
}

.md-theme-blue-grey .rails-banner {
  background: rgba(96, 125, 139, 0.52);
}

.md-theme-cyan .rails-banner {
  background: rgba(0, 188, 212, 0.3);
}

.md-theme-teal .rails-banner {
  background: rgba(0, 150, 136, 0.35);
}
</style>
