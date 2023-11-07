var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
var change = content.querySelector(".change");

change.addEventListener("click", function () {
  alert(1);
});

btn.addEventListener("click", function () {
  content.innerHTML += `<h1>Unicode Academy</h1>`;
});
