<template>
  <footer class="footer">
    <div class="footer-item item-top">
      <ul class="contact-list">
        <li><a>联系我们</a></li>
        <li>qq：236543865</li>
        <li>微信：suanliduo</li>
        <li><a href="tel:020-3122323">客服电话： 020-3122323</a></li>
        <li><a href="mailto:kf@suanliduo.cn">公司邮箱：kf@suanliduo.cn</a></li>
      </ul>
      <ul class="about-list">
        <li>
          <a>关于我们</a>
        </li>
        <li>
          <nuxt-link to="/help/about">公司介绍</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/help/service">商务合作</nuxt-link>
        </li>
      </ul>
      <ul class="user-list">
        <li><a>用户须知</a></li>
        <li><nuxt-link to="/agreement">用户协议</nuxt-link></li>
        <li><nuxt-link to="/policy">隐私政策</nuxt-link></li>
        <li><nuxt-link to="/law">法律声明</nuxt-link></li>
        <li><nuxt-link to="/relief">免责声明</nuxt-link></li>
      </ul>
      <ul class="merchant-list">
        <li><a>客户服务</a></li>
        <li><nuxt-link to="/help/qa">常见问题</nuxt-link></li>
        <!-- <li><nuxt-link to="/home">费率标准</nuxt-link></li> -->
        <li><nuxt-link to="/news/announce">公告</nuxt-link></li>
      </ul>
    </div>
    <div class="footer-item item-bottom">
      <ul class="server-list">
        <li class="img-logo">
          <div class="server-icon">
            <img src="~/assets/images/bottom-logo.png">
          </div>
        </li>
        <li class="copy-right">
          <p>© 2018 算力多公司 版权所有</p>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    data() {
      return {

      }
    }
  }
</script>
