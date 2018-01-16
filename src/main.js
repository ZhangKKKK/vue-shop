// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common.js'

Vue.use(MintUI);
//引用自己的样式
import '../static/css/common.css'








Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 一个vue文件就是一个组件  硬性要求template作为根元素吗？ 为什么？
//         exoprt default  啥意思     和exoprt 有什么区别
//      name ：“about” 啥意思
