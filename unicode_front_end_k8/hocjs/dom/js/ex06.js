//Event Object
var title = document.querySelector(".title");

var handleClick = function (e) {
  console.log(e.target);
  console.log(this);
  console.log(e);
  this.style.color = "red";
  if (e.altKey) {
    this.style.fontStyle = "italic";
  }

  if (e.ctrlKey) {
    this.style.textDecoration = "underline";
  }
};

title.addEventListener("click", handleClick);

document.addEventListener("keyup", function (e) {
  if (e.code === "Escape") {
    title.style.fontStyle = "";
    title.style.textDecoration = "";
    title.style.color = "";
  }
});

var lists = document.querySelector(".lists");
var add = document.querySelector(".add");

var count = 0;
add.addEventListener("click", function () {
  count++;
  lists.innerHTML += `<p>Item ${count}</p>`;
});

// var allItems = lists.querySelectorAll("p");
// allItems.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// });

lists.addEventListener("click", function (e) {
  //   console.log(this);
  console.log(e);
  e.target.style.color = "red";
});

var links = document.querySelector(".links a");
links.addEventListener("click", function (e) {
  e.preventDefault(); //Ngăn hành động mặc định của thẻ html
  var url = this.href;
  console.log(url);
});

var searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); //Ngăn reload khi submit form
  var input = this.querySelector("input").value;
  console.log(input);
});

document.body.addEventListener("contextmenu", function (e) {
  e.preventDefault(); //Ngăn hiển thị menu mặc định của chuột phải
  alert("right");
});

var content = document.querySelector(".content");
var button = content.querySelector("button");

content.addEventListener("click", function () {
  console.log("click content");
});

button.addEventListener("click", function (e) {
  e.stopPropagation(); //Ngăn tình trạng nổi bọt của thẻ html con
  console.log("click button");
});
