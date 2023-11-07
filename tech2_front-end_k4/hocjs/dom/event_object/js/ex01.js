var btn = document.querySelector(".btn");
var title = document.querySelector(".title");
var username = document.querySelector(".username");
//Event Handler
var handleBtnClick = function (e) {
  //e = event object
  console.log(e.target);
  console.log(this);
  //   if (e.which == 1) {
  //     title.style.color = "red";
  //   }
};

btn.addEventListener("mousedown", handleBtnClick);

username.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    // alert(this.value);
    alert(e.target.value);
  }
});

// var h2 = document.querySelectorAll(".lists h2");
// h2.forEach(function (item) {
//   item.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// });

var lists = document.querySelector(".lists");
lists.addEventListener("click", function (e) {
  //console.log(this);
  if (e.target.localName === "h2") {
    e.target.style.color = "red";
  }
});

var content = document.querySelector(".content");
var btn = content.querySelector(".btn");
var inner = content.querySelector(".inner");
var title = content.querySelector(".title");

btn.addEventListener("click", function () {
  var btnHtml = `<button class="remove">Xóa</button>`;
  inner.innerHTML = btnHtml;

  //   var remove = content.querySelector(".remove");
  //   remove.addEventListener("click", function () {
  //     title.remove();
  //   });
});

inner.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    title.remove();
  }
});
