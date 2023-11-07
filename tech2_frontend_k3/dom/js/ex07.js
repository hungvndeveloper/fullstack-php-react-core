// var btn = document.querySelector(".btn");
// var handleBtn = function (e) {
//   console.log(e);
// };

// btn.addEventListener("click", handleBtn);

var username = document.querySelector(".username");
username.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    //alert(username.value);
    //alert(this.value);
    alert(e.target.value);
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    document.body.style.background = "red";
  }

  if (e.key == "Escape") {
    document.body.style.background = "initial";
  }
});

var link = document.querySelector(".links a");
link.addEventListener("click", function (e) {
  e.preventDefault(); //Ngăn hành động mặc định của html
  console.log(this.href);
});

/*
Hành động mặc định html thường gặp
- href trong thẻ a (chuyển hướng)
- submit form (reload trang)
*/

var searchInput = document.querySelector(".search-box input");
var searchUl = document.querySelector(".search-box ul");
searchInput.addEventListener("focus", function (e) {
  e.preventDefault();
  console.log("focus");
});

searchInput.addEventListener("blur", function (e) {
  e.preventDefault();
  console.log("blur");
});

searchUl.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

searchUl.addEventListener("click", function (e) {
  console.log("Click");
  console.log(e.target);
  e.target.style.color = "red";
});
