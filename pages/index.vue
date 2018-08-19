<template>
  <section class="container">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners">
          <a :href="banner.to_url"><img :src="banner.url"></a>
        </div>
      </div>
    </div>
    <div class="notify-container">
      <div class="content">
        <div class="notify-tips">
          <img src="~/assets/images/announcement-icon.png" alt="">
          <span class="news-t">最新公告</span>
        </div>
        <div class="scroll-wrap">
          <transition name="custom-classes-transition" enter-active-class="animated bounceIn" leave-active-class="animated bounceOutRight">
            <ul class="scroll-content">
              <li v-for="(item, index) in list_of_announce" :key="index">{{item.title}}</li>
            </ul>
          </transition>
        </div>
        <nuxt-link :to="{name: 'news'}" class="more">更多公告>></nuxt-link>
      </div>
    </div>
    <section class="service-container">
      <service-item v-for="(item, index) of list_of_currency_info" :Service="item" :key="index"></service-item>
    </section>
    <Platform :title="'平台优势'" :tips="'以用户为中心，竭诚为您服务'"></Platform>
    <Mine :title="'矿场一览'" :subTitle="'矿场一览'" :mine="list_of_mine"></Mine>
    <section class="partner-container">
      <div class="title-box">
        <h2>这是我们的<strong class="partner-s">合作伙伴</strong></h2>
        <p>合作伙伴</p>
      </div>
      <div v-swiper:slidesSwiper="slidesOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in list_of_partner">
            <img :src="banner.url">
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import Mine from '~/components/Mine'
import Platform from '~/components/Platform'
import ServiceItem from '~/components/ServiceItem'
import { mapActions } from 'vuex'
import { toFixed, isMobile } from '~/plugins/utils.js'

import {
  requestBanner,
  requestPlatform,
  requestMine,
  requestPartner,
  requestDC,
  requestDCExchange,
  requestDCIncome,
  requestAnnounce,
  requestWebSetting
} from '~/assets/api'
const errcode = 0
export default {
  data() {
    return {
      inv: 3000,
      transitionName: 'move',
      styleObject: {
        width: '100%',
        height: '460px'
      },
      target: '_blank',
      activeIndex: 0,
      seo: {
        title: '',
        keywords: '',
        desc: ''
      },
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      },
      slidesOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
      }
    }
  },
  computed: {
    top() {
      return -this.activeIndex * 50 + 'px';
    },
    classOption: function() {
      return {
        limitMoveNum: 6,
        direction: 2,
        // autoPlay: false
      }
    }
  },
  async fetch ({ store, params, userAgent }) {
    console.log(isMobile(userAgent))
    store.commit('SET_USERAGENT', isMobile(userAgent))
  },
  async asyncData({ params, req, res, error, userAgent }) {
    const seo = await requestWebSetting()
    const [
      banner,
      announce,
      mine,
      partner,
      dc,
      btc,
      ltc,
      btc_income,
      ltc_income
    ] = await Promise.all([
      requestBanner(),
      requestAnnounce(),
      requestMine(),
      requestPartner(),
      requestDC(),
      requestDCExchange({
        symbol: "BTC"
      }),
      requestDCExchange({
        symbol: "LTC"
      }),
      requestDCIncome({
        symbol: "BTC"
      }),
      requestDCIncome({
        symbol: "LTC"
      })
    ]).catch(err => {
      console.log(`err =>>> ${err}`)
      console.error(err)
    })
    const { list_of_banner } = banner
    const { list_of_announce } = announce
    const { list_of_mine } = mine
    const { list_of_partner } = partner
    const { list_of_currency } = dc
    let list_of_currency_info = []
    for (var i = 0; i < list_of_currency.length; i++) {
      let info = {}
      info.name = list_of_currency[i].name
      info.url = list_of_currency[i].url
      if (i == 0) {
        info.price = toFixed(btc.exchange, 2)
        info.income = toFixed(btc_income.btc_per_day_unit, 8)
      } else {
        console.log(ltc.exchange)
        info.price = toFixed(ltc.exchange, 2)
        info.income = toFixed(ltc_income.btc_per_day_unit, 8)
      }
      list_of_currency_info[i] = info
    }
    return {
      seo: seo,
      banners: list_of_banner,
      list_of_announce: list_of_announce,
      list_of_mine: list_of_mine,
      list_of_partner: list_of_partner,
      list_of_currency_info: list_of_currency_info
    }
  },
  head() {
    return {
      title: `${this.seo.title}`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: `${this.seo.keywords}` },
        { hid: 'description', name: 'description', content: `${this.seo.desc}` }
      ]
    }
  },
  components: {
    Mine,
    Platform,
    ServiceItem
  }
}

</script>
<style lang="scss">
.warp {
  width: 85vw; // (5 * 15(width) + 2(margin-left))
  margin: 0 auto;
  height: 20vw;
  overflow: hidden; // background-color: #EEEEEE;
}

.ul-item {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 102vw; //(6 * 15(width) + 2(margin-left))
  &.ul-item2 {
    width: 0;
  }
  .li-item {
    float: left;
    width: 15vw;
    height: 15vw;
    margin-left: 2vw;
    margin-top: 2rem; // line-height: 15vw;
    background-color: lightgray;
    font-family: 'Amaranth', sans-serif;
    font-size: 16px;
    text-align: center;
    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    >img {
      width: 100%;
      height: auto;
    }
    &:hover {
      p {
        color: #FFFFFF;
        background-color: rgba(0, 0, 0, .7);
        transform: scale(1.2)
      }
    }
    p {
      transition: all .5s ease-in-out;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: 100;
      color: rgba(255, 255, 255, .8);
      padding: .5rem 0;
      background-color: rgba(0, 0, 0, .3);
    }
  }
}

.container {
  img {
    width: 100%;
  }
}

.partner-container {
  .swiper-slide {
    border: 1px solid #EEEEEE;
  }
}

</style>
