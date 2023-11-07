console.log(document);
//Nhóm 1: Truy xuất 1 thẻ
var title = document.getElementById("title");

var title = document.querySelector("#title");

console.log(title);

//Nhóm 2: Truy xuất nhiều thẻ

var titleList = document.getElementsByTagName("h1");

var titleList = document.getElementsByClassName("title");

var titleList = document.querySelectorAll("#title");

console.log(titleList);

//Ví dụ:
var p = document.querySelector(".content p");

var content = document.querySelector(".content");
var button = content.querySelector("button");
console.log(button);
