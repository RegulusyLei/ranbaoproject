<template>
  <div class="hello">
    
    
    <!-- tab切换 -->
    <div class="tabs">
      <el-row>
        <el-button><router-link to="/leige">Let's go to LeiGe Room !!!</router-link></el-button>
      </el-row>

      <el-row>
        <el-button class="title">知识标签</el-button>
        <el-button type="primary"><router-link to="/home">home</router-link> </el-button>
        <el-button type="primary"><router-link to="/home/aaa">aaa</router-link> </el-button>
        <el-button type="success"><router-link to="/storage">web存储storage</router-link></el-button>
        <el-button type="info"><router-link to="/style">style</router-link></el-button>
        <el-button type="warning"><router-link to="/todolist">todolist</router-link></el-button>
        <el-button type="danger"><router-link to="/route">route</router-link></el-button>
        <el-button type="primary"><router-link to="/routePush">routePush</router-link></el-button>
        <el-button type="warning"><router-link to="/routeRes">routeRes</router-link></el-button>
        <el-button type="info"><router-link to="/routeSon">routeSon</router-link></el-button>
        <el-button type="info"><router-link to="/routeSon/routeSon1">routeSon1</router-link></el-button>
        <el-button type="info"><router-link to="/routeSon/routeSon2">routeSon2</router-link></el-button>
        <el-button type="success"><router-link to="/elementUI">elementUI</router-link></el-button>
        <el-button type="danger"><router-link to="/mintUI">mintUI(没开发)</router-link></el-button>
        <el-button type="warning"><router-link to="/eventdom">eventdom</router-link></el-button>
      </el-row>

      <el-row>
        <el-button round class="title">组件标签</el-button>
        <el-button type="primary" round><router-link to="/comp">comp</router-link></el-button>
        <el-button type="success" round><router-link to="/header">header</router-link></el-button>
        <el-button type="info" round><router-link to="/header2">header2</router-link></el-button>
        <el-button type="warning" round><router-link to="/life">生命周期life</router-link></el-button>
        <el-button type="danger" round><router-link to="/news">news</router-link></el-button>
      </el-row>
    </div>
    <hr>
    <!-- 导航 -->
    <div class="tabs2">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        :default-active="currentMenu"  
        class="el-menu-vertical-demo"
        text-color="#fff"
        active-text-color="rgb(123,123,123)"
        background-color="#1a2b3c"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">知识点标签</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">
              <i>我是图标</i>
              分组一
            </span> -->
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item> 
          </el-submenu>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">组件标签</span>
          </template>
          
          <el-menu-item-group>
            <el-menu-item index="2-1">comp</el-menu-item>
            <el-menu-item index="2-2">header</el-menu-item>
            <el-menu-item index="2-3">header2</el-menu-item>
            <el-menu-item index="2-4">life</el-menu-item>
            <el-menu-item index="2-5">news</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {

    return {

      msg: 'Welcome to Your Vue.js App',
      isCollapse: false,
      currentMenu: ''
      

    }

  },
  methods:{

    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }

  },
  mounted(){
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #333;

.hello {

  .tabs {

      .el-row {

        margin: 20px;

        .title {
          
          font-weight: bold;

        }

        button {
          margin-bottom: 10px;
        }

        a {
          color: $color;
        }
      }
  }

  .tabs2{

    .el-menu-vertical-demo:not(.el-menu--collapse) {

      width: 200px;
      min-height: 400px;

    }

  }

}
</style>
