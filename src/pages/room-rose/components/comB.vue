<template>
  <div>
    <h3>组件B</h3>
    <section>
      接收到的信息：{{msg}}
    </section>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: () => ''
    }
  }
}
</script>
