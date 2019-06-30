<template>
  <div>
    <h2>Element UI 的使用</h2>
    <div class="content">
      <!-- 按钮 -->
      <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button plain disabled>朴素按钮</el-button>
        <el-button type="primary" plain>plain主要按钮</el-button>
        <el-button type="success" disabled>disabled成功按钮</el-button>
        <el-button type="info" plain disabled>plain disable信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <p></p>
      <!-- icon -->
      <i class="el-icon-menu"></i>
    </div>
  </div>
</template>
<script>
/*
  ElementUI 使用步骤
  一、全局使用
  1、sudo npm install element-ui --save / sudo cnpm install element-ui --save
      import ElementUI from 'element-ui'
      import 'element-ui/lib/theme-chalk/index.css'
      Vue.use(ElementUI)

  2、配置file_loader  注：以前老文档里边有 现在最新的文档里不需要配置
  file_loader 确保已安装 从package.json查看 若没有需要安装
      {
    test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
    loader: 'file-loader'
    }

二、按需使用
  第一种方法：
  1、 cnpm install babel-plugin-component -D
  2、找到.babelrc 配置文件
  把

  {
    "presets": [
      ["env", { "modules": false }],
      "stage-3"
    ]
  }
  改为  注意：
  {
    "presets": [["env", { "modules": false }]],
    "plugins": [
      [
        "component",
        {
    "libraryName": "element-ui",
    "styleLibraryName": "theme-chalk"
        }
      ]
    ]
        }

        3、import { Button, Select } from 'element-ui';

            Vue.use(Button)
            Vue.use(Select)

    第二种方法：
    import { Button, Select } from 'element-ui';

Vue.use(Button)
Vue.use(Select)
引入对应的css

import 'element-ui/lib/theme-chalk/index.css';

如果报错： webpack.config.js  配置file_loader

  {
    test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
    loader: 'file-loader'
  }
*/
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
