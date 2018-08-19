<template>
  <section class="income-container">
    <SubMenu class="mobile-show" :SubMenu="subMenu"></SubMenu>
    <div class="padding-box">
      <div class="title-label">
        <h2>收益查看</h2>
        <div class="income-select-box">
          <Select :options="list_of_contract" @iclick="handleSelect" :selected="default_select"></Select>
        </div>
      </div>
      <div class="income-type">
        <div class="type-item">
          <span>总算力</span>
          <span>{{income.total_hr}}/T</span>
        </div>
        <div class="type-item">
          <span>累计算力收益</span>
          <span>{{income.total_profit}}BTC</span>
        </div>
      </div>
      <div class="income-detail">
        <div class="title-label">
          <h2>昨日收益明细</h2>
        </div>
        <div class="detail-box">
          <div class="detail-item">
            <div class="item">
              <span>算力产出（BTC）</span>
              <span>{{income.profit}}</span>
            </div>
            <div class="item">
              <span>结算标准（BTC）</span>
              <span>{{income.standard}}</span>
            </div>
            <div class="item">
              <span>电费（BTC）</span>
              <span>{{income.power_fee}}</span>
            </div>
          </div>
          <div class="detail-item">
            <div class="item">
              <span>服务费（BTC）</span>
              <span>{{income.service_fee}}</span>
            </div>
            <div class="item">
              <span>结算汇率（USD/BTC）</span>
              <span>{{income.exchange}}</span>
            </div>
            <div class="item">
              <span>每T净收益（BTC）</span>
              <span>{{income.profit_per_unit}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="title-label">
        <h2>收益记录</h2>
      </div>
      <div class="tab-pannel">
        <div class="table-box">
          <div class="tab-pannel">
            <span class="cursor" :class="[filter_time == 'all'? 'active' : '' ]" @click="handleFilter('all')">全部时间</span>
            <span class="cursor" :class="[filter_time == 'seven'? 'active' : '' ]" @click="handleFilter('seven')">最近七天</span>
            <span class="cursor" :class="[filter_time == 'month'? 'active' : '' ]" @click="handleFilter('month')">最近一月</span>
            <span class="cursor">查询</span>
          </div>
          <table-box :items="list_of_record">
            <template>
              <tr slot="cols">
                <th>时间</th>
                <th>净收益(BTC)</th>
                <th>累计净收益(BTC)</th>
              </tr>
            </template>
            <template slot="item" slot-scope="props">
              <tr>
                <td>
                  {{ props.item.datetime | parseTime }}
                </td>
                <td>
                  {{ props.item.btc_net_income }}
                </td>
                <td>
                  {{ props.item.btc_income }}
                </td>
              </tr>
            </template>
          </table-box>
        </div>
        <div v-if="num_pages > 1" class="pagination-container">
          <pagination :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange">
          </pagination>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Select from '~/components/Common/Select'
import {
  requestContractMining,
  requestContractMiningRecord,
  requestContractDetail
} from '~/assets/api'
const subMenu = [{
  title: '收益查看',
  name: 'property-income'
}, {
  title: '订单记录',
  name: 'property-orders'
}, {
  title: '资产总览',
  name: 'property-preview'
}]
export default {
  components: {
    Select
  },
  data() {
    return {
      subMenu,
      income: {},
      list_of_record: [],
      type: 1,
      currentPage: 1,
      count: 100,
      pageSize: 15,
      list_of_contract: [],
      default_select: '',
      num_pages: 1,
      contract_id: 0,
      filter_time: 'all',
      start_time: '',
      end_time: ''
    }
  },
  layout(context) {
    return 'user'
  },
  async asyncData({ params, req, res, error }) {
    const [contractMining, contractDetail, record] = await Promise.all([
      requestContractMining(),
      requestContractDetail(),
      requestContractMiningRecord({ page: 1, start_time: '', end_time: '' })
    ]).catch(err => {
      console.error(`err =>>> ${err}`)
      error()
    })
    const { data } = contractDetail
    const list_of_contract = []
    for (let index in data) {
      let contract = {}
      contract.key = data[index].id
      contract.text = data[index].machine_model
      list_of_contract.push(contract)
    }

    return {
      income: contractMining,
      list_of_contract: list_of_contract,
      default_select: list_of_contract[0].text,
      contract_id: list_of_contract[0].key,
      list_of_record: record.list_of_record,
      currentPage: record.current_page,
      count: 15 * record.num_pages,
      num_pages: record.num_pages
    }
  },
  methods: {
    async fetchData() {
      requestContractMining().then(res => {
        this.income = res
      })
      requestContractDetail().then(res => {
        const { data } = res
        for (let index in data) {
          let contract = {}
          contract.key = data[index].id
          contract.text = data[index].machine_model
          this.list_of_contract.push(contract)
        }
        this.default_select = this.list_of_contract[0].text
        this.contract_id = this.list_of_contract[0].key
        this.fetchRecord()
      })
    },
    async fetchRecord(page = 1, start_time = '', end_time = '') {
      let record = null
      if (this.filter_time == 'all') {
        record = await requestContractMiningRecord({
          page: page
        })
      } else {
        record = await requestContractMiningRecord({
          page: page,
          start_time: start_time,
          end_time: end_time
        })
      }
      this.list_of_record = record.list_of_record
      this.currentPage = record.current_page
      this.count = 15 * record.num_pages
      this.num_pages = record.num_pages
    },
    pageChange(page) {
      this.currentPage = page
      if (this.filter_time == 'all') {
        this.fetchRecord(page)
      } else {
        this.fetchRecord(page, this.start_time, this.end_time)
      }
    },
    handleSelect(data) {
      this.contract_id = data.key
      requestContractMining({ contract_id: data.key }).then(res => {
        this.income = res
      })
      this.fetchRecord()
    },
    handleFilter(filter_time) {
      this.filter_time = filter_time
      let today = new Date()
      let end_time = this.formatDate(today.getTime())
      let start_time = this.filterTime(filter_time)
      this.start_time = start_time
      this.end_time = end_time
      this.fetchRecord(1, start_time, end_time)
    }
  }
}

</script>
<style lang="scss">
@import '../../../assets/styles/income.scss';

</style>
