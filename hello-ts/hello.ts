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
interface Counter {
  (start: number):string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  console.log(counter)
  return counter
}

let c = getCounter()
c(10);
c.reset();
c.interval = 5.0;
