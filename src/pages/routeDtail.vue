<template>
    <div>
        <h2>我是路由详情页--动态路由传值</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.$route.params)
    }
}
</script>
