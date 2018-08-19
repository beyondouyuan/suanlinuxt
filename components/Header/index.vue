<template>
  <header class="header">
    <!-- 坑爹得SSR 处理移动端还是PC端判断有点烦 直接改为用css控制 -->
    <!-- <div class="m-top-logo" v-if="$store.state.userAgent"> -->
    <div class="m-top-logo mobile-show">
      <img src="~/assets/images/top-logo.png">
    </div>
    <nav class="navigation" :class="{'is-active':sidebar.opened}">
      <div class="nav-box">
        <ul class="nav nav-flex nav-menu">
          <!-- <li v-if="!$store.state.userAgent" class="top-logo"><img src="~/assets/images/top-logo.png" alt=""></li> -->
          <li class="top-logo pc-show">
            <img src="~/assets/images/top-logo.png" alt=""></li>
          <li v-for="(item, index) of menus" :key="index">
            <nuxt-link :to="{name: item.name}">{{item.title}}</nuxt-link>
          </li>
        </ul>
        <ul class="nav nav-flex nav-login" v-show="!user">
          <li>
            <nuxt-link to="/login">登陆</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/register">注册</nuxt-link>
          </li>
        </ul>
        <ul class="nav nav-flex nav-login" v-show="user">
          <div class="mobile-show">
            <li>
              <nuxt-link to="/user">个人中心</nuxt-link>
            </li>
          </div>
          <div class="pc-show">
            <li class="full-link arrow" :class="{'is-drop':drop}" @click="handleDropDown">
              <span>{{user}}</span>
            </li>
            <drop-menu v-show="drop"></drop-menu>
          </div>
        </ul>
      </div>
    </nav>
    <div class="hunmber">
      <hamburger class="hamburger-container" :toggleClick="handleToggleSideBar" :isActive="sidebar.opened"></hamburger>
    </div>
  </header>
</template>
<script>
import Hamburger from '~/components/Hamburger'
import DropMenu from '~/components/DropMenu'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {
    Hamburger,
    DropMenu
  },
  data() {
    return {
      menus: [{
        name: 'index',
        path: '/',
        title: '首页'
      }, {
        name: 'presell',
        path: '/presell',
        title: '合约预售'
      }, {
        name: 'trade',
        path: '/trade',
        title: '交易市场'
      }, {
        name: 'benefit',
        path: '/benefit',
        title: '收益计算器'
      }, {
        name: 'news',
        path: '/news',
        title: '公告资讯'
      }, {
        name: 'help',
        path: '/help',
        title: '帮助中心'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'account',
      'sidebar',
      'drop'
    ]),
    user() {
      return this.account.username;
    }
  },
  watch: {
    '$route' (to, from) {
      setTimeout(() => {
        // 收起侧边栏及下拉菜单
        this.handleCloseDrop(false)
        this.handleCloseSideBar(false)
      }, 200)
    }
  },
  methods: {
    ...mapActions([
      'toggleSideBar',
      'handleCloseSideBar',
      'toggleDrop',
      'handleCloseDrop'
    ]),
    handleDropDown() {
      this.toggleDrop()
    },
    handleToggleSideBar() {
      this.toggleSideBar()
    }
  }
}

</script>
