var openModalBtn = document.querySelector(".open-modal");
var modalWrap = document.querySelector(".modal-wrapper");
var modalClose = modalWrap.querySelector(".modal .close");
var modal = modalWrap.querySelector(".modal");
openModalBtn.addEventListener("click", function () {
  modalWrap.classList.add("open");
});

modalClose.addEventListener("click", function () {
  modalWrap.classList.remove("open");
});

modalWrap.addEventListener("click", function () {
  modalWrap.classList.remove("open");
});

modal.addEventListener("click", function (e) {
  e.stopPropagation(); //học sau
});

document.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    modalWrap.classList.remove("open");
  }
});
