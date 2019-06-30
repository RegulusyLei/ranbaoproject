<template>
  <div>
    <h1>resource--vue官方提供的插件</h1>
    <br>
    <button @click="getData()">请求数据</button>
    <br>
    <hr>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <!-- 其实这里写成这样，是两层for循环
          看懂没
          for（var key in obj）{
            key 是对象的key
            obj[key] 等同于 item ，
          }
        v-for相当于包装了循环 （item，key） 都是循环的每一项 以及每一项的 key  假如是数组，key不就是索引么，item就是obj[key]-->
        <div v-for="(items, indexs) in item" :key="indexs">
          <span class="red">{{indexs}}:</span>
          {{items}}
        </div>
        <!-- <span class="red">aid:</span>{{item.aid}}
          <span class="red">catid:</span>{{item.catid}}
          <span class="red">username:</span>{{item.ausernameid}}
          <span class="red">dateline:</span>{{item.dateline}}
          <span class="red">pic:</span>{{item.pic}}
        <span class="red">title:</span>{{item.title}}-->
      </li>
    </ul>
  </div>
</template>
<script>
/* 1.安装vue-resource模块， 主意加上--save   官方插件
   npm install vue-resource --save / cnpm install vue-resource --save

   2.main.js引入vue-resource

   import VueResource from 'vue-resource'

   3. Vue.use(VueResource)

   4.在组件里直接声明
    this.$http.get(地址).then(function(response){
    },function(err){
    })
    this.$http.get(地址).then(response => {
    },err => {
    })
*/
// import Axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getData () {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      this.$http.get(api).then(
        response => {
          console.log(response)
          // console.log(response.body.result)
          this.list = response.body.result
        },
        () => {}
      )
    }
  },
  mounted () {
    // 页面加载即执行
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
