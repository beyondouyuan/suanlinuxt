<template>
  <section class="platform-container">
    <div class="title-box">
      <h2>我们的<strong class="plat-s">平台优势</strong>有哪些？</h2>
      <p>{{tips}}</p>
    </div>
    <ul class="platform-item">
      <li v-for="(item, index) of platform" :key="index">
        <div>
          <div class="logo">
            <img v-if="index === 0 " src="~/assets/images/security-icon.png" />
            <img v-if="index === 1 " src="~/assets/images/public-icon.png" />
            <img v-if="index === 2 " src="~/assets/images/specification-icon.png" />
            <img v-if="index === 3 " src="~/assets/images/operation-icon.png" />
            <img v-if="index === 4 " src="~/assets/images/service-icon.png" />
          </div>
          <div class="title">
            <h2>{{item.title}}</h2>
          </div>
          <div class="tips">{{item.tips}}</div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
const platform = [{
  logo: 'security-icon.png',
  title: '稳定安全',
  tips: '多重签名技术'
}, {
  logo: 'public-icon.png',
  title: '公开透明',
  tips: '平台费用公开透明'
}, {
  logo: 'specification-icon.png',
  title: '规范管理',
  tips: '从矿机选购到产生效益'
}, {
  logo: 'operation-icon.png',
  title: '操作便捷',
  tips: '简单高效快捷'
}, {
  logo: 'service-icon.png',
  title: '贴心服务',
  tips: '专业客服一对一'
}]
export default {
  name: 'Platform',
  data() {
    return {
      platform
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    tips: {
      type: String,
      required: true
    }
  }
}

</script>
