/*
 * @Author: beyondouyuan
 * @Date:   2018-08-12 13:57:27
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-08-17 22:11:31
 */

import axios from 'axios'
/**
 * [创建axios 实例]
 * @type {[type]}
 */
// 初始化请求配置

let baseURL = '';
if (process.server) {
  baseURL = process.env.BASE_API
}
const service = axios.create({
  baseURL,
  timeout: 50000,
  method: 'POST',
  withCredentials: false
})

/**
 * [统一拦截请求]
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error) // 打印测试
  Promise.reject(error)
})
/**
 * [统一拦截响应]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    console.log('error ' + error) // 打印测试
    return Promise.reject(error)
  }

)

export default service
