<template>
  <div class="graphic-report">
    <!-- 这里也可以不这么写，让 graphic-report 是 flex 布局， 然后 graphic 设置 flex: 1 也行，性能可能更好点 -->
    <div class="graphic" :style="`height: calc(100% - ${tableHeight}px);`">graphic</div>
    <div class="data-table" :style="`height: ${tableHeight}px;`">
      <div
        class="toolbar"
        @mousedown="downPoint">
        <el-button title="添加">
          <i class="el-icon-circle-plus"></i>
        </el-button>
        <el-button title="左移">
          <i class="el-icon-back"></i>
        </el-button>
        <el-button title="右移">
          <i class="el-icon-right"></i>
        </el-button>
      </div>
      <div class="table">
        <el-table
          :data="column"
          border
          style="width: 100%"
          size="mini"
          height="100%"
          highlight-current-row
          @header-click="columnClick"
          @row-click="rowClick">
          <el-table-column
            v-for="(item, index) in tableHead"
            :key="index"
            :fixed="index === 0 ? true : false"
            :prop="index === 0 ? 'name' : 'value[' + index + ']'"
            :label="item.channelMethod"
            min-width="110"
            column-key="index"
            align="center"
            :resizable="false"
            class="active"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableHead: [
        { channelMethod: '补偿' },
        { channelMethod: 'FCS-A/CV1' },
        { channelMethod: 'FCS-A/CV2' },
        { channelMethod: 'FCS-A/CV3' },
        { channelMethod: 'FCS-A/CV4' },
        { channelMethod: 'FCS-A/CV5' },
        { channelMethod: 'FCS-A/CV6' },
        { channelMethod: 'FCS-A/CV7' },
        { channelMethod: 'FCS-A/CV8' },
        { channelMethod: 'FCS-A/CV9' }
      ],
      column: [
        { name: 'P1', value: ['---', 20000000.0, 300] },
        { name: 'P2', value: ['---', 300, 400] },
        { name: 'P3', value: ['---', 200, 500] },
        { name: 'P4', value: ['---', 200, 500] },
        { name: 'P5', value: ['---', 200, 500] },
        { name: 'P6', value: ['---', 200, 500] },
        { name: 'P7', value: ['---', 200, 500] },
        { name: 'P8', value: ['---', 200, 500] },
        { name: 'P9', value: ['---', 200, 500] },
        { name: 'P1', value: ['---', 200, 500] }
      ],
      tableHeight: 230,
      pointY: '',
      moveFlag: false
    }
  },
  mounted () {
    document.onmousemove = this.handlemousemove
    document.onmouseup = this.handlemouseup
  },
  methods: {
    rowClick (row) {
      const rowIndex = this.column.findIndex(curItem => {
        return row.name === curItem.name
      })
      console.log('行下标')
      console.log(rowIndex)
    },
    columnClick (column, event) {
      const columnIndex = this.tableHead.findIndex(curItem => {
        return column.label === curItem.channelMethod
      })
      const siblingsNodes = event.target.parentNode.parentNode.childNodes
      siblingsNodes.forEach(item => {
        item.childNodes.forEach(item1 => {
          item1.style.backgroundColor = '#FFF'
        })
      })
      if (event.target.innerText !== '补偿') {
        event.target.style.backgroundColor = '#ECF5FF'
      }
      console.log('列下标')
      console.log(columnIndex) // 列下标
    },
    downPoint (e) {
      this.moveFlag = true
      this.pointY = e.pageY
    },
    handlemousemove (e) {
      if (this.moveFlag) {
        this.tableHeight = document.body.clientHeight - e.pageY
      }
    },
    handlemouseup (e) {
      this.moveFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
$toolbar-height: 30px;
$icon-fontsize: 20px;
$table-height: 258px;

.graphic-report {
  width: 100%;
  height: 100%;
  .graphic {
    background-color: bisque;
  }
  .data-table {
    .toolbar {
      height: $toolbar-height;
      background: var(--background-color);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      font-size: 0;
      padding: 0 10px;
      &:hover {
        cursor: s-resize;
      }
      .el-button {
        width: $toolbar-height;
        height: $toolbar-height;
        border: none;
        font-size: $icon-fontsize;
        margin: 0;
        padding: 0;
        background-color: transparent;
      }
    }
    .table {
      height: calc(100% - #{$toolbar-height});
      $td-height: 30px;
      @mixin td-lineHeight {
        height: $td-height;
        line-height: $td-height;
      }
      /deep/ .el-table {
        .el-table__header-wrapper .el-table__header .has-gutter tr {
          th {
            padding: 0;
            .cell {
              @include td-lineHeight;
            }
          }
        }
        .el-table__body-wrapper .el-table__body {
          tbody {
            tr {
              td {
                padding: 0;
                .cell {
                  @include td-lineHeight;
                }
              }
            }
          }
        }
        .el-table__fixed {
          .el-table__fixed-header-wrapper {
            .el-table__header {
              thead {
                tr {
                  th {
                    padding: 0;
                    .cell {
                      @include td-lineHeight;
                    }
                  }
                }
              }
            }
          }
          .el-table__fixed-body-wrapper {
            .el-table__body {
              tbody {
                tr {
                  td {
                    padding: 0;
                    .cell {
                      @include td-lineHeight;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
