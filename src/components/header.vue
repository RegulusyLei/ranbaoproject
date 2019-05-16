<template>
  <div>
    <h2>这是一个头部组件  ----完成父->子组件传值</h2>
    <h3>这是来自父组件的数据--<span style="color: pink;">{{haha}}</span></h3> 
    <hr>
    <button @click="zijiff">执行父组件方法</button>
    <hr>
    <button @click="emitHeader2">给header2组件传播数据</button>
  </div>
</template>
<script>
import VueEvent from '@/utils/VueEvent.js'

export default {
  //对象或数组默认值必须从一个工厂函数获取
  props: {
    haha:{
      type:String,
      default(){
        return 'hahahahahah'
      }
    },
    ff:{
      type:Function,
      default(){
        return 'ffffffffffffff'
      }
    },
    home:{
      type:Object,
      default(){
        return {'h':'homehomehomehome'}
      }
    }
  },
  data(){
    return{
      bb: '123',
      msg: '我是子组件header'
    }
  },
  methods: {
    zijiff () {
      // this.changeMsg()
      console.log(this.haha)
      console.log(this.ff(333))//?弹窗之后打印出个undefind
      console.log(this.home.flag)
    },
    run(){
      alert('我是子组件的run方法')
    },
    emitHeader2(){
        VueEvent.$emit('to-header2',this.msg)
    }
  },
  mounted(){
    VueEvent.$on('to-header',data => {
      alert(data)
    })
  }
}
</script>
