<template>
  <div>
    <h2>Mint UI 使用</h2>
    <hr>
    <!-- 按钮 -->
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <!-- index list -->
    <div class="content">
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron">qqq</mt-cell>
          <mt-cell title="Alden">www</mt-cell>
          <mt-cell title="Austin">eee</mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="C">
          <mt-cell title="Cack"></mt-cell>
          <mt-cell title="Cane"></mt-cell>
        </mt-index-section>
        <mt-index-section index="D">
          <mt-cell title="Duck"></mt-cell>
          <mt-cell title="Done"></mt-cell>
        </mt-index-section>
        <mt-index-section index="E">
          <mt-cell title="Ella"></mt-cell>
          <mt-cell title="Emit"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>
<script>
/*
  直接看文档使用，若有看不懂的文档从github搜索mint-ui官方实例下载下来  比如：action-sheet
*/
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 1rem;
}
</style>
