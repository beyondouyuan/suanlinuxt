/*
 * @Author: beyondouyuan
 * @Date:   2018-03-18 01:47:48
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-08-18 14:07:55
 * actions.js 即对数据进行各种操作，即通过commit给mutaions实现
 */

import * as types from './mutations-types'

export const LoginoutAction = ({ commit }) => {
  commit(types.SET_ACCOUNT, '')
}

export const AccountAction = ({ commit }, account) => {
  commit(types.SET_ACCOUNT, account)
}

export const LoadingAction = ({ commit }, loading) => {
  commit(types.SET_LOADING, loading)
}

export const toggleSideBar = ({ commit }) => {
  commit(types.TOGGLE_SIDEBAR)
}

export const handleCloseSideBar = ({ commit }, opener) => {
  commit(types.CLOSE_SIDEBAR, opener)
}

export const toggleDrop = ({ commit }) => {
  commit(types.TOGGLE_DROP)
}

export const handleCloseDrop = ({ commit }, drop) => {
  commit(types.CLOSE_DROP, drop)
}

export const SetUserAgent = ({ commit }, userAgent) => {
  commit(types.SET_USERAGENT, userAgent)
}

export const nuxtServerInit = ({ commit }, { req }) => { // 将本地服务端数据发送给浏览器
  if (req.session && req.session.firmUser) {
    commit('SET_FIRMUSER', req.session.firmUser)
  }
}
