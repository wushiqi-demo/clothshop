import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'

import VueFilterDateFormat from 'vue-filter-date-format';
import FastClick from 'fastclick' //这是用来解决移动端点击300毫秒延迟的问题

import Toast from 'components/common/toast';
Vue.use(Toast)
Vue.use(VueFilterDateFormat);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //原型，在这里定义，后面的$bus可以当成vue实例来使用
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')