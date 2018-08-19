<template>
  <div class="about-box">
    <div class="title-label">
      <h2>公司简介</h2>
    </div>
    <div class="about-content" v-html="content">
    </div>
  </div>
</template>
<script>
import {
  requestAbout
} from "~/assets/api"
export default {
  data() {
    return {
      content: ''
    }
  },
  async asyncData({ params, req, res, error }) {
    const { content } = await requestAbout()
    return {
      content
    }
  }
}

</script>
