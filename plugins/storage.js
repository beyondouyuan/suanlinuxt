/*
 * @Author: beyondouyuan
 * @Date:   2018-08-17 00:05:58
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-08-17 20:48:37
 */


import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState()(store)
}
