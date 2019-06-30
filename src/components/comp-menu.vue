<template>
  <div>
    <el-col :span="12">
<<<<<<< HEAD
      <!-- <h5>默认颜色</h5> -->
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" @select="handleSelect">
        <el-submenu v-for="(item, index) in menu" :key="index" :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item
            v-for="(items, indexs) in item.list"
            :key="indexs"
            :index="items.index"
          >{{items.name}}</el-menu-item>
          <!-- </el-menu-item-group> -->
        </el-submenu>
      </el-menu>
    </el-col>
=======
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
>>>>>>> 85822521ccd6e85a2137f0a46aad72851327ee22
  </div>
</template>

<script>
import menu from '@/json/menu.json'
export default {
  data () {
    return {
      menu
    }
  },
  methods: {
<<<<<<< HEAD
    handleSelect (index) {
      // console.log("index")
      // console.log(index)
      // console.log("indexPath")
      // console.log(indexPath)
      this.$router.push({ path: index })
=======
    handleSelect(index){
      this.$router.push({path: index})
>>>>>>> 85822521ccd6e85a2137f0a46aad72851327ee22
    }
  },
  mounted () {},
  computed: {
    activeMenu () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.el-col {
  width: 100%;
}
=======
  .el-col {
    width: 100%;
  }
>>>>>>> 85822521ccd6e85a2137f0a46aad72851327ee22
</style>
