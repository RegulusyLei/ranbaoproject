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
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Aaa from '@/pages/aaa'
import Style from '@/pages/style'
import Eventdom from '@/pages/eventdom'
import TodoList from '@/pages/todolist'
import Storage from '@/pages/storage'
import Comp from '@/components/comp'
import Resource from '@/pages/resource'
import Route from '@/pages/route'
import RouteDtail from '@/pages/routeDtail'
import RouteDtail2 from '@/pages/routeDtail2'
import RouteRes from '@/pages/routeRes'
import RoutePush from '@/pages/routePush'
import RouteSon from '@/pages/routeSon'
import RouteSon1 from '@/pages/routeSon1'
import RouteSon2 from '@/pages/routeSon2'
import MintUI from '@/pages/mintUI'
import ElementUI from '@/pages/elementUI'

import LeigeRouter from '@/pages/leigeRoom/router' // 磊哥空间



Vue.use(Router)

const router = new Router({
  //默认为hash模式 #   
  //mode: 'history',  改为history模式  /形式展现   但是会有问题 比如index.html什么的 需要跟后端做配置，所以就用默认hash模式就好
  routes: [
    ...LeigeRouter,
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'aaa',
          name: 'aaa',
          component: Aaa
        }
      ]
    },
    {
      path: '/style',
      name: 'style',
      component: Style
    },
    {
      path: '/eventdom',
      name: 'eventdom',
      component: Eventdom
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/storage',
      name: 'storage',
      component: Storage
    },
    {
      path: '/comp',
      name: 'comp',
      component: Comp
    },
    {
      path: '/resource',
      name: 'resource',
      component: Resource
    },
    {
      path: '/route',
      name: 'route',
      component: Route
    },
    {
      path: '/routeDtail/:sb',
      name: 'routeDtail',
      component: RouteDtail
    },
    {
      path: '/routeDtail2',
      name: 'routeDtail2',
      component: RouteDtail2
    },
    {
      path: '/routeRes',
      name: 'routeRes',
      component: RouteRes
    },
    {
      path: '/routePush',
      name: 'routePush',
      component: RoutePush
    },
    {
      path: '/routeSon',
      name: 'routeSon',
      component: RouteSon,
      children:[
        {
          path: 'routeSon1',
          name: 'routeSon1',
          component: RouteSon1
        },
        {
          path: 'routeSon2',
          name: 'routeSon2',
          component: RouteSon2
        },
      ]
    },
    {
      path: '/mintUI',
      name: 'mintUI',
      component: MintUI
    },
    {
      path: '/elementUI',
      name: 'elementUI',
      component: ElementUI
    },
    //路由重定向--遇到没有设定的路由跳转到指定路由
    {
      path: '*',
      redirect: '/'
    },
  ]
})

router.beforeEach((to, from, next) => {
  // 设置title标题
  document.title = to.meta.title || '冉'
  next()
})

export default router
