<template>
  <div id="app">
    <HelloWorld msg="This is Prop Data" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style lang="stylus">
@import ('~@/common/style/custom')
</style>
