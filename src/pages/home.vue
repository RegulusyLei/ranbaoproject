<template>
  <div class="home-container">
    <el-container class="ele-container">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
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
    
    background-color: aquamarine;
  }

  main {
    
    background-color: coral;
  }
  
}
 


</style>
