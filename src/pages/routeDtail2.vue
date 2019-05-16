<template>
    <div>
        <h2>我是详情页--路由get传值</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.$route.query)
        console.log(this.$route.query.aid)
    }
}
</script>
