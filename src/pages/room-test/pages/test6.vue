<template>
  <div>
    <button @click="moveToRight">向右移动</button>
    <el-table
      :data="tableData"
      style="width: 100%"
      @header-click="handleHeader">
      <el-table-column v-for="(item, index) in headData" :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headData: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentColumn: ''
    }
  },
  methods: {
    handleHeader (column, event) {
      this.currentColumn = column.property
    },
    moveToRight () {
      const tempIndex = this.headData.findIndex(item => item.prop === this.currentColumn)
      let tempArr = []
      let moved = false // 是否移动过
      this.headData.forEach((item, index) => {
        if (index < tempIndex) {
          tempArr.push(item)
        } else if (index === (tempIndex + 1) && !moved) {
          moved = true
          tempArr.push(item)
          tempArr.push(this.headData[index - 1])
        } else if (index > tempIndex) {
          tempArr.push(item)
        }
      })
      this.headData = tempArr
    }
  }
}
</script>
