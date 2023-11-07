var btn = document.querySelector(".btn");
var title = document.querySelector(".title");
var btnGet = document.querySelector(".btn-get");
btn.addEventListener("click", function () {
  title.style.color = "red";
  title.style.textTransform = "uppercase";
  title.style.backgroundColor = "blue";
  title.style.fontStyle = "italic";
});

btnGet.addEventListener("click", function () {
  console.log(title.getAttribute("style"));
});
