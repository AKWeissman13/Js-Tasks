"use strict";
// 1
alert("Я JavaScript!");
// 2
let name;
let admin;
name = "Jhon";
admin = name;
alert(admin);
// 3
const Earth_Name = "Earth";
let currentUser;

// 4
/*
Да мы можем использовать заглавные буквы для дня рождения так как это константа
Однако для возроста это не так, так как возраст должен исменяться в зависимости 
от даты и не может быть фиксированным
*/

// 5
let names = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"names"}` ); // hello names

alert( `hello ${names}` ); // hello Ilya

// 6
let userName = prompt ("What is your name?", '');
alert (`Hello ${userName}`)

