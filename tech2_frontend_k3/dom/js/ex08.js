var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", function () {
  console.log("div");
});

button.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("button");
});

var boxTitle = document.querySelector(".box .box__title");
var boxContent = document.querySelector(".box .box__content");
var box = document.querySelector(".box");

boxTitle.addEventListener("click", function () {
  boxContent.classList.toggle("hide");
});

document.addEventListener("click", function () {
  boxContent.classList.toggle("hide");
});

box.addEventListener("click", function (e) {
  e.stopPropagation();
});
