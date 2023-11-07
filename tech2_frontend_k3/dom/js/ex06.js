// var selector = document.querySelector;
// var selectorAll = document.querySelectorAll;
var items = document.querySelectorAll(".lists .item");
// items.forEach(function (item) {
//   item.addEventListener("click", function () {
//     item.style.color = "red";
//   });
// });

// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     this.style.color = "red";
//   });
// }

// var chat = document.querySelector(".chat");
// var chatTitle = document.querySelector(".chat__title");

var chats = document.querySelectorAll(".chat");
chats.forEach(function (chat) {
  var chatTitle = chat.querySelector(".chat__title");
  chatTitle.addEventListener("click", function () {
    chat.classList.toggle("open");
  });
});
