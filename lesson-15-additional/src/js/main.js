// Кнопка в шапке
var btn = document.querySelector("#btn");
// Крестик
var close = document.querySelector("#close");
// Модально окно .modal
var modal = document.querySelector("#modal");
var timerId;
// Показ мод. окна
btn.addEventListener("click", () => {
  modal.classList.add("modal_visible");
  timerId = setTimeout(closeModal, 5000);
  // clearTimeout(timerId);
  console.log(timerId);
  
  // console.log(modal.classList);
  // console.log("click");
});
// Скрытие мод. окна
close.addEventListener("click", function() {
  modal.classList.remove("modal_visible");
  clearTimeout(timerId);
});
function closeModal() {
  modal.classList.remove("modal_visible");
  clearTimeout(timerId);
}
// console.log(btn);