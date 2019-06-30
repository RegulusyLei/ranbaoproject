<template>
  <div class="lei-container">
    <el-container>
      <!-- 头部导航 -->
      <el-header>
        <lei-menu></lei-menu>
      </el-header>
      <!-- 中间内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import leiMenu from '../components/menu'
export default {
  data () {
    return {
    }
  },
  components: {
    leiMenu
  }
}
</script>

<style lang="scss" scoped>
  .lei-container {
    width: 100%;
    height: calc(100vh);
    font-size: 14px;
    background:linear-gradient(0, #74ebd5 0%,#acb6e5 100% );
    .el-header {
      padding: 0;
    }
    .el-main {
      height: calc(100vh - 60px);
    }
  }
</style>
