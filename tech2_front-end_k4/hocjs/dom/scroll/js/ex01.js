var header = document.querySelector("header");
console.log(header.clientHeight);
var body = document.querySelector("html, body");
var backTop = document.querySelector(".top");
window.addEventListener("scroll", function () {
  var position = body.scrollTop;
  if (position >= 100) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", function () {
  window.scroll(0, 0);
});
