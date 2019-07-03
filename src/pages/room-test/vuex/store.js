import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { // 状态
  colorObj: {}, // 颜色对象
  currentIndex: '' // 当前li索引
}

const mutations = { // 用来改变状态 state 里的值的方法
  // 更改索引
  changeIndex (state, index) {
    state.currentIndex = index
  },
  // 添加颜色
  addColor (state, item) {
    Vue.set(state.colorObj, item.index, item.color)
  }
}

const actions = { // 用来触发 mutations 里的指定方法
  // 触发更改索引
  doChangeIndex (context, index) {
    context.commit('changeIndex', index)
  },
  // 触发添加颜色
  doAddColor (context, item) {
    context.commit('addColor', item)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
