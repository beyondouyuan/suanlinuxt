/*
* @Author: beyondouyuan
* @Date:   2018-08-18 20:31:48
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-08-18 20:32:07
*/
import Vue from 'vue'

Vue.component('Loading', resolve => require(['~/components/Common/LoadingModal'], resolve))
Vue.component('TableBox', resolve => require(['~/components/Common/TableBox'], resolve))
Vue.component('Dialog', resolve => require(['~/components/Common/Dialog'], resolve))
Vue.component('Confirm', resolve => require(['~/components/Common/Confirm'], resolve))
Vue.component('Pagination', resolve => require(['~/components/Common/Pagination'], resolve))
Vue.component('SubMenu', resolve => require(['~/components/SubMenu'], resolve))
