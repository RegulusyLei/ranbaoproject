<template>
  <div>
    <el-col :span="12">
    <!-- <h5>默认颜色</h5> -->
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#0f5858"
      text-color="#FFF"
      active-text-color="#05ae91"
     >
      <el-submenu v-for="(item, index) in menu" :key="index" :index="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <!-- <el-menu-item-group> -->
          <el-menu-item  v-for="(items, indexs) in item.list" :key="indexs" :index="items.index">{{items.name}}</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </el-col>
  </div>
</template>
<script>
import menu from '@/json/menu.json'

export default {
  data(){
    return{
      menu
    }
  },
  methods: {
    handleSelect(index){
      this.$router.push({path: index})
    }
    },
    mounted(){
     
    },
    computed: {
      activeMenu(){
        return this.$route.path
      }
    }
}
</script>
<style lang="scss" scoped>
  .el-col {
    width: 100%;
  }
</style>
