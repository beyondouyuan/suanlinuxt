<template>
    <div class="news-detail">
        <BgBanner :title="'合约详情'"></BgBanner>
        <div class="detail-content">
          <div class="main-detail">
            <div v-html="detailContent"></div>
          </div>
        </div>
    </div>
</template>
<script>
import { requestContractDesc } from "~/assets/api"
import BgBanner from '~/components/BgBanner'
export default {
    components: {
        BgBanner
    },
    data() {
        return {
          loading: true,
          detailContent: ''
        }
    },
    async asyncData({ params, req, res, error }) {
      const { id } = params
      const { content } = await requestContractDesc({contract_id: id})
        return {
            detailContent: content,
            loading: false
          }
    }
}
</script>
<style lang="scss">
@import '../../assets/styles/news.scss';
</style>
