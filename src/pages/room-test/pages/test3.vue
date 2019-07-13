<template>
  <div class="collapse">
    <div class="item" v-for="(item, index) in options" :key="index">
      <p class="title">
        <i class="el-icon-caret-bottom" @click="item.visible = !item.visible"></i>
        <span>{{item.title}}</span>
        <button @click="item.dialog = !item.dialog">TBNK</button>
      </p>
      <ul class="content" v-if="item.visible">
        <li v-for="(items, indexs) in item.child" :key="indexs">
          <input type="text" v-model="items.title">
        </li>
      </ul>
      <div class="dialog" v-if="item.dialog">
        <p>{{item.template}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          title: 'Sample-Name',
          visible: false,
          dialog: false,
          template: '模版1',
          child: [
            { title: 'tube-0001' },
            { title: 'tube-0002' },
            { title: 'tube-0003' },
            { title: 'tube-0004' },
            { title: 'tube-0005' }
          ]
        },
        {
          title: 'Sample-Name-002',
          visible: false,
          dialog: false,
          template: '模版2',
          child: [
            { title: 'tube-0001' },
            { title: 'tube-0002' },
            { title: 'tube-0003' },
            { title: 'tube-0004' },
            { title: 'tube-0005' }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .collapse {
    width: 500px;
    .item {
      position: relative;
      border: 1px solid #d1d1d1;
      .title {
        margin: 0;
        padding: 10px 0;
        border: 1px solid #ddd;
      }
      .dialog {
        right: -200px;
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: pink;
      }
    }
  }
</style>
