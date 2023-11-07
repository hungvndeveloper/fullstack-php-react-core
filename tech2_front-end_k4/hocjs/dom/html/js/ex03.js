var title = document.querySelector(".title");
var btn = document.querySelector(".btn");
var setBtn = document.querySelector(".set-attr");
var remove = document.querySelector(".remove");

btn.addEventListener("click", function () {
  //var count = title.getAttribute("data-count");
  var count = title.dataset.count;
  var animate = title.dataset.animate;
  var duration = title.dataset.animateDuration;
  console.log(count, animate, duration);
});

setBtn.addEventListener("click", function () {
  //   title.setAttribute("data-count", 10);
  //   title.setAttribute("data-color", "red");
  title.dataset.count = 10;
  title.dataset.color = "red";
  title.dataset.animateDuration = "10s";
});

remove.addEventListener("click", function () {
  //title.removeAttribute("data-count");
  delete title.dataset.count;
});
