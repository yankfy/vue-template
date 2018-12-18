# 环境变量与模式

- .env 所有情况配置
- .env.local 不追踪
- .env.[mode] 配置开发环境
- .env.[mode].local 配置开发环境，不追踪

> 参考网址

- [环境变量与模式](https://www.cnblogs.com/heroljy/p/9305263.html)

  **vue.config.js 中必须是双引号，不可以单引号**

学习 stylus

```js
npm install stylus -D
npm install stylus-loader -D
```

# 配置环境变量与模式

.env.[mode] 使用 KEY = VALUE 的方式设置变量

环境变量的使用

项目中也就是 src/文件夹下使用变量，必须是**VUE*APP***开头<br/> webpack 中使用变量随意起名

<%= VAR %> 用于非转换插值 例如：`<link rel="shortcut icon" href="<%= BASE_URL %>favicon.ico">`<br/> <%- VAR %> 用于 HTML 转义插值<br/> <% expression %> 用于 JavaScript 控制流<br/>

## 模式

development：在 vue-cli-service serve 下，即开发环境使用<br/> production：在 vue-cli-service build 和 vue-cli-service test:e2e 下，即正式环境使用<br/> test： 在 vue-cli-service test:unit 下使用<br/> **修改模式下默认的环境变量的话可以通过--mode 来实现**

"build-all": "npm run build --dev && npm run build --test && npm run build --pro"

# Axios await aysnc

Async/await 是建立在 Promises 上的，不能被使用在普通回调以及节点回调。

- 在函数前有一个关键字 async，await 关键字只能在使用 async 定义的函数中使用。任何一个 async 函数都会隐式返回一个 promise，并且 promise resolve 的值就是 return 返回的值 (例子中是”done”)
- 不能在函数开头使用 await

async 中填写 try catch<br/> async 中不建议.then .then 的这种写法。

# Stylus

变量标识<br/>

```styl
font = 12px
$font = 12px
```

**使用@符在属性前来访问该属性对应的值**<br/> color<br/>

@color 获取父级及以上的属性值。<br/>

**插值**<br/>

- 使用{}字符包围表达式来插入值，使其变成标识符的一部分。<br/>

**运算符**<br/>

- 范围<br/> 1..5 => 1 2 3 4 5<br/> 1...5 => 1 2 3 4<br/>
- 加减乘除

**混合**

```css
/*
flex(,,column)
position(,50%,,,50%,,true) //绝对定位垂直居中
position relative
offset(0, auto, auto, 0) // 偏移量
position(relative,0,0,0,0,1000) //相对定位
position(fixed,,,,,1000) // 固定定位
small-font() // 10px字体
padding(left,20px) // 左内边距
padding(,30px 10px 8px) // 内编剧
border(1px, green) //实现全边框
border() //无边框 border:none
border(1px,red,solid,8px,left) //单边边框
outline(1px, green) //实现全外线
outline() //无外线
outline(1px,green,solid,8px,left) //单边外线
overflow() // 隐藏overflow overflow:hidden
overflow(hidden, scroll) // x , y
overflow(hidden) // x
overflow(, scroll) // y
box-shadow(0, 0, 5px, $KPMG_Blue) // 外阴影
box-shadow(0, 0, 5px, $KPMG_Blue,true) // 内阴影
opacity(0.5) //透明度
bg-image('~@/assets/logo.png') // 背景图
bg-color(red, 1) // 背景颜色
after() // 伪元素
arrow(8px, yellow) //小三角形 默认尖角top
arrow(8px, yellow,bottom) //小三角形 尖角bottom
*/
```

# TypeScript

**TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码开源于 GitHub 上。**

- TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。<br/>
- TypeScript 编译的时候即使报错了，还是会生成编译结果<br/>

```
npm install -g typescript
tsc hello.ts
```

### 原始数据类型

#### 布尔值 boolean

构造函数不是基本类型

#### 数值 number

#### 字符串 string

#### null null

#### undefined undefined

声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null： **适合定义无返回值的函数**

```
let unusable: void = undefined;
```

与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 **undefined 类型的变量，可以赋值给 number 类型的变量：**

### 任意值类型

_一个普通类型的值，在赋值过程中改变类型是不被允许的_<br/> 如果是 any 类型，则被允许赋值为任意类型、

声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。<br/> **变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：**

**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查，如果定义的时候赋值了，则会被检查**

### 联合类型

```ts
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
```

**只能访问此联合类型的所有类型里共有的属性或方法**

```ts
function getLength(something: string | number): number {
  return something.length //Error
}
```

**联合类型的变量在赋值的时候，会根据类型推论的规则推断出一个类型**

```ts
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
console.log(myFavoriteNumber.length) // 5
myFavoriteNumber = 7
console.log(myFavoriteNumber.length) // 编译时报错
```

### 对象的类型--接口

> 什么是接口？

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。

- 用于对类的一部分行为进行抽象以外
- 也常用于对 **「对象的形状（Shape）」**

```ts
interface Person {
  //接口一般首字母大写
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
}
```

**赋值的时候，变量的形状必须和接口的形状保持一致。** 可选属性

```ts
age?: number; //age 可选
[propName: string]: any; 只能是any 或者 确定的属性
```

### 数组的类型

> 【类型 + 方括号】表示

```ts
let fibonacci: number[] = [1, 2, 3, 4, 5] // 定义了数组
```

> 数组泛型

```ts
let fibonacci: Array<number> = [1, 2, 3, 4, 5] // 数组泛型？
```

> 用接口表示数组

```ts
interface NumberArray {
  [index: number]: number // 只要index的类型是number,值必须是number.
}

let fibonacci: NumberArray = [1, 2, 3, 4, 5]
```

> any 在数组中的应用

```ts
let list: any[] = ['x', 3, { a: 'c' }]
```

> 类数组

**常见的类数组都有自己的接口定义，如 IArguments，NodeList, HTMLCollection**

## 函数的类型

> 函数声明

- 利用 TypeScript 中进行约束，需要把输入和输出进行约束。

```ts
function sum(x: number, y: number): number {
  return x + y
}
```

**输入多余的（或者少于要求的）参数，是不被允许的**

> 函数表达式

```ts
let mySum = function(x: number, y: number): number {
  return x + y
}
```

**事实上，上面的代码只是对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的，专业版如下**

```ts
let mySum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y
}
```

**可选参数后面不允许再出现必须参数了**

```ts
(x:number,y:number,z?:number)
```

> 用接口定义函数的形状

```ts
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}
```

> 参数默认值

**TypeScript 会将添加了默认值的参数识别为可选参数**

```ts
(firstName: string, lastName: string = 'Cat')
```

> 剩余参数

```ts
(array: any[],...items: any[])
// 剩余参数，rest参数只能是最后一个参数。
```

> 重载

**重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。**

```ts
// 使用重载定义多个 reverse 的函数类型
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  } else if (typeof x === 'string') {
    return x
      .split('')
      .reverse()
      .join('')
  }
}
```

## 类型断言

> 语法

```ts
// <类型>值
// 值 as 类型 (React的jsx语法的ts版)必须用这一种
function getLength(something: string | number): number {
  // 在需要断言的变量前加上type就好。
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}
```

## 声明文件

```ts
declare var jQuery: (selector: string) => any
jQuery('#foo')
// declare 关键词来定义它的类型，帮助TypeScript判断我们传入的参数类型对不对。
```

## 内置对象

```ts
Boolean、Error、Date、RegExp、Document、HTMLElement、Event、NodeList //等
```

## 类型别名

```ts
// 类型别名常用于联合类型
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
```

## 字符串字面量类型

**类型别名与字符串字面量类型都是使用 type 进行定义**

```ts
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll') // 没问题
handleEvent(document.getElementById('world'), 'dbclick') // 报错，event 不能为 'dbclick'
```

## 元组

数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。

```ts
let xcatliu: [string, number] = ['aa', 2]
// 当直接对元组类型的变量进行初始化或者复制的时候，需要提供所有元组类型中指定的项。
```

> 越界的元素

**当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型，如果不在联合类型中，则会报错。**

## 枚举

**枚举(Enum)类型用于取值限定在一定范围内的场景**

```ts
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
// 未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
```

> 常数项和计算所得项

```ts
enum Color {
  Red,
  Green,
  Blue = 'blue'.length
} // Right
enum Color {
  Red = 'red'.length,
  Green,
  Blue
} // Error 初始化赋值必须为确定常量值，不能为表达式。
```

> 常数枚举

```ts
const enum Directions {
  Up,
  Right,
  Bottom,
  Left
}

let directions = [Directions.Top]
```

> 外部枚举

外部枚举 是使用 declare enum 定义的枚举类型：<br> **declare 定义的类型只会用于编译时的检查，编译结果中会被删除**

```ts
declare enum Directios {
  Up,
  Right,
  Bottom,
  Left
}
```

## 类

> 类的概念

[类的概念](https://ts.xcatliu.com/advanced/class.html)

类（Class）、对象（Object）、面向对象（OOP）封装、继承、多态、存取器、修饰符、抽象类、接口

> ES6 中类的用法

- 属性和方法

**使用 class 定义类，使用 constructor 定义构造函数。**

**通过 new 生成新实例的时候，会自动调用构造函数。**

```js
class Animal {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    return `My name is ${this.name}`
  }
}

let a = new Animal('Jack')
console.log(a.sayHi())
```

- 类的继承

**使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法**

```js
class Cat extends Animal {
  constructor(name, nickName) {
    super(name)
    this.nickName = nickName
  }
  sayHi() {
    return `${this.nickName}+${super.sayHi()}`
  }
}
```

- 存取器

**使用 getter 和 setter 可以改变属性的赋值和读取行为：**

```js
class Animal {
  get name() {}
  set name(value) {}
}
```

- 静态方法

**使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用**

```js
class Animal {
  static isAnimal(a) {
    return a instanceof Animal
  }
}
console.log(Animal.isAnimal(new Animal()))
```

> ES7 中类的用法

- 实例属性

```js
class Animal {
  name = 'Jack' // 实物
  constructor() {
    // ...
  }
}

let a = new Animal()
console.log(a.name) // Jack
```

- 静态属性 **ES7 中可以使用 static 定义一个静态属性**

```js
class Animal {
  static num = 42
}
console.log(Animal.num)
```

> TypeScript 中类的用法三种访问修饰符

- public private 和 protected
  - public 公有的
  - private 私有的，不能在声明类外部访问，也不能在子类中访问
  - _protected_ 受保护的，但在声明外部可访问，能在子类中访问。

```ts
class Animal {
  public name
  public constructor(name) {
    this.name = name
  }
}
class Cat extends Animal {
  public food
  public constructor(name, food) {
    super(name)
    this.food = this.name + 'fish'
  }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'
console.log(a.name)
```

- 抽象类

**abstract 用于定义抽象类和其中的抽象方法。**

**抽象类不允许被实例化**

```ts
abstract class Animal {
  public name
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi() // 抽象类中的抽象方法，必须在子类中实现
}

class Cat extends Animal {
  public sayHi() {
    super(name)
    console.log(`aa${this.name}`)
  }
}

let cat = new Cat('mimi')
```

> 类的类型

```ts
abstract class Animal {
  public name: string
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi(): string // 抽象类中的抽象方法，必须在子类中实现
}

class Cat extends Animal {
  public sayHi(): string {
    super(name)
    console.log(`aa${this.name}`)
  }
}

let cat: Cat = new Cat('mimi')
```

## 类与接口

> 类实现接口

- 把子类相同的特性提取成接口(_interface_)，用*implements*关键字来实现。

```ts
interface Alarm(){
  alert()
}
class Door{}
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('防盗门叫了')
  }
}
class Car implements Alarm {
  alert(){
    console.log("车子叫了")
  }
}
console.log(SecurityDoor.alert())
console.log(Car.alert())
```

> 接口继承接口

```ts
interface A extends B {}
```

> 接口继承类

```ts
interface C extends D {}
```

> 混合类型 **函数也可以有自己的属性和方法**

## 泛型

**泛型 在定义函数、接口、或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**<br> `Array<any>`允许数组的每一项都为任意类型。

```ts
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray<string>(3, 'x') // ['x', 'x', 'x'] //调用的时候，可以指定具体的类型 string
createArray(3, 'x') //也可以不指定，按类型自动推算。
```

> 多个类型参数

```ts
function swap<U,P>(tuple:[T,U]):[U:T]{
  return [tuple[1],tuple[0]]
}
swap([1,'one'])
```

- Array<T> 符合 T 类型的数组泛型约束
- <T>source 在 T 类型约束下的 source 变量 <T>source
- T[] 约束数组为 T 类型 result: T[] = [] (T 类型 空数组)

> 泛型接口

**在使用泛型接口的时候，需要定义泛型的类型。**

> 泛型类

```ts
class GeneralNumber<T> {
  zero: T
  add: (x: T, y: T) => T
}
let number = new GeneralNumber()
number.zero = 0
number.add = (x, y) => x + y
```

## 声明合并

> 函数声明的合并

```ts
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: string | number): string | number {}
```

> 接口的合并

**接口中的属性在合并时会简单合并到一个接口中**
*合并的属性类型必须是唯一的*
```ts
interface Alarm {
  price: number
}
interface Alarm {
  weight: number
}
```
