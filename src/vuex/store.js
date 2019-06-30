/**
 *  vuex 状态管理模式 不同组件间（既不是父子组件又不是非父子组件，如路由指定组件）数据共享 数据持久化 适用于大型项目
 *  原理：不同组件借助vuex的store存储数据来实现通讯
 * vuex 四个核心方法 state mutations getter action
 * 1、安装vuex  cnpm install vuex --save
 * 2、src下新建vuex文件夹 新建store.js文件
 * 3、store.js文件中 引入Vue 和 Vuex 并配置 vuex
 *
      import Vue from 'vue'
      import Vuex from 'vuex'
      Vue.use(Vuex)
   4、定义数据 state在vuex中用于存储数据
          var state={

              count:1
          }
   5、定义方法  mutations里面放的是方法，方法主要用于改变state里面的数据
          var mutations={
                incCount(){
                    ++state.count;
                }
          }
    6、getters 优点类似计算属性，改变state里边count数据时候会触发getters里面的方法 获取新的值（基本用不到）
          var getters = {
            computedCount:(state) => {
              return state.count*2
            }
          }
    7、Action 基本没什么用 类似mutation ，不同的是 action里可以写异步业务逻辑 然后提交mutation

          var actions = {
            incMutationsCount(context){    因此你可以调用 context.commit 提交一个 mutation

              context.commit('incCount')  执行 mutations 里面的incCount方法 改变state里面的数据

            }
          }
    8、暴露
          const store = new Vuex.Store({
              state,
              mutations,
              getters,
              actions
          })
          export default store;
 *
*/
/*
组件里面使用vuex:  home style 这俩组件为例
store 相当于一个共有仓库 home style 通过 this.$store.commit('incCount') 来触发仓库改变数据，
此数据 home style  共享 并持久化
1、引入store.js
     import store from '@/vuex/store.js';
2、注册
    ...
    data(){return{}},
    store,  ---》 此时可以在模板中{{$store.state.count}}使用
    methods:{
      incCount(){
        触发mutations改变state里面的数据
        this.$store.commit('incCount')
      }
    }
    ...
  3、获取state里面的数据
       $store.state.count
  4、触发 mutations 改变 state里面的数据
         var mutations={
                incCount(state,data){
                    ++state.count;
                }
          }
          ...
        this.$store.commit('方法名'，参数);
        this.$store.commit('incCount',data);
  5、触发 actions里面的方法
      this.$store.dispatch('incCount');
  6、{{this.$store.getters.computedCount}}  获取 getters里面方法返回的的数据

*/

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 在vuex中用于存储数据
var state = {
  count: 1,
  list: []
}
// mutations里面放的是方法，主要勇于改变state里边的数据
var mutations = {
  inCount (state, data) {
    ++state.count
    this.list.push(data)
  }
}
// 优点类似计算属性，改变state里边的count数据时会触发getters里边的方法 获取新的值
var getters = {
  computedCount: (state) => {
    return state.count * 2
  }
}
// Action 类似于mutation，不同的时action提交的是mutation，而不是直接变更状态
// Action 可以包含任意异步操作

// var action = {
//   incMutationsCount (context) {
//     context.commmit('increment')
//   }
// }
const store = new Vuex.Store({
  state,
  // mutations:mutations,
  mutations,
  getters
  // state={
  //   count:1
  // },
  // mutations : {

  //   inCount(){

  //     ++state.count

  //   }
  // }

})
export default store
