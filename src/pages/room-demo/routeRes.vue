<template>
    <div>
        <h2>我是详情页--请求数据渲染</h2>
        <hr>
        <ul>
            <li>
                <span>aid:</span> {{list.aid}}
                <span>author:</span> {{list.author}}
                <span>catid:</span> {{list.catid}}
                <span>content:</span> <div v-html="list.content"></div>
                <span>summary:</span> {{list.summary}}
                <span>title:</span> {{list.title}}
                <span>username:</span> {{list.username}}
                <span>pic:</span> {{list.pic}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list: []
        }
    },
    methods:{
        requestData(aid){
            let api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid
            this.$http.get(api).then(
                (data)=>{
                    console.log(data)
                    this.list = data.body.result[0]
                    console.log(this.list)
                },(err)=>{
                    console.log('错误')
                })
        }
    },
    mounted(){
        // console.log(this.$route.query.aid)
        this.requestData(this.$route.query.aid)
        
    }
}
</script>
<style lang="scss" scoped>
li {
    span {
        color: palevioletred
    }
}
</style>
