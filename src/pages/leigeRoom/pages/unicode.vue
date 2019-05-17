<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{index}} => {{item}}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in codeList" :key="index">{{item.code}} => {{unicode2Str(item.code)}} => {{item.num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codeList: [
        { num: 0.1, code: 8530 },
        { num: 0.2, code: 8533 },
        { num: 0.4, code: 8534 },
        { num: 0.5, code: 189 },
        { num: 0.6, code: 8535 },
        { num: 0.8, code: 8536 }
      ],
      list: []
    }
  },
  created () {
    // console.log(this.decimalsToFractional(0.5))
    this.unicodeFn(1000)
  },
  methods: {
    decimalsToFractional (decimals) {
      const formatDecimals = decimals.toFixed(2)
      let denominator = 100 // 初始化分母
      let numerator = formatDecimals * 100 // 初始化分子
      let bigger = 0
      this.recursion(bigger, denominator, numerator)
      return `${numerator}/${denominator}`
    },
    recursion (bigger, denominator, numerator) {
      bigger = denominator > numerator ? denominator : numerator
      for (let i = bigger; i > 1; i--) {
        if (Number.isInteger(numerator / i) && Number.isInteger(denominator / i)) {
          numerator = numerator / i
          denominator = denominator / i
          this.recursion(bigger, denominator, numerator)
        }
      }
    },
    unicodeFn (len) {
      for (let i = 0; i < len; i++) {
        this.list.push(`2${String.fromCharCode(i)}`)
      }
    },
    unicode2Str (code) {
      return `${String.fromCharCode(code)}`
    }
  }
}
</script>
