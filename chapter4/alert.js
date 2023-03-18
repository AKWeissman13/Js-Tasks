// // Привет, object
// "use strict";
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// for (let key in user) {
//   alert(user[key]);
// }
// user.name = "Pete";
// alert(user.name);

// delete user.name;

// alert( "name" in user)

// // Проверка на пустоту

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// function isEmpty(obj) {
//     let count = 0;
//   for (let key in obj) {
//     count ++;
//   }
//   if (count > 0) return false;
//   else return true;
// }

// // Объекты-константы?
// alert("да, ключи объекта-константы можно менять, нельзя менять сам объект")

// // Сумма свойств объекта
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// alert("Combined salaries is equal to " + sumSalaries(salaries))
// function sumSalaries(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];

//   }
//   return sum;
// }

// // Умножаем все числовые свойства на 2
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     let b = obj[key] * 2;
//     if (b == b) {
//       obj[key] = b;
//     }
//   }
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// for (let i in menu) {
//   alert(menu[i]);
// }

// // Использование "this" в литерале объекта
// alert(
//   "this вызывается в момент приравнивания обекта к результату функции, а так что this становиться функцией а так" +
//   "как функция это не объект то результат будет undefined"
// );

// // Создайте калькулятор
// let calculator = {
//   a: 0,
//   b: 0,
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// // Цепь вызовов
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };

// ladder.up().up().down().showStep().down().showStep();

// // Две функции - один объект
// function A() {
//   this.name = "John";
// }
// function B() {
//   return a;
// }

// let a = new A();
// let b = new B();
// console.log(a);
// console.log(b);
// alert(a == b); // true
// // Создайте калькулятор при помощи конструктора, new Calculator

// function Calculator () {
//       this.read = function () {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//       };
//       this.sum = function() {
//         return this.a + this.b;
//       };
//       this.mul = function() {
//         return this.a * this.b;
//       };
//     };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// // Создайте new Accumulator
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt("Enter number", 0);
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); 

