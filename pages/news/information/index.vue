<template>
  <div class="news-info">
    <div class="title-label">
      <h2>资讯列表</h2>
    </div>
    <div class="news-content">
      <ul>
        <nuxt-link tag="li" :to="{name: 'news-id', params: {id: item.id}}" v-for="(item, index) of list_of_news" :key="index">
          <div class="time-wrapper">
            <span>{{item.datetime | parseTime('{d}', '0')}}</span>
            <span>{{item.datetime | parseTime('{m}', '0')}}月</span>
          </div>
          <span>{{item.title}}</span>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { requestNews } from "~/assets/api"
export default {
  data() {
    return {
      list_of_news: []
    }
  },
  layout(context) {
    return 'news'
  },
  async asyncData({ params, req, res, error }) {
    const data = await requestNews()
    const { list_of_news } = data
    return {
      list_of_news: list_of_news
    }
  }
}

</script>
