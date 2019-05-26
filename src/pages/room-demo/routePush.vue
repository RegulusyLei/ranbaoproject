<template>
    <div>
        <h2>路由跳转的push方法--编程式--js决定跳转</h2>
        <hr>
        <button @click="goRoute">通过js跳转到新闻页面</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goRoute(){

            //编程式导航路由-
            //跳转到route这个路由页面  官方文档的写法是错误的（router.push（）错误）
            // this.$router.push({'path':'route'})

            //跳转到routeRes这个路由页面并指定aid为495的详情
            // this.$router.push({'path':'/routeRes?aid=495'})
            // this.$router.push({'path':'/routeRes/495'})

            /*命名式路由
                1、给路由起个名字name
                    {
                        path: '/route',
                        name: 'route',
                        component: Route
                    },
            */
           this.$router.push({'name':'route'})
            
        }
    }
}
</script>
