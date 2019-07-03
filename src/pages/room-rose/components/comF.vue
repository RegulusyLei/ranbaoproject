<template>
  <div>
    <h3>组件F</h3>
    <section>
      接收到的信息：{{msg}}
    </section>
  </div>
</template>

<script>
import Bus from '../bus/bus'
export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
    // 监听 Bus 事件 emitEEEMsg，一旦有地方触发这个事件，就会监听到
    Bus.$on('emitEEEMsg', this.handleData)
  },
  methods: {
    // 监听事件的回调函数
    handleData (val) {
      this.msg = val
    }
  },
  beforeDestroy () {
    // 一般退出这个模块或者跳转到其他地方时，记得把这个监听取消，不然永远都在监听，会造成很多问题
    Bus.$off('emitEEEMsg', this.handleData)
  }
}
</script>
