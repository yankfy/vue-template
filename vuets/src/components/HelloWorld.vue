<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      v-model='test'
      type="text"
    />
    <span>{{tests}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  // Data定义 前面必须添加 public、private、protected
  public test: string = '12';
  // Prop 传值过来的参数
  @Prop() private msg!: string;
  // mounted 生命周期钩子
  public mounted() {
    this.init();
  }
  // 计算属性【函数里禁止使用alert】
  public get tests() {
    return this.test;
  }
  // methods方法
  public init() {
    this.test = '33';
  }
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
