<template>
  <div>
    <h2>这是一个头部组件2  ----完成子->父组件传值</h2>
    <hr>
    <button @click="getParentData">通过$parent获取父组件数据和方法</button>
    <hr>
    <button @click="emitHeader">给header组件广播数据</button>
  </div>
</template>
<script>
import VueEvent from '@/utils/VueEvent.js'
export default {
  data(){
    return{
      bb: '123',
      msg: '我是子组件header2'
    }
  },
  methods: {
    run(){
      alert('我是子组件的run方法')
    },
    getParentData(){
        alert(this.$parent.msg)
        this.$parent.getMsg1()
    },
    emitHeader(){
        VueEvent.$emit('to-header',this.msg)
    }
  },
  mounted(){
      VueEvent.$on('to-header2',data => {
          alert(data)
      })
  }
}
</script>
