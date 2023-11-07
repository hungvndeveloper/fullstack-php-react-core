var openModalBtn = document.querySelector(".open-modal");

var modalClose = document.querySelector(".modal .close");
var modal = document.querySelector(".modal");

var modalBg = document.createElement("div");
modalBg.classList.add("bg-modal");

openModalBtn.addEventListener("click", function () {
  modal.classList.add("open");
  document.body.appendChild(modalBg);
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("open");
  document.body.removeChild(modalBg);
});

modal.addEventListener("click", function () {
  modal.classList.remove("open");
  document.body.removeChild(modalBg);
});

modal.addEventListener("click", function (e) {
  e.stopPropagation(); //học sau
});

document.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    modal.classList.remove("open");
    document.body.removeChild(modalBg);
  }
});

modalBg.addEventListener("click", function () {
  modal.classList.remove("open");
  document.body.removeChild(modalBg);
});
