<template>
  <div class="graphic-report">
    <div class="graphic" :style="{'height': `calc(100% - ${tableHeight}px)`}">{{gatesList}}</div>
    <div class="data-table" :style="{'height': `${tableHeight}px`}">
      <div class="toolbar" @mousedown="downPoint">
        <el-button title="添加" @click.stop="centerDialogVisible = true">
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
      <el-dialog
        :visible.sync="centerDialogVisible"
        :modal="false"
        :close-on-click-modal="false"
        :close-on-press-escape="true"
        :lock-scroll="true">
        <div class="content">
          <div class="left-gate">
            <el-tree
              ref="tree"
              :data="gatesList"
              show-checkbox
              default-expand-all
              highlight-current
              :expand-on-click-node="false"
              check-strictly
              node-key="id"
              :props="defaultProps"
              @node-click="nodeClick"
              @check-change="checkChange"
            ></el-tree>
          </div>
          <div class="right-statistics">
            <div class="all-events">
              <el-checkbox-group v-model="currentCheck.arr1" :disabled="channelDisabled">
                <el-checkbox label="Total" key="Total"></el-checkbox>
                <el-checkbox label="Percent" key="Percent"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="channel">
              <div class="channel-item">
                <div class="channel-name">{{channel1Name}}</div>
                <div class="checks">
                  <el-checkbox-group
                    v-model="currentCheck.arr2"
                    :disabled="channelDisabled"
                    @change="channel1Change">
                    <el-checkbox v-for="item in channel1" :label="item" :key="item">{{item}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
              <div class="channel-item channel2">
                <div class="channel-name">{{channel2Name}}</div>
                <div class="checks">
                  <el-checkbox-group
                    v-model="currentCheck.arr3"
                    :disabled="channelDisabled"
                    @change="channel2Change">
                    <el-checkbox v-for="item1 in channel2" :label="item1" :key="item1">{{item1}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer"></span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableHead: [
        {
          channelMethod: '补偿'
        },
        {
          channelMethod: 'FCS-A/CV1'
        },
        {
          channelMethod: 'FCS-A/CV2'
        },
        {
          channelMethod: 'FCS-A/CV3'
        }
      ],
      column: [
        {
          name: 'P1',
          value: ['---', 20000000.0, 300]
        },
        {
          name: 'P2',
          value: ['---', 300, 400]
        },
        {
          name: 'P3',
          value: ['---', 200, 500]
        },
        {
          name: 'P4',
          value: ['---', 200, 500]
        },
        {
          name: 'P5',
          value: ['---', 200, 500]
        }
      ],
      tableHeight: 230,
      pointY: '',
      toPointY: '',
      moveFlag: false,
      centerDialogVisible: true,
      channel1Name: 'FSC-A',
      channel1: ['CV', 'SD', 'Median', 'Min', 'Max', 'Mean', 'GMean'],
      checkedChennels1: [],
      channel2Name: 'SSC-A',
      channel2: ['CV', 'SD', 'Median', 'Min', 'Max', 'Mean', 'GMean'],
      checkedChennels2: [],
      channelCheackStore: {},
      currentCheck: {},
      gatesList: [
        {
          id: 1,
          label: 'AllEvents',
          checked: {
            arr1: [],
            arr2: [],
            arr3: [],
            arr4: []
          },
          children: [
            {
              id: 2,
              label: 'P1',
              checked: {
                arr1: [],
                arr2: [],
                arr3: [],
                arr4: []
              },
              children: [
                {
                  id: 3,
                  label: 'P11',
                  checked: {
                    arr1: [],
                    arr2: [],
                    arr3: [],
                    arr4: []
                  }
                },
                {
                  id: 4,
                  label: 'P12',
                  checked: {
                    arr1: [],
                    arr2: [],
                    arr3: [],
                    arr4: []
                  }
                }
              ]
            },
            {
              id: 5,
              label: 'P2',
              checked: {
                arr1: [],
                arr2: [],
                arr3: [],
                arr4: []
              },
              children: [
                {
                  id: 6,
                  label: 'P21',
                  checked: {
                    arr1: [],
                    arr2: [],
                    arr3: [],
                    arr4: []
                  }
                },
                {
                  id: 7,
                  label: 'P22',
                  checked: {
                    arr1: [],
                    arr2: [],
                    arr3: [],
                    arr4: []
                  }
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      channelDisabled: true,
      CurrentKey: ''
    }
  },
  mounted () {
    document.onmousemove = this.moveLen
    document.onmouseup = this.upPoint
  },
  methods: {
    rowClick (row) {
      const rowIndex = this.column.findIndex((curItem) => {
        return row.name === curItem.name
      })
      console.log('行下标')
      console.log(rowIndex)
    },
    columnClick (column, event) {
      const columnIndex = this.tableHead.findIndex((curItem) => {
        return column.label === curItem.channelMethod
      })
      const siblingsNodes = event.target.parentNode.parentNode.childNodes
      siblingsNodes.forEach((item) => {
        item.childNodes.forEach((item1) => {
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
    moveLen (e) {
      if (this.moveFlag) {
        if (e.pageY <= 250) {
          this.toPointY = 250
        } else {
          this.toPointY = e.pageY
        }
        this.tableHeight = (document.body.clientHeight - this.toPointY) - 13
        if (this.tableHeight <= 230) {
          this.tableHeight = 230
        }
      }
    },
    upPoint (e) {
      this.moveFlag = false
    },
    nodeClick (data, node) {
      this.CurrentKey = data.id
      if (node.checked) {
        console.log(456)
        this.currentCheck = data.checked
        this.channelDisabled = false
      } else {
        console.log(123)
        this.currentCheck = {}
        this.channelDisabled = true
      }
      // if (node.checked) {
      //   this.channelDisabled = false
      //   this.currentCheck = data.checked
      //   // this.CurrentKey = data.id
      //   //   this.checkedChennels1 = []
      //   //   if (this.channelCheackStore[data.id]) {
      //   //     this.checkedChennels1 = this.channelCheackStore[data.id]
      //   //   } else {
      //   //   }
      // } else {
      //   console.log(123)
      //   this.channelDisabled = true
      //   this.currentCheck = {}
      //   //   this.checkedChennels1 = [] // 清空通道
      //   //   this.checkedChennels2 = []
      //   //   this.$set(this.channelCheackStore, data.id, this.checkedChennels1)
      // }
    },
    checkChange (data, checked1) {
      if (checked1) {
        this.currentCheck = data.checked
        this.channelDisabled = false
        this.$refs.tree.setCurrentKey(data.id)
        this.CurrentKey = data.id
      } else {
        if (data.id === this.CurrentKey) {
          this.currentCheck = {}
          this.channelDisabled = true
        }
        for (let key in data.checked) {
          data.checked[key] = []
        }
      }
      // if (checked1) {
      //   this.channelDisabled = false;
      //   this.$refs.tree.setCurrentKey(data.id)
      //   this.currentCheck = data.checked
      // }
      //   this.channelDisabled = false
      //   this.$refs.tree.setCurrentKey(data.id)
      //   this.CurrentKey = data.id

      //   this.checkedChennels1 = []
      //   if (this.channelCheackStore[data.id]) {
      //     this.checkedChennels1 = this.channelCheackStore[data.id]
      //   } else {
      //   }
      // else {
      //   if (data.id === this.CurrentKey) { // 解决取消别的复选框当前复选框禁用的问题
      //     this.channelDisabled = true
      //     this.currentCheck = {}
      // //     this.checkedChennels1 = [] // 清空通道 -》渲染自己的通道
      // //     this.checkedChennels2 = []
      // //     this.$set(this.channelCheackStore, this.CurrentKey, this.checkedChennels1)
      //   }else{
      //   }
      // }
    },
    channel1Change (val) {
      // console.log(this.checkedChennels1)
      // this.$set(this.channelCheackStore, this.CurrentKey, this.checkedChennels1)
      // console.log(this.channelCheackStore)
    },
    channel2Change (val) {
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
      background: #E6E6E6;
      border-top: 1px solid #BEBEBE;
      border-bottom: 1px solid #BEBEBE;
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

    /deep/ .el-dialog__wrapper {
      overflow: hidden;

      .el-dialog {
        width: 706px;
        border-radius: 6px;
        border: 1px solid #BEBEBE;
        overflow: hidden;
        color: #000;

        .el-dialog__header {
          padding: 0;
          background: linear-gradient(to bottom, #ececec, #dadada);
          height: 30px;
          line-height: 30px;
          position: relative;
          border-bottom: 1px solid #BEBEBE;

          .el-dialog__headerbtn {
            top: 50%;
            transform: translateY(-50%);
            right: 8px;
          }
        }
        .el-dialog__body {
          padding: 0;
        }
        .el-dialog__footer {
          padding: 0;
          background: linear-gradient(to bottom, #ececec, #dadada);
          height: 30px;
          border-top: 1px solid #BEBEBE;
        }
      }
      $padding-left: 20px;
      .content {
        background-color: #E6E6E6;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        height: 300px;
        color: #000;

        .left-gate {
          width: 262px;
          border-right: 1px solid #BEBEBE;

          // ul {
          //     li {
          //         height: 30px;
          //         line-height: 30px;
          //         padding-left: 20px;
          //         cursor: pointer;
          //     }
          //     li:hover:not(.active) {
          //         background: var(--hover-color);
          //     }

          //     li.active {
          //         background-color: var(--active-color);
          //     }
          // }

          /deep/ .el-tree {
            background: transparent;
            color: #000;

            .el-checkbox__inner {
              width: 16px;
              height: 16px;
              border: 2px solid #757575;
              border-radius: 4px;
              background: transparent;
              &::after {
                border: 2px solid #e6e6e6;
                border-left: 0;
                border-top: 0;
              }
            }

            .el-checkbox__input.is-checked {
              .el-checkbox__inner {
                background: #4082D7;
                border-color: #4082D7;
              }
            }
            .el-tree-node__content {
              height: 30px;
            }

            .el-tree-node__content:hover {
              background: linear-gradient(to bottom, #DAF6EF, #A7E9F2);
            }
            .el-tree-node:focus > .el-tree-node__content {
              background: transparent;
            }

            // .el-tree-node {

            // }

            // .el-checkbox {

            //     .el-checkbox__input {

            //     }

            //     .el-checkbox__input.is-checked {

            //         .el-checkbox__inner {
            //             // background-color: #FFF;
            //         }
            //     }
            // }
          }
          /deep/
            .el-tree--highlight-current
            .el-tree-node.is-current
            > .el-tree-node__content {
            background: #4082D7;
            color: #fff;

            .el-checkbox__input .el-checkbox__inner {
              border: 2px solid #fff;
              background: #fff;
            }
            .el-checkbox__input.is-checked .el-checkbox__inner {
              background-color: #fff;
              border-color: #fff;
              &::after {
                border: 2px solid #4082D7;
                border-left: 0;
                border-top: 0;
              }
            }
          }
        }

        .right-statistics {
          width: 444px;
          height: 100%;

          .el-checkbox {
            color: #000;

            .el-checkbox__input {
              .el-checkbox__inner {
                border: 2px solid #757575;
                border-radius: 4px;
                width: $icon-fontsize;
                height: $icon-fontsize;
                background-color: transparent;
              }
              .el-checkbox__inner::after {
                border: 3px solid #e6e6e6;
                top: 0;
                left: 6px;
                height: 10px;
                border-left: 0;
                border-top: 0;
              }
            }
            .el-checkbox__input.is-checked + .el-checkbox__label {
              color: #000;
            }
            .el-checkbox__input.is-checked {
              .el-checkbox__inner {
                border-color: #4082D7;
                background-color: #4082D7;
              }
            }

            .el-checkbox__label {
            }
          }

          .all-events {
            height: 30px;
            border-bottom: 1px solid #BEBEBE;
            line-height: 30px;
            padding-left: $padding-left;
          }

          .channel {
            display: flex;
            justify-content: flex-start;
            height: calc(100% - 30px);
            .channel-item {
              width: 222px;

              .channel-name {
                height: 30px;
                border-bottom: 1px solid #BEBEBE;
                line-height: 30px;
                padding-left: $padding-left;
              }

              .checks {
                padding-left: $padding-left;
                padding-top: 5px;

                .el-checkbox {
                  display: block;
                  // height: var(--toolbar-height);
                  // line-height: var(--toolbar-height);
                  height: 32px;
                  line-height: 32px;
                }
              }
            }
            .channel2 {
              width: 223px;
              border-left: 1px solid #BEBEBE;
            }
          }
        }
      }
    }
  }
}
</style>
