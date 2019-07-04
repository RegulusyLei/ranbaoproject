// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storage from '@/utils/storage'

// 使用vue-resource
import VueResource from 'vue-resource'

// 使用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// 使用Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

// 自定义组件
import musicBox from '@/components/musicBox'

// iconfont
import '@/assets/font/iconfont.css'
import '@/assets/font/iconfont.js'

Vue.use(VueResource) // vue-resource配置
Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(MuseUI)

Vue.component('music-box', musicBox)

// 使用vue-jsonp解决前端跨域问题
// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)

Vue.config.productionTip = false
Vue.prototype.$storage = storage // 自定义方法一般用$做前缀

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
