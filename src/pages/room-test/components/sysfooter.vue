<template>
  <div class="sys-footer">
    <el-row>
      <!-- 路由方式 -->
      <!-- <el-col :offset="20" :span="4">
        <el-button circle size="mini" @click="viewContent(1)"></el-button>
        <el-button circle size="mini" @click="viewContent(2)"></el-button>
        <el-button circle size="mini" @click="viewContent(3)"></el-button>
      </el-col> -->
      <!-- 轮播图方式 -->
      <el-col :offset="20" :span="4">
        <el-button circle size="mini" @click="changeCarousel(0)"></el-button>
        <el-button circle size="mini" @click="changeCarousel(1)"></el-button>
        <el-button circle size="mini" @click="changeCarousel(2)"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    viewContent (index) {
      this.$router.push({ path: `/test/test2/view${index}` })
    },
    changeCarousel (index) {
      this.$emit('setCarouselItem', index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .sys-footer {
    height: 40px;
    background-color: #BDCDE2;
    display: flex;
    align-items: center;
    .el-row {
      width: 100%;
    }
  }
</style>
