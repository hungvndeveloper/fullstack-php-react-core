var title = document.querySelector(".title");
title.classList.add("block-1", "block-2", "block-3");
title.classList.remove("block-2");
if (title.classList.contains("block-3")) {
  console.log("Tồn tại class block-3");
} else {
  console.log("Không tồn tại class block-3");
}

title.classList.toggle("block-4");
title.classList.toggle("block-4");
/*
Toggle sẽ kiểm tra => Nếu tồn tại => Xóa, ngược lại sẽ thêm class
*/

var btn = document.querySelector(".btn");
var element = document.querySelector(".element");
btn.addEventListener("click", function () {
  element.classList.toggle("hide");

  if (element.classList.contains("hide")) {
    this.innerText = "Hiện";
  } else {
    this.innerText = "Ẩn";
  }
});

var todos = document.querySelectorAll(".todo-list p");
todos.forEach(function (todo) {
  todo.addEventListener("click", function () {
    this.classList.toggle("completed");
  });
});
