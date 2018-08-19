<template>
  <div class="service-box">
    <div class="title-label">
      <h2>客服服务</h2>
    </div>
    <div class="service-content" v-html="content">
    </div>
  </div>
</template>
<script>
import {
  requestContact
} from "~/assets/api"
export default {
  data() {
    return {
      content: ''
    }
  },
  async asyncData({ params, req, res, error }) {
    const { content } = await requestContact()
    return {
      content
    }
  }
}

</script>
