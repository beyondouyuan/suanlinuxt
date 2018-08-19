<template>
  <div @click.capture="handleCloseDropMenu">
    <Header />
    <div class="out-container">
      <div class="user-container">
        <Sidebar :defaultActive="defaultActive"></Sidebar>
        <section class="view-main_wrapper">
          <nuxt-child />
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Sidebar from '~/components/Sidebar'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Sidebar,
    Header,
    Footer
  },
  methods: {
    ...mapActions([
      'handleCloseDrop'
    ]),
    handleCloseDropMenu() {
      this.handleCloseDrop(false)
    },
  },
  middleware: 'auth',
  data() {
    return {
      defaultActive: 0,
    }
  }
}

</script>
<style lang="scss">
@import '../assets/styles/user.scss';
@import '../assets/styles/property.scss';

</style>
