<template>
  <div class="music-container">
    <div class="box">
      <button>上一首</button>
      <button @click="playOrPaused">{{play ? '暂停' : '播放'}}</button>
      <button>下一首</button>
      <span>当前音量：{{currentVolume}}</span>
      <button @click="testFn">一键测试</button>
    </div>
    <audio ref="musicDom" :src="musicSrc" controls></audio>
  </div>
</template>

<script>
import musicSrc from '&/music/music.mp3'
export default {
  data () {
    return {
      musicDom: null, // 音乐标签对象
      musicSrc, // 音乐地址
      play: false // 是否播放
    }
  },
  computed: {
    // 当前音量
    currentVolume () {
      return (this.musicDom && this.musicDom.volume) || 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.musicDom = this.$refs.musicDom
    })
  },
  methods: {
    testFn () {
      this.musicDom.volume = 0.1
    },
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
    top: -108px;
    right: -380px;
    width: 400px;
    border: 1px solid #000;
    background-color: pink;
    padding: 20px;
    transition: all 100ms;
  }
  .music-container:hover {
    cursor: pointer;
    top: 1px;
    right: 1px;
  }
</style>
