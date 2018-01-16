import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/home/hellow'
import Imgs from '@/components/imgs'
import Contact from '@/components/contact/contact'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {path: '/',component: Hello},
    {path: '/imgs',component: Imgs},
    {path: '/contact',component: Contact},
  ]
})
