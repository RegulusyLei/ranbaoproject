<template>
  <div>
    <h1>组件之间传值</h1>
    <el-row>
      <el-col :span="12">
        <div class="section">
          <h2>通过 $emit 传递</h2>
          <p><b>Tips：</b>具体流程是 => 组件A $emit 一个事件 => 父组件监听这个事件，接收到数据 => 通过 props 的方式传递给组件B => B组件收到props的数据，相应视图就变化了</p>
          <!-- 组件A -->
          <com-a @emitMsg="handleMsg"></com-a>
          <!-- 组件B -->
          <com-b :msg="msgFromComA"></com-b>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="section">
          <h2>通过 Vuex 传递</h2>
          <p><b>Tips：</b>具体流程是 => 通过 Vuex 来管理一些state数据 => 组件C提交一个action => action触发mutation => mutation去修改state里的数据 => 组件D绑定的state数据也会相应变化</p>
          <!-- 组件C -->
          <com-c></com-c>
          <!-- 组件D -->
          <com-d></com-d>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="section">
          <h2>通过 Bus 传递</h2>
          <p><b>Tips：</b>具体流程是 => 创建一个Bus对象，其实本质也是个Vue实例 => 在组件E通过Bus来$emit触发事件 => 在组件F通过Bus来$on监听事件，然后做自己的操作（修改数据）</p>
          <!-- 组件E -->
          <com-e @emitMsg="handleMsg"></com-e>
          <!-- 组件F -->
          <com-f :msg="msgFromComA"></com-f>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="section">
          <h2>其他的等在想想...</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import comA from '../components/comA'
import comB from '../components/comB'
import comC from '../components/comC'
import comD from '../components/comD'
import comE from '../components/comE'
import comF from '../components/comF'
export default {
  data () {
    return {
      msgFromComA: '' // 来自组件A传来的信息
    }
  },
  methods: {
    // 接收到从comA组件传来的信息 然后赋值给 msgFromComA
    handleMsg (val) {
      this.msgFromComA = val
    }
  },
  components: {
    comA,
    comB,
    comC,
    comD,
    comE,
    comF
  }
}
</script>

<style lang="scss" scoped>
  .section {
    margin: 10px;
    padding: 20px;
    padding-top: 0;
    border: 1px dotted gray;
  }
</style>
