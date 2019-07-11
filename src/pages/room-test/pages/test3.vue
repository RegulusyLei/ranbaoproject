<template>
  <div>
    <el-autocomplete
      :fetch-suggestions="querySearch"
      @select="handleSelect"
      placeholder="请输入内容"
      suffix-icon="el-icon-caret-bottom"
      v-model="value">
      <template slot-scope="{item}">
        <div>
          <i class="el-icon-success"></i>
          <span>{{item.value}}</span>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {value: 'Empty'},
        {value: '1000'},
        {value: '5000'},
        {value: '10000'},
        {value: '20000'},
        {value: '50000'}
      ],
      value: ''
    }
  },
  methods: {
    // 输入匹配
    querySearch (queryString, cb) {
      cb(this.options)
    },
    // 处理下拉选中
    handleSelect (item) {
      if (item.value === 'Empty') this.value = ''
    }
  },
  watch: {
    value (val) {
      if ((isNaN(Number(val)) && isNaN(parseInt(val))) || Number(val) < 0) { // 保证数字且正数
        this.value = ''
      } else if (isNaN(Number(val)) && !isNaN(parseInt(val))) { // 数字字母组合
        this.value = String(parseInt(val))
      } else if (val.includes('.')) { // 保证整数
        this.value = val.replace(/\..*/, '')
      }
    }
  }
}
</script>
