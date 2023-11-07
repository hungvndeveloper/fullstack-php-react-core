var link = document.querySelector(".title a");
link.addEventListener("click", function (e) {
  e.preventDefault();
  var url = this.href;
  console.log(url);
});

var login = document.querySelector(".login");
login.addEventListener("submit", function (e) {
  e.preventDefault();
  var username = this.querySelector(".username").value;
  console.log(username);
});

var content = document.querySelector(".content");
var btn = content.querySelector(".btn");

content.addEventListener("click", function () {
  console.log("content clicked");
});

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("btn clicked");
});
