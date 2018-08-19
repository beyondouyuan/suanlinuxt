/*
 * @Author: beyondouyuan
 * @Date:   2018-03-18 01:51:39
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-08-18 14:31:57
 * state.js 定义管理所有的数据状态，即存放数据的地方
 */

// import {
//   getToken
// } from '~/plugins/storage.js'
// const user = getToken()
const state = {
  account: {
    username: ''
  },
  sidebar: {
    opened: false
  },
  drop: false,
  fetchLoading: false,
  userAgent: false
}

export default state
