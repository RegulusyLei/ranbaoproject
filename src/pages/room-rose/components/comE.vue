<template>
  <div>
    <h3>组件E</h3>
    <ul>
      <li><el-input v-model="massage" placeholder="请输入想通知其他组件的信息"></el-input></li>
      <li><el-button type="primary" @click="sendMassage">爱心发射～biu～biu～biu～</el-button></li>
    </ul>
  </div>
</template>

<script>
import Bus from '../bus/bus'
export default {
  data () {
    return {
      massage: ''
    }
  },
  methods: {
    // 通过 Bus 发送一个名称为 emitEEEMsg 的事件，并携带 massage 数据
    sendMassage () {
      Bus.$emit('emitEEEMsg', this.massage)
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
