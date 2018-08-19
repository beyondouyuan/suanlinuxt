<template>
  <div class="usercenter-container">
    <section class="user-box">
      <div class="user-info">
        <span class="avatar"></span>
        <span class="nickname">{{user}}</span>
      </div>
    </section>
    <section class="usercenter-wrapper">
      <div class="usercenter-bar">
        <ul class="usercenter">
          <li class="usercenter-item" v-for="(item, index) of userCenter" :key="index">
            <div class="menu-header arrow">
              <nuxt-link :to="{name: item.name}">{{item.title}}</nuxt-link>
            </div>
          </li>
          <li class="usercenter-item logout-item">
            <div class="menu-header arrow">
              <a href="javascript:;" @click="handleLogout">注销登录</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const userCenter = [{
  title: '个人中心',
  name: 'user-profile',
}, {
  title: '资产管理',
  name: 'property-income',
}, {
  title: '消息中心',
  name: 'message-pm',
}]
export default {
  name: 'UserSidebar',
  data() {
    return {
      userCenter
    }
  },
  computed: {
    ...mapGetters([
      'account',
    ]),
    user() {
      return this.account.username;
    }
  },
  methods: {
    handleLogout() {

    }
  }
}

</script>
<style lang="scss" scoped>
@import '../../assets/styles/usercenter.scss';

</style>
