<template>
  <div>
    <div class="yys-container">
      <div class="left">
        <mu-container>
          <mu-expansion-panel v-for="(item, index) in shishenList" :key="index">
            <div slot="header"><mu-radio v-model="currentShiShenCode" :value="item.code" :label="item.name"></mu-radio></div>
            <div>
              <p>基础攻击：{{item.gongji}}</p>
            </div>
          </mu-expansion-panel>
        </mu-container>
      </div>
      <div class="center">
        <template v-if="currentShiShenCodeData.code">
          <h1>{{currentShiShenCodeData.name}}</h1>
          <div>
            <label>攻击：</label>
            <span>{{currentShiShenCodeData.gongji}}</span>
          </div>
          <div>
            <label>速度：</label>
            <span>{{currentShiShenCodeData.sudu}}</span>
          </div>
          <div>
            <label>暴击：</label>
            <span>{{`${currentShiShenCodeData.baoji}%`}}</span>
          </div>
          <div>
            <label>暴击伤害：</label>
            <span>{{`${currentShiShenCodeData.baoshang}%`}}</span>
          </div>
        </template>
        <template v-else>
          选一个式神～
        </template>
        <ul class="result-list" v-if="resultList.length">
          <h3>结果列表</h3>
          <li v-for="(item, index) in resultList" :key="index">{{item}}</li>
          <mu-button color="error" @click="resultList = []">重置</mu-button>
        </ul>
      </div>
      <div class="right">
        <mu-form :model="computeData">
          <mu-form-item prop="gongji" label="攻击">
            <mu-text-field v-model="computeData.gongji" :disabled="!currentShiShenCode"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="baoshang" label="暴击伤害">
            <mu-text-field v-model="computeData.baoshang" :disabled="!currentShiShenCode"></mu-text-field>
          </mu-form-item>
          <mu-form-item>
            <mu-button color="primary" @click="handleCompute" :disabled="!currentShiShenCode">计算</mu-button>
          </mu-form-item>
        </mu-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentShiShenCode: '',
      currentShiShenCodeData: {},
      computeData: {
        gongji: '',
        baoshang: ''
      },
      shishenList: [
        {
          code: 1,
          name: '茨林',
          gongji: 3323,
          sudu: 112,
          baoji: 15,
          baoshang: 150
        },
        {
          code: 2,
          name: '食发鬼',
          gongji: 2894,
          sudu: 118,
          baoji: 8,
          baoshang: 150
        },
        {
          code: 3,
          name: '玉藻前',
          gongji: 3350,
          sudu: 110,
          baoji: 12,
          baoshang: 150
        }
      ],
      resultList: []
    }
  },
  methods: {
    handleCompute () {
      if (this.computeData.gongji && this.computeData.baoshang) {
        this.computeFn()
      }
    },
    computeFn () {
      const result = (Number(this.currentShiShenCodeData.gongji) + Number(this.computeData.gongji)) *
        (Number(this.currentShiShenCodeData.baoshang) + Number(this.computeData.baoshang)) / 100
      this.resultList.push(result)
    }
  },
  watch: {
    currentShiShenCode (val) {
      if (val) {
        this.currentShiShenCodeData = this.shishenList.filter(v => v.code === val)[0]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $fs: 16px;
  .yys-container {
    height: calc(100vh - 20px);
    margin: 10px;
    font-size: $fs;
    display: flex;
    > div {
      flex: 1;
      padding: 10px;
      border: 1px solid #a1b2c3;
      margin-right: 10px;
    }
    .left {
    }
    .center {
      > div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        label {
          width: 100px;
        }
      }
      .result-list {
        border: 1px dotted pink;
        li {
          margin: 10px 0;
        }
        button {
          margin: 20px 0;
        }
      }
    }
    .right {
      margin-right: 0;
      padding: 10px;
    }
  }
</style>
