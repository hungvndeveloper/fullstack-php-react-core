var backTop = document.querySelector(".top");
var header = document.querySelector("header");
var nav = header.querySelector("nav");

var navHeight = nav.offsetHeight;

window.addEventListener("scroll", function () {
  var position = window.scrollY;
  if (position >= 30) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }

  if (position >= navHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

backTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
