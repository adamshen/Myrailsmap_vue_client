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
    <div class="banner-narrow">
      <i class="material-icons" @click="toggleBannerNarrow()">{{ bannerNarrowIcon() }}</i>
    </div>
  </div>
  <div class="dairly-check">
    <div class="dc-header">
      <div class="dc-icon">
        <md-icon>playlist_add_check</md-icon>
      </div>
      <h3>打卡项目</h3>
    </div>
    <div class="spinner wrapper-center">
      <md-spinner v-if="checkCards.length === 0" md-indeterminate></md-spinner>
    </div>
    <div class="dc-container">
      <template v-for="checkCard of checkCards">
        <dc-card :check-card="checkCard"></dc-card>
      </template>
    </div>
  </div>
  <div class="check-report">
    <div class="cr-content">
      <div class="cr-header">
        <div class="cr-icon">
          <md-icon>assessment</md-icon>
        </div>
        <h3>打卡统计</h3>
      </div>
      <canvas id="cr-chart" width="350" height="350"></canvas>
    </div>
    <div class="cr-img">
      <img src="../assets/run.png">
    </div>
  </div>
  <div class="profile">
    <div class="profile-img">
      <img src="../assets/ruby.jpg">
    </div>
    <div class="profile-content">
      <h2>Hello, this is adam</h2>
      <div class="chip-line">
        <div class="chip">吃货</div>
        <div class="chip">微胖</div>
      </div>
      <div class="chip-line">
        <div class="chip">Rubyist</div>
        <div class="chip">程序员</div>
      </div>
      <div class="chip-line">
        <div class="chip">努力学习</div>
        <div class="chip">争取节食</div>
      </div>
      <h2>I love <span class="ruby-red">ruby</span> and my wife</h2>
    </div>
  </div>
  <bottom-footer></bottom-footer>
</div>
</template>

<script>
import BottomFooter from '../components/home/BottomFooter'
import DcCard from '../components/home/DcCard'
import Chart from 'chart.js'
import Api from '../lib/api'
import Bus from '../lib/bus'
import CheckChart from '../lib/checkChart'

export default {
  data() {
    return {
      bannerNarrow: false,
      checkCards: []
    }
  },
  components: {
    BottomFooter,
    DcCard
  },
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
    }
  },
  mounted() {
    Api.get('check_cards/search', {
      email: 'adam_ruby@126.com'
    }, (response) => {
      this.checkCards = response.body
    })

    Api.get('check_records/count', {
      email: 'adam_ruby@126.com'
    }, (response) => {
      let countResults = response.body

      // draw check bar chart
      /* eslint-disable no-new */
      new Chart(document.getElementById('cr-chart'), CheckChart.setting({
        labels: countResults.map(result => result.card),
        all: countResults.map(result => result.all),
        finish: countResults.map(result => result.finish)
      }))
    })

    Bus.$on('updateCheckCards', checkCard => {
      let index = this.checkCards.findIndex((element) => element.id === checkCard.id)

      if (index >= 0) {
        this.checkCards.splice(index, 1, checkCard)
      }
    })
  }
}
</script>

<style>
.dc-container,
.check-report,
.profile {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  width: 100%;
}

.dairly-check,
.check-report,
.profile {
  padding: 1rem 0 2rem 0;
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

.check-report {
  background: #b1e5ff;
}

.cr-content {
  width: 350px;
}

.profile-img {
  padding: 1rem;
  background: #fff;
}

.profile-content {
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  width: 400px;
  padding: 2rem;
}

.chip-line {
  padding: 8px 0;
}

.chip-line:nth-child(3) {
  text-align: center;
}

.chip-line:nth-child(4) {
  text-align: right;
}

.chip {
  background-color: #555555;
  padding: 8px 16px;
  border-radius: 15px;
  font-size: 16px;
  color: white;
  text-align: center;
  display: inline-block;
  flex: none;
}

.ruby-red {
  color: #b94f61
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
}

.banner-narrow i {
  font-size: 2.5rem;
  cursor: pointer;
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
