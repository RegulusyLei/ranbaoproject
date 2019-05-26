// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storage from '@/utils/storage'

//使用vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource) //vue-resource配置

// 使用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//使用Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//使用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// // 使用vue-jsonp解决前端跨域问题
// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)

Vue.config.productionTip = false
Vue.prototype.$storage = storage  //自定义方法一般用$做前缀


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
