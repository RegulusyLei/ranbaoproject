<template>
  <div class="comp-header">
    <el-row>
      <el-col :span="22">&nbsp;</el-col>
      <el-col :span="2">
        <div class="avatar">
          <img :src="avatarImg"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import avatarMap from '@/config/avatar.map.js'
import Bus from '@/bus/bus.js'
export default {
  data () {
    return {
      avatarImg: avatarMap[Math.floor(Math.random() * 105)]
    }
  },
  created () {
    Bus.$on('changeAvatar', this.changeAvatar)
  },
  methods: {
    changeAvatar () {
      this.avatarImg = avatarMap[Math.floor(Math.random() * 105)]
    }
  }
}
</script>

<style lang="scss" scoped>
  .comp-header {
    .avatar {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 60px;
        box-shadow: 0 0 10px 2px #000;
        border-radius: 50%;
      }
    }
  }
</style>
