import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hellow'
import Imgs from '@/components/imgs'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {path: '/',name: 'hello',component: Hello},
    {path: '/imgs', name: 'imgs',component: Imgs}
  ]
})
