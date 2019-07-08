<template>
  <div class="system-container">
    <sys-header></sys-header>
    <div class="sys-content">
      <!-- 路由方式 -->
      <!-- <transition>
        <router-view></router-view>
      </transition> -->
      <!-- 轮播图方式 -->
      <el-carousel
        ref="carouselId"
        height="400px"
        arrow="never"
        indicator-position="none"
        :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <sys-footer @setCarouselItem="handleCarouselItem"></sys-footer>
  </div>
</template>

<script>
import sysHeader from '../components/sysheader'
import sysFooter from '../components/sysfooter'
export default {
  data () {
    return {
    }
  },
  methods: {
    handleCarouselItem (index) {
      this.$refs.carouselId.setActiveItem(index)
    }
  },
  components: {
    sysHeader,
    sysFooter
  }
}
</script>

<style lang="scss" scoped>
  .system-container {
    height: 100%;
    .sys-content {
      height: calc(100% - 80px);
      background-color: #BDCDE2;
    }
  }
  .el-carousel {
    background: pink;
  }
</style>
