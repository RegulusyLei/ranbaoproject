<template>
<!-- vue的模板里面 所有的内容要被一个根节点包含起来 -->
  <div id="app">
    <router-view></router-view>
    <music-box></music-box>
  </div>
</template>
<script>

/* 组件使用三部曲
  1、引入组件  import  CompName  from   ''
  2、注册挂载组件  components:{}
  3、在模板中使用  <CompName></CompName>
*/

export default { // 固定语法
  name: 'App', // 可删掉
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
/* html {height: 100%;} */
body{
  background-color: #e6e6e6;
  /* height: 100%; */
}
#app {
  height: calc(100vh);
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
