<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="top">
        <nuxt-link class="login-link" :to="{name: 'register'}">还没有账号？立即注册&gt;&gt;</nuxt-link>
      </div>
      <div class="login-main">
        <div class="left">
          <nuxt-link class="login-link" :to="{name:'index'}"><img src="~/assets/images/left.png" alt=""></nuxt-link>
        </div>
        <div class="login-item login-box">
          <ul class="login-list">
            <li class="title-label">
              <h2>登陆</h2>
            </li>
            <li class="input-box">
              <input type="text" v-model="loginParams.username" name="username" placeholder="账户名">
            </li>
            <li class="input-box">
              <input type="password" v-model="loginParams.password" name="password" placeholder="密码">
            </li>
            <li class="input-box">
              <div class="box-left">
                <input type="text" v-model="loginParams.cptch_code" name="author" placeholder="验证码">
              </div>
              <div class="box-right" @click="handleRefreshCptch" title="点击刷新验证码">
                <img :src="cptch.cptch_image">
              </div>
            </li>
          </ul>
          <div class="btn-box">
            <button v-waves class="btn" @click="handleSubmit">登陆</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Select from '~/components/Common/Select'
import { requestLogin, requestApplyCptch } from '~/assets/api'
import { mapActions } from 'vuex'
const errcode = 0
export default {
  components: {
    Select
  },
  data() {
    return {
      checked: false,
      cptch: '',
      loginParams: {
        username: '',
        password: '',
        cptch_code: '',
        cptch_key: ''
      }
    }
  },
  layout(context) {
    return 'login'
  },
  async asyncData({ params, req, res, error }) {
    const { cptch_image, cptch_key } = await requestApplyCptch()
    return {
      cptch: {
        cptch_image: cptch_image,
        cptch_key: cptch_key
      },
      loginParams: {
        cptch_key: cptch_key
      }
    }
  },
  methods: {
    ...mapActions([
      'AccountAction'
    ]),
    handleCheck() {
      this.checked = !this.checked
    },
    showToast(msg, cb) {
      this.$Toast({
        ...msg,
        onShow: () => {
        },
        onHide: () => {
          cb && cb()
        }
      })
    },
    handleHistoryBack() {
      this.$router.push({ name: 'user' })
    },
    handleErrorLogin() {
      this.$router.push({ name: 'index' })
    },
    handleRefreshCptch() {
      this.fetchtApplyCptch()
    },
    async fetchtApplyCptch() {
      const { cptch_image, cptch_key } = await requestApplyCptch()
      this.cptch = {
        cptch_image,
        cptch_key
      }
      this.loginParams.cptch_key = cptch_key
    },
    handleSubmit() {
      const condition = {
        ...this.loginParams,
      }
      const { username } = this.loginParams
      const userInfo = {
        username
      }

      requestLogin(condition).then(res => {
        if (res.errcode == errcode) {
          this.AccountAction(userInfo)
          this.showToast({
            title: '信息提示',
            content: res.errmsg,
            type: 'success'
          }, this.handleHistoryBack)

        } else {
          this.showToast({
            title: '信息提示',
            content: res.errmsg,
            type: 'error'
          })
          this.fetchtApplyCptch()
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../../assets/styles/login.scss';

</style>
