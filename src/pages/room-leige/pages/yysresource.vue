<template>
  <div>
    <h1>阴阳师资源</h1>
    <iframe style="width: 1366px; height: 768px;" src="http://yys.163.com/media/picture.html" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'https://yys.res.netease.com/pc/zt/20170731172708/data/picture/20190228/9/1366x768.jpg'
      }
    },
    created () {
      this.$http.get(this.url).then(res => {
        console.log(res)
      })
    }
  }
</script>
