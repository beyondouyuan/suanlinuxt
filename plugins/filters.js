/*
* @Author: beyondouyuan
* @Date:   2018-08-12 17:36:46
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-08-12 17:39:30
*/

import Vue from 'vue'
import * as filters from '~/filters' // 全局filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
