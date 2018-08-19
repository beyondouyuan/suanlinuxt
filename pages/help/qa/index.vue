<template>
  <div class="qa-box">
    <div class="title-label">
      <h2>常见问题</h2>
    </div>
    <div class="qa-content" v-html="content">
    </div>
  </div>
</template>
<script>
import { requestQa } from "~/assets/api"
export default {
  data() {
    return {
      content: ''
    }
  },
  async asyncData({ params, req, res, error }) {
    const { content } = await requestQa()
    return {
      content
    }
  }
}

</script>
