import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Category from '@/components/category/category'
import My from '@/components/my/my'
import Login from '@/components/my/login'
import Sigin from '@/components/my/sigin'
import Form from '@/components/from'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {path: '/',component:Home},
    {path: '/category',component:Category},
    {path: '/my',component:My},
    {path: '/login',component:Login},
    {path: '/sigin',component:Sigin},
    {path: '/form',component:Form},
  ]
})
