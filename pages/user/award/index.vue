<template>
  <section class="award-container">
    <SubMenu class="mobile-show" :SubMenu="subMenu"></SubMenu>
    <div class="padding-box">
      <div class="title-label">
        <h2>推荐奖励</h2>
      </div>
      <div class="tips-box">
        <p class="pre-tips">推荐朋友来算力多注册并购买算力，您将获得被推荐用户算力收益的20%作为奖励。
          <br>您的专属推荐链接:{{refer}}
          <span class="copy-link" v-clipboard:copy="refer" v-clipboard:success="handleCopy">复制链接</span>
        </p>
      </div>
      <div class="qrcode">
        <no-ssr>
          <vue-qr :text="code" qid="testid"></vue-qr>
        </no-ssr>
        <span>扫码二维码分享</span>
      </div>
      <section class="recomd-box">
        <div class="title-label">
          <h2>推荐列表</h2>
        </div>
        <div class="table-box">
          <table-box :items="list_of_user">
            <template>
              <tr slot="cols">
                <th>账户</th>
                <th>奖励比例</th>
                <th>加入时间</th>
              </tr>
            </template>
            <template slot="item" slot-scope="props">
              <tr>
                <td>
                  {{ props.item.username }}
                </td>
                <td>
                  {{ props.item.percent * 100 }}%
                </td>
                <td>
                  {{ props.item.date_joined | parseTime}}
                </td>
              </tr>
            </template>
          </table-box>
        </div>
        <div v-if="list_num_pages > 1" class="pagination-container">
          <pagination :page-index="list_currentPage" :total="list_count" :page-size="pageSize" @change="listPageChange">
          </pagination>
        </div>
      </section>
      <section class="record-box">
        <div class="title-label">
          <h2>奖励记录</h2>
        </div>
        <div class="table-box">
          <table-box :items="list_of_income">
            <template>
              <tr slot="cols">
                <th>奖励</th>
                <th>算力类型</th>
                <th>算力</th>
                <th>奖励时间</th>
              </tr>
            </template>
            <template slot="item" slot-scope="props">
              <tr>
                <td>
                  {{ props.item.reward }}
                </td>
                <td>
                  {{ props.item.power_type }}
                </td>
                <td>
                  {{ props.item.power }}TH/s
                </td>
                <td>
                  {{ props.item.datetime | parseTime}}
                </td>
              </tr>
            </template>
          </table-box>
        </div>
        <div v-if="income_num_pages > 1" class="pagination-container">
          <pagination :page-index="income_currentPage" :total="income_count" :page-size="pageSize" @change="incomePageChange">
          </pagination>
        </div>
      </section>
      <section class="award-rule">
        <div class="title-label">
          <h2>推荐规则</h2>
        </div>
        <div class="rule-list" v-html="rule"></div>
      </section>
    </div>
  </section>
</template>
<script>
import {
  requestAwardIncome,
  requestAwardRule,
  requestAwardList,
  requestAwardCode
} from "~/assets/api"
const subMenu = [{
  title: '个人信息',
  name: 'user-profile'
}, {
  title: '安全设置',
  name: 'user-setting'
}, {
  title: '推荐降级',
  name: 'user-award'
}]
const resultcolumns = [{
  key: 'type',
  title: '产出'
}, {
  key: 'price',
  title: '产出'
}, {
  key: 'amount',
  title: '管理费'
}, {
  key: 'amount1',
  title: '管理费'
}, {
  key: 'benefit',
  title: '收益'
}]
const resultData = [{
  type: '买',
  price: '12',
  amount: 100,
  amount1: 200,
  benefit: 300
}, {
  type: '买',
  price: '13',
  amount: 140,
  amount1: 200,
  benefit: 300
}, {
  type: '买',
  price: '55',
  amount: 333,
  amount1: 200,
  benefit: 300
}]
export default {
  data() {
    return {
      subMenu,
      resultcolumns,
      resultData,
      list_of_income: [],
      list_of_user: [],
      rule: '',
      code: '',
      pageSize: 15, //每页显示15条数据
      list_currentPage: 1, //当前页码
      income_currentPage: 1,
      list_count: 0, //总记录数
      income_count: 0,
      num_pages: 0,
      list_num_pages: 1,
      income_num_pages: 1
    }
  },
  layout(context) {
    return 'user'
  },
  created() {
    console.log(process.env.NODE_ENV)
  },
  async asyncData({ params, req, res, error }) {
    const [
      list,
      income,
      awardCode,
      awardRule
    ] = await Promise.all([
      requestAwardList(),
      requestAwardIncome(),
      requestAwardCode(),
      requestAwardRule()
    ])
    const { code } = awardCode
    const { desc } = awardRule
    return {
      list_num_pages: list.list_num_pages,
      list_count: list.list_num_pages * 15,
      list_of_user: list.list_of_user,
      income_num_pages: income.income_num_pages,
      income_count: income.income_num_pages * 15,
      list_of_income: income.list_of_income,
      code: code,
      rule: desc
    }
  },
  computed: {
    refer() {
      // const host = location.host
      return process.env.NODE_ENV == 'development' ? `http://loccalhost:3000/register/?refer=${this.code}` : `http://www.suanliduo.cn/register/?refer=${this.code}`
    }
  },
  methods: {
    handleCopy(e) {
      this.showToast({
        title: '信息提示',
        content: '复制成功',
        type: 'success'
      })
    },
    listPageChange(page) {
      this.list_currentPage = page
    },
    incomePageChange(page) {
      this.income_currentPage = page
    },
    showToast(msg, cb) {
      this.$Toast({
        ...msg,
        onShow: () => {},
        onHide: () => {
          cb && cb()
        }
      })
    },
    async applyList(page = 1) {
      const list = await requestAwardList()
      this.list_num_pages = list.list_num_pages
      this.list_count = list.list_num_pages * 15
      this.list_of_user = list.list_of_user
    },
    async applyIncome(page = 1) {
      const income = await requestAwardIncome()
      this.income_num_pages = income.income_num_pages
      this.income_count = income.income_num_pages * 15
      this.list_of_income = income.list_of_income
    },
    async fetchData() {
      this.applyList()
      this.applyIncome()
      try {
        const code = await requestAwardCode()
        const rule = await requestAwardRule()
        Promise.all([code, rule])
          .then(res => {
            const { code } = res[0]
            const { desc } = res[1]
            this.code = code
            this.rule = desc
          })
      } catch (e) {
        this.showToast({
          title: '消息提示',
          content: '请求数据失败',
          type: 'error'
        })
      }


    }
  }
}

</script>
<style lang="scss">
@import '../../../assets/styles/award.scss';

</style>
