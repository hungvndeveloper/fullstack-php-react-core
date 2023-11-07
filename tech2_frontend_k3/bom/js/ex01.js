// var btn = document.querySelector(".open");
// var close = document.querySelector(".close");
// var vnexpress = null;
// btn.addEventListener("click", function () {
//   vnexpress = window.open("https://vnexpress.net");
// });

// close.addEventListener("click", function () {
//   vnexpress.close();
// });

console.log(window.location);

// var fullUrl = window.location.href;

// console.log(fullUrl);

// window.location.href = "https://google.com";

//window.location.search = "?id=1&keyword=abc"; //query string

// var params = new URLSearchParams(window.location.search);
// var id = params.get("id");
// var keyword = params.get("keyword");
// console.log(id, keyword);

//console.log(document.cookie);

var expires = "2023-04-20 20:00:00";
var expiresObj = new Date(expires);
//console.log(expiresObj.toUTCString());

document.cookie = `name=HoangAn; expires=${new Date().toUTCString()}`;

console.log(navigator);
