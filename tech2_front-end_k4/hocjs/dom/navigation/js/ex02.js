var itemActive = document.querySelector(".item.active");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
next.addEventListener("click", function () {
  var nextEl = itemActive.nextElementSibling;
  itemActive.classList.remove("active");
  nextEl.classList.add("active");
  itemActive = nextEl;
});

prev.addEventListener("click", function () {
  var prevEl = itemActive.previousElementSibling;
  itemActive.classList.remove("active");
  prevEl.classList.add("active");
  itemActive = prevEl;
});
