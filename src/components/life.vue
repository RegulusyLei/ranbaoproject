<template>
   <div> <!--组件里必须有一个根标签 -->
    <h2>生命周期函数</h2>
  </div>
</template>
<script>
// 生命周期函数:组件挂载以及组件更新组件销毁的时候触发的一系列的方法 这些方法就叫做生命周期函数
// 生命周期函数 写在哪个页面 就是针对的哪个页面
export default {
  data(){
    return{

    }
  },
  beforeCreate(){
    console.log('beforeCreate实例刚刚被创建')
  },
  created(){
    console.log('created实例已经创建完成')
  },
  beforeMount(){
    console.log('beforeMount模板编译之前')
  },
  mounted(){    //请求数据放在这个里面 必须记住 mounted
    console.log('mounted模板编译完成')
  },
  beforeUpdate(){
    console.log('beforeUpdate数据更新之前')
  },
  updated(){
    console.log('updated数据更新完毕')
  },
  beforeDestroy(){    //页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数
    console.log('beforeDestroy实例销毁之前')
  },
  destroyed(){
    console.log('destroyed实例销毁完成')
  }
}
</script>
