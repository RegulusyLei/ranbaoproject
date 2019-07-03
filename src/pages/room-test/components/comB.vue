<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in liList"
        :key="index"
        :style="{'background-color': $store.state.colorObj[index] || activeColor(index)}"
        @click="chooseLi(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  data () {
    return {
      liList: [
        { name: 'tube-1' },
        { name: 'tube-2' },
        { name: 'tube-3' },
        { name: 'tube-4' }
      ]
    }
  },
  store,
  methods: {
    chooseLi (index) {
      this.$store.dispatch('doChangeIndex', index)
    },
    activeColor (index) {
      if (this.$store.state.currentIndex === index) return 'pink'
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    width: 200px;
  }
  li {
    list-style: none;
    border: 1px solid #D5DCD8;
    padding: 12px 0;
    margin: 10px 0;
    text-align: center;
    background-color: #FFF;
    border-radius: 7px;
    cursor: pointer;
  }
  li:hover {
    background-color: #DFE8E3;
  }
  li.active {
    background-color: #C8DBD1;
  }
</style>
