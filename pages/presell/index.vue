<template>
  <div class="contract-container">
    <div class="title-label">
      <h2>期货预售</h2>
    </div>
    <div class="contract-content">
      <presell-item v-for="(item, index) of contract_list" :contractItem="item" :key="index" v-on:handleSubmit="handleCreateOrderSubmit" :exchange="exchange"></presell-item>
    </div>
    <Dialog :visible.sync="buyDialog" type="confirm" title="确认订单" v-on:cancel="handleBuyCancel()" @confirm="handleBuyConfirm()" @close="handleBuyCancel()">
      <template slot="content">
        <div class="order-detail">
          <p>
            <label for="">合约单价：</label>
            <span v-if="order_detail.pay_type == 1">￥{{order_detail.per_price}}</span>
            <span v-if="order_detail.pay_type == 0">{{order_detail.per_price}}BTC</span>
          </p>
          <p>
            <label for="">购买份数:</label><span>{{order_detail.amount}}</span>
          </p>
          <p>
            <label for="">收益起算日:</label><span>{{order_detail.start_time | parseTime}}</span>
          </p>
        </div>
      </template>
    </Dialog>
  </div>
</template>
<script>
import PresellItem from '~/components/PresellItem'
import { requestContractDetail, requestContractCreateOrder, requestWebSetting, requestDCExchange } from '~/assets/api'
export default {
  components: {
    PresellItem
  },
  data() {
    return {
      contract_list: [],
      buyDialog: false,
      order_detail: {},
      exchange: 0
    }
  },
  async asyncData({ params, req, res, error }) {
    const { data } = await requestContractDetail()
    return {
      contract_list: data
    }
  },
  methods: {
    async fetchData() {
      const { data } = await requestContractDetail()
      requestDCExchange({
        symbol: "BTC"
      }).then(res => {
        const { exchange } = res
        this.exchange = exchange
        this.contract_list = data
      })
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
    showAlert(msg, cb) {
      this.$Alert({
        ...msg,
        onShow: () => {
        },
        onHide: () => {
          cb && cb()
        }
      })
    },
    handleBuyCancel() {
      console.log('取消订单')
    },
    handleSwiptchRouter(data) {
      setTimeout(() => {
        this.$router.push({
          name: 'contract',
          params: data
        })
      }, 600)
    },
    handleRouteToOrderList(data) {
      this.$router.push({
        name: 'property-orders',
        params: data
      })
    },
    handleLTCSubmit(data) {
      console.log(data)
    },
    handleBuyConfirm() {
      let data = {}
      data.contract_id = this.order_detail.contract_id
      data.amount = this.order_detail.amount
      data.pay_type = this.order_detail.pay_type
      // 下单
      requestContractCreateOrder(data).then(res => {
        var order = {}
        if (!res.errmsg) {
          this.buyDialog = false
          order.id = res.order_id
          order.detail = this.order_detail
          this.showToast({
            title: '下单成功',
            content: '购买合约成功',
            type: 'success'
          }, () => {
            if (this.order_detail.pay_type == 1) {
              this.handleSwiptchRouter(order)
            } else {
              this.handleRouteToOrderList(order)
            }
          })
        } else if (res.errcode == 304) { // 未登陆 请登陆
          this.showToast({
            title: '温馨提示',
            content: res.errmsg,
            type: 'warning'
          }, () => this.handleToLogin())
        } else if (res.errcode == 305) { // 余额不足 请充值
          this.showToast({
            title: '温馨提示',
            content: res.errmsg,
            type: 'warning'
          }, () => this.handleToCharge())
        } else {
          this.showToast({
            title: '下单失败，请重试',
            content: res.errmsg,
            type: 'error'
          }, () => {
            this.buyDialog = false
          })
        }
      }).catch(e => {
        this.showToast({
          title: '请求出错',
          content: '服务器请求失败，请重试',
          type: 'error'
        }, () => {
          this.buyDialog = false
        })
      })
    },
    handleToLogin() {
      setTimeout(() => {
        this.$router.push({
          name: 'login'
        })
      }, 800)

    },
    handleToCharge() {
      setTimeout(() => {
        this.$router.push({
          name: 'property-preview'
        })
      }, 800)
    },
    handleCreateOrderSubmit(data) {
      console.log(data)
      if (!data.checked) {
        this.showAlert({
          title: '提示',
          content: '请阅读并同意购买协议',
          // type: 'warning'
        })
        return
      }
      if (data.amount < 1) {
        this.showAlert({
          title: '提示',
          content: '请输入购买份数',
          // type: 'warning'
        })
        return
      }
      this.buyDialog = true
      this.order_detail = data
    }
  }
}

</script>
<style lang="scss">
@import '../../assets/styles/contract.scss';

</style>
