<template>
  <div class="music-container">
    <div class="box">
      <button>上一首</button>
      <button @click="playOrPaused">{{play ? '暂停' : '播放'}}</button>
      <button>下一首</button>
    </div>
    <audio ref="musicDom" :src="musicSrc" autoplay></audio>
  </div>
</template>

<script>
import musicSrc from '&/music/music.mp3'
export default {
  data () {
    return {
      musicDom: null, // 音乐标签对象
      musicSrc, // 音乐地址
      play: true // 是否播放
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.musicDom = this.$refs.musicDom
    })
  },
  methods: {
    playOrPaused () {
      if (this.play) {
        this.musicDom.pause()
      } else {
        this.musicDom.play()
      }
      this.play = !this.play
    }
  }
}
</script>

<style lang="scss" scoped>
  .music-container {
    position: fixed;
    top: 100px;
    right: 100px;
    border: 1px solid #000;
    background-color: pink;
    padding: 20px;
    .box {
    }
  }
</style>
