// "use strict";
// // 1
// alert("Я JavaScript!");
// // 2
// let uName;
// let admin;
// uName = "Jhon";
// admin = uName;
// alert(admin);
// // 3
// const Earth_Name = "Earth";
// let currentUser;

// // 4
// /*
// Да мы можем использовать заглавные буквы для дня рождения так как это константа
// Однако для возроста это не так, так как возраст должен исменяться в зависимости
// от даты и не может быть фиксированным
// */

// // 5
// let names = "Ilya";

// alert(`hello ${1}`); // hello 1

// alert(`hello ${"names"}`); // hello names

// alert(`hello ${names}`); // hello Ilya

// // 6
// let userName = prompt("What is your name?", "");
// alert(`Hello ${userName}`);

// //7
// let a = 1,
//   b = 1;

// let c = ++a; // 2
// alert(c);
// let d = b++; // 1
// alert(d);

// //
// let a1 = 2;

// let x = 1 + (a1 *= 2); //(a1=a1*2 == 4) 4+1 = 5 -> x = 5

// alert("" + 1 + 0); // "10"
// alert("" - 1 + 0); // -1
// alert(true + false); // 1 + 0 = 1
// alert(6 / "3"); // 2
// alert("2" * "3"); // 6
// alert(4 + 5 + "px"); // "9px"
// alert("$" + 4 + 5); // "$45"
// alert("4" - 2); // 2
// alert("4px" - 2); // NaN
// alert("  -9  " + 5); // "  -9  5"
// alert("  -9  " - 5); // -14
// alert(null + 1); // 1
// alert(undefined + 1); // NaN
// alert(" \t \n" - 2); // -2

// //
// let a2 = prompt("Первое число?", 1);
// let b2 = prompt("Второе число?", 2);

// alert(a2 + b2); // 12
// //  a2 and b2 возвращают строку изза чего происходит сложение строк а не чисел
// //
// alert(5 > 4); // true
// alert("ананас" > "яблоко"); // false сивольное заниче а меньше чем у я
// alert("2" > "12"); // true  посимвольно 2 больше чем 1
// alert(undefined == null); // true имееют в большинстве случаев одинаковое заниче
// alert(undefined === null); // false строгое сравнение типы не совпадают
// alert(null == "\n0\n"); // false null сравним только с андефайнет при не строгом сравнение
// alert(null === +"\n0\n"); // false строгое сравнение равенства данных сразными типами

// //
// if ("0") {
//   alert("Привет");
// }
// // уведомление выйдет в виде "Привет"  так как строка в условии не пустаю

// //
// let q1 = prompt("What is the official name of Js?", "");
// if (q1 == "ECMAScript") {
//   alert(true);
// } else {
//   alert("Official name os ECMAScript!");
// }
// //
// let number = prompt("Введите число", 0);
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
// //

// let result;
// a = prompt("number",'');
// b = prompt("number2",'');
// result =  (a + b < 4) ? 'Мало':'Много'
// alert(results)

// //
// let message;
// let login = prompt("Hi", "");
// message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : ""
//     ? "Нет логина"
//     : "";
// alert(message);
// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }

// //

// alert(null || 2 || undefined); // 2 единственное верно среди этих трех вариантов

// //

// alert(alert(1) || 2 || alert(3)); // 1 и 2

// //

// alert( 1 && null && 2 ); // null два верных и одно неверное утверждений дает null

// //

// alert( alert(1) && alert(2) ); // 1 и undefined alert(1) возвращает undefined

//  //

// alert( null || 2 && 3 || 4 ); // 3 : and дает результат 3 и дальше чекается нулл или 3 или 4
// первый вравильный овет это 3

// let age = prompt("your age?", '');

// x = (age >= 14 && age <=90)? true : false;
// y = (age < 14 || age > 90)? false : true;
// alert(x);
// alert(y);

// // //
// if (-1 || 0) alert( 'first' ); // выолнается
// if (-1 && 0) alert( 'second' ); // невыолнается
// if (null || -1 && 1) alert( 'third' ); // выолнается

// //
let userName = prompt("Кто там?", "");

if (userName === "Админ") {
  let password = prompt("Пароль?", "");

  if (password === "" || password === null) {
    alert("Отменено");
  } else if (password === "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
