document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector(".content");

  var btn = document.querySelector(".btn");

  var result = document.querySelector(".result");

  btn.addEventListener("click", function () {
    //console.log(content.innerHTML);
    //console.log(content.innerText);
    //content.innerHTML = "<h1>Unicode Academy</h1>";
    //content.innerText = "<h1>Unicode Academy</h1>";

    if (result.innerText.trim() === "") {
      result.innerHTML = content.innerHTML;
      this.innerText = "Ẩn";
      this.style = "background-color: red; color: #fff; border: none;";
    } else {
      result.innerHTML = "";
      this.innerText = "Hiện";
      this.style = "";
    }
  });
});
