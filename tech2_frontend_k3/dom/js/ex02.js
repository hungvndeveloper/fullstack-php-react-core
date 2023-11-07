//Các cách tạo Node (Đối tượng html, đối tượng dom)

//cách 1: Dùng id

var btn = document.getElementById("btn");
console.log(btn);

//Cách 2: Dùng class (Có thể chọn được nhiều)
var title = document.getElementsByClassName("title");
// for (var i = 0; i < title.length; i++) {
//   console.log(title[i]);
// }
Array.from(title).forEach(function (element) {
  console.log(element);
});

//Cách 3: Dùng tagname
var h2 = document.getElementsByTagName("h2");
console.log(h2);

//Cách 4: Dùng querySelector() => Sử dụng selector css

var btn = document.querySelector("#btn");
console.log(btn);

//Cách 5: Dùng querySelectorAll() => Sử dụng selector
var btn = document.querySelectorAll("#btn");
console.log(btn);

/*
Chia thành 2 nhóm: 
1. Số ít: 
- document.querySelector()
- document.getElementById()

2. Số nhiều: 
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelectorAll()
*/

var content = document.querySelector(".content");
var h1 = content.querySelector("h1");
console.log(h1);
