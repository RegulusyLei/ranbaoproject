<template>
  <div>
    <com-a></com-a>
    <com-b></com-b>
    <div class="test">
      <div>箭头</div>
      <input type="file">
    </div>
  </div>
</template>

<script>
import comA from '../components/comA'
import comB from '../components/comB'
export default {
  components: {
    comA,
    comB
  }
}
</script>

<style lang="scss" scoped>
  .test {
    width: 100px;
    height: 40px;
    position: relative;
    overflow: hidden;
    div {
      height: 100%;
      background-color: #409EFF;
      color: #fff;
      border-radius: 3px;
      text-align: center;
      line-height: 40px;
    }
    input {
      position: absolute;
      z-index: 1;
      width: 0;
      height: 0;
      padding: 100px;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
  }
  .test:hover {
    div {
      color: pink;
    }
  }
</style>
