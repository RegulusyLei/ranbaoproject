<template>
   <div> <!--组件里必须有一个根标签 -->
    <h2>我是首页组件</h2>
    <br>
    <news></news> <!--必须小写 -->
    <!-- <v-name></v-name> -->
    
    <br>
    <life v-if="flag"></life>
    <button @click="flag = !flag">组件挂载/销毁</button>

    <hr>
    <h2 style="color:red">父子组件传值</h2>
    <v-header :haha="msg1" :ff="getMsg" :home="this"></v-header>
    <hr>
    <v-header2 ref="head"></v-header2>
    <button @click="getRun">获取子组件的属性方法</button>
  </div>
</template>

<script>
/* 组件使用三部曲
  1、引入组件  import  CompName  from   ''
  2、注册挂载组件  components:{}
  3、在模板中使用  <CompName></CompName>
  
*/
//组件传值的几种方法
/*
  父组件给子组件传值 使用props[] 也可以传方法 还可以把父组件整个this传过去
  1.父组件中给子组件绑定值  <v-header :haha="msg1" :ff="getMsg"></v-header
  2.子组件通过props来接收绑定的值的名字 props:['haha','ff']
  3.子组件使用haha  {{haha}}  <button @click="ff('getMsg')">执行父组件方法</button>
*/

/** 
 * 父组件主动获取子组件的数据和方法
 * 1.调用子组件时候定义一个ref   <v-header2 ref="head"></v-header2>
 * 2.父组件里面通过
 *    this.$refs.header2.属性
 *    this.$refs.header2.方法
 * 
*/
/** 
 * 子组件主动获取父组件的数据和方法  ？要是有好几个父组件咋整
 * 1.子组件中
 *    this.$parent.属性
 *    this.$parent.方法
 * 
*/
/** 
 * 非父子组件传值
 * 1.新建VueEvent.js文件 new一个vue的空实力 并抛出
 * 
 *      import Vue from 'Vue'

        var VueEvent = new Vue()

        export default VueEvent
 * 
 * 2.父组件中引入两个子组件 子组件中引入VueEvent.js 
 *    
 * 3. 通过VueEvent.$emit('名称'，‘数据’) 广播
 * 4.通过VueEvent.$on('名称'，（data）=> {})接收广播过来的数据  注：此步骤在mounted(){}函数中进行
 * 
*/
import news from '@/components/news';
import life from '@/components/life';
import header from '@/components/header'
import header2 from '@/components/header2'

export default {
  data(){
    return{
      msg:'我是首页组件msg1',
      flag: true,
      msg1: '1',
      msg2:'这是我要给子组件的msg2'
    }
  },
  methods:{
    getMsg(data){
      alert(this.msg2 + data)
    },
    changeMsg1 () {
      this.msg1 = '2'
      console.log(this.msg1)
    },
    getRun(){
      console.log(this.$refs.head.bb)
      this.$refs.head.run()
      
    },
    getMsg1(){
      alert("我是父组件的方法")
    }
  },
  components:{
    life,
    news,    //news:news
    // 'v-name': news     v-name不能和标签名重复
    'v-header':header,
    'v-header2': header2
  }

}
</script>
