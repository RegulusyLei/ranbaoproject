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
      // 这里需要写一些逻辑去匹配options，queryString是输入的内容
      cb(this.options) // 为了省事，不管输入啥，都把options返回，实际业务不这么做
    },
    // 处理下拉选中
    handleSelect (item) {
      if (item.value === 'Empty') this.value = ''
    }
  }
}
</script>
