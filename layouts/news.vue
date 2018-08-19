<template>
  <div>
    <Header />
    <div class="content-container">
      <div class="news-container">
        <BgBanner :title="'公告资讯'"></BgBanner>
        <section class="view-wrapper">
          <div class="bar-wrapper">
            <aside class="aside">
              <ul>
                <nuxt-link class="arrow" :class="[$route.path.includes(item.name.toLocaleLowerCase()) ? 'active' : 'default', activeIndex == index ? 'open' : '']" v-for="(item, index) of asideList" :key="index" tag="li" :to="{name: item.name}">{{item.title}}</nuxt-link>
              </ul>
            </aside>
          </div>
          <div class="main-content">
            <nuxt />
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
const asideList = [{
  name: 'news-announce',
  title: '公告列表'
}, {
  name: 'news-information',
  title: '资讯列表'
}]
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BgBanner from '~/components/BgBanner'
import {
  requestWebSetting
} from "~/assets/api"
export default {
  components: {
    Header,
    Footer,
    BgBanner
  },
  data() {
    return {
      asideList,
      activeIndex: 0
    }
  }
}

</script>
<style lang="scss">
@import '../assets/styles/news.scss';

</style>
