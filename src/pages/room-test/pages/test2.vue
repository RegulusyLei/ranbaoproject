<template>
  <div class="system-container">
    <sys-header></sys-header>
    <div class="sys-content">
      <router-view></router-view>
    </div>
    <sys-footer></sys-footer>
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
    }
  }
</style>
