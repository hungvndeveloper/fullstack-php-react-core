//Tạo đối tượng html

var title = document.querySelector(".title");
var button = document.querySelector("button");

//Dùng Dom Event
// title.onclick = function () {
//   alert("Bạn vừa click vào tiêu đề");
// };

//Dùng phương thức addEventListener
var handleClick = function () {
  console.log("Lần 1");
};
title.addEventListener("click", handleClick);

button.addEventListener("click", function () {
  title.removeEventListener("click", handleClick);
});

title.addEventListener("click", function () {
  console.log("Lần 2");
});
