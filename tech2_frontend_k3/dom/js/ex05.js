var title = document.querySelector(".title");
var button = document.querySelector(".btn");
console.log(title);
console.log(title.className);
console.log(title.getAttribute("class"));
button.addEventListener("click", function () {
  title.classList.add("title4", "title5");
  title.classList.remove("title3");
  if (title.classList.contains("title4")) {
    console.log("có class title4");
  } else {
    console.log("không có class title4");
  }

  //console.log(title.classList);

  //   if (!title.classList.contains("unicode")) {
  //     title.classList.add("unicode");
  //   } else {
  //     title.classList.remove("unicode");
  //   }

  title.classList.toggle("unicode");
});

var remove = document.querySelector(".remove");
remove.addEventListener("click", function () {
  title.remove();
});

var content = document.querySelector(".content");
var changeStyle = document.querySelector(".change-style");
changeStyle.addEventListener("click", function () {
  content.style.color = "red";
  content.style.backgroundColor = "black";
  content.style.fontStyle = "italic";
});
