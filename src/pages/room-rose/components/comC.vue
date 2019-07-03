<template>
  <div>
    <h3>组件C</h3>
    <ul>
      <li><el-input v-model="massage" placeholder="请输入想通知其他组件的信息"></el-input></li>
      <li><el-button type="primary" @click="sendMassage">爱心发射～biu～biu～biu～</el-button></li>
    </ul>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  data () {
    return {
      massage: ''
    }
  },
  store,
  methods: {
    // 触发 vuex 里的 action
    sendMassage () {
      this.$store.dispatch('doMutationChangeValue', this.massage)
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    width: 500px;
    li {
      margin-top: 10px;
    }
  }
</style>
