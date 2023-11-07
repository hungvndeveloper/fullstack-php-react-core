//Thêm sự kiện vào thẻ html
function showMessage(content) {
  alert("Xin chào: " + content.innerText);
}

var title = document.querySelector(".title");
title.onclick = function () {
  console.log(this.innerText);
};

title.onclick = function () {
  console.log(this.innerText + " Lần 2");
};

var content = document.querySelector(".content");
content.addEventListener("click", function () {
  console.log("Unicode Academy");
});

content.addEventListener("click", function () {
  console.log("Unicode Academy Lần 2");
});

var subTitle = document.querySelector(".sub-title");
subTitle.addEventListener("click", function () {
  this.style.color = "red";
  this.style.fontStyle = "italic";
  this.innerText += " Academy";
});
