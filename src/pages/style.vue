<template>
    <div>
        <h1>style</h1>
        <div style="cursor:pointer;" :title="title">快，瞄上我</div><!--动态属性绑定不用大括号-->
        <img :src="url" alt="">
        <br/>
        <div>{{h}}</div>
        <div v-html="h"></div>
        <div v-text="title"></div>

        <!-- 循环变色 -->
        <ul>
            <li v-for="(item, index) in list" :key="index" :class="{'red': index==0,'yellow':index==2}">
                {{item}}
            </li>
        </ul>
        <!-- 绑定类 -->
        <div :class="{'red':flag}">绑定一个类
            <div :class="{'blue':flag}">绑定另一个类</div>
        </div>
        <div :class="{'red':flag,'yellow':!flag}">又来一个类</div>

        <!-- 绑定动态宽高 -->
        <div class="bgColor" :style="{width:boxWidth+'px',height:`${boxHeight}px`}">这是一个盒子</div>

        <br>
        <h3>{{$store.state.count}}</h3>
        <button @click="incCount">增加count+</button>
    </div>
</template>
<script>

import store from '@/vuex/store.js'

export default {
    data(){
        return{
            title: '老张瞄上了',
            url:'https://www.itying.com/themes/itying/images/logo.gif',
            h:'<h2>我是h2</h2>',
            list:['111','222','333'],
            flag:false,
            boxWidth: 300,
            boxHeight: 300,

        }
    },
    store,
    methods:{
        incCount(){
            
            this.$store.commit('inCount')

            this.$store.dispatch('incCount');
        }
    }
   
}
</script>
<style lang="scss" scoped>
    .red{
        color: red;
        .blue{
            color: blue;
        }
    }
    .yellow {
        color: yellow;
    }
    .bgColor {
        background-color: pink;
    }


</style>
