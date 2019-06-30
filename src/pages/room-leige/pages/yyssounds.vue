<template>
  <div>
    <h1>阴阳师式神语音</h1>
    <ul>
      <li v-for="(item, index) in dataList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: []
    }
  },
  created () {
    for (let i = 100; i < 110; i++) {
      this.fetchShiShenImg(i)
    }
    // this.fetchShiShenImg()
  },
  methods: {
    fetchShiShenImg (num) {
      // this.$http.get(`http://yys.res.netease.com/pc/zt/20161108171335/data/shishen/217.png`).then(res => {
      //   console.log(res)
      //   // this.dataList.push(res)
      // })
      this.$jsonp(`http://yys.res.netease.com/pc/zt/20161108171335/data/shishen/${num}.png`, {}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
