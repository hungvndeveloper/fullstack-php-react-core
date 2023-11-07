var openBtn = document.querySelector(".open-popup");
var popup = document.querySelector(".popup");
var popupBg = document.createElement("div");
var close = popup.querySelector(".close");
popupBg.classList.add("popup-bg");
openBtn.addEventListener("click", function () {
  popup.classList.add("open");
  document.body.appendChild(popupBg);
});

close.addEventListener("click", function () {
  popup.classList.remove("open");
  document.body.removeChild(popupBg);
});
