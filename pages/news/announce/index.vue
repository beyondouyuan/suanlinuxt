<template>
  <div class="news-info">
    <div class="title-label">
      <h2>公告列表</h2>
    </div>
    <div class="news-content">
      <ul>
        <nuxt-link tag="li" :to="{name: 'news-id', params: {id: item.id, type: 'announce'}}" v-for="(item, index) of list_of_announce" :key="index">
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
import { requestAnnounce } from "~/assets/api"
export default {
  data() {
    return {
      list_of_announce: []
    }
  },
  layout(context) {
    return 'news'
  },
  async asyncData({ params, req, res, error }) {
    const announce = await requestAnnounce()
    const { list_of_announce } = announce
    return {
      list_of_announce: list_of_announce
    }
  }
}

</script>
