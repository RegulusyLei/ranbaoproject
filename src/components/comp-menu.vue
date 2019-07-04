<template>
  <div>
    <el-switch class="rb-switch" v-model="notCollapse">
    </el-switch>
    <el-menu
      :collapse="!notCollapse"
      :collapse-transition="false"
      :default-active="activeMenu"
      class="rb-menu"
      @select="handleSelect"
      background-color="#0f5858"
      text-color="#FFF"
      active-text-color="#05ae91">
      <el-submenu v-for="(item, index) in menu" :key="index" :index="item.index">
        <template slot="title">
          <i v-if="item.icon" :class="item.icon"></i>
          <i v-if="item.iconfont" class="iconfont rb-iconfont" :class="item.iconfont"></i>
          <svg v-if="item.iconsvg" class="icon rb-icon" aria-hidden="true">
            <use :xlink:href="`#${item.iconsvg}`"></use>
          </svg>
          <span>{{item.name}}</span>
        </template>
        <!-- <el-menu-item-group> -->
          <el-menu-item  v-for="(items, indexs) in item.list" :key="indexs" :index="items.index">{{items.name}}</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menu from '@/json/menu.json'
export default {
  data () {
    return {
      menu,
      notCollapse: true
    }
  },
  methods: {
    handleSelect (index) {
      // console.log("index")
      // console.log(index)
      // console.log("indexPath")
      // console.log(indexPath)
      this.$router.push({ path: index })
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
  .rb-switch {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5F9EA0;
  }
  .rb-menu {
    border-right: 0;
    .rb-icon {
      font-size: 2em;
      padding-top: 10px;
      margin-right: 1px;
    }
    .rb-iconfont {
      font-size: 1.5em;
      margin: 0 4px;
    }
  }
</style>
