<template>
  <div class="home-container">
    <el-container class="ele-container">
      <el-header>
        <comp-header></comp-header>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <comp-menu></comp-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import compHeader from '@/components/comp-header'
import compMenu from '@/components/comp-menu'
export default {
  data () {
    return {
    }
  },
  components: {
    compHeader,
    compMenu
  }
}
</script>

<style lang="scss" scoped>
$height: 70px;
.home-container {
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
    background-color: #0f5858;
  }
  main {
    padding: 10px;
    background-color: #FFF;
  }
}
</style>
