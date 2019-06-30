<template>
  <div>
    <h2>Storage--模块化及封装Storage组件实现保存搜索的历史记录--todolist</h2>
    <br>
    <input type="text" v-model="todo" @keyup.enter="doAdd()" ref="todo">
    <button @click="doAdd()">增加</button>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.title}}
        <button @click="doDel(index)">删除</button>
      </li>
    </ul>
    <br>
    <h2>完成中</h2>
    <ul>
      <li v-for="(item, index) in list" :key="index" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.title}}
        <button @click="doDel(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: '',
      list: [
        { title: 'name', checked: true },
        { title: 'vue', checked: false },
        { title: 'js', checked: true },
        { title: 'ionic', checked: false }
      ]
    }
  },
  methods: {
    doAdd () {
      if (!this.todo.trim()) {
        alert('请输入内容')
        this.todo = ''
        return
      }
      const flag = this.list.some(item => {
        return item === this.todo.trim()
      })
      if (flag) {
        alert(`已存在${this.todo}`)
        this.todo = ''
      } else {
        this.list.push({
          title: this.todo,
          checked: false
        })
        this.todo = ''

        this.$refs.todo.focus()
      }
      this.$storage.set('list', this.list)
    },
    doDel (key) {
      this.list.splice(key, 1)
      this.$storage.set('list', this.list)
    },
    saveList () {
      this.$storage.set('list', this.list)
    }
  },
  mounted () {
    // 生命周期函数     vue页面刷新 就执行此方法  且只执行一次
    const list = this.$storage.get('list')
    if (list) {
      this.list = list
    }
  }
}
</script>
