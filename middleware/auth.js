/*
 * @Author: beyondouyuan
 * @Date:   2018-08-17 01:03:24
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-08-17 21:15:42
 */

export default function({ store, error, route, req, res, redirect }) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
  var token, path

  if (isClient) {
    // 可通过组件的props接收error信息
    if (!store.state.account.username) {
      redirect(redirectURL)
    }
  }
}
