# CSS 命名规则

**使用 BEM 命名规则避免样式冲突**<br> .notice .notice-title .notice-bottom

# vue 文件中 TS 上下文顺序

```ts
data
@Prop
@State
@Getter
@Action
@Mutation
@Watch

vuex
data
@Prop
@Watch
// 生命周期钩子
beforeCreate // （按照生命周期钩子从上到下）
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured //（最后一个生命周期钩子）
// 路由钩子
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
computed
methods
// 组件引用，mixins，filters 等放在 @Component 里面
@Component({
  components: { HelloWorld },
  mixins: [ Emitter ]
})
```

# 路由懒加载

```ts
component: () => import(/* webpackChunkName: "home" */ 'views/home/index.vue');
```

# 文件命名规范

- 单词小写
- 单词之间用'-'分割
- 名词在前，动词在后
- 相同模块描述在前，不同描述在后
