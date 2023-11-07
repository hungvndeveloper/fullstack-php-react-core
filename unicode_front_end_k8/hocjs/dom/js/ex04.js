var content = document.querySelector(".content");
content.style.color = "red";
content.style.background = "black";
content.style.padding = "10px";
content.style.fontWeight = "bold"; //camelCase
content.style.textDecoration = "line-through";
content.style.textTransform = "uppercase";
content.style.fontSize = "1.5rem";

console.log(content.style.cssText);
console.log(content.getAttribute("style"));
console.log(content.style.color);
console.log(content.style.fontWeight);

//Ví dụ:
var btn = document.querySelector(".btn");
var element = document.querySelector(".element");

if (btn !== null) {
  btn.addEventListener("click", function () {
    if (element.style.display === "block" || element.style.display === "") {
      element.style.display = "none";
      this.innerText = "Hiện";
    } else {
      element.style.display = "block";
      this.innerText = "Ẩn";
    }
  });
}
