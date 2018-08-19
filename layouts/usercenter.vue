<template>
  <div>
    <Header />
    <div class="out-container">
      <UserSidebar></UserSidebar>
      <section class="view-main_wrapper">
        <nuxt />
      </section>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import UserSidebar from '~/components/UserSidebar'
import Sidebar from '~/components/Sidebar'
export default {
  components: {
    Header,
    Footer,
    UserSidebar
  },
  data() {
    return {
      userAgent: false,
      defaultActive: 0,
      openView: false
    }
  },
  methods: {
    handleOpenPagesView() {
      this.openView = true
    },
    handleClosePagesView() {
      this.openView = false
    }
  }
}

</script>
<style lang="scss">
@import '../assets/styles/user.scss';

</style>
