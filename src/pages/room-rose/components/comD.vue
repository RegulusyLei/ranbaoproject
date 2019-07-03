<template>
  <div>
    <h3>组件D</h3>
    <section>
      接收到的信息：{{$store.state.currentValue}}
    </section>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  store
}
</script>
