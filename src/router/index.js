/*
1.安装vue-router

    npm install vue-router --save / cnpm install vue-router --save

2.引入并配置

  import Router from 'vue-router'
  Vue.use(Router)

3.引入组件（页面）配置路由

  import Home from '@/pages/home'

  export default new Router({
    routes: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }，
      {   设置默认跳转路由
        path: '*',
        redirect: '/'
      }
    ]
  })

4.挂载路由

  new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



5.路由出口（动态加载路由的位置）

  <router-view></router-view>

 
*/

/**
 * 路由跳转的几种方法
 * 1、<router-link to="路由"></router-link>
 * 2、<router-link :to="路由/参数"></router-link>  this.$route.params.sb  注：path中配置/:sb
 * 3、<router-link to="路由?aid=值"></router-link>  this.$route.query.aid
 * 4、编程式导航跳转  
 *    this.$router.push({'path':'route'})
 *    this.$router.push({'path':'/routeRes/495'})
 *    this.$router.push({'path':'/routeRes?aid=495'})
 * 5、命名式跳转  利用path的name跳转
 *    this.$router.push({'name','route'})  
 */


import Vue from 'vue'
import Router from 'vue-router'
import DemoRouter from '@/pages/room-demo/router' // demo空间
import LeigeRouter from '@/pages/room-leige/router' // 磊哥空间
import RoseRouter from '@/pages/room-rose/router' // 磊哥空间

import Home from '@/pages/home' // 主页

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        ...DemoRouter,
        ...LeigeRouter,
        ...RoseRouter
      ]
    },
    { //路由重定向--遇到没有设定的路由跳转到指定路由
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 设置title标题
  document.title = to.meta.title || '冉'
  next()
})

export default router
