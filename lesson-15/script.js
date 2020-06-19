// Кнопка добавления элемента
var btn1 = document.getElementById("btn1");
// Кнопка удаления элемента
var btn2 = document.getElementById("btn2");
// Контейнер, в котором все находится
var main = document.getElementById("main");
// Список ul, где выводятся наши дела
var myList = document.getElementById("list");
// Список всех ul на странице
var ul = document.getElementsByTagName("ul");
// var ul = document.getElementsByTagName("ul")[0];
// Элементы li внутри myList
var story = myList.getElementsByClassName("item");
// Модальное окно при выполнении всех дел (пустом списке)
var popup = document.getElementsByClassName("popup")[0];
// Кнопка закрытия модального окна
var close = document.querySelector(".close");
// var close = document.querySelectorAll(".close");

// Изменение стилей элемента
// main.style.background = "yellow";

// Функция добавления элемента списка
function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = "Новая задача";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
}

// Функция удаления элемента списка
function delItem() {
  if (story.length != 0) {
    myList.removeChild(story[0]);
    if (story.length == 0) {
      popup.style.display = "block";
    }
  } 
  // myList.removeChild(story[0]);
  // if (story.length == 0) {
  //   popup.style.display = "block";
  // }
}

// Функция закрытия мод. окна при клике на крестик
function closePopup() {
  popup.style.display = "none";
}

// Добавление события (лучше не использовать)
// Анонимная функция
// btn1.onclick = function () {

// }
// При созданной функции
// btn1.onclick = addItem;

// Самый перавильный способ
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);

console.log(btn1);
console.log(myList);
console.log(ul);
console.log(ul[0]);
console.log(story);
console.log(story.length);
console.log(popup);
console.log(close);
console.log(typeof typeof (true + false)); // string !
console.log(typeof (true + false)); // number

// Доп. задание 1
var age, name, logic = false;
function accessOne(bool) {
  if (bool) {
    console.log("Пользователь допущен");
  } else {
    console.log("Пользователь не допущен");
  }
}
accessOne(logic);

// Доп. задание 2
function access(age, subscr) {
  if (age > 18 && subscr) {
    console.log("Пользователь допущен");
  } else {
    console.log("Пользователь не допущен");
  }
  console.log(age);
  console.log(subscr);
}
access(10, false);