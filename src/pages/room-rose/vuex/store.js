import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { // 状态
  currentValue: '' // 公用信息
}

const mutations = { // 用来改变状态 state 里的值的方法
  // 重新赋值方法
  changeValue (state, newVal) {
    state.currentValue = newVal
  }
}

const actions = { // 用来触发 mutations 里的指定方法
  doMutationChangeValue (context, newVal) {
    context.commit('changeValue', newVal)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
