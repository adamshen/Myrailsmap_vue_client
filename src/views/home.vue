<template>
<div>
  <div class="home-banner">
    <div class="banner-text">
      <i class="material-icons">account_balance</i>
    </div>
    <div class="banner-text">KEEP</div>
    <div class="banner-text">CALM</div>
    <div class="banner-text">AND</div>
    <div class="banner-text">LEARN</div>
    <div class="banner-text">RAILS</div>
  </div>
  <div class="container">
  </div>
</div>
</template>

<script>
import FlexSelect from '../components/home/FlexSelect'
import FlexBox from '../components/home/FlexBox'

export default {
  data() {
    return {}
  },
  components: {
    FlexSelect,
    FlexBox
  },
  methods: {}
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
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.banner-text {
  padding: 0 0.5rem;
  line-height: 1.2;
  font-size: 3.0rem;
  color: rgba(0, 0, 0, 0.55);
  text-align: center;
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
