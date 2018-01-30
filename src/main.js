// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common.js'

Vue.use(MintUI);
Vue.use(Vuex);
//引用自己的样式
import '../static/css/common.css'
import '../static/css/animate.css'





Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
