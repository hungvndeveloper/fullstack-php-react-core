var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function () {
  //content.classList.toggle("hide");
  if (content.classList.contains("hide")) {
    content.classList.remove("hide-space");

    setTimeout(function () {
      content.classList.remove("hide");
    }, 400);

    this.innerText = "Hiện";
  } else {
    content.classList.add("hide");
    setTimeout(function () {
      content.classList.add("hide-space");
    }, 400);
    this.innerText = "Ẩn";
  }
});
