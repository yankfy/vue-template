<template>
  <div class="notice">
    <h1 class="notice-title">{{ msg }}{{ names }}</h1>
    <input
      class="notice-input"
      v-model='test'
      type="text"
    />
    <span>{{tests}}</span>
    <div class="notice-panel">
      <div class="notice-panel-top">
        {{count}}
        <!-- state getters -->
        <!-- {{gettercount}} -->
      </div>
    </div>
    <button
      class="notice-change-text"
      @click='changeText'
    >修改text值</button>
    <button
      class="notice-change-msg"
      @click='increment()'
    >修改msg值</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import TestMixin from '@/mixins/test-mixin';
const ModuleState = namespace('demo', State);
const ModuleAction = namespace('demo', Action);
const ModuleMutation = namespace('demo', Mutation);
const ModuleGetter = namespace('demo', Getter);
// 还要其他的装饰器
// @Emit @Inject @Model @Prop @Provide @Watch @Component
@Component({
  mixins: [TestMixin],
})
export default class HelloWorld extends Vue {
  // vuex
  @State public names!: string;
  @ModuleState('count') public count!: number;
  @ModuleAction public increment: any;
  @ModuleMutation('increment') public mutationIncrement: any;
  // 如果getter实例化，则会执行getter里的函数，如果不实例化，则不执行
  // @ModuleGetter('count') public gettercount: any;

  // Data定义 前面必须添加 public、private、protected
  public test: number = 12;
  // Prop 传值过来的参数
  @Prop() private msg!: string;
  @Watch('test', { deep: true })
  public watchCount(newVal: number, oldVal: number) {
    console.log('newVal', newVal, 'oldVal', oldVal);
  }
  // 不允许监听prop里的函数，不然会报错的。watch下面的函数式watch监听函数
  @Watch('msg', { deep: true })
  public watchCounts(newVal: string, oldVal: string) {
    console.log('newVal', newVal, 'oldVal', oldVal);
  }
  // created 生命周期钩子
  public created() {
    console.log(this.names); // -> store.state.name => linkFly
    console.log(this.count); // -> store.state.demo.count => 0
    console.log(this.increment()); // -> 异步执行state计算，返回promise，里面可以执行mutation里的函数。
    console.log(this.count);
    console.log(this.mutationIncrement(2)); // -> 同步执行state计算
    console.log(this.count);
    // 定义了混入，可以直接使用混入组件中的方法
    console.log(TestMixin)
    // this.testMixinFunc();
  }
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
    this.test = 33;
  }
  public changeText() {
    this.test++;
  }
  public changeMsg() {
    this.msg = '这是我修改后的msg值';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.notice
  background-color rgba(red, 0.2)

  &-title
    color #eeeeee

  &-input
    background-color white
    border none
    outline none

    &:hover, &:focus
      outline none

  span
    display none

  &-change-text, &-change-msg
    border none
    outline none
    background-color white
    margin-left 20px
    cursor pointer

  &-panel
    background yellow

    &-top
      color black
</style>
