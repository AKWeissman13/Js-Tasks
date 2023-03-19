// //Скрыть элемент по нажатию кнопки
// document.body.innerHTML = `  <input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />
// <div id="text">Текст</div>`;
// let button = document.querySelector("#hider");
// let divText = document.querySelector("#text");
// button.addEventListener("click", () => {
//   divText.hidden = "true";
// });

// // Спрятать себя
// document.body.innerHTML = `  <input type="button" id="hider" value="Нажмите, чтобы спрятать себя" />`;
// let button = document.querySelector("#hider");
// button.addEventListener("click", () => {
//   button.hidden = "true";
// });

// // Какой обработчик запустится?
// alert("первый и второй, removeEventListener не удаляет первый обработчик");

// // Создать раскрывающееся меню
// document.body.innerHTML = `  <span id="off">▶</span> <span id="on" hidden>▼</span> Сладости (нажми меня)!
// <ul>
//   <li>Пирожное</li>
//   <li>Пончик</li>
//   <li>Мёд</li>
// </ul>
// `;
// let off = document.querySelector("#off");
// let on = document.querySelector("#on");
// let list = document.querySelector("ul");
// list.hidden = "true";
// off.addEventListener("click", () => {
//   list.hidden = false;
//   off.hidden = true;
//   on.hidden = false;
// });
// on.addEventListener("click", () => {
//   list.hidden = true;
//   on.hidden = true;
//   off.hidden = false;
// });

// // Добавить кнопку закрытия
// document.body.innerHTML = ` Код кнопки (возможно вам нужно будет изменить CSS):
// <button class="remove-button">[x]</button>

// <div>
//   <div class="pane">
//     <h3>Лошадь</h3>
//     <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
//   </div>
//   <div class="pane">
//     <h3>Осёл</h3>
//     <p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p>
//   </div>
//   <div class="pane">
//     <h3>Кошка</h3>
//     <p>Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.</p>
//   </div>
// </div>`;
// let btn = document.querySelector(".remove-button");
// btn.style.color = "red";
// btn.style.background = "none";
// btn.style.border = "none";
// btn.style.outline = "none";
// let div = document.querySelectorAll(".pane");
// console.log(div);
// div.forEach((element) => {
//   let b = btn.cloneNode(true);
//   element.append(b);
//   b.onclick = () => element.remove();
// });
// btn.hidden = true;

// //Спрячьте сообщения с помощью делегирования
// document.body.innerHTML = `  <div id="container">
// <div class="pane">
//   <h3>Лошадь</h3>
//   <p>Домашняя лошадь - животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
//   <button class="remove-button">[x]</button>
// </div>
// <div class="pane">
//   <h3>Осёл</h3>
//   <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам.</p>
//   <button class="remove-button">[x]</button>
// </div>
// <div class="pane">
//   <h3>Кошка</h3>
//   <p>Кошка, или домашняя кошка (лат. Félis silvéstris cátus), — домашнее животное, одно из наиболее популярных (наряду с собакой) "животных-компаньонов". С точки зрения научной систематики, домашняя кошка — млекопитающее семейства кошачьих отряда хищных. Ранее домашнюю кошку нередко рассматривали как отдельный биологический вид.
//   </p>
//   <button class="remove-button">[x]</button>
// </div>
// </div>`;
// container.onclick = function (event) {
//   if (event.target.className == "remove-button") {
//     let pane = event.target.closest(".pane");
//     pane.remove();
//   };
// };
