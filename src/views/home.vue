<template>
<div>
  <div class="home-banner">
    <div class="banner-context" :style="dynamicBannerStyle()">
      <div class="banner-text">
        <i class="material-icons">account_balance</i>
      </div>
      <div class="banner-text">KEEP</div>
      <div class="banner-text">CALM</div>
      <div class="banner-text">AND</div>
      <div class="banner-text">LEARN</div>
      <div class="banner-text">RAILS</div>
    </div>
    <div class="banner-narrow" @click="toggleBannerNarrow()">
      <i class="material-icons">{{ bannerNarrowIcon() }}</i>
    </div>
  </div>
  <div class="dairly-check">
    <div class="dc-header">
      <div class="dc-icon">
        <md-icon>playlist_add_check</md-icon>
      </div>
      <h3>打卡项目</h3>
    </div>
    <div class="dc-container">
      <div class="dc-box">
        <md-list>
          <md-subheader>日常减重</md-subheader>
          <md-list-item>
            <md-checkbox class="md-primary">不吃零食</md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox class="md-primary">吃七分饱</md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox class="md-primary">至少40分钟锻炼</md-checkbox>
          </md-list-item>

          <md-button class="md-primary" @click="submitCheck(dailyShed)">
            打卡提交
            <md-icon>check</md-icon>
          </md-button>
        </md-list>
      </div>
      <div class="dc-box">
        <md-list>
          <md-subheader>日常学习</md-subheader>
          <md-list-item>
            <md-checkbox class="md-primary">3个Tips</md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox class="md-primary">5个英文单词</md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox class="md-primary">1篇深度博文</md-checkbox>
          </md-list-item>

          <md-button class="md-primary" @click="submitCheck(dailyLearn)">
            打卡提交
            <md-icon>check</md-icon>
          </md-button>
        </md-list>
      </div>
      <div class="dc-box">
        <md-list>
          <md-subheader>月打卡项</md-subheader>
          <md-list-item>
            <md-checkbox class="md-primary">阅读2本书</md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox class="md-primary">进行4次长时间运动</md-checkbox>
          </md-list-item>

          <md-list-item>
            <md-checkbox class="md-primary">阅读一个开源项目源码</md-checkbox>
          </md-list-item>

          <md-button class="md-primary" @click="submitCheck(monthCheckItem)">
            打卡提交
            <md-icon>check</md-icon>
          </md-button>
        </md-list>
      </div>
    </div>
  </div>
  <div class="check-report">
    <div class="cr-header">
      <div class="cr-icon">
        <md-icon>assessment</md-icon>
      </div>
      <h3>打卡统计</h3>
    </div>
    <div class="cr-container">
      <div class="cr-content">
      </div>
      <div class="cr-img">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      bannerNarrow: false,
      dailyLearn: {},
      dailyShed: {},
      monthCheckItem: {}
    }
  },
  components: {},
  methods: {
    dynamicBannerStyle() {
      return {
        'flex-flow': this.bannerNarrow ? 'row' : 'column'
      }
    },
    toggleBannerNarrow() {
      this.bannerNarrow = !this.bannerNarrow
    },
    bannerNarrowIcon() {
      return this.bannerNarrow ? 'keyboard_arrow_down' : 'keyboard_arrow_up'
    },
    submitCheck() {
      // Todo: bind object to checkbox & submit check
    }
  }
}
</script>

<style>
.dc-container,
.cr-container {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
}

.dc-box {
  margin-left: 32px;
  min-width: 300px;
}

.dc-icon,
.cr-icon {
  margin-right: 8px;
}

.dc-header,
.cr-header {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
}

.dairly-check {
  padding: 2rem 0;
}

.check-report {
  background: #b1e5ff;
}

.cr-content {
}

.cr-img {
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

.banner-narrow {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  cursor: pointer;
}

.banner-narrow i {
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
