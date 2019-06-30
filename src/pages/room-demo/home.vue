<template>
  <!-- 下边只能有一个元素 -->
  <div>
    <div>
      <router-link to="/home/aaa">去aaa</router-link>
      <router-link to="/style">去style</router-link>
    </div>
    <router-view></router-view>
    <h2>你好vue---{{msg}}</h2>
    <br>这是一个跟组建
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
          <li v-for="(item, index) in item.list" :key="index">{{"titele:" + item.title}}</li>
        </ul>
      </li>
    </ul>
    <h5>{{$store.state.count}}</h5>
    <h5>{{this.$store.state.count}}</h5>
    <div>
      <p>人民币{{name}}，相当于{{nameLength}}美元</p>
      <input type="text" v-model="name">
    </div>
    <br>
    <button @click="incCount">改变state里边的数据--增加数量+</button>

    <!-- 获取getters的返回值 -->
    <h3>{{$store.getters.computedCount}}</h3>
  </div>
</template>
<script>
import store from '@/vuex/store.js'
export default {
  // 固定语法
  name: 'App', // 可删掉
  data () {
    return {
      msg: 'haha',
      obj: {
        name: '肉色'
      },
      list: ['111', '222', '333', '444'],
      list1: [{ name: 'zhangsan' }, { name: 'lisi' }, { name: 'wangwu' }],
      list2: [
        {
          cate: '国内新闻',
          list: [
            { title: '国内新闻111' },
            { title: '国内新闻222' },
            { title: '国内新闻333' },
            { title: '国内新闻444' }
          ]
        },
        {
          cate: '国际新闻',
          list: [{ title: '国际新闻111' }, { title: '国际新闻222' }]
        }
      ],
      name: ''
    }
  },
  store,
  methods: {
    incCount () {
      // 触发mutations 更改state数据
      this.$store.commit('inCount')

      // mutations传参
      this.$store.commit('inCount', this.list)

      // 触发action去触发mutations更改state数据
      this.$store.dispatch('incCount')
    }
  },
  computed: {
    nameLength () {
      console.log(this)
      return this.name.length
    }
  }
}
</script>
