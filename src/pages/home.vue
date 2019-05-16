<template><!-- 下边只能有一个元素 -->
<div>
    <div>
        <router-link to="/home/aaa">去aaa</router-link>
        <router-link to="/style">去style</router-link>
    </div>
    <router-view></router-view>
    <h2>你好vue---{{msg}}</h2>
    <br/>
    这是一个跟组建
    <h3>{{obj.name}}</h3>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in list1" :key="index">{{item.name}}</li>
    </ul>
     <ul>
      <li v-for="(item, index) in list2" :key="index">
        {{item.cate}}
        <ul>
          <li v-for="(item, index) in item.list" :key="index">
            {{"titele:" + item.title}}
          </li>
        </ul>
        </li>
    </ul>
  </div>
</template>
<script>
 export default {  //固定语法
  name: 'App', //可删掉
  data(){
    return{
      msg:"haha",
      obj:{
        name:"肉色"
      },
      list:['111','222','333','444'],
      list1:[
        {'name':'zhangsan'},
        {'name':'lisi'},
        {'name':'wangwu'}
      ],
      list2:[
        {
          "cate":"国内新闻",
          "list":[
            {"title":"国内新闻111"},
            {"title":"国内新闻222"},
            {"title":"国内新闻333"},
            {"title":"国内新闻444"},
          ]
        },
        {
          "cate":"国际新闻",
          "list":[
            {"title":"国际新闻111"},
            {"title":"国际新闻222"},
          ]
        }
      ]
    }
  }
}
</script>