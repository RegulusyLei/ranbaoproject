<template>
  <div>
    <el-col :span="12">
    <!-- <h5>默认颜色</h5> -->
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      @select="handleSelect"

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
      // console.log("index")
      // console.log(index)
      // console.log("indexPath")
      // console.log(indexPath)
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
    // overflow: hidden;
    // overflow-y: scroll;
  }
</style>
