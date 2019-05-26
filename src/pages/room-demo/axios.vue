<template>
  <div>
      <h1>resource--vue官方提供的插件</h1>
      <br>
      <button @click="getData1()">请求数据</button>
      <br>
      <hr>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <!-- 其实这里写成这样，是两层for循环
       
          for（var key in obj）{ 
            key 是对象的key
            obj[key] 等同于 item ， 
          }
          v-for相当于包装了循环 （item，key） 都是循环的每一项 以及每一项的 key  假如是数组，key不就是索引么，item就是obj[key]-->
          <div v-for="(items, indexs) in item" :key="indexs"><span class="red">{{indexs}}: </span>{{items}}</div>
          <!-- <span class="red">aid:</span>{{item.aid}}
          <span class="red">catid:</span>{{item.catid}}
          <span class="red">username:</span>{{item.ausernameid}}
          <span class="red">dateline:</span>{{item.dateline}}
          <span class="red">pic:</span>{{item.pic}}
          <span class="red">title:</span>{{item.title}} -->
        </li>
      </ul>
  </div>
</template>
<script>


/* 
  1.安装axios    第三方插件
  npm install axios --save / cnpm install axios --save
  2.import Axios from 'axios'     哪里用哪里引入     不用 use()

*/

import Axios from 'axios'

export default {
  data(){
    return{
      list: []
    }
  },
  methods:{
    
    getData1(){
      var api =  'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
     
    //  Axios get请求
     Axios.get(api).then((response)=>{

        console.log(response.data.result)
        console.log(response.config)
        console.log(response)
        this.list = response.data.result

      }).catch((err)=>{

        console.log(err);

      })
    },


  /* Axios post 请求
          Axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then((response) =>{
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
   */
    /*
          执行多个并发请求
          function getUserAccount() {
            return axios.get('/user/12345');
          }

          function getUserPermissions() {
            return axios.get('/user/12345/permissions');
          }

          axios.all([getUserAccount(), getUserPermissions()])
            .then(axios.spread(function (acct, perms) {
              // 两个请求现在都执行完成
            }));

    */ 

   /*创建实例 axios.create([config])

   
   */



  },
  mounted(){ //页面加载即执行
    this.getData1()
  }
}
</script>

<style lang="scss" scoped>
  .red {
    color: red;
  }
</style>


