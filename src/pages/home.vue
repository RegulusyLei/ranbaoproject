<template>
  <div class="home-container">
    <el-container class="ele-container">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="250px">
          <compMenu></compMenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import compMenu from '@/components/comp-menu'
export default {
  data(){
    return{

    }

  },
  components:{
    compMenu
  }
}
</script>
<style lang="scss" scoped>
$height: 70px;
.home-container{
   height: 100%;

   .ele-container {

     height: 100%;
   }

   .el-header {
    height: $height !important;
    line-height: $height;
    text-align: center;
    background-color: cadetblue;
  }

  aside {
    height: 100%;
    background-color: #FFF;
  }

  main {
    
    background-color: coral;
  }
  
}
 


</style>
