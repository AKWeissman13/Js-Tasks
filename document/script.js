// // Дочерние элементы в DOM
// document.body.innerHTML = `<div>Пользователи:</div><ul><li>
// Джон</li><li>Пит</li></ul>`
// alert(document.body.children[0].innerHTML)
// alert(document.body.children[1].innerHTML)
// alert(document.body.children[1].lastElementChild.innerHTML)

// // Вопрос о соседях
// alert("Это правда, что elem.lastChild.nextSibling всегда равен null, потому что lastchild это последний узел")
// alert ("Это НЕправда, что elem.children[0].previousSibling всегда равен null, потому что children[0] это первый элемент"
// + "но перед ним может быть узел с коментарием или текстовый узел")

// // Выделите ячейки по диагонали
// document.body.innerHTML = `  <table>
// <tr>
//   <td>1:1</td>
//   <td>2:1</td>
//   <td>3:1</td>
//   <td>4:1</td>
//   <td>5:1</td>
// </tr>
// <tr>
//   <td>1:2</td>
//   <td>2:2</td>
//   <td>3:2</td>
//   <td>4:2</td>
//   <td>5:2</td>
// </tr>
// <tr>
//   <td>1:3</td>
//   <td>2:3</td>
//   <td>3:3</td>
//   <td>4:3</td>
//   <td>5:3</td>
// </tr>
// <tr>
//   <td>1:4</td>
//   <td>2:4</td>
//   <td>3:4</td>
//   <td>4:4</td>
//   <td>5:4</td>
// </tr>
// <tr>
//   <td>1:5</td>
//   <td>2:5</td>
//   <td>3:5</td>
//   <td>4:5</td>
//   <td>5:5</td>
// </tr>
// </table>`;
// let trow = document.body.firstElementChild.rows;
// for( let i = 0; i < trow.length; i++) {
//     trow[i].cells[i].style.background = "red";
// }

// // Поиск элементов
// let a = [];
// a.push(document.getElementById("age-table"));
// a.push(document.getElementsByTagName("label"));
// a.push(a[0].rows[0].cells[0]);
// a.push(document.querySelector("form[name='search']"));
// a.push(a[3].getElementsByTagName("input")[0]);
// a.push(document.querySelectorAll("input")[document.querySelectorAll("input").length - 1])
// for (let i1 = 0; i1 < a.length; i1++) {
//   console.log(a[i1]);
// }

// // Считаем потомков
// document.body.innerHTML = ` <ul>
// <li>Животные
//   <ul>
//     <li>Млекопитающие
//       <ul>
//         <li>Коровы</li>
//         <li>Ослы</li>
//         <li>Собаки</li>
//         <li>Тигры</li>
//       </ul>
//     </li>
//     <li>Другие
//       <ul>
//         <li>Змеи</li>
//         <li>Птицы</li>
//         <li>Ящерицы</li>
//       </ul>
//     </li>
//   </ul>
// </li>
// <li>Рыбы
//   <ul>
//     <li>Аквариумные
//       <ul>
//         <li>Гуппи</li>
//         <li>Рыба-ангел</li>
//       </ul>
//     </li>
//     <li>Морские
//       <ul>
//         <li>Морская форель</li>
//       </ul>
//     </li>
//   </ul>
// </li>
// </ul>`;
// for (let b of document.querySelectorAll("li")) {
//   let text = b.firstChild.data;
//   console.log(text);
// }
// alert("numer of generations: " + document.querySelectorAll("li").length);

// // Что содержит свойство nodeType?
// alert("Данный код 1 что означает элемент, этим элементом служит тэг <script>")

// // Тег в комментарии
// let body = document.body;

// body.innerHTML = "<!--" + body.tagName + "-->";

// alert( body.firstChild.data ); // Выведет BODY, потому что тег объекта body это BODY, ковычки коментария будут скрыты

// // Где в DOM-иерархии "document"?
// alert(document);
// alert(document.constructor.name);
// alert("NODE -> DOCUMENT -> HTMLDOCUMENT");

// // Получите атрибут
// document.body.innerHTML = `<div data-widget-name="menu">Choose the genre</div>`;
// let lol = document.querySelector("[data-widget-name]");
// console.log(lol.getAttribute('data-widget-name'));

// // Сделайте внешние ссылки оранжевыми
// document.body.innerHTML = `<a name="list">the list</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>`;
// let link = document.querySelectorAll("a[href]");
// link.forEach((lk) => {
//   if (
//     !lk.href.startsWith("http://internal.com") &
//     (lk.host != window.location.host)
//   ) {
//     console.log(lk.host);
//     lk.style.color = "orange";
//   }
// });
// // createTextNode vs innerHTML vs textContent
// document.body.innerHTML = `<div id="elem1"></div>
// <div id="elem2"></div>
// <div id="elem3"></div>`;
// let text = "<b>текст</b>";
// elem1.append(document.createTextNode(text));
// elem2.innerHTML = text;
// elem3.textContent = text;
// alert("1 and 3 are same");

// // Очистите элемент
// document.body.innerHTML = `<ol id="elem">
// <li>Привет</li>
// <li>Мир</li>
// </ol>`;
// function clear(elem) {
//   elem.innerHTML = "";
// }

// clear(elem); // очищает список

// // Почему остаётся "aaa"?
// document.body.innerHTML = `<table id="table">
// aaa
// <tr>
//   <td>Тест</td>
// </tr>
// </table>`;
// table.remove();
// alert("aaa в браузере не находиться в таблице поэтому и не удаляеться");

// // Создайте список
// document.body.innerHTML = `<ul>
// </ul>`;
// let listElem = document.querySelector("ul");
// for (let litem = 0; litem < 3; litem++) {
//   let k = prompt("Enter list item", "");
//   let newLi = document.createElement("li");
//   newLi.textContent = k;
//   listElem.appendChild(newLi);
// }

// // Создайте дерево из объекта
// document.body.innerHTML = "<div id = 'container'></div>";
// let data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },
//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// };
// let container = document.getElementById("container");
// createTree(container, data);
// function createTree(container, data) {
//   container.innerHTML = recursion(data);
// }
// function recursion(obj) {
//   let memo = "<ul>";
//   for (key in obj) {
//     memo += "<li>" + key;

//     if (obj[key] != null) {
//       memo += recursion(obj[key]) ;
//     } else {
//       memo += "<li>" + key + "</li>";
//     }
//   }
//   memo += "</ul>";
//   return memo;
// }
// // Выведите список потомков в дереве
// document.body.innerHTML = `<ul>
// <li>Животные
//   <ul>
//     <li>Млекопитающие
//       <ul>
//         <li>Коровы</li>
//         <li>Ослы</li>
//         <li>Собаки</li>
//         <li>Тигры</li>
//       </ul>
//     </li>
//     <li>Другие
//       <ul>
//         <li>Змеи</li>
//         <li>Птицы</li>
//         <li>Ящерицы</li>
//       </ul>
//     </li>
//   </ul>
// </li>
// <li>Рыбы
//   <ul>
//     <li>Аквариумные
//       <ul>
//         <li>Гуппи</li>
//         <li>Скалярии</li>
//       </ul>
//     </li>
//     <li>Морские
//       <ul>
//         <li>Морская форель</li>
//       </ul>
//     </li>
//   </ul>
// </li>
// </ul>`;
// let container = document.querySelectorAll("li");
// generationCalculation(container);

// function generationCalculation(elements) {
//   elements.forEach((element) => {
//     let count = element.querySelectorAll("li").length;
//     if (count != 0) {
//       element.firstChild.data += "[" + count + "]";
//     }
//   });
// }

 // // 
