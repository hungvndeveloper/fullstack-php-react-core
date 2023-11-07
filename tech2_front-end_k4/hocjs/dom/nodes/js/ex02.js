var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
var remove = document.querySelector(".remove");
var change = document.querySelector(".change");
var replace = document.querySelector(".replace");

var h1 = document.createElement("h1");
h1.innerHTML = `Unicode Academy`;

var h2 = document.createElement("h2");
h2.innerHTML = "Học Javascript";

btn.addEventListener("click", function () {
  content.appendChild(h1);
});

remove.addEventListener("click", function () {
  //   h1.remove();
  content.removeChild(h1);
});

change.addEventListener("click", function () {
  alert(1);
});

document.querySelector(".add-h2").addEventListener("click", function () {
  content.insertBefore(h2, h1);
});

replace.addEventListener("click", function () {
  content.replaceChild(h2, h1);
});
