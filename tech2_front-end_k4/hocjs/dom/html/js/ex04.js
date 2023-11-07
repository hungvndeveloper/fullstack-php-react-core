var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function () {
  //Thêm class
  //content.classList.add("abc");
  //   if (!content.classList.contains("abc")) {
  //     content.classList.add("abc");
  //   } else {
  //     content.classList.remove("abc");
  //   }

  content.classList.toggle("abc");
});
