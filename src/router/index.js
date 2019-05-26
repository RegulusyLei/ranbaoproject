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
import DemoHome from '@/pages/room-demo/home'
import Aaa from '@/pages/room-demo/aaa'
import Style from '@/pages/room-demo/style'
import Eventdom from '@/pages/room-demo/eventdom'
import TodoList from '@/pages/room-demo/todolist'
import Storage from '@/pages/room-demo/storage'
import Comp from '@/components/comp'
import Resource from '@/pages/room-demo/resource'
import Axios from '@/pages/room-demo/axios'
import Route from '@/pages/room-demo/route'
import RouteDtail from '@/pages/room-demo/routeDtail'
import RouteDtail2 from '@/pages/room-demo/routeDtail2'
import RouteRes from '@/pages/room-demo/routeRes'
import RoutePush from '@/pages/room-demo/routePush'
import RouteSon from '@/pages/room-demo/routeSon'
import RouteSon1 from '@/pages/room-demo/routeSon1'
import RouteSon2 from '@/pages/room-demo/routeSon2'
import MintUI from '@/pages/room-demo/mintUI'
import ElementUI from '@/pages/room-demo/elementUI'
import Es6 from '@/pages/room-demo/es6'

import LeigeRouter from '@/pages/leigeRoom/router' // 磊哥空间

import Home from '@/pages/home'



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
      path: '/demo-home',
      name: 'demoHome',
      component: DemoHome,
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
      path: '/axios',
      name: 'axios',
      component: Axios
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
    {
      path: '/es6',
      name: 'es6',
      component: Es6
    },
    {
      path: '/home',
      name: 'home',
      component: Home
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
