<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      v-model='test'
      type="text"
    ></input>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public test: string = '12';

  @Prop() private msg!: string;
  // 初始化数据
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
