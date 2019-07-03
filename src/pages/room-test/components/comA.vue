<template>
  <div>
    <ul>
      <li v-for="(item, index) in buttonList" :key="index">
        <el-button :type="item.type" @click="sendColor(item.color)">{{item.label}}</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  data () {
    return {
      buttonList: [
        { label: '蓝色', type: 'primary', color: '#419DF7' },
        { label: '绿色', type: 'success', color: '#66C23A' },
        { label: '灰色', type: 'info', color: '#909398' },
        { label: '黄色', type: 'warning', color: '#E5A23D' },
        { label: '危险', type: 'danger', color: '#EF6A6B' }
      ]
    }
  },
  store,
  methods: {
    sendColor (color) {
      if (typeof this.$store.state.currentIndex !== 'number') { // 判断是否点击过li
        this.$message({
          message: '起码得点一个li吧',
          type: 'warning'
        })
      } else {
        this.$store.dispatch('doAddColor', {
          index: this.$store.state.currentIndex,
          color
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin-right: 10px;
  }
</style>
