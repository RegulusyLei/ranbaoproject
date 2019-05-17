<template>
  <div class="lei-menu">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">
        <i class="el-icon-d-arrow-left"></i>
        <span>返回</span>
      </el-menu-item>
      <el-menu-item :index="baseRouter">首页</el-menu-item>
      <el-menu-item :index="`${baseRouter}/yyscom`">阴阳师计算器</el-menu-item>
      <el-menu-item :index="`${baseRouter}/unicode`">Unicode对应符号</el-menu-item>
      <el-submenu index="1">
        <template slot="title">临时占位以后拓展</template>
        <el-menu-item :index="`${baseRouter}/1`">爱的</el-menu-item>
        <el-menu-item :index="`${baseRouter}/2`">魔力</el-menu-item>
        <el-menu-item :index="`${baseRouter}/3`">
          <span>转圈圈</span>
          <i class="el-icon-loading"></i>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">Sing!!!</template>
          <el-menu-item :index="`${baseRouter}/1`">你像一</el-menu-item>
          <el-menu-item :index="`${baseRouter}/2`">只自由</el-menu-item>
          <el-menu-item :index="`${baseRouter}/3`">的小鸟</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item  :index="`${baseRouter}/3`" disabled>纯占位</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        baseRouter: '/leige'
      }
    },
    computed: {
      activeIndex () { // 当前地址
        return this.$route.path
      }
    },
    methods: {
      handleSelect(key) { // 路由跳转
        this.$router.push({ path: key })
      }
    }
  }
</script>
