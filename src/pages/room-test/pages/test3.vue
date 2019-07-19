<template>
  <div class="table-wrap">
    <table @mouseleave="handlemouseleave">
      <thead>
        <tr>
          <th v-for="(item, index) in tableData.thead" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData.tbody" :key="index"
          :style="`height: ${aaa}px;`"
          @mousedown="handlemousedown"
          @mousemove="handlemousemove"
          @mouseup="handlemouseup">
          <td>#{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.favor}}</td>
          <td>{{item.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: {
        thead: ['编号', '姓名', '性别', '爱好', '状态'],
        tbody: [
          { id: 1, name: '黄晓明', sex: '男', favor: '抽烟、喝酒、烫头。', status: '有效' },
          { id: 2, name: '杨颖', sex: '女', favor: '拍戏', status: '无效' },
          { id: 3, name: '邓超', sex: '男', favor: '邓超来了邓超来了', status: '有效' },
          { id: 4, name: '孙俪', sex: '女', favor: '甄嬛传', status: '有效' },
          { id: 5, name: '范冰冰', sex: '女', favor: '偷税漏税', status: '无效' }
        ]
      },
      aaa: 0,
      currentTr: '',
      currentX: 0,
      currentY: 0
    }
  },
  methods: {
    handlemouseleave (e) {
      this.move = false
    },
    handlemousedown (e) {
      this.currentY = e.clientY
      this.move = true
    },
    handlemousemove (e) {
      if (this.move) {
        console.log(e.clientY - this.currentY)
        this.aaa = e.clientY - this.currentY
      }
    },
    handlemouseup (e) {
      this.move = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-wrap {
    table {
      border: 1px solid #000;
      border-spacing: 0px;
      thead {
        th {
          padding: 10px 0;
          background-color: #d1d1d1;
        }
      }
      tbody {
        tr {
          cursor: pointer;
          td {
            min-width: 100px;
            border-top: 1px solid #000;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
