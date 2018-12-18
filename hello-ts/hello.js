// function sayHello(person: string) {
//   return 'Hello' + person
// }
// let user = 'Pony'
// console.log(sayHello(user))
// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string; // 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
// let tom: Person = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// };
// tom.id = 9527;
// interface SearchFunc {
//   (source: string, subString: string): boolean
// }
// let mySearch: SearchFunc
// mySearch = function(source: string, subString: string) {
//   return source.search(subString) !== -1
// }
// console.log(mySearch('abced','s'))
// declare var jQuery:(selector:string) => any
// jQuery('#foo');
// type Name = string
// type NameResolver = () => string
// type NameOrResolver = Name | NameResolver
// function getName(n: NameOrResolver): Name {
//   if (typeof n === 'string') {
//     return n
//   } else {
//     return n()
//   }
// }
// enum Color {Red,Green,Blue = "blue".length}
// console.log(Color['Red'])
// console.log(Color['Blue'])
// console.log(Color['Green'])
// enum Color {Red = 2, Green, Blue};
// const enum Directions {
//   Top,
//   Right,
//   Bottom,
//   Left
// }
// let directions = [
//   Directions.Top,
//   Directions.Right,
//   Directions.Bottom,
//   Directions.Left
// ]
// class Animal {
//   protected name;
//   public constructor(name) {
//     this.name = name
//   }
// }
// // let a = new Animal('Jack')
// // console.log(a.name)
// // a.name = 'Tom'
// // console.log(a.name)
// class Animal {
//   public name
//   public constructor(name) {
//     this.name = name
//   }
// }
// class Cat extends Animal {
//   public food
//   public constructor(name) {
//     super(name)
//     this.food = this.name + 'fish'
//   }
// }
// let cat = new Cat('mimi')
// console.log(cat.food)
// abstract class Animal {
//   public name;
//   public constructor(name) {
//     this.name = name
//   }
//   public abstract sayHi() // 抽象类中的抽象方法，必须在子类中实现
// }
// class Cat extends Animal {
//   public sayHi(){
//     // super(name)
//     console.log(`aa${this.name}`)
//   }
// }
// let cat = new Cat('mimi')
// cat.sayHi()
// 类的类型
// abstract class Animal {
//   public name:string;
//   public constructor(name) {
//     this.name = name
//   }
//   public abstract sayHi() // 抽象类中的抽象方法，必须在子类中实现
// }
// class Cat extends Animal {
//   public sayHi():void{
//     console.log(`aa${this.name}`)
//   }
// }
// let cat:Cat = new Cat('mimi')
// cat.sayHi()
// interface Alarm {
//   alert()
// }
// class Door {}
// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     console.log('防盗门叫了')
//   }
// }
// class Car implements Alarm {
//   alert() {
//     console.log('车子叫了')
//   }
// }
// console.log((new SecurityDoor).alert())
// console.log((new Car).alert())
// ! 混合类型，函数有自己的方法和属性
// interface Counter {
//   (start: number):string;
//   interval: number;
//   reset(): void;
// }
// function getCounter(): Counter {
//   let counter = <Counter>function(start: number) {}
//   counter.interval = 123
//   counter.reset = function() {}
//   console.log(counter)
//   return counter
// }
// let c = getCounter()
// c(10);
// c.reset();
// c.interval = 5.0;
// ! 数组泛型举例
// function createArray(length: number, value: any): Array<any> {
//   let result = [];
//   for(let i=0;i<length;i++){
//     result[i] = value
//   }
//   return result
// }
// // createArray(3,'x')
// console.log(createArray(3,'x'))
// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }
// createArray<string>(3, 'x') // ['x', 'x', 'x']
// function swap<U,T>(tuple:[T,U]):[U,T]{
//   return [tuple[1],tuple[0]]
// }
// console.log(swap([1,'one']))
// ! 多个参数之间互相约束
// 约束 参数 输出
// function copyFields<T extends U, U>(target: T, source: U): T {
//   for (let id in source) {
//     // console.log(<T>source) // ! T类型约束下的source
//     target[id] = (<T>source)[id] // ! 删除掉T后报错 不能把 U 类型赋值给 T 类型。
//   }
//   return target
// }
// let x = { a: 1, b: 2, c: 3, d: 4 }
// copyFields(x, { b: 10, d: 20 })
// ! 泛型接口
// interface CreateArrayFunc {
//   <T>(length: number, value: T): Array<T> // ! <T>放在前面是为了能够找到 T
// }
// let createArray: CreateArrayFunc
// createArray = function<T>(length: number, value: T): Array<T> {
//   let result: T[] = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }
// console.log(createArray(3, true)) // ['x', 'x', 'x']
// function s<T,U>(a:T,b:U):Array<T>{
//   let result:T[] = [a,<T>b]
//   let solution:U[] = [b]
//   return [result]
// }
// s('3',5555)
// class GeneralNumber<T> {
//   zero: T
//   add: (x: T, y: T) => T
// }
// let number = new GeneralNumber()
// number.zero = 0
// number.add = function(x, y){
//   return x + y
// }
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
        console.log('aaa');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
console.log(jim);
var n = jim.name;
jim.log();
