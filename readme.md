# 环境变量与模式
- .env 所有情况配置
- .env.local 不追踪
- .env.[mode] 配置开发环境
- .env.[mode].local 配置开发环境，不追踪

> 参考网址
- [环境变量与模式](https://www.cnblogs.com/heroljy/p/9305263.html)

 **vue.config.js中必须是双引号，不可以单引号**



学习stylus
```js
npm install stylus -D
npm install stylus-loader -D
```

# 配置环境变量与模式

.env.[mode]
使用KEY = VALUE 的方式设置变量

环境变量的使用

项目中也就是src/文件夹下使用变量，必须是**VUE_APP_**开头
webpack中使用变量随意起名

<%= VAR %> 用于非转换插值  例如：`<link rel="shortcut icon" href="<%= BASE_URL %>favicon.ico">`
<%- VAR %> 用于HTML转义插值
<% expression %> 用于JavaScript控制流

## 模式
development：在vue-cli-service serve下，即开发环境使用
production：在vue-cli-service build 和vue-cli-service test:e2e下，即正式环境使用
test： 在vue-cli-service test:unit下使用
**修改模式下默认的环境变量的话可以通过--mode来实现**

 "build-all": "npm run build --dev && npm run build --test && npm run build --pro"


 # Axios await aysnc
Async/await 是建立在 Promises上的，不能被使用在普通回调以及节点回调。

- 在函数前有一个关键字async，await关键字只能在使用async定义的函数中使用。任何一个async函数都会隐式返回一个promise，并且promise resolve 的值就是 return 返回的值 (例子中是”done”)
- 不能在函数开头使用await

async中填写try catch
async中不建议.then .then 的这种写法。

# Stylus
变量标识
```styl
font
￥font
```

**使用@符在属性前来访问该属性对应的值**
color

@color 获取父级及以上的属性值。

**插值**
- 使用{}字符包围表达式来插入值，使其变成标识符的一部分。

**运算符**
- 范围
  1..5 => 1 2 3 4 5
  1...5 => 1 2 3 4
- 加减乘除

**混合**

// flex(,,column)
// position(,50%,,,50%,,true) //绝对定位垂直居中
// position relative
// offset(0, auto, auto, 0)

// posa(relative,0,0,0,0,1000)
// position(fixed,,,,,1000)
// small-font()
// padding(left,20px)
// padding(,30px 10px 8px)
// border(1px, green) //实现全边框
// border() //无边框
// border(1px,red,solid,8px,left) //单边边框
// outline(1px, green) //实现全外线
// outline() //无外线
// outline(1px,green,solid,8px,left) //单边外线
// overflow()
// overflow(hidden, scroll)
// overflow(hidden)
// overflow(, scroll)
// box-shadow(0, 0, 5px, $KPMG_Blue)
// opacity(0.5)
// bg-image('~@/assets/logo.png')
// bg-color(red, 1)

//   after()
//   position(absolute, -16px, auto, auto, 0)
// arrow(8px, yellow) 小三角形
