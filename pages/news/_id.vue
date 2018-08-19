<template>
  <div class="news-detail">
    <BgBanner :title="'公告详情'"></BgBanner>
    <div class="detail-content">
      <div class="title-label">
        <h2>{{detailContent.title}}</h2>
      </div>
      <div class="sub-title">
        <span>{{detailContent.add_time | parseTime('{y}-{m}-{d}')}}</span>
      </div>
      <div class="main-detail">
        <div v-html="detailContent.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { requestAnnounceDetail, requestNewsDetail } from "~/assets/api"
import BgBanner from '~/components/BgBanner'
export default {
  components: {
    BgBanner
  },
  data() {
    return {
      loading: true,
      detailContent: {
        title: '',
        add_time: '2018-08-30',
        content: ''
      }
    }
  },
  async asyncData({ params, req, res, error }) {
    const { id, type } = params
    if (type && type === 'announce') {
      const { data: announces } = await requestAnnounceDetail({ id })
      if (announces.errcode == 0) {
        const { title, add_time, content } = announces
        return {
          detailContent: {
            title,
            add_time,
            content
          }
        }
      }
    } else {
      const { data: news } = await requestNewsDetail({ id })
      // if (!news.errcode) {
        const { title: new_t, add_time: new_time, content: n_content } = news
        return {
          detailContent: {
            title: new_t,
            add_time: new_time,
            content: n_content
          }
        }
      // }
    }

  },
  methods: {
    fetchData() {
      const { id } = this.$route.params
      requestAnnounceDetail({ id }).then(res => {
        const { data } = res
        if (data.errcode == 0) {
          const { title, add_time, content } = data
          this.detailContent = {
            title,
            add_time,
            content
          }
          this.loading = false
        }
      })
    }
  }
}

</script>
<style lang="scss">
@import '../../assets/styles/news.scss';

</style>
