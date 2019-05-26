<template>
    <div>
        <h2>路由知识</h2>
        <hr>
        <h3>动态路由传值</h3>
        <ul>
            <li v-for="(item,key) in list" :key="key"  >
                <!-- 动态路由传值 -->
                <router-link :to="'/routeDtail/'+key">{{key}}、{{item}}</router-link>
            </li>
        </ul>
        <hr>
        <h3>路由get传值</h3>
        <ul>
            <li v-for="(item, key) in list" :key="key">
                <!-- 路由get传值 -->
                <router-link :to="'/routeDtail2?aid='+key">{{item}}</router-link>
            </li>
        </ul>
        <hr>
        <h3>获取数据</h3>
        <ul>
            <li v-for="(item, index) in list1" :key="index">
                <router-link :to="'/routeRes?aid=' + item.aid">
                    <span>aid:</span> {{item.aid}}
                    <span>catid:</span> {{item.catid}}
                    <span>title:</span> {{item.title}}
                    <span>username:</span> {{item.username}}
                    <span>dateline:</span> {{item.dateline}}
                    <span>aid:</span> {{item.aid}}
                </router-link>
                
            </li>
        </ul>
    </div>
</template>
<script>
import { close } from 'fs';
/** 
 * 
 * 路由默认为hash模式 #
 * 
 * 动态路由传值
 * 1、<router-link :to="'/routeDtail/'+key">{{key}}、{{item}}</router-link>
 * 2、{
      path: '/routeDtail/:sb',
      name: 'routeDtail',
      component: RouteDtail
    },
 * 3、获取传过来的值
        this.$route.params.sb
*/

/** 
 * 路由get传值
 * 1、<router-link :to="'/routeDtail2?aid='+key">{{key}}、{{item}}</router-link>
 * 2、{
      path: '/routeDtail2',
      name: 'routeDtail2',
      component: RouteDtail2
    },
 * 3、获取传过来的值
        this.$route.query
        this.$route.query.aid
*/

export default {
    data(){
        return {
            msg: '数据',
            list: ['111','222','333','444'],
            list1: []
        }
    },
    methods:{

        requestData(){

            //jsonp请求的话 后台api接口要支持jsonp

            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
            
            this.$http.jsonp(api).then((data) => {
                
                this.list1 = data.body.result
                
            },(err) => {

                console.log(err)

            })
        }
    },
    mounted(){
        this.requestData()
        
    }
}
</script>

<style lang="scss" scoped>
h3 {
    color: palevioletred;
    text-indent: 2em;
}
li {
    a {
        color: #000;
    }
    span {
        color: lightcoral;
    }
}
</style>
